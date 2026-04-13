// Representative smoke coverage for generated CRUD-only resources.
import {
  isApiKey,
  isPaginatedApiKeyList,
} from '../src/entities/apikey/ApiKey.ts';
import {
  defineStandardEntityResourceSuite,
  type StandardEntityResourceSuite,
} from './support/entityResourceHarness.ts';

defineStandardEntityResourceSuite({
  suiteName: 'apikey resource',
  entityName: 'ApiKey',
  basePath: '/apiKey',
  id: 'apiKey_123',
  validator: isApiKey,
  listValidator: isPaginatedApiKeyList,
  getResource: (client) => client.apikey,
} satisfies StandardEntityResourceSuite);
