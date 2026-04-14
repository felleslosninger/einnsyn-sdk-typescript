//export const version = __VERSION__ ?? 'dev';
export const version = 'dev';

import EInnsynClient from './EInnsynClient';
export default EInnsynClient;

export {
  isPaginatedList,
  PaginatedList,
} from './common/responses/PaginatedList';
export * from './typeUtils';
