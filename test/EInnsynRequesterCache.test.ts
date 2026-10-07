import { afterEach, beforeEach, describe, expect, test, vi } from 'vitest';
import {
  NetworkError,
  NotFoundError,
} from '../src/common/error/EInnsynError.ts';
import { EInnsynRequester } from '../src/EInnsynRequester.ts';

const createEtagResponse = (body: unknown, etag: string) =>
  new Response(JSON.stringify(body), {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
      ETag: etag,
    },
  });

const createNotModifiedResponse = (etag?: string) =>
  new Response(null, {
    status: 304,
    headers: etag ? { ETag: etag } : {},
  });

const headersOf = (init: RequestInit | undefined) =>
  init?.headers as Record<string, string> | undefined;

const collect = async <T>(iterable: AsyncIterable<T>) => {
  const items: T[] = [];
  for await (const item of iterable) {
    items.push(item);
  }
  return items;
};

describe('EInnsynRequester caching', () => {
  let fetchMock: ReturnType<typeof vi.fn<typeof fetch>>;

  beforeEach(() => {
    fetchMock = vi.fn<typeof fetch>();
    vi.stubGlobal('fetch', fetchMock);
  });

  afterEach(() => {
    vi.restoreAllMocks();
    vi.unstubAllGlobals();
  });

  test('does not cache unless caching is enabled', async () => {
    const requester = new EInnsynRequester({ baseUrl: 'https://example.com' });

    fetchMock.mockResolvedValueOnce(createEtagResponse({ ok: true }, '"v1"'));
    fetchMock.mockResolvedValueOnce(createEtagResponse({ ok: true }, '"v1"'));

    await requester.request({ path: '/enhet/enhet_123' });
    await requester.request({ path: '/enhet/enhet_123' });

    expect(headersOf(fetchMock.mock.calls[1]?.[1])).not.toHaveProperty(
      'If-None-Match',
    );
  });

  test('revalidates a cached response and returns the stored body on 304', async () => {
    const requester = new EInnsynRequester({
      baseUrl: 'https://example.com',
      cache: true,
    });

    fetchMock.mockResolvedValueOnce(
      createEtagResponse({ entity: 'Enhet', id: 'enhet_123' }, '"v1"'),
    );
    fetchMock.mockResolvedValueOnce(createNotModifiedResponse());

    const first = await requester.request({ path: '/enhet/enhet_123' });
    const second = await requester.request({ path: '/enhet/enhet_123' });

    expect(first).toStrictEqual({ entity: 'Enhet', id: 'enhet_123' });
    expect(second).toStrictEqual({ entity: 'Enhet', id: 'enhet_123' });

    expect(headersOf(fetchMock.mock.calls[0]?.[1])).not.toHaveProperty(
      'If-None-Match',
    );
    expect(headersOf(fetchMock.mock.calls[1]?.[1])).toMatchObject({
      'If-None-Match': '"v1"',
    });
  });

  test('hands out a fresh object on every cache hit', async () => {
    const requester = new EInnsynRequester({
      baseUrl: 'https://example.com',
      cache: true,
    });

    fetchMock.mockResolvedValueOnce(
      createEtagResponse({ entity: 'Enhet', navn: 'Original' }, '"v1"'),
    );
    fetchMock.mockResolvedValueOnce(createNotModifiedResponse());

    const first = (await requester.request({ path: '/enhet/enhet_123' })) as {
      navn: string;
    };
    first.navn = 'Mutated by the caller';

    const second = await requester.request({ path: '/enhet/enhet_123' });

    expect(second).toStrictEqual({ entity: 'Enhet', navn: 'Original' });
  });

  test('replaces the cached body when the server returns new content', async () => {
    const requester = new EInnsynRequester({
      baseUrl: 'https://example.com',
      cache: true,
    });

    fetchMock.mockResolvedValueOnce(createEtagResponse({ version: 1 }, '"v1"'));
    fetchMock.mockResolvedValueOnce(createEtagResponse({ version: 2 }, '"v2"'));
    fetchMock.mockResolvedValueOnce(createNotModifiedResponse());

    await requester.request({ path: '/enhet/enhet_123' });
    const updated = await requester.request({ path: '/enhet/enhet_123' });
    const revalidated = await requester.request({ path: '/enhet/enhet_123' });

    expect(updated).toStrictEqual({ version: 2 });
    expect(revalidated).toStrictEqual({ version: 2 });
    expect(headersOf(fetchMock.mock.calls[2]?.[1])).toMatchObject({
      'If-None-Match': '"v2"',
    });
  });

  test('caches responses per URL, including the query string', async () => {
    const requester = new EInnsynRequester({
      baseUrl: 'https://example.com',
      cache: true,
    });

    fetchMock.mockResolvedValueOnce(createEtagResponse({ page: 1 }, '"p1"'));
    fetchMock.mockResolvedValueOnce(createEtagResponse({ page: 2 }, '"p2"'));
    fetchMock.mockResolvedValueOnce(createNotModifiedResponse());

    await requester.request({ path: '/arkiv', query: { limit: 1 } });
    await requester.request({ path: '/arkiv', query: { limit: 2 } });
    await requester.request({ path: '/arkiv', query: { limit: 1 } });

    expect(headersOf(fetchMock.mock.calls[1]?.[1])).not.toHaveProperty(
      'If-None-Match',
    );
    expect(headersOf(fetchMock.mock.calls[2]?.[1])).toMatchObject({
      'If-None-Match': '"p1"',
    });
  });

  test('does not cache responses without an ETag', async () => {
    const requester = new EInnsynRequester({
      baseUrl: 'https://example.com',
      cache: true,
    });

    fetchMock.mockResolvedValueOnce(
      new Response(JSON.stringify({ ok: true }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      }),
    );
    fetchMock.mockResolvedValueOnce(createEtagResponse({ ok: true }, '"v1"'));

    await requester.request({ path: '/search' });
    await requester.request({ path: '/search' });

    expect(headersOf(fetchMock.mock.calls[1]?.[1])).not.toHaveProperty(
      'If-None-Match',
    );
  });

  test('does not cache non-GET requests', async () => {
    const requester = new EInnsynRequester({
      baseUrl: 'https://example.com',
      cache: true,
    });

    fetchMock.mockResolvedValueOnce(createEtagResponse({ ok: true }, '"v1"'));
    fetchMock.mockResolvedValueOnce(createEtagResponse({ ok: true }, '"v1"'));

    await requester.request({ method: 'patch', path: '/enhet/enhet_123' });
    await requester.request({ method: 'patch', path: '/enhet/enhet_123' });

    expect(headersOf(fetchMock.mock.calls[1]?.[1])).not.toHaveProperty(
      'If-None-Match',
    );
  });

  test('evicts the least recently used response once maxBytes is passed', async () => {
    const body = { entity: 'Enhet', navn: 'x' };
    const bodySize = new TextEncoder().encode(JSON.stringify(body)).byteLength;

    const requester = new EInnsynRequester({
      baseUrl: 'https://example.com',
      // Room for two entries, but not three.
      cache: { maxBytes: bodySize * 2 },
    });

    fetchMock.mockResolvedValueOnce(createEtagResponse(body, '"a"'));
    fetchMock.mockResolvedValueOnce(createEtagResponse(body, '"b"'));
    fetchMock.mockResolvedValueOnce(createEtagResponse(body, '"c"'));
    fetchMock.mockResolvedValueOnce(createEtagResponse(body, '"a2"'));
    fetchMock.mockResolvedValueOnce(createNotModifiedResponse());

    await requester.request({ path: '/enhet/a' });
    await requester.request({ path: '/enhet/b' });
    await requester.request({ path: '/enhet/c' });

    // '/enhet/a' was evicted, so it is requested unconditionally again.
    await requester.request({ path: '/enhet/a' });
    expect(headersOf(fetchMock.mock.calls[3]?.[1])).not.toHaveProperty(
      'If-None-Match',
    );

    // '/enhet/c' is still cached.
    await requester.request({ path: '/enhet/c' });
    expect(headersOf(fetchMock.mock.calls[4]?.[1])).toMatchObject({
      'If-None-Match': '"c"',
    });
  });

  test('sizes entries by byte length, not string length', async () => {
    // 'Blåbærsyltetøy' is 14 characters but 17 bytes in UTF-8.
    const body = { entity: 'Enhet', navn: 'Blåbærsyltetøy' };
    const json = JSON.stringify(body);
    const byteLength = new TextEncoder().encode(json).byteLength;
    expect(byteLength).toBeGreaterThan(json.length);

    // A budget that fits the string length but not the byte length.
    const requester = new EInnsynRequester({
      baseUrl: 'https://example.com',
      cache: { maxBytes: byteLength - 1 },
    });

    fetchMock.mockResolvedValueOnce(createEtagResponse(body, '"v1"'));
    fetchMock.mockResolvedValueOnce(createEtagResponse(body, '"v1"'));

    await requester.request({ path: '/enhet/enhet_123' });
    await requester.request({ path: '/enhet/enhet_123' });

    // The body was too large to cache, so no revalidation is attempted.
    expect(headersOf(fetchMock.mock.calls[1]?.[1])).not.toHaveProperty(
      'If-None-Match',
    );
  });

  test('throws when the server sends a 304 for an uncached request', async () => {
    const requester = new EInnsynRequester({
      baseUrl: 'https://example.com',
      cache: true,
    });

    fetchMock.mockResolvedValueOnce(createNotModifiedResponse());

    const promise = requester.request({ path: '/enhet/enhet_123' });

    await expect(promise).rejects.toBeInstanceOf(NetworkError);
    await expect(promise).rejects.toThrow(
      'Got an unexpected 304 response from https://example.com/enhet/enhet_123',
    );
  });

  test('accepts an empty options object and uses the default size', async () => {
    const requester = new EInnsynRequester({
      baseUrl: 'https://example.com',
      cache: {},
    });

    fetchMock.mockResolvedValueOnce(createEtagResponse({ ok: true }, '"v1"'));
    fetchMock.mockResolvedValueOnce(createNotModifiedResponse());

    await requester.request({ path: '/enhet/enhet_123' });
    await requester.request({ path: '/enhet/enhet_123' });

    expect(headersOf(fetchMock.mock.calls[1]?.[1])).toMatchObject({
      'If-None-Match': '"v1"',
    });
  });

  test('does not cache when cache is explicitly false', async () => {
    const requester = new EInnsynRequester({
      baseUrl: 'https://example.com',
      cache: false,
    });

    fetchMock.mockResolvedValueOnce(createEtagResponse({ ok: true }, '"v1"'));
    fetchMock.mockResolvedValueOnce(createEtagResponse({ ok: true }, '"v1"'));

    await requester.request({ path: '/enhet/enhet_123' });
    await requester.request({ path: '/enhet/enhet_123' });

    expect(headersOf(fetchMock.mock.calls[1]?.[1])).not.toHaveProperty(
      'If-None-Match',
    );
  });

  test.each([0, -1, Number.NaN, Number.POSITIVE_INFINITY])(
    'rejects maxBytes %s',
    (maxBytes) => {
      expect(
        () =>
          new EInnsynRequester({
            baseUrl: 'https://example.com',
            cache: { maxBytes },
          }),
      ).toThrow(RangeError);
    },
  );

  test('caches pages fetched through iterate()', async () => {
    const requester = new EInnsynRequester({
      baseUrl: 'https://example.com',
      cache: true,
    });

    const page = {
      items: [{ entity: 'Enhet', id: 'enhet_1' }],
      next: '/enhet?startingAfter=enhet_1',
    };
    const lastPage = { items: [{ entity: 'Enhet', id: 'enhet_2' }] };

    fetchMock.mockResolvedValueOnce(createEtagResponse(page, '"p1"'));
    fetchMock.mockResolvedValueOnce(createEtagResponse(lastPage, '"p2"'));
    fetchMock.mockResolvedValueOnce(createNotModifiedResponse());
    fetchMock.mockResolvedValueOnce(createNotModifiedResponse());

    const first = await collect(requester.iterate('/enhet'));
    const second = await collect(requester.iterate('/enhet'));

    expect(first).toStrictEqual([...page.items, ...lastPage.items]);
    expect(second).toStrictEqual(first);
    expect(headersOf(fetchMock.mock.calls[2]?.[1])).toMatchObject({
      'If-None-Match': '"p1"',
    });
    expect(headersOf(fetchMock.mock.calls[3]?.[1])).toMatchObject({
      'If-None-Match': '"p2"',
    });
  });

  test('does not cache a response whose body is not valid JSON', async () => {
    const requester = new EInnsynRequester({
      baseUrl: 'https://example.com',
      cache: true,
    });

    fetchMock.mockResolvedValueOnce(
      new Response('<html>Bad gateway</html>', {
        status: 200,
        headers: { 'Content-Type': 'text/html', ETag: '"oops"' },
      }),
    );
    fetchMock.mockResolvedValueOnce(createEtagResponse({ ok: true }, '"v1"'));

    await expect(
      requester.request({ path: '/enhet/enhet_123' }),
    ).rejects.toBeInstanceOf(SyntaxError);

    const result = await requester.request({ path: '/enhet/enhet_123' });

    expect(result).toStrictEqual({ ok: true });
    expect(headersOf(fetchMock.mock.calls[1]?.[1])).not.toHaveProperty(
      'If-None-Match',
    );
  });

  test('drops the cached entry when revalidation fails with an error status', async () => {
    const requester = new EInnsynRequester({
      baseUrl: 'https://example.com',
      cache: true,
    });

    fetchMock.mockResolvedValueOnce(createEtagResponse({ ok: true }, '"v1"'));
    fetchMock.mockResolvedValueOnce(
      new Response(JSON.stringify({ type: 'notFound', message: 'Gone' }), {
        status: 404,
        headers: { 'Content-Type': 'application/json' },
      }),
    );
    fetchMock.mockResolvedValueOnce(createEtagResponse({ ok: true }, '"v2"'));

    await requester.request({ path: '/enhet/enhet_123' });
    await expect(
      requester.request({ path: '/enhet/enhet_123' }),
    ).rejects.toBeInstanceOf(NotFoundError);
    await requester.request({ path: '/enhet/enhet_123' });

    expect(headersOf(fetchMock.mock.calls[1]?.[1])).toMatchObject({
      'If-None-Match': '"v1"',
    });
    expect(headersOf(fetchMock.mock.calls[2]?.[1])).not.toHaveProperty(
      'If-None-Match',
    );
  });

  test('keeps the cached entry when revalidation fails with a server error', async () => {
    const requester = new EInnsynRequester({
      baseUrl: 'https://example.com',
      cache: true,
    });

    fetchMock.mockResolvedValueOnce(createEtagResponse({ ok: true }, '"v1"'));
    fetchMock.mockResolvedValueOnce(
      new Response(JSON.stringify({ type: 'internalServerError' }), {
        status: 503,
        headers: { 'Content-Type': 'application/json' },
      }),
    );
    fetchMock.mockResolvedValueOnce(createNotModifiedResponse());

    await requester.request({ path: '/enhet/enhet_123' });
    await expect(
      requester.request({ path: '/enhet/enhet_123' }),
    ).rejects.toThrow();
    const result = await requester.request({ path: '/enhet/enhet_123' });

    expect(result).toStrictEqual({ ok: true });
    expect(headersOf(fetchMock.mock.calls[2]?.[1])).toMatchObject({
      'If-None-Match': '"v1"',
    });
  });

  test('keeps the cached entry when throttling retries are exhausted', async () => {
    const requester = new EInnsynRequester({
      baseUrl: 'https://example.com',
      cache: true,
      maxThrottleRetries: 0,
    });

    const throttled = () =>
      new Response(JSON.stringify({ type: 'tooManyRequests' }), {
        status: 429,
        headers: { 'Content-Type': 'application/json' },
      });

    fetchMock.mockResolvedValueOnce(createEtagResponse({ ok: true }, '"v1"'));
    // fetchWithRetry always makes one retry, even with maxThrottleRetries: 0
    fetchMock.mockResolvedValueOnce(throttled());
    fetchMock.mockResolvedValueOnce(throttled());
    fetchMock.mockResolvedValueOnce(createNotModifiedResponse());

    await requester.request({ path: '/enhet/enhet_123' });
    await expect(
      requester.request({ path: '/enhet/enhet_123' }),
    ).rejects.toThrow();
    const result = await requester.request({ path: '/enhet/enhet_123' });

    expect(result).toStrictEqual({ ok: true });
    expect(headersOf(fetchMock.mock.calls[3]?.[1])).toMatchObject({
      'If-None-Match': '"v1"',
    });
  });

  test('does not cache responses marked Cache-Control: no-store', async () => {
    const requester = new EInnsynRequester({
      baseUrl: 'https://example.com',
      cache: true,
    });

    fetchMock.mockResolvedValueOnce(createEtagResponse({ ok: true }, '"v1"'));
    fetchMock.mockResolvedValueOnce(
      new Response(JSON.stringify({ ok: true }), {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
          ETag: '"v2"',
          'Cache-Control': 'private, no-store',
        },
      }),
    );
    fetchMock.mockResolvedValueOnce(createEtagResponse({ ok: true }, '"v3"'));

    await requester.request({ path: '/enhet/enhet_123' });
    await requester.request({ path: '/enhet/enhet_123' });
    await requester.request({ path: '/enhet/enhet_123' });

    expect(headersOf(fetchMock.mock.calls[1]?.[1])).toMatchObject({
      'If-None-Match': '"v1"',
    });
    expect(headersOf(fetchMock.mock.calls[2]?.[1])).not.toHaveProperty(
      'If-None-Match',
    );
  });

  test('drops the cached entry when a 304 is marked Cache-Control: no-store', async () => {
    const requester = new EInnsynRequester({
      baseUrl: 'https://example.com',
      cache: true,
    });

    fetchMock.mockResolvedValueOnce(createEtagResponse({ ok: true }, '"v1"'));
    fetchMock.mockResolvedValueOnce(
      new Response(null, {
        status: 304,
        headers: { ETag: '"v1"', 'Cache-Control': 'private, no-store' },
      }),
    );
    fetchMock.mockResolvedValueOnce(createEtagResponse({ ok: true }, '"v2"'));

    await requester.request({ path: '/enhet/enhet_123' });
    const revalidated = await requester.request({ path: '/enhet/enhet_123' });
    await requester.request({ path: '/enhet/enhet_123' });

    expect(revalidated).toStrictEqual({ ok: true });
    expect(headersOf(fetchMock.mock.calls[1]?.[1])).toMatchObject({
      'If-None-Match': '"v1"',
    });
    expect(headersOf(fetchMock.mock.calls[2]?.[1])).not.toHaveProperty(
      'If-None-Match',
    );
  });

  test('drops the cached entry when the server stops sending an ETag', async () => {
    const requester = new EInnsynRequester({
      baseUrl: 'https://example.com',
      cache: true,
    });

    fetchMock.mockResolvedValueOnce(createEtagResponse({ ok: true }, '"v1"'));
    fetchMock.mockResolvedValueOnce(
      new Response(JSON.stringify({ ok: true }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      }),
    );
    fetchMock.mockResolvedValueOnce(createEtagResponse({ ok: true }, '"v2"'));

    await requester.request({ path: '/enhet/enhet_123' });
    await requester.request({ path: '/enhet/enhet_123' });
    await requester.request({ path: '/enhet/enhet_123' });

    expect(headersOf(fetchMock.mock.calls[1]?.[1])).toMatchObject({
      'If-None-Match': '"v1"',
    });
    expect(headersOf(fetchMock.mock.calls[2]?.[1])).not.toHaveProperty(
      'If-None-Match',
    );
  });

  test('adopts a new ETag sent with a 304 response', async () => {
    const requester = new EInnsynRequester({
      baseUrl: 'https://example.com',
      cache: true,
    });

    fetchMock.mockResolvedValueOnce(createEtagResponse({ ok: true }, '"v1"'));
    fetchMock.mockResolvedValueOnce(createNotModifiedResponse('"v1b"'));
    fetchMock.mockResolvedValueOnce(createNotModifiedResponse());

    await requester.request({ path: '/enhet/enhet_123' });
    await requester.request({ path: '/enhet/enhet_123' });
    const third = await requester.request({ path: '/enhet/enhet_123' });

    expect(third).toStrictEqual({ ok: true });
    expect(headersOf(fetchMock.mock.calls[2]?.[1])).toMatchObject({
      'If-None-Match': '"v1b"',
    });
  });
});
