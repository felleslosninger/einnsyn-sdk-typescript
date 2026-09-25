export type EInnsynCacheOptions = {
  /**
   * Maximum combined size of cached response bodies, in bytes. Defaults to
   * 8 MiB. The least recently used responses are evicted when the cache grows
   * past this. Must be a positive number.
   */
  maxBytes?: number;
};

export type EInnsynOptions = {
  baseUrl?: string;
  apiKey?: string;
  username?: string;
  password?: string;
  jwt?: string;
  actingAs?: string;
  maxThrottleRetries?: number;
  appInfo?: string;
  /**
   * Cache GET responses that carry an ETag, and revalidate them with
   * If-None-Match. Pass true for the defaults, or an object to size the cache.
   * Disabled by default.
   */
  cache?: boolean | EInnsynCacheOptions;
};

export const defaultOptions: EInnsynOptions = {
  baseUrl: 'https://api.einnsyn.no',
  maxThrottleRetries: 10,
};

export const defaultCacheMaxBytes = 8 * 1024 * 1024;
