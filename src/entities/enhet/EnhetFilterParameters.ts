// Auto-generated from our API specification
// https://github.com/felleslosninger/einnsyn-api-spec

import type { ListParameters } from '../../common/queryparameters/ListParameters';

export interface EnhetFilterParameters extends ListParameters {
  /**
   * Free-text filter against navn, navnNynorsk, navnEngelsk, navnSami,
   * orgnummer and enhetskode.
   */
  query?: string;
  /**
   * Filter by exact orgnummer(s).
   */
  orgnummer?: Array<string>;
}
