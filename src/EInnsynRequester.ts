import { version } from '.';
import type { EInnsynOptions } from './EInnsynOptions';
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
import type { Base } from './entities/base/Base';
import { searchQuerySerializer } from './utils/searchQuerySerializer';

type RequestOptions = {
  method?: 'get' | 'post' | 'patch' | 'delete';
  path: string;
  query?: QueryParameters;
  body?: unknown;
};

export class EInnsynRequester {
  private authenticator: Authenticator;

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

    const defaultRequestInit: RequestInit = {
      method: method,
      headers: {
        'Content-Type': 'application/json',
        'User-Agent': userAgent,
      },
      body: JSON.stringify(body),
    };
    const requestInit = await this.authenticator.addAuthHeaders(
      method,
      path,
      queryString,
      defaultRequestInit,
    );

    const baseUrl = this.options.baseUrl;
    const url = baseUrl + path + queryString;
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

    if (response.status >= 400) {
      const error = resolveError(await response.json());
      throw error;
    }

    return await response.json();
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
          const delay = Number.parseInt(retryAfter) * 1000;
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
