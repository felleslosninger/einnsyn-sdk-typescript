// Auto-generated from our API specification
// https://github.com/felleslosninger/einnsyn-api-spec

import type { FilterParameters } from '../queryparameters/FilterParameters';

export interface SearchParameters extends FilterParameters {
  expand?: Array<string>;
  limit?: number;
  sortOrder?: 'asc' | 'desc';
  startingAfter?: Array<string>;
  endingBefore?: Array<string>;
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
