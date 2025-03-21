//export const version = __VERSION__ ?? 'dev';
export const version = 'dev';

import EInnsynClient from './EInnsynClient';
export default EInnsynClient;

export * from './typeUtils';

export {
  PaginatedList,
  isPaginatedList,
} from './common/responses/PaginatedList';
