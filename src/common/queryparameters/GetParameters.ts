// Auto-generated from our API specification
// https://github.com/felleslosninger/einnsyn-api-spec

import type { QueryParameters } from './QueryParameters';

export interface GetParameters extends QueryParameters {
  /**
   * Specifies which fields in the response should be expanded. Maximum 100 values.
   */
  expand?: Array<string>;
}
