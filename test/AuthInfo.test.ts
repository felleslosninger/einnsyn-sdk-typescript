import { describe, expect, test } from 'vitest';

import type EInnsynClient from '../src/EInnsynClient.ts';
import {
  createJsonResponse,
  getFetchUrl,
  setupClientHarness,
} from './support/entityResourceHarness.ts';

type AuthInfoResponse = Awaited<ReturnType<EInnsynClient['authinfo']['get']>>;

describe('authinfo resource', () => {
  const harness = setupClientHarness();

  test('get uses the expected me endpoint', async () => {
    const responseBody: AuthInfoResponse = {
      entity: 'AuthInfo',
      authType: 'ApiKey',
      type: 'Enhet',
      id: 'enhet_123',
      orgnummer: '123456789',
    };

    harness.fetchMock.mockResolvedValueOnce(createJsonResponse(responseBody));

    const response = await harness.client.authinfo.get();

    expect(response).toStrictEqual(responseBody);

    const [url, init] = harness.fetchMock.mock.calls[0];
    expect(getFetchUrl(url)).toBe('https://example.com/me');
    expect(init?.method).toBe('GET');
  });
});
