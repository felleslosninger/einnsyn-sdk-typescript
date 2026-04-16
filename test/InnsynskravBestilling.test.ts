// Representative smoke coverage for a generated verification action endpoint.
import { defineEndpointCaseSuite } from './support/entityResourceHarness.ts';

defineEndpointCaseSuite({
  suiteName: 'innsynskravbestilling action endpoint',
  description: 'uses the expected generated verify route',
  buildCases: (harness) =>
    [
      {
        name: 'verify',
        responseBody: { entity: 'InnsynskravBestilling' },
        bogusResponseBody: { entity: 'Innsynskrav' },
        run: () =>
          harness.client.innsynskravbestilling.verify(
            'innsynskravBestilling_123',
            'secret_123',
          ),
        expectedUrl:
          'https://example.com/innsynskravBestilling/innsynskravBestilling_123/verify/secret_123',
        expectedMethod: 'patch',
      },
    ] as const,
});
