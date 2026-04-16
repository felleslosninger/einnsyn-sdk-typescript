// Representative smoke coverage for a generated resource with a richer top-level add() payload.
import {
  isMoetesak,
  isPaginatedMoetesakList,
} from '../src/entities/moetesak/Moetesak.ts';
import {
  defineStandardEntityResourceSuite,
  type StandardEntityResourceSuite,
} from './support/entityResourceHarness.ts';

defineStandardEntityResourceSuite({
  suiteName: 'moetesak resource',
  entityName: 'Moetesak',
  basePath: '/moetesak',
  id: 'moetesak_123',
  validator: isMoetesak,
  listValidator: isPaginatedMoetesakList,
  getResource: (client) => client.moetesak,
  addBody: {
    offentligTittel: 'Meeting case',
    offentligTittelSensitiv: 'Meeting case',
    moetesakstype: 'moete',
  },
} satisfies StandardEntityResourceSuite);
