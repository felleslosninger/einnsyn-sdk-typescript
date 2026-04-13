import { describe, expect, test } from 'vitest';

import type EInnsynClient from '../src/EInnsynClient.ts';
import { NetworkError } from '../src/common/error/EInnsynError.ts';
import {
  createJsonResponse,
  getFetchUrl,
  setupClientHarness,
} from './support/entityResourceHarness.ts';

type SearchResponse = Awaited<ReturnType<EInnsynClient['search']['search']>>;
type SearchResponseItem = SearchResponse['items'][number] & {
  entity: 'Journalpost' | 'Saksmappe';
};

describe('search resource', () => {
  const harness = setupClientHarness();

  test('search uses the expected search endpoint and returns base entities', async () => {
    const responseBody: SearchResponse & {
      items: SearchResponseItem[];
    } = {
      items: [
        {
          entity: 'Journalpost',
          id: 'journalpost_123',
          deleted: false,
        },
        {
          entity: 'Saksmappe',
          id: 'saksmappe_123',
          deleted: false,
        },
      ],
      next: '/search?startingAfter=saksmappe_123',
    };

    harness.fetchMock.mockResolvedValueOnce(createJsonResponse(responseBody));

    const response = await harness.client.search.search({
      entity: ['Journalpost', 'Saksmappe'],
      limit: 2,
      query: 'budget',
      sortOrder: 'desc',
    });

    expect(response).toStrictEqual(responseBody);

    const [url, init] = harness.fetchMock.mock.calls[0];
    expect(getFetchUrl(url)).toBe(
      'https://example.com/search?entity=Journalpost&entity=Saksmappe&limit=2&query=budget&sortOrder=desc',
    );
    expect(init?.method).toBe('get');
  });

  test('search rejects invalid paginated responses', async () => {
    harness.fetchMock.mockResolvedValueOnce(
      createJsonResponse({
        items: [
          {
            entity: 'UnknownEntity',
            id: 'unknown_123',
            deleted: false,
          },
        ],
      }),
    );

    const promise = harness.client.search.search();

    await expect(promise).rejects.toBeInstanceOf(NetworkError);
    await expect(promise).rejects.toMatchObject({
      message: 'Unknown response type',
      type: 'networkError',
    });
  });
});
