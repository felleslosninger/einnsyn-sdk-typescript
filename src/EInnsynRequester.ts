import { Authenticator } from './auth/Authenticator';
import { AuthenticatorApiKey } from './auth/AuthenticatorApiKey';
import { AuthenticatorBruker } from './auth/AuthenticatorBruker';
import { AuthenticatorJWT } from './auth/AuthenticatorJWT';
import { NetworkError, resolveError } from './common/error/EInnsynError';
import type { QueryParameters } from './common/queryparameters/QueryParameters';
import {
  isPaginatedList,
  type PaginatedList,
} from './common/responses/PaginatedList';
import { defaultCacheMaxBytes, type EInnsynOptions } from './EInnsynOptions';
import type { Base } from './entities/base/Base';
import { LruCache } from './utils/LruCache';
import { searchQuerySerializer } from './utils/searchQuerySerializer';
import { version } from './version';

type CachedResponse = {
  etag: string;
  /** Unparsed response body, reparsed on each hit to give callers a fresh object. */
  body: string;
};

/** True when a Cache-Control header forbids storing the response. */
const isNoStore = (cacheControl: string | null) =>
  cacheControl
    ?.split(',')
    .some((directive) => directive.trim().toLowerCase() === 'no-store') ??
  false;

type RequestOptions = {
  method?: 'get' | 'post' | 'patch' | 'delete';
  path: string;
  query?: QueryParameters;
  body?: unknown;
};

export class EInnsynRequester {
  private authenticator: Authenticator;

  /**
   * Cache of ETagged GET responses, scoped to this requester. The authenticator
   * is fixed for the lifetime of a requester, so entries always belong to a
   * single identity and cannot leak between users. Keyed by request URL.
   */
  private cache?: LruCache<CachedResponse>;

  constructor(private options: EInnsynOptions) {
    if (options.apiKey !== undefined) {
      this.authenticator = new AuthenticatorApiKey(options);
    } else if (options.username !== undefined) {
      this.authenticator = new AuthenticatorBruker(options);
    } else if (options.jwt !== undefined) {
      this.authenticator = new AuthenticatorJWT(options);
    } else {
      // Anonymous authenticator
      this.authenticator = new Authenticator(options);
    }

    if (options.cache) {
      const cacheOptions = options.cache === true ? {} : options.cache;
      // LruCache rejects bounds that are not positive finite numbers.
      this.cache = new LruCache(cacheOptions.maxBytes ?? defaultCacheMaxBytes);
    }

    this.options = options;
  }

  public async request({
    method = 'get',
    path,
    query,
    body,
  }: RequestOptions): Promise<unknown> {
    let queryString = searchQuerySerializer(query).join('&');
    queryString = queryString ? `?${queryString}` : '';

    const userAgentBase = `eInnsyn TypeScript SDK ${version}`;
    const appInfo = this.options.appInfo;
    const userAgent = appInfo ? `${appInfo} - ${userAgentBase}` : userAgentBase;

    const baseUrl = this.options.baseUrl;
    const url = baseUrl + path + queryString;

    // Only GETs are cached. A cached entry is never served without asking the
    // server first, so there is nothing to invalidate after a write: a stale
    // entry simply gets a 200 with fresh content instead of a 304.
    const cache = method === 'get' ? this.cache : undefined;
    const cached = cache?.get(url);

    const defaultRequestInit: RequestInit = {
      method: method.toUpperCase(),
      headers: {
        'Content-Type': 'application/json',
        'User-Agent': userAgent,
        ...(cached ? { 'If-None-Match': cached.etag } : {}),
      },
      body: JSON.stringify(body),
    };
    const requestInit = await this.authenticator.addAuthHeaders(
      method,
      path,
      queryString,
      defaultRequestInit,
    );

    let response: Response;
    try {
      response = await this.fetchWithRetry(url, requestInit);
    } catch (error) {
      if (error instanceof Error) {
        throw new NetworkError(
          `Could not fetch ${baseUrl}: ${error.message}`,
          baseUrl,
        );
      }
      throw new NetworkError(`Could not fetch ${baseUrl}`, baseUrl);
    }

    // 304 responses have no body, so they must be handled before any read of
    // the response. Parsing the stored body gives every caller its own copy.
    if (response.status === 304) {
      if (!cached) {
        throw new NetworkError(
          `Got an unexpected 304 response from ${url}`,
          baseUrl,
        );
      }
      if (isNoStore(response.headers.get('Cache-Control'))) {
        cache?.delete(url);
        return JSON.parse(cached.body);
      }
      // A 304 may carry a new validator for the same content (RFC 9110
      // §15.4.5). The entry captured before the request may have been evicted
      // or replaced while the request was in flight, so look it up again
      // rather than writing to a possibly detached object.
      const refreshedEtag = response.headers.get('ETag');
      if (refreshedEtag && cache?.get(url) === cached) {
        cached.etag = refreshedEtag;
      }
      return JSON.parse(cached.body);
    }

    if (response.status >= 400) {
      // A 4xx (other than throttling) says the cached entity is gone or no
      // longer accessible, so drop it. Without this, a deleted entity would
      // keep its body in the cache and keep sending If-None-Match until
      // evicted. Throttling and server errors are transient: the entity has
      // not changed, so the entry stays valid for the next revalidation.
      if (response.status < 500 && response.status !== 429) {
        cache?.delete(url);
      }
      const error = resolveError(await response.json());
      throw error;
    }

    if (!cache) {
      return await response.json();
    }

    const etag = response.headers.get('ETag');
    if (!etag || isNoStore(response.headers.get('Cache-Control'))) {
      // Either the server stopped sending validators for this URL, so a stale
      // entry would never be revalidated successfully again, or it asked us
      // not to store the response at all.
      cache.delete(url);
      return await response.json();
    }

    // Read the raw bytes so the entry can be sized by the body's byte length
    // rather than by string length, which counts UTF-16 code units. Parse
    // before storing, so a body that is not valid JSON never gets into the
    // cache. If it did, every later 304 would rethrow the same error.
    const bytes = await response.arrayBuffer();
    const text = new TextDecoder().decode(bytes);
    const parsed = JSON.parse(text);
    cache.set(url, { etag, body: text }, bytes.byteLength);
    return parsed;
  }

  /**
   * Wrapper around fetch() that retries on 429 responses
   *
   * @param args - Arguments to pass to fetch()
   * @returns
   */
  public async fetchWithRetry(
    ...args: Parameters<typeof fetch>
  ): ReturnType<typeof fetch> {
    const maxRetries = this.options.maxThrottleRetries ?? 10;
    let retries = 0;
    async function attemptFetch() {
      // Requests can only be read once, so create a clone:
      const [input, ...rest] = args;
      const inputClone = input instanceof Request ? input.clone() : input;
      const response = await fetch(inputClone, ...rest);
      if (response.status === 429 && retries++ <= maxRetries) {
        const retryAfter = response.headers.get('Retry-After');
        if (retryAfter) {
          const delay = Number.parseInt(retryAfter, 10) * 1000;
          await sleep(delay);
          return await attemptFetch();
        }
        const baseDelay = 500;
        const maxDelay = baseDelay * 2 ** retries;
        const delay = baseDelay / 2 + Math.random() * maxDelay;
        await sleep(delay);
        return await attemptFetch();
      }
      return response;
    }
    return await attemptFetch();
  }

  /**
   * Iterates over a paginated list of items, yielding each item one by one.
   *
   * @param initial - The initial paginated list or URL to start iterating from.
   */
  public async *iterate<T extends Base>(initial: PaginatedList<T> | string) {
    let url: string | undefined;

    if (typeof initial === 'string') {
      url = initial;
    } else {
      for (const item of initial.items) {
        yield item;
      }
      url = initial.next;
    }

    while (url) {
      const response = (await this.request({ path: url })) as PaginatedList<T>;

      if (!isPaginatedList<T>(response)) {
        throw new NetworkError('Unknown response type');
      }

      for (const item of response.items) {
        yield item;
      }

      url = response.next;
    }
  }

  /**
   * Fetch the next batch of items in a paginated list.
   *
   * @param pageOrUrl - The current paginated list or the next page URL string
   * @returns The next page of items, or undefined if there is no next page
   */
  public async fetchNextPage<T extends Base>(
    pageOrUrl: PaginatedList<T> | string,
  ): Promise<PaginatedList<T> | undefined> {
    const nextUrl = typeof pageOrUrl === 'string' ? pageOrUrl : pageOrUrl.next;
    if (!nextUrl) {
      return undefined;
    }
    return (await this.request({ path: nextUrl })) as PaginatedList<T>;
  }

  /**
   * Fetch the previous batch of items in a paginated list.
   *
   * @param pageOrUrl - The current paginated list or the previous page URL string
   * @returns The previous page of items, or undefined if there is no previous page
   */
  public async fetchPreviousPage<T extends Base>(
    pageOrUrl: PaginatedList<T> | string,
  ): Promise<PaginatedList<T> | undefined> {
    const previousUrl =
      typeof pageOrUrl === 'string' ? pageOrUrl : pageOrUrl.previous;
    if (!previousUrl) {
      return undefined;
    }
    return (await this.request({ path: previousUrl })) as PaginatedList<T>;
  }
}

const sleep = (duration: number) =>
  new Promise((resolve) => setTimeout(resolve, duration));
