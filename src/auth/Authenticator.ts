import type { EInnsynOptions } from '../EInnsynOptions';

export class Authenticator {
  constructor(protected eInnsynOptions: EInnsynOptions) {}

  public async addAuthHeaders(
    _method: string | undefined,
    _path: string,
    _query: string | undefined,
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
