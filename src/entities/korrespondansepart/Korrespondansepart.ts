// Auto-generated from our API specification
// https://github.com/felleslosninger/einnsyn-api-spec

import type { PaginatedList } from '../../common/responses/PaginatedList';
import type { ArkivBase, ArkivBaseRequest } from '../arkivbase/ArkivBase';
import type { Journalpost } from '../journalpost/Journalpost';
import type { Moetedokument } from '../moetedokument/Moetedokument';
import type { Moetesak } from '../moetesak/Moetesak';

/**
 * Represents a correspondent, which is a sender or recipient of a document.
 */
export interface Korrespondansepart extends ArkivBase {
  readonly entity: 'Korrespondansepart';
  /**
   * The name of the Korrespondansepart, with sensitive parts redacted.
   */
  readonly korrespondansepartNavn: string;
  /**
   * The name of the Korrespondansepart, with all parts included.
   */
  readonly korrespondansepartNavnSensitiv: string;
  /**
   * The type of correspondent (e.g., 'sender', 'recipient').
   */
  readonly korrespondanseparttype: string;
  /**
   * The case officer associated with this correspondent.
   */
  readonly saksbehandler?: string;
  /**
   * The email address of the correspondent.
   */
  readonly epostadresse?: string;
  /**
   * The postal code of the correspondent.
   */
  readonly postnummer?: string;
  /**
   * Indicates if the correspondent is the data controller.
   */
  readonly erBehandlingsansvarlig?: boolean;
  /**
   * The code for the administrative Enhet associated with this Korrespondansepart.
   */
  readonly administrativEnhet?: string;
  /**
   * The Journalpost this Korrespondansepart is associated with, if any.
   */
  readonly journalpost?: Journalpost | string;
  /**
   * The Moetedokument this Korrespondansepart is associated with, if any.
   */
  readonly moetedokument?: Moetedokument | string;
  /**
   * The Moetesak this Korrespondansepart is associated with, if any.
   */
  readonly moetesak?: Moetesak | string;
}

/**
 * Represents a correspondent, which is a sender or recipient of a document.
 *
 * The writable variant of {@link Korrespondansepart}, used as the request body when creating or updating a Korrespondansepart.
 */
export interface KorrespondansepartRequest extends ArkivBaseRequest {
  /**
   * The name of the Korrespondansepart, with sensitive parts redacted.
   */
  korrespondansepartNavn: string;
  /**
   * The name of the Korrespondansepart, with all parts included.
   */
  korrespondansepartNavnSensitiv: string;
  /**
   * The type of correspondent (e.g., 'sender', 'recipient').
   */
  korrespondanseparttype: string;
  /**
   * The case officer associated with this correspondent.
   */
  saksbehandler?: string;
  /**
   * The email address of the correspondent.
   */
  epostadresse?: string;
  /**
   * The postal code of the correspondent.
   */
  postnummer?: string;
  /**
   * Indicates if the correspondent is the data controller.
   */
  erBehandlingsansvarlig?: boolean;
  /**
   * The code for the administrative Enhet associated with this Korrespondansepart.
   */
  administrativEnhet?: string;
}

/**
 * Type guard that narrows an unknown value to {@link Korrespondansepart}, by checking its `entity` discriminator.
 *
 * @param obj The value to check.
 * @returns `true` if `obj` is a Korrespondansepart.
 */
export function isKorrespondansepart(obj: unknown): obj is Korrespondansepart {
  switch ((obj as { entity: string })?.entity) {
    case 'Korrespondansepart':
      return true;
    default:
      return false;
  }
}

/**
 * Type guard that narrows an unknown value to a paginated list of {@link Korrespondansepart}.
 *
 * @param obj The value to check.
 * @returns `true` if `obj` is a `PaginatedList` where every item is a Korrespondansepart.
 */
export function isPaginatedKorrespondansepartList(
  obj: unknown,
): obj is PaginatedList<Korrespondansepart> {
  return (
    obj !== undefined &&
    Array.isArray((obj as PaginatedList<Korrespondansepart>)?.items) &&
    (obj as PaginatedList<Korrespondansepart>).items.every((i) =>
      isKorrespondansepart(i),
    )
  );
}
