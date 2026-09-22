type Entry<V> = { value: V; size: number };

/**
 * Least-recently-used cache bounded by the total size of its entries.
 *
 * Recency is tracked by Map insertion order. Map.set() on an existing key
 * keeps that key in its original position, so entries are deleted and
 * re-inserted on every read and write to move them to the end. The first key
 * is therefore always the least recently used one.
 */
export class LruCache<V> {
  private entries = new Map<string, Entry<V>>();
  private currentSize = 0;

  constructor(private readonly maxSize: number) {}

  public get(key: string): V | undefined {
    const entry = this.entries.get(key);
    if (entry === undefined) {
      return undefined;
    }

    this.entries.delete(key);
    this.entries.set(key, entry);

    return entry.value;
  }

  /**
   * Insert or replace an entry, evicting the least recently used entries until
   * the cache fits within maxSize. An entry larger than maxSize is never
   * stored, and does not evict anything: the other entries are left as they
   * were.
   *
   * @param key - Cache key
   * @param value - Value to store
   * @param size - Size of the value, in the same unit as maxSize
   */
  public set(key: string, value: V, size: number) {
    if (!Number.isFinite(size) || size < 0) {
      throw new RangeError(`size must be a non-negative number, got ${size}`);
    }

    this.delete(key);

    if (size > this.maxSize) {
      return;
    }

    this.entries.set(key, { value, size });
    this.currentSize += size;

    // Deleting during Map iteration is well-defined: keys after the deleted
    // one are still visited.
    for (const [oldestKey, oldestEntry] of this.entries) {
      if (this.currentSize <= this.maxSize) {
        break;
      }
      this.entries.delete(oldestKey);
      this.currentSize -= oldestEntry.size;
    }
  }

  public delete(key: string) {
    const entry = this.entries.get(key);
    if (entry === undefined) {
      return;
    }

    this.entries.delete(key);
    this.currentSize -= entry.size;
  }

  public clear() {
    this.entries.clear();
    this.currentSize = 0;
  }

  /** Combined size of all cached entries. */
  public get size(): number {
    return this.currentSize;
  }

  /** Number of cached entries. */
  public get count(): number {
    return this.entries.size;
  }
}
