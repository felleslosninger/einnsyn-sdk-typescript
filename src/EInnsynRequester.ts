import { version } from '.';
import type { EInnsynOptions } from './EInnsynOptions';
import { Authenticator } from './auth/Authenticator';
import { AuthenticatorApiKey } from './auth/AuthenticatorApiKey';
import { AuthenticatorBruker } from './auth/AuthenticatorBruker';
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
    const response = await fetch(url, requestInit);

    if (response.status >= 400) {
      const error = resolveError(await response.json());
      throw error;
    }

    return await response.json();
  }

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
}
