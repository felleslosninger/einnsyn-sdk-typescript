import { afterEach, beforeEach, describe, expect, test, vi } from 'vitest';

import { Authenticator } from '../src/auth/Authenticator.ts';
import { AuthenticatorApiKey } from '../src/auth/AuthenticatorApiKey.ts';
import { AuthenticatorBruker } from '../src/auth/AuthenticatorBruker.ts';
import { AuthenticatorJWT } from '../src/auth/AuthenticatorJWT.ts';
import {
  AuthenticationError,
  BadRequestError,
} from '../src/common/error/EInnsynError.ts';
import {
  createJsonResponse,
  getFetchUrl,
} from './support/entityResourceHarness.ts';

describe('Authenticator', () => {
  test('adds ACTING-AS when configured', async () => {
    const authenticator = new Authenticator({
      actingAs: 'enhet_123',
    });

    const requestInit = await authenticator.addAuthHeaders(
      'get',
      '/search',
      '?limit=5',
      {
        headers: {
          Accept: 'application/json',
        },
      },
    );

    expect(requestInit.headers).toStrictEqual({
      Accept: 'application/json',
      'ACTING-AS': 'enhet_123',
    });
  });

  test('leaves headers unchanged without ACTING-AS', async () => {
    const authenticator = new Authenticator({});

    const requestInit = await authenticator.addAuthHeaders(
      'get',
      '/search',
      undefined,
      {
        headers: {
          Accept: 'application/json',
        },
      },
    );

    expect(requestInit.headers).toStrictEqual({
      Accept: 'application/json',
    });
  });
});

describe('AuthenticatorApiKey', () => {
  test('requires an apiKey', () => {
    expect(() => new AuthenticatorApiKey({})).toThrow(AuthenticationError);
    expect(() => new AuthenticatorApiKey({})).toThrow('Missing apiKey');
  });

  test('adds the API-KEY header and preserves ACTING-AS', async () => {
    const authenticator = new AuthenticatorApiKey({
      apiKey: 'secret_123',
      actingAs: 'enhet_123',
    });

    const requestInit = await authenticator.addAuthHeaders(
      'get',
      '/search',
      undefined,
      {
        headers: {
          Accept: 'application/json',
        },
      },
    );

    expect(requestInit.headers).toStrictEqual({
      Accept: 'application/json',
      'ACTING-AS': 'enhet_123',
      'API-KEY': 'secret_123',
    });
  });
});

describe('AuthenticatorJWT', () => {
  test('requires a JWT', () => {
    expect(() => new AuthenticatorJWT({})).toThrow(AuthenticationError);
    expect(() => new AuthenticatorJWT({})).toThrow('Missing JWT');
  });

  test('adds the Authorization header and preserves ACTING-AS', async () => {
    const authenticator = new AuthenticatorJWT({
      jwt: 'jwt_123',
      actingAs: 'enhet_123',
    });

    const requestInit = await authenticator.addAuthHeaders(
      'get',
      '/search',
      undefined,
      {
        headers: {
          Accept: 'application/json',
        },
      },
    );

    expect(requestInit.headers).toStrictEqual({
      Accept: 'application/json',
      'ACTING-AS': 'enhet_123',
      Authorization: 'BEARER jwt_123',
    });
  });
});

describe('AuthenticatorBruker', () => {
  let fetchMock: ReturnType<typeof vi.fn<typeof fetch>>;

  beforeEach(() => {
    fetchMock = vi.fn<typeof fetch>();
    vi.stubGlobal('fetch', fetchMock);
  });

  afterEach(() => {
    vi.restoreAllMocks();
    vi.unstubAllGlobals();
  });

  test('requires a username', () => {
    expect(
      () =>
        new AuthenticatorBruker({
          password: 'supersecret',
        }),
    ).toThrow(AuthenticationError);
    expect(
      () =>
        new AuthenticatorBruker({
          password: 'supersecret',
        }),
    ).toThrow('Missing username');
  });

  test('requires a password', () => {
    expect(
      () =>
        new AuthenticatorBruker({
          username: 'user@example.com',
        }),
    ).toThrow(AuthenticationError);
    expect(
      () =>
        new AuthenticatorBruker({
          username: 'user@example.com',
        }),
    ).toThrow('Missing password');
  });

  test('gets and reuses a token for authenticated requests', async () => {
    const now = 1_000;
    vi.spyOn(Date, 'now').mockImplementation(() => now);

    fetchMock.mockResolvedValueOnce(
      createJsonResponse({
        token: 'jwt_123',
        refreshToken: 'refresh_123',
        expiresIn: 60,
      }),
    );

    const authenticator = new AuthenticatorBruker({
      baseUrl: 'https://example.com',
      username: 'user@example.com',
      password: 'supersecret',
      actingAs: 'enhet_123',
    });

    const firstRequest = await authenticator.addAuthHeaders(
      'get',
      '/search',
      '?limit=5',
      {
        headers: {
          Accept: 'application/json',
        },
      },
    );

    const secondRequest = await authenticator.addAuthHeaders(
      'get',
      '/search',
      '?limit=5',
      {
        headers: {
          Accept: 'application/json',
        },
      },
    );

    expect(fetchMock).toHaveBeenCalledTimes(1);
    const [url, init] = fetchMock.mock.calls[0];
    expect(getFetchUrl(url)).toBe('https://example.com/auth/token');
    expect(init).toMatchObject({
      method: 'POST',
      body: JSON.stringify({
        username: 'user@example.com',
        password: 'supersecret',
      }),
    });
    expect(firstRequest.headers).toStrictEqual({
      Accept: 'application/json',
      'ACTING-AS': 'enhet_123',
      Authorization: 'BEARER jwt_123',
    });
    expect(secondRequest.headers).toStrictEqual({
      Accept: 'application/json',
      'ACTING-AS': 'enhet_123',
      Authorization: 'BEARER jwt_123',
    });
  });

  test('refreshes expired tokens', async () => {
    let now = 1_000;
    vi.spyOn(Date, 'now').mockImplementation(() => now);

    fetchMock
      .mockResolvedValueOnce(
        createJsonResponse({
          token: 'jwt_123',
          refreshToken: 'refresh_123',
          expiresIn: 1,
        }),
      )
      .mockResolvedValueOnce(
        createJsonResponse({
          token: 'jwt_456',
          refreshToken: 'refresh_456',
          expiresIn: 60,
        }),
      );

    const authenticator = new AuthenticatorBruker({
      baseUrl: 'https://example.com',
      username: 'user@example.com',
      password: 'supersecret',
    });

    await authenticator.addAuthHeaders('get', '/search', undefined, {
      headers: {},
    });

    now = 3_000;

    const requestInit = await authenticator.addAuthHeaders(
      'get',
      '/search',
      undefined,
      {
        headers: {},
      },
    );

    expect(fetchMock).toHaveBeenCalledTimes(2);
    expect(requestInit.headers).toStrictEqual({
      Authorization: 'BEARER jwt_456',
    });
  });

  test('rejects invalid token payloads', async () => {
    fetchMock.mockResolvedValueOnce(
      createJsonResponse({
        token: 'jwt_123',
      }),
    );

    const authenticator = new AuthenticatorBruker({
      baseUrl: 'https://example.com',
      username: 'user@example.com',
      password: 'supersecret',
    });

    const promise = authenticator.getToken();

    await expect(promise).rejects.toBeInstanceOf(AuthenticationError);
    await expect(promise).rejects.toThrow('Invalid token response');
    await expect(promise).rejects.toMatchObject({
      type: 'authenticationError',
    });
  });

  test('resolves token endpoint errors', async () => {
    fetchMock.mockResolvedValueOnce(
      new Response(
        JSON.stringify({
          type: 'badRequest',
          message: 'Invalid credentials',
        }),
        {
          status: 400,
          headers: {
            'Content-Type': 'application/json',
          },
        },
      ),
    );

    const authenticator = new AuthenticatorBruker({
      baseUrl: 'https://example.com',
      username: 'user@example.com',
      password: 'supersecret',
    });

    const promise = authenticator.getToken();

    await expect(promise).rejects.toBeInstanceOf(BadRequestError);
    await expect(promise).rejects.toThrow('Invalid credentials');
    await expect(promise).rejects.toMatchObject({
      type: 'badRequest',
    });
  });
});
