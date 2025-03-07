// Auto-generated from our API specification
// https://github.com/felleslosninger/einnsyn-api-spec

import type { QueryParameters } from './QueryParameters';

export interface ListParameters extends QueryParameters {
  expand?: Array<string>;
  limit?: number;
  sortOrder?: 'asc' | 'desc';
  startingAfter?: string;
  endingBefore?: string;
  ids?: Array<string>;
  externalIds?: Array<string>;
  journalenhet?: string;
}
