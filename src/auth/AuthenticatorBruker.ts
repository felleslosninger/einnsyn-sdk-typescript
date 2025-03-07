import { AuthenticationError } from '../common/error/EInnsynError';
import type { EInnsynOptions } from '../EInnsynOptions';
import { Authenticator } from './Authenticator';

export class AuthenticatorBruker extends Authenticator {
  private username: string;
  private password: string;
  private jwt?: string;

  constructor(eInnsynOptions: EInnsynOptions) {
    super(eInnsynOptions);

    if (!eInnsynOptions.username) {
      throw new AuthenticationError('Missing username');
    }

    if (!eInnsynOptions.password) {
      throw new AuthenticationError('Missing password');
    }

    this.username = eInnsynOptions.username;
    this.password = eInnsynOptions.password;
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
      ...requestInit.headers,
      Authorization: `BEARER ${this.jwt}`,
    };
    return superRequestInit;
  }

  public async getToken(): Promise<string> {
    // Implement this
    return '';
  }

  public async refreshToken(): Promise<string> {
    // Implement this
    return '';
  }
}
