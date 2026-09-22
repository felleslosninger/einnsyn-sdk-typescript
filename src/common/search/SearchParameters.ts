// Auto-generated from our API specification
// https://github.com/felleslosninger/einnsyn-api-spec

import type { FilterParameters } from '../queryparameters/FilterParameters';

/**
 * Search parameters
 */
export interface SearchParameters extends FilterParameters {
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: Array<string>;
  /**
   * A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 25.
   */
  limit?: number;
  /**
   * The sort order of the result set. The default is ascending.
   */
  sortOrder?: 'asc' | 'desc';
  /**
   * A cursor for use in pagination. This is a list of size two, the value of the sortBy property and the unique id.
   */
  startingAfter?: Array<string>;
  /**
   * A cursor for use in pagination. This is a list of size two, the value of the sortBy property and the unique id.
   */
  endingBefore?: Array<string>;
  /**
   * The field to sort results by. The default is "score".
   */
  sortBy?:
    | 'administrativEnhetNavn'
    | 'dokumentetsDato'
    | 'entity'
    | 'fulltekst'
    | 'id'
    | 'journaldato'
    | 'journalpostnummer'
    | 'journalposttype'
    | 'korrespondansepartNavn'
    | 'moetedato'
    | 'oppdatertDato'
    | 'publisertDato'
    | 'standardDato'
    | 'sakssekvensnummer'
    | 'score'
    | 'tittel';
}
