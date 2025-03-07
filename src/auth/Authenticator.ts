import { version } from '..';
import type { EInnsynOptions } from '../EInnsynOptions';

export class Authenticator {
  constructor(private eInnsynOptions: EInnsynOptions) {}

  public async addAuthHeaders(
    method: string | undefined,
    path: string,
    query: string | undefined,
    requestInit: RequestInit,
  ): Promise<RequestInit> {
    if (this.eInnsynOptions.actingAs) {
      requestInit.headers = {
        ...requestInit.headers,
        'ACTING-AS': this.eInnsynOptions.actingAs,
      };
    }

    return requestInit;
  }
}
