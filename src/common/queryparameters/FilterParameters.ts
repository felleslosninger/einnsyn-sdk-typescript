// Auto-generated from our API specification
// https://github.com/felleslosninger/einnsyn-api-spec

import type { QueryParameters } from './QueryParameters';

export interface FilterParameters extends QueryParameters {
  query?: string;
  administrativEnhet?: Array<string>;
  administrativEnhetExact?: Array<string>;
  excludeAdministrativEnhet?: Array<string>;
  excludeAdministrativEnhetExact?: Array<string>;
  publisertDatoBefore?: string;
  publisertDatoAfter?: string;
  oppdatertDatoBefore?: string;
  oppdatertDatoAfter?: string;
  moetedatoBefore?: string;
  moetedatoAfter?: string;
  entity?: Array<'Journalpost' | 'Moetemappe' | 'Moetesak' | 'Saksmappe'>;
  ids?: Array<string>;
  externalIds?: Array<string>;
  journalenhet?: string;
  fulltext?: boolean;
}
