// Auto-generated from our API specification
// https://github.com/felleslosninger/einnsyn-api-spec

import type { QueryParameters } from './QueryParameters';

export interface FilterParameters extends QueryParameters {
  query?: string;
  administrativEnhet?: Array<string>;
  administrativEnhetExact?: Array<string>;
  excludeAdministrativEnhet?: Array<string>;
  excludeAdministrativEnhetExact?: Array<string>;
  tittel?: Array<string>;
  korrespondansepartNavn?: Array<string>;
  skjermingshjemmel?: Array<string>;
  publisertDatoFrom?: unknown;
  publisertDatoTo?: unknown;
  oppdatertDatoFrom?: unknown;
  oppdatertDatoTo?: unknown;
  journaldatoFrom?: unknown;
  journaldatoTo?: unknown;
  dokumentetsDatoFrom?: unknown;
  dokumentetsDatoTo?: unknown;
  moetedatoFrom?: unknown;
  moetedatoTo?: unknown;
  standardDatoFrom?: unknown;
  standardDatoTo?: unknown;
  saksaar?: Array<string>;
  sakssekvensnummer?: Array<string>;
  saksnummer?: Array<string>;
  journalpostnummer?: Array<string>;
  journalsekvensnummer?: Array<string>;
  moetesaksaar?: Array<string>;
  moetesakssekvensnummer?: Array<string>;
  journalposttype?: Array<
    | 'inngaaende_dokument'
    | 'utgaaende_dokument'
    | 'organinternt_dokument_uten_oppfoelging'
    | 'organinternt_dokument_for_oppfoelging'
    | 'saksframlegg'
    | 'sakskart'
    | 'moeteprotokoll'
    | 'moetebok'
    | 'ukjent'
  >;
  entity?: Array<'Journalpost' | 'Moetemappe' | 'Moetesak' | 'Saksmappe'>;
  ids?: Array<string>;
  externalIds?: Array<string>;
  journalenhet?: string;
  fulltext?: boolean;
}
