import { describe, expect, test } from 'vitest';
import { LruCache } from '../src/utils/LruCache.ts';

describe('LruCache', () => {
  test('stores and returns values', () => {
    const cache = new LruCache<string>(100);

    cache.set('a', 'value a', 10);

    expect(cache.get('a')).toBe('value a');
    expect(cache.get('missing')).toBeUndefined();
    expect(cache.size).toBe(10);
    expect(cache.count).toBe(1);
  });

  test('evicts the least recently used entry when the size limit is passed', () => {
    const cache = new LruCache<string>(30);

    cache.set('a', 'a', 10);
    cache.set('b', 'b', 10);
    cache.set('c', 'c', 10);
    cache.set('d', 'd', 10);

    expect(cache.get('a')).toBeUndefined();
    expect(cache.get('b')).toBe('b');
    expect(cache.get('c')).toBe('c');
    expect(cache.get('d')).toBe('d');
    expect(cache.size).toBe(30);
  });

  test('reading an entry protects it from the next eviction', () => {
    const cache = new LruCache<string>(30);

    cache.set('a', 'a', 10);
    cache.set('b', 'b', 10);
    cache.set('c', 'c', 10);

    // 'a' is the oldest, but reading it makes 'b' the least recently used.
    expect(cache.get('a')).toBe('a');

    cache.set('d', 'd', 10);

    expect(cache.get('b')).toBeUndefined();
    expect(cache.get('a')).toBe('a');
  });

  test('replacing an entry refreshes its recency and its size', () => {
    const cache = new LruCache<string>(30);

    cache.set('a', 'a', 10);
    cache.set('b', 'b', 10);
    cache.set('c', 'c', 10);

    // Map.set() alone would leave 'a' in its original position, making it the
    // next eviction candidate even though it was just written.
    cache.set('a', 'a2', 20);

    // 'b' is evicted, bringing the total back down to exactly the limit.
    expect(cache.size).toBe(30);
    expect(cache.get('a')).toBe('a2');
    expect(cache.get('b')).toBeUndefined();
    expect(cache.get('c')).toBe('c');
  });

  test('evicts as many entries as needed to fit a large value', () => {
    const cache = new LruCache<string>(30);

    cache.set('a', 'a', 10);
    cache.set('b', 'b', 10);
    cache.set('c', 'c', 10);
    cache.set('big', 'big', 25);

    expect(cache.count).toBe(1);
    expect(cache.get('big')).toBe('big');
    expect(cache.size).toBe(25);
  });

  test('drops a value that cannot fit on its own without evicting others', () => {
    const cache = new LruCache<string>(30);

    cache.set('a', 'a', 10);
    cache.set('huge', 'huge', 31);

    expect(cache.get('huge')).toBeUndefined();
    expect(cache.get('a')).toBe('a');
    expect(cache.size).toBe(10);
    expect(cache.count).toBe(1);
  });

  test('replacing an entry with one that cannot fit removes the old entry', () => {
    const cache = new LruCache<string>(30);

    cache.set('a', 'a', 10);
    cache.set('b', 'b', 10);
    cache.set('a', 'huge', 31);

    expect(cache.get('a')).toBeUndefined();
    expect(cache.get('b')).toBe('b');
    expect(cache.size).toBe(10);
    expect(cache.count).toBe(1);
  });

  test.each([0, -1, Number.NaN, Number.POSITIVE_INFINITY])(
    'rejects maxSize %s',
    (maxSize) => {
      expect(() => new LruCache<string>(maxSize)).toThrow(RangeError);
    },
  );

  test('rejects sizes that are not non-negative finite numbers', () => {
    const cache = new LruCache<string>(100);
    cache.set('a', 'a', 10);

    expect(() => cache.set('b', 'b', Number.NaN)).toThrow(RangeError);
    expect(() => cache.set('b', 'b', -1)).toThrow(RangeError);
    expect(() => cache.set('b', 'b', Number.POSITIVE_INFINITY)).toThrow(
      RangeError,
    );

    expect(cache.get('a')).toBe('a');
    expect(cache.size).toBe(10);
  });

  test('deletes and clears entries, keeping the tracked size correct', () => {
    const cache = new LruCache<string>(100);

    cache.set('a', 'a', 10);
    cache.set('b', 'b', 10);

    cache.delete('a');
    cache.delete('missing');

    expect(cache.get('a')).toBeUndefined();
    expect(cache.size).toBe(10);

    cache.clear();

    expect(cache.size).toBe(0);
    expect(cache.count).toBe(0);
  });
});
