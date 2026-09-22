// Auto-generated from our API specification
// https://github.com/felleslosninger/einnsyn-api-spec

import type { PaginatedList } from '../../common/responses/PaginatedList';
import type { Enhet, EnhetRequest } from '../enhet/Enhet';
import type {
  Registrering,
  RegistreringRequest,
} from '../registrering/Registrering';
import type { Saksmappe, SaksmappeRequest } from '../saksmappe/Saksmappe';
import type { Skjerming, SkjermingRequest } from '../skjerming/Skjerming';

/**
 * Represents a registry entry for a document, corresponding to the Journalpost in the Noark 5 standard. It is a record of an incoming, outgoing, or internal document.
 */
export interface Journalpost extends Registrering {
  readonly entity: 'Journalpost';
  /**
   * The year the registry entry was created.
   */
  readonly journalaar: number;
  /**
   * The sequence number of the registry entry within the journal year.
   */
  readonly journalsekvensnummer: number;
  /**
   * The post number within the journal.
   */
  readonly journalpostnummer: number;
  /**
   * The type of registry entry.
   */
  readonly journalposttype:
    | 'inngaaende_dokument'
    | 'utgaaende_dokument'
    | 'organinternt_dokument_uten_oppfoelging'
    | 'organinternt_dokument_for_oppfoelging'
    | 'saksframlegg'
    | 'sakskart'
    | 'moeteprotokoll'
    | 'moetebok'
    | 'ukjent';
  /**
   * The date the registry entry was recorded.
   */
  readonly journaldato: string;
  /**
   * The date of the document itself.
   */
  readonly dokumentetsDato?: string;
  /**
   * Access control information for the registry entry.
   */
  readonly skjerming?: Skjerming | string;
  /**
   * Legacy field for the journal post type.
   */
  readonly legacyJournalposttype?: string;
  /**
   * Legacy field for references to related cases.
   */
  readonly legacyFoelgsakenReferanse?: Array<string>;
  /**
   * The identifier of the administrative unit responsible for the registry entry.
   */
  readonly administrativEnhet?: string;
  /**
   * The full administrative unit object responsible for the registry entry (expandable reference).
   */
  readonly administrativEnhetObjekt?: Enhet | string;
  /**
   * The case this record belongs to.
   */
  readonly saksmappe?: Saksmappe | string;
}

/**
 * Represents a registry entry for a document, corresponding to the Journalpost in the Noark 5 standard. It is a record of an incoming, outgoing, or internal document.
 *
 * The writable variant of {@link Journalpost}, used as the request body when creating or updating a Journalpost.
 */
export interface JournalpostRequest extends RegistreringRequest {
  /**
   * The year the registry entry was created.
   */
  journalaar: number;
  /**
   * The sequence number of the registry entry within the journal year.
   */
  journalsekvensnummer: number;
  /**
   * The post number within the journal.
   */
  journalpostnummer: number;
  /**
   * The type of registry entry.
   */
  journalposttype:
    | 'inngaaende_dokument'
    | 'utgaaende_dokument'
    | 'organinternt_dokument_uten_oppfoelging'
    | 'organinternt_dokument_for_oppfoelging'
    | 'saksframlegg'
    | 'sakskart'
    | 'moeteprotokoll'
    | 'moetebok'
    | 'ukjent';
  /**
   * The date the registry entry was recorded.
   */
  journaldato: string;
  /**
   * The date of the document itself.
   */
  dokumentetsDato?: string;
  /**
   * Access control information for the registry entry.
   */
  skjerming?: SkjermingRequest | string;
  /**
   * Legacy field for the journal post type.
   */
  legacyJournalposttype?: string;
  /**
   * Legacy field for references to related cases.
   */
  legacyFoelgsakenReferanse?: Array<string>;
  /**
   * The identifier of the administrative unit responsible for the registry entry.
   */
  administrativEnhet?: string;
  /**
   * The full administrative unit object responsible for the registry entry (expandable reference).
   */
  administrativEnhetObjekt?: EnhetRequest | string;
  /**
   * The case this record belongs to.
   */
  saksmappe?: SaksmappeRequest | string;
}

/**
 * Type guard that narrows an unknown value to {@link Journalpost}, by checking its `entity` discriminator.
 *
 * @param obj The value to check.
 * @returns `true` if `obj` is a Journalpost.
 */
export function isJournalpost(obj: unknown): obj is Journalpost {
  switch ((obj as { entity: string })?.entity) {
    case 'Journalpost':
      return true;
    default:
      return false;
  }
}

/**
 * Type guard that narrows an unknown value to a paginated list of {@link Journalpost}.
 *
 * @param obj The value to check.
 * @returns `true` if `obj` is a `PaginatedList` where every item is a Journalpost.
 */
export function isPaginatedJournalpostList(
  obj: unknown,
): obj is PaginatedList<Journalpost> {
  return (
    obj !== undefined &&
    Array.isArray((obj as PaginatedList<Journalpost>)?.items) &&
    (obj as PaginatedList<Journalpost>).items.every((i) => isJournalpost(i))
  );
}
