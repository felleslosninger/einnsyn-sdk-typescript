import { AuthenticationError } from '../common/error/EInnsynError';
import type { EInnsynOptions } from '../EInnsynOptions';
import { Authenticator } from './Authenticator';

export class AuthenticatorJWT extends Authenticator {
  private jwt: string;

  constructor(eInnsynOptions: EInnsynOptions) {
    super(eInnsynOptions);

    if (!eInnsynOptions.jwt) {
      throw new AuthenticationError('Missing JWT');
    }

    this.jwt = eInnsynOptions.jwt;
  }

  public async addAuthHeaders(
    method: string | undefined,
    path: string,
    query: string | undefined,
    requestInit: RequestInit,
  ): Promise<RequestInit> {
    const superRequestInit = await super.addAuthHeaders(
      method,
      path,
      query,
      requestInit,
    );
    superRequestInit.headers = {
      ...superRequestInit.headers,
      Authorization: `BEARER ${this.jwt}`,
    };

    return superRequestInit;
  }
}
