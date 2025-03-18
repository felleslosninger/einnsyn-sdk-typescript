import {
  AuthenticationError,
  resolveError,
} from '../common/error/EInnsynError';
import type { EInnsynOptions } from '../EInnsynOptions';
import { Authenticator } from './Authenticator';

type TokenResponse = {
  token: string;
  refreshToken: string;
  expiresIn: number;
};

const isTokenResponse = (data: unknown): data is TokenResponse => {
  const tokenResponse = data as TokenResponse;
  return (
    typeof tokenResponse.token === 'string' &&
    typeof tokenResponse.refreshToken === 'string' &&
    typeof tokenResponse.expiresIn === 'number'
  );
};

export class AuthenticatorBruker extends Authenticator {
  private username: string;
  private password: string;
  private jwt?: string;
  private tokenExpiry?: number;

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
    // Get / refresh token
    if (!this.jwt || !this.tokenExpiry || this.tokenExpiry < Date.now()) {
      await this.getToken();
    }

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
    const response = await fetch(`${this.eInnsynOptions.baseUrl}/auth/token`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: this.username,
        password: this.password,
      }),
    });

    if (response.status >= 400) {
      throw resolveError(await response.json());
    }

    const data = await response.json();
    if (!isTokenResponse(data)) {
      throw new AuthenticationError('Invalid token response');
    }

    this.jwt = data.token;
    this.tokenExpiry = Date.now() + data.expiresIn * 1000;

    return this.jwt;
  }
}
