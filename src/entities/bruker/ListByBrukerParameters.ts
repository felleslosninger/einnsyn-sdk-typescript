// Auto-generated from our API specification
// https://github.com/felleslosninger/einnsyn-api-spec

import type { ListParameters } from '../../common/queryparameters/ListParameters';

export interface ListByBrukerParameters extends ListParameters {
  id: string;
  brukerId: string;
}
