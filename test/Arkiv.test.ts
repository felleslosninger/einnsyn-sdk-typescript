// Representative smoke coverage for a generated top-level resource with add() and nested routes.

import type { Arkiv } from '../src/entities/arkiv/Arkiv.ts';
import { isArkiv, isPaginatedArkivList } from '../src/entities/arkiv/Arkiv.ts';
import type {
  Arkivdel,
  ArkivdelRequest,
} from '../src/entities/arkivdel/Arkivdel.ts';
import {
  defineEndpointCaseSuite,
  defineStandardEntityResourceSuite,
  type StandardEntityResourceSuite,
} from './support/entityResourceHarness.ts';

defineStandardEntityResourceSuite({
  suiteName: 'arkiv resource',
  entityName: 'Arkiv',
  basePath: '/arkiv',
  id: 'arkiv_123',
  validator: isArkiv,
  listValidator: isPaginatedArkivList,
  getResource: (client) => client.arkiv,
  addBody: {
    tittel: 'Main archive',
  },
} satisfies StandardEntityResourceSuite);

const createArkiv = (overrides: Partial<Arkiv> = {}): Arkiv => ({
  entity: 'Arkiv',
  id: 'ark_123',
  deleted: false,
  tittel: 'Main archive',
  ...overrides,
});

const createArkivdel = (overrides: Partial<Arkivdel> = {}): Arkivdel => ({
  entity: 'Arkivdel',
  id: 'arkivdel_123',
  deleted: false,
  tittel: 'Case archive',
  arkiv: 'ark_123',
  ...overrides,
});

defineEndpointCaseSuite({
  suiteName: 'arkiv nested endpoints',
  description: 'uses the expected nested arkiv route',
  buildCases: (harness) =>
    [
      {
        name: 'listArkiv',
        responseBody: {
          items: [createArkiv({ id: 'ark_124', tittel: 'Child archive' })],
        },
        bogusResponseBody: { items: [{ entity: 'Arkivdel' }] },
        run: () =>
          harness.client.arkiv.listArkiv('ark_123', {
            id: 'ark_123',
            arkivId: 'ark_123',
            limit: 5,
          }),
        expectedUrl:
          'https://example.com/arkiv/ark_123/arkiv?arkivId=ark_123&id=ark_123&limit=5',
        expectedMethod: 'get',
      },
      {
        name: 'addArkivdel',
        responseBody: createArkivdel(),
        bogusResponseBody: { entity: 'Arkiv' },
        run: () =>
          harness.client.arkiv.addArkivdel('ark_123', {
            tittel: 'Case archive',
          } satisfies ArkivdelRequest),
        expectedUrl: 'https://example.com/arkiv/ark_123/arkivdel',
        expectedMethod: 'post',
        expectedBody: JSON.stringify({
          tittel: 'Case archive',
        }),
      },
    ] as const,
});
