// Auto-generated from our API specification
// https://github.com/felleslosninger/einnsyn-api-spec

import type { ListParameters } from '../../common/queryparameters/ListParameters';

export interface EnhetFilterParameters extends ListParameters {
  query?: string;
  orgnummer?: Array<string>;
}
