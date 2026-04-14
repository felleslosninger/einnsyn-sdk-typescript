import { afterEach, beforeEach, describe, expect, test, vi } from 'vitest';
import {
  NetworkError,
  NotFoundError,
} from '../src/common/error/EInnsynError.ts';
import type { PaginatedList } from '../src/common/responses/PaginatedList.ts';
import { EInnsynRequester } from '../src/EInnsynRequester.ts';
import type { Base } from '../src/entities/base/Base.ts';
import {
  createJsonResponse,
  getFetchUrl,
} from './support/entityResourceHarness.ts';

type BaseEntity = Base & {
  entity: 'Journalpost';
};

const createBaseEntity = (id: string): BaseEntity => ({
  entity: 'Journalpost',
  id,
  deleted: false,
});

const consume = async <T>(iterator: AsyncIterable<T>) => {
  const items: T[] = [];

  for await (const item of iterator) {
    items.push(item);
  }

  return items;
};

describe('EInnsynRequester request', () => {
  let fetchMock: ReturnType<typeof vi.fn<typeof fetch>>;

  beforeEach(() => {
    fetchMock = vi.fn<typeof fetch>();
    vi.stubGlobal('fetch', fetchMock);
  });

  afterEach(() => {
    vi.restoreAllMocks();
    vi.unstubAllGlobals();
    vi.useRealTimers();
  });

  test('builds the request URL, body, and user agent', async () => {
    const requester = new EInnsynRequester({
      baseUrl: 'https://example.com',
      appInfo: 'SDK tests',
    });

    fetchMock.mockResolvedValueOnce(createJsonResponse({ ok: true }));

    const response = await requester.request({
      method: 'patch',
      path: '/journalpost/journalpost_123',
      query: {
        limit: 5,
        query: 'budget',
      },
      body: {
        title: 'Updated title',
      },
    });

    expect(response).toStrictEqual({ ok: true });

    const [url, init] = fetchMock.mock.calls[0];
    expect(getFetchUrl(url)).toBe(
      'https://example.com/journalpost/journalpost_123?limit=5&query=budget',
    );
    expect(init).toMatchObject({
      method: 'patch',
      body: JSON.stringify({
        title: 'Updated title',
      }),
    });
    expect(init?.headers).toMatchObject({
      'Content-Type': 'application/json',
      'User-Agent': 'SDK tests - eInnsyn TypeScript SDK dev',
    });
  });

  test('uses API key authentication when configured', async () => {
    const requester = new EInnsynRequester({
      baseUrl: 'https://example.com',
      apiKey: 'secret_123',
      actingAs: 'enhet_123',
    });

    fetchMock.mockResolvedValueOnce(createJsonResponse({ entity: 'AuthInfo' }));

    await requester.request({
      path: '/me',
    });

    const [, init] = fetchMock.mock.calls[0];
    expect(init?.headers).toMatchObject({
      'API-KEY': 'secret_123',
      'ACTING-AS': 'enhet_123',
    });
  });

  test('uses JWT authentication when configured', async () => {
    const requester = new EInnsynRequester({
      baseUrl: 'https://example.com',
      jwt: 'jwt_123',
    });

    fetchMock.mockResolvedValueOnce(createJsonResponse({ entity: 'AuthInfo' }));

    await requester.request({
      path: '/me',
    });

    const [, init] = fetchMock.mock.calls[0];
    expect(init?.headers).toMatchObject({
      Authorization: 'BEARER jwt_123',
    });
  });

  test('wraps fetch errors in a NetworkError with the base URL', async () => {
    const requester = new EInnsynRequester({
      baseUrl: 'https://example.com',
    });

    fetchMock.mockRejectedValueOnce(new Error('socket closed'));

    const promise = requester.request({
      path: '/search',
    });

    await expect(promise).rejects.toBeInstanceOf(NetworkError);
    await expect(promise).rejects.toThrow(
      'Could not fetch https://example.com: socket closed',
    );
    await expect(promise).rejects.toMatchObject({
      baseUrl: 'https://example.com',
      type: 'networkError',
    });
  });

  test('wraps non-Error fetch failures in a NetworkError', async () => {
    const requester = new EInnsynRequester({
      baseUrl: 'https://example.com',
    });

    fetchMock.mockRejectedValueOnce('boom');

    const promise = requester.request({
      path: '/search',
    });

    await expect(promise).rejects.toThrow(
      'Could not fetch https://example.com',
    );
    await expect(promise).rejects.toMatchObject({
      baseUrl: 'https://example.com',
      type: 'networkError',
    });
  });

  test('resolves structured API errors for non-success responses', async () => {
    const requester = new EInnsynRequester({
      baseUrl: 'https://example.com',
    });

    fetchMock.mockResolvedValueOnce(
      new Response(
        JSON.stringify({
          type: 'notFound',
          message: 'Missing resource',
        }),
        {
          status: 404,
          headers: {
            'Content-Type': 'application/json',
          },
        },
      ),
    );

    const promise = requester.request({
      path: '/search',
    });

    await expect(promise).rejects.toBeInstanceOf(NotFoundError);
    await expect(promise).rejects.toThrow('Missing resource');
    await expect(promise).rejects.toMatchObject({
      type: 'notFound',
    });
  });

  test('uses the bruker authenticator flow when username and password are configured', async () => {
    const requester = new EInnsynRequester({
      baseUrl: 'https://example.com',
      username: 'user@example.com',
      password: 'supersecret',
    });

    fetchMock
      .mockResolvedValueOnce(
        createJsonResponse({
          token: 'jwt_123',
          refreshToken: 'refresh_123',
          expiresIn: 60,
        }),
      )
      .mockResolvedValueOnce(createJsonResponse({ ok: true }));

    const response = await requester.request({
      path: '/search',
    });

    expect(response).toStrictEqual({ ok: true });
    expect(fetchMock).toHaveBeenCalledTimes(2);
    expect(getFetchUrl(fetchMock.mock.calls[0][0])).toBe(
      'https://example.com/auth/token',
    );
    expect(getFetchUrl(fetchMock.mock.calls[1][0])).toBe(
      'https://example.com/search',
    );
    expect(fetchMock.mock.calls[1][1]?.headers).toMatchObject({
      Authorization: 'BEARER jwt_123',
    });
  });
});

describe('EInnsynRequester fetchWithRetry', () => {
  let fetchMock: ReturnType<typeof vi.fn<typeof fetch>>;

  beforeEach(() => {
    fetchMock = vi.fn<typeof fetch>();
    vi.stubGlobal('fetch', fetchMock);
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.restoreAllMocks();
    vi.unstubAllGlobals();
    vi.useRealTimers();
  });

  test('retries throttled requests using Retry-After', async () => {
    const requester = new EInnsynRequester({
      baseUrl: 'https://example.com',
      maxThrottleRetries: 1,
    });

    fetchMock
      .mockResolvedValueOnce(
        new Response(null, {
          status: 429,
          headers: {
            'Retry-After': '2',
          },
        }),
      )
      .mockResolvedValueOnce(createJsonResponse({ ok: true }));

    const responsePromise = requester.fetchWithRetry('https://example.com/me');

    await Promise.resolve();
    expect(fetchMock).toHaveBeenCalledTimes(1);

    await vi.advanceTimersByTimeAsync(2_000);

    const response = await responsePromise;

    expect(response.status).toBe(200);
    expect(fetchMock).toHaveBeenCalledTimes(2);
  });

  test('retries throttled requests with jitter when Retry-After is missing', async () => {
    const requester = new EInnsynRequester({
      baseUrl: 'https://example.com',
      maxThrottleRetries: 1,
    });

    vi.spyOn(Math, 'random').mockReturnValue(0);

    fetchMock
      .mockResolvedValueOnce(
        new Response(null, {
          status: 429,
        }),
      )
      .mockResolvedValueOnce(createJsonResponse({ ok: true }));

    const responsePromise = requester.fetchWithRetry('https://example.com/me');

    await Promise.resolve();
    expect(fetchMock).toHaveBeenCalledTimes(1);

    await vi.advanceTimersByTimeAsync(249);
    expect(fetchMock).toHaveBeenCalledTimes(1);

    await vi.advanceTimersByTimeAsync(1);

    const response = await responsePromise;

    expect(response.status).toBe(200);
    expect(fetchMock).toHaveBeenCalledTimes(2);
  });

  test('clones Request inputs before fetching', async () => {
    const requester = new EInnsynRequester({
      baseUrl: 'https://example.com',
    });

    const input = new Request('https://example.com/me', {
      method: 'POST',
      body: JSON.stringify({
        query: 'budget',
      }),
    });

    fetchMock.mockResolvedValueOnce(createJsonResponse({ ok: true }));

    await requester.fetchWithRetry(input);

    const [requestInput] = fetchMock.mock.calls[0];
    expect(requestInput).toBeInstanceOf(Request);
    expect(requestInput).not.toBe(input);
    expect((requestInput as Request).url).toBe(input.url);
  });
});

describe('EInnsynRequester pagination helpers', () => {
  afterEach(() => {
    vi.restoreAllMocks();
  });

  test('iterate yields items from the initial page and next pages', async () => {
    const requester = new EInnsynRequester({
      baseUrl: 'https://example.com',
    });

    vi.spyOn(requester, 'request').mockResolvedValueOnce({
      items: [createBaseEntity('journalpost_2')],
    });

    const initialPage: PaginatedList<BaseEntity> = {
      items: [createBaseEntity('journalpost_1')],
      next: '/search?startingAfter=journalpost_1',
    };

    const items = await consume(requester.iterate(initialPage));

    expect(items).toStrictEqual([
      createBaseEntity('journalpost_1'),
      createBaseEntity('journalpost_2'),
    ]);
    expect(requester.request).toHaveBeenCalledWith({
      path: '/search?startingAfter=journalpost_1',
    });
  });

  test('iterate rejects invalid follow-up pages', async () => {
    const requester = new EInnsynRequester({
      baseUrl: 'https://example.com',
    });

    vi.spyOn(requester, 'request').mockResolvedValueOnce({
      entity: 'Journalpost',
    });

    const promise = consume(requester.iterate('/search'));

    await expect(promise).rejects.toBeInstanceOf(NetworkError);
    await expect(promise).rejects.toThrow('Unknown response type');
    await expect(promise).rejects.toMatchObject({
      type: 'networkError',
    });
  });

  test('fetchNextPage uses either a page cursor or a URL string', async () => {
    const requester = new EInnsynRequester({
      baseUrl: 'https://example.com',
    });

    const requestSpy = vi
      .spyOn(requester, 'request')
      .mockResolvedValueOnce({
        items: [createBaseEntity('journalpost_2')],
      })
      .mockResolvedValueOnce({
        items: [createBaseEntity('journalpost_3')],
      });

    const nextPage = await requester.fetchNextPage<BaseEntity>({
      items: [createBaseEntity('journalpost_1')],
      next: '/search?startingAfter=journalpost_1',
    });
    const nextPageFromUrl = await requester.fetchNextPage<BaseEntity>(
      '/search?startingAfter=jp_2',
    );
    const noNextPage = await requester.fetchNextPage<BaseEntity>({
      items: [],
    });

    expect(nextPage).toStrictEqual({
      items: [createBaseEntity('journalpost_2')],
    });
    expect(nextPageFromUrl).toStrictEqual({
      items: [createBaseEntity('journalpost_3')],
    });
    expect(noNextPage).toBeUndefined();
    expect(requestSpy).toHaveBeenNthCalledWith(1, {
      path: '/search?startingAfter=journalpost_1',
    });
    expect(requestSpy).toHaveBeenNthCalledWith(2, {
      path: '/search?startingAfter=jp_2',
    });
  });

  test('fetchPreviousPage uses either a page cursor or a URL string', async () => {
    const requester = new EInnsynRequester({
      baseUrl: 'https://example.com',
    });

    const requestSpy = vi
      .spyOn(requester, 'request')
      .mockResolvedValueOnce({
        items: [createBaseEntity('journalpost_1')],
      })
      .mockResolvedValueOnce({
        items: [createBaseEntity('journalpost_0')],
      });

    const previousPage = await requester.fetchPreviousPage<BaseEntity>({
      items: [createBaseEntity('journalpost_2')],
      previous: '/search?endingBefore=journalpost_2',
    });
    const previousFromUrl = await requester.fetchPreviousPage<BaseEntity>(
      '/search?endingBefore=jp_1',
    );
    const noPreviousPage = await requester.fetchPreviousPage<BaseEntity>({
      items: [],
    });

    expect(previousPage).toStrictEqual({
      items: [createBaseEntity('journalpost_1')],
    });
    expect(previousFromUrl).toStrictEqual({
      items: [createBaseEntity('journalpost_0')],
    });
    expect(noPreviousPage).toBeUndefined();
    expect(requestSpy).toHaveBeenNthCalledWith(1, {
      path: '/search?endingBefore=journalpost_2',
    });
    expect(requestSpy).toHaveBeenNthCalledWith(2, {
      path: '/search?endingBefore=jp_1',
    });
  });
});
