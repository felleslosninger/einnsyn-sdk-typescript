import { AuthenticationError } from '../common/error/EInnsynError';
import type { EInnsynOptions } from '../EInnsynOptions';
import { Authenticator } from './Authenticator';

export class AuthenticatorApiKey extends Authenticator {
  private apiKey: string;

  constructor(eInnsynOptions: EInnsynOptions) {
    super(eInnsynOptions);

    if (!eInnsynOptions.apiKey) {
      throw new AuthenticationError('Missing apiKey');
    }

    this.apiKey = eInnsynOptions.apiKey;
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
      'API-KEY': this.apiKey,
    };

    return superRequestInit;
  }
}
