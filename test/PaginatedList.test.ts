import { describe, expect, test } from 'vitest';

import { isPaginatedList } from '../src/common/responses/PaginatedList.ts';

describe('isPaginatedList', () => {
  test('accepts lists with string cursors', () => {
    expect(
      isPaginatedList({
        items: [],
        next: 'next-page',
        previous: 'previous-page',
      }),
    ).toBe(true);
  });

  test('accepts lists without cursors', () => {
    expect(
      isPaginatedList({
        items: [],
      }),
    ).toBe(true);
  });

  test('rejects values where items is missing or not an array', () => {
    expect(isPaginatedList(undefined)).toBe(false);
    expect(isPaginatedList({})).toBe(false);
    expect(isPaginatedList({ items: 'not-an-array' })).toBe(false);
    expect(isPaginatedList({ items: null })).toBe(false);
  });

  test('rejects non-string cursor values', () => {
    expect(isPaginatedList({ items: [], next: 1 })).toBe(false);
    expect(isPaginatedList({ items: [], previous: 1 })).toBe(false);
    expect(isPaginatedList({ items: [], next: null })).toBe(false);
    expect(isPaginatedList({ items: [], previous: false })).toBe(false);
  });

  test('does not validate individual item shapes', () => {
    expect(
      isPaginatedList({
        items: [123, { foo: 'bar' }],
      }),
    ).toBe(true);
  });
});
