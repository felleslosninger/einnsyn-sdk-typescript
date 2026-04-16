// Representative smoke coverage for generic generated child list/add routes.
import type { SaksmappeRequest } from '../src/entities/saksmappe/Saksmappe.ts';
import { defineEndpointCaseSuite } from './support/entityResourceHarness.ts';

defineEndpointCaseSuite({
  suiteName: 'arkivdel nested endpoints',
  description: 'uses the expected nested arkivdel route',
  buildCases: (harness) =>
    [
      {
        name: 'listKlasse',
        responseBody: {
          items: [{ entity: 'Klasse' }],
        },
        bogusResponseBody: { items: [{ entity: 'Saksmappe' }] },
        run: () =>
          harness.client.arkivdel.listKlasse('arkivdel_123', {
            id: 'arkivdel_123',
            arkivdelId: 'arkivdel_123',
            limit: 5,
          }),
        expectedUrl:
          'https://example.com/arkivdel/arkivdel_123/klasse?arkivdelId=arkivdel_123&id=arkivdel_123&limit=5',
        expectedMethod: 'get',
      },
      {
        name: 'addSaksmappe',
        responseBody: { entity: 'Saksmappe' },
        bogusResponseBody: { entity: 'Klasse' },
        run: () =>
          harness.client.arkivdel.addSaksmappe('arkivdel_123', {
            offentligTittel: 'Case ****',
            offentligTittelSensitiv: 'Case title',
            saksaar: 2026,
            sakssekvensnummer: 7,
          } satisfies SaksmappeRequest),
        expectedUrl: 'https://example.com/arkivdel/arkivdel_123/saksmappe',
        expectedMethod: 'post',
        expectedBody: JSON.stringify({
          offentligTittel: 'Case ****',
          offentligTittelSensitiv: 'Case title',
          saksaar: 2026,
          sakssekvensnummer: 7,
        }),
      },
    ] as const,
});
