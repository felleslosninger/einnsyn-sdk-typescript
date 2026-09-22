// Auto-generated from our API specification
// https://github.com/felleslosninger/einnsyn-api-spec

/**
 * A set of search parameters stored as plain data, e.g. on a saved search.
 */
export interface SavedSearchParameters {
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
  /**
   * A query string to filter by. Quotes can be used to search for exact matches or phrases. Words can be excluded by prefixing them with a minus sign.
   */
  query?: string;
  /**
   * A list of enhet IDs to filter by. This will also match subenhets.
   */
  administrativEnhet?: Array<string>;
  /**
   * A list of enhet IDs to filter by. This will only match the specified enhets, not subenhets.
   */
  administrativEnhetExact?: Array<string>;
  /**
   * A list of enhet IDs to exclude from the result set. This will also exclude subenhets.
   */
  excludeAdministrativEnhet?: Array<string>;
  /**
   * A list of enhet IDs to exclude from the result set. This will only exclude the specified enhets, not subenhets.
   */
  excludeAdministrativEnhetExact?: Array<string>;
  /**
   * Filter by title. This is a free text search.
   */
  tittel?: Array<string>;
  /**
   * Filter by sender/recipient name. This is a free text search.
   */
  korrespondansepartNavn?: Array<string>;
  /**
   * Filter by legal basis for exemption. This is a free text search.
   */
  skjermingshjemmel?: Array<string>;
  /**
   * Filter by the published date of the document.
   */
  publisertDatoFrom?: unknown;
  /**
   * Filter by the published date of the document.
   */
  publisertDatoTo?: unknown;
  /**
   * Filter by the updated date of the document.
   */
  oppdatertDatoFrom?: unknown;
  /**
   * Filter by the updated date of the document.
   */
  oppdatertDatoTo?: unknown;
  /**
   * Filter by journal date.
   */
  journaldatoFrom?: unknown;
  /**
   * Filter by journal date.
   */
  journaldatoTo?: unknown;
  /**
   * Filter by document date.
   */
  dokumentetsDatoFrom?: unknown;
  /**
   * Filter by document date.
   */
  dokumentetsDatoTo?: unknown;
  /**
   * Filter by the date of a meeting.
   */
  moetedatoFrom?: unknown;
  /**
   * Filter by the date of a meeting.
   */
  moetedatoTo?: unknown;
  /**
   * Filter by the legacy "standardDato". This is the default date for each entity type.
   * For instance, for Moetemappe this would be "moetedato", for Journalpost this would be "journaldato".
   */
  standardDatoFrom?: unknown;
  /**
   * Filter by the legacy "standardDato". This is the default date for each entity type.
   * For instance, for Moetemappe this would be "moetedato", for Journalpost this would be "journaldato".
   */
  standardDatoTo?: unknown;
  /**
   * Filter by saksaar
   */
  saksaar?: Array<string>;
  /**
   * Filter by sakssekvensnummer
   */
  sakssekvensnummer?: Array<string>;
  /**
   * Filter by saksnummer
   */
  saksnummer?: Array<string>;
  /**
   * Filter by journalpostnummer
   */
  journalpostnummer?: Array<string>;
  /**
   * Filter by journalsekvensnummer
   */
  journalsekvensnummer?: Array<string>;
  /**
   * Filter by moetesaksaar
   */
  moetesaksaar?: Array<string>;
  /**
   * Filter by moetesakssekvensnummer
   */
  moetesakssekvensnummer?: Array<string>;
  /**
   * Filter by journalposttype
   */
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
  /**
   * Filter by the entity type.
   */
  entity?: Array<'Journalpost' | 'Moetemappe' | 'Moetesak' | 'Saksmappe'>;
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
  /**
   * Match documents with (or without) fulltext.
   */
  fulltext?: boolean;
}
