// Representative smoke coverage for generated action endpoints.
import { defineEndpointCaseSuite } from './support/entityResourceHarness.ts';

defineEndpointCaseSuite({
  suiteName: 'bruker action endpoints',
  description: 'use the expected generated action routes',
  buildCases: (harness) =>
    [
      {
        name: 'activate',
        responseBody: { entity: 'Bruker' },
        bogusResponseBody: { entity: 'LagretSoek' },
        run: () => harness.client.bruker.activate('bruker_123', 'secret_123'),
        expectedUrl:
          'https://example.com/bruker/bruker_123/activate/secret_123',
        expectedMethod: 'PATCH',
      },
      {
        name: 'updatePasswordWithSecret',
        responseBody: { entity: 'Bruker' },
        bogusResponseBody: { entity: 'LagretSak' },
        run: () =>
          harness.client.bruker.updatePasswordWithSecret(
            'bruker_123',
            'secret_123',
            {
              newPassword: 'new-password',
            },
          ),
        expectedUrl:
          'https://example.com/bruker/bruker_123/updatePassword/secret_123',
        expectedMethod: 'PATCH',
        expectedBody: JSON.stringify({
          newPassword: 'new-password',
        }),
      },
    ] as const,
});
