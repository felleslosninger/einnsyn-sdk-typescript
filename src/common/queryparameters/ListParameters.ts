// Auto-generated from our API specification
// https://github.com/felleslosninger/einnsyn-api-spec

import type { QueryParameters } from './QueryParameters';

export interface ListParameters extends QueryParameters {
  /**
   * Specifies which fields in the response should be expanded. Maximum 100 values.
   */
  expand?: Array<string>;
  /**
   * A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.
   */
  limit?: number;
  /**
   * The sort order of the result set. The default is ascending.
   */
  sortOrder?: 'asc' | 'desc';
  /**
   * A cursor for use in pagination. StartingAfter is a resource ID that defines your place in the list.
   */
  startingAfter?: string;
  /**
   * A cursor for use in pagination. EndingBefore is a resource ID that defines your place in the list.
   */
  endingBefore?: string;
  /**
   * A list of resource IDs to be returned. Maximum 100 values. If this parameter is used, the other parameters will be ignored.
   */
  ids?: Array<string>;
  /**
   * A list of external IDs to be returned. Maximum 100 values. If this parameter is used, the other parameters will be ignored.
   */
  externalIds?: Array<string>;
  /**
   * The Journalenhet to filter the result set by.
   */
  journalenhet?: string;
}
