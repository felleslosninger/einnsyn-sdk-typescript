import { afterEach, expect, test, vi } from 'vitest';

import EInnsynClient from '../src/EInnsynClient.ts';

type StatisticsResponse = Awaited<
  ReturnType<EInnsynClient['statistics']['query']>
>;

const getFetchUrl = (input: string | URL | Request): string => {
  if (typeof input === 'string') {
    return input;
  }
  if (input instanceof URL) {
    return input.href;
  }
  return input.url;
};

afterEach(() => {
  vi.restoreAllMocks();
  vi.unstubAllGlobals();
});

test('statistics endpoint requests /statistics with serialized query params', async () => {
  const expectedResponse: StatisticsResponse = {
    summary: {
      createdCount: 12,
      createdWithFulltextCount: 7,
      createdInnsynskravCount: 2,
      downloadCount: 1,
    },
    metadata: {
      aggregateInterval: 'day',
      aggregateFrom: '2026-03-01',
      aggregateTo: '2026-03-31',
    },
    timeSeries: [
      {
        time: '2026-03-01',
        createdCount: 5,
        createdWithFulltextCount: 3,
        createdInnsynskravCount: 1,
        downloadCount: 1,
      },
      {
        time: '2026-03-02',
        createdCount: 7,
        createdWithFulltextCount: 4,
        createdInnsynskravCount: 1,
        downloadCount: 0,
      },
    ],
  };

  const fetchMock = vi.fn(
    async (_input: string | URL | Request, _init?: RequestInit) =>
      new Response(JSON.stringify(expectedResponse), {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
        },
      }),
  );

  vi.stubGlobal('fetch', fetchMock);

  const client = new EInnsynClient({
    baseUrl: 'https://example.com',
    appInfo: 'SDK tests',
  });

  const response = await client.statistics.query({
    aggregateFrom: '2026-03-01',
    aggregateTo: '2026-03-31',
    entity: ['Journalpost', 'Moetemappe'],
    query: 'budget',
  });

  expect(response).toStrictEqual(expectedResponse);
  expect(fetchMock).toHaveBeenCalledTimes(1);

  const [url, init] = fetchMock.mock.calls[0];
  expect(getFetchUrl(url)).toBe(
    'https://example.com/statistics?aggregateFrom=2026-03-01&aggregateTo=2026-03-31&entity=Journalpost&entity=Moetemappe&query=budget',
  );
  expect(init?.method).toBe('GET');
  expect(init?.body).toBeUndefined();
  expect(init?.headers).toStrictEqual({
    'Content-Type': 'application/json',
    'User-Agent': 'SDK tests - eInnsyn TypeScript SDK dev',
  });
});
