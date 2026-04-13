import { expect, test } from 'vitest';

import type { SearchParameters } from '../src/common/search/SearchParameters.ts';
import { searchQuerySerializer } from '../src/utils/searchQuerySerializer.ts';

test('searchQuerySerializer serializes valid query parameters in a stable order', () => {
  const params: SearchParameters = {
    entity: ['Journalpost', 'Saksmappe'],
    expand: ['dokumentbeskrivelse', 'saksmappe'],
    journalenhet: 'enhet_123',
    limit: 2,
    query: 'annual report',
    sortOrder: 'desc',
  };

  const result = searchQuerySerializer(params);

  expect(result).toStrictEqual([
    'entity=Journalpost',
    'entity=Saksmappe',
    'expand=dokumentbeskrivelse',
    'expand=saksmappe',
    'journalenhet=enhet_123',
    'limit=2',
    'query=annual%20report',
    'sortOrder=desc',
  ]);
});

test('searchQuerySerializer skips undefined optional query parameters', () => {
  const params: SearchParameters = {
    query: 'archive',
    limit: undefined,
    expand: undefined,
    endingBefore: undefined,
  };

  const result = searchQuerySerializer(params);

  expect(result).toStrictEqual(['query=archive']);
});
