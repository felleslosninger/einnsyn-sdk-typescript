// Auto-generated from our API specification
// https://github.com/felleslosninger/einnsyn-api-spec

import type { PaginatedList } from '../../common/responses/PaginatedList';
import type { Moetemappe, MoetemappeRequest } from '../moetemappe/Moetemappe';
import type {
  Registrering,
  RegistreringRequest,
} from '../registrering/Registrering';

/**
 * Represents a document related to a meeting, such as an agenda or minutes.
 */
export interface Moetedokument extends Registrering {
  readonly entity: 'Moetedokument';
  /**
   * The type of meeting document (e.g., 'Agenda', 'Minutes').
   */
  readonly moetedokumenttype: string;
  /**
   * The case officer responsible for the document.
   */
  readonly saksbehandler?: string;
  /**
   * The case officer responsible for the document, including sensitive information.
   */
  readonly saksbehandlerSensitiv?: string;
  /**
   * The meeting this document belongs to.
   */
  readonly moetemappe?: Moetemappe | string;
}

/**
 * Represents a document related to a meeting, such as an agenda or minutes.
 *
 * The writable variant of {@link Moetedokument}, used as the request body when creating or updating a Moetedokument.
 */
export interface MoetedokumentRequest extends RegistreringRequest {
  /**
   * The type of meeting document (e.g., 'Agenda', 'Minutes').
   */
  moetedokumenttype: string;
  /**
   * The case officer responsible for the document.
   */
  saksbehandler?: string;
  /**
   * The case officer responsible for the document, including sensitive information.
   */
  saksbehandlerSensitiv?: string;
  /**
   * The meeting this document belongs to.
   */
  moetemappe?: MoetemappeRequest | string;
}

/**
 * Type guard that narrows an unknown value to {@link Moetedokument}, by checking its `entity` discriminator.
 *
 * @param obj The value to check.
 * @returns `true` if `obj` is a Moetedokument.
 */
export function isMoetedokument(obj: unknown): obj is Moetedokument {
  switch ((obj as { entity: string })?.entity) {
    case 'Moetedokument':
      return true;
    default:
      return false;
  }
}

/**
 * Type guard that narrows an unknown value to a paginated list of {@link Moetedokument}.
 *
 * @param obj The value to check.
 * @returns `true` if `obj` is a `PaginatedList` where every item is a Moetedokument.
 */
export function isPaginatedMoetedokumentList(
  obj: unknown,
): obj is PaginatedList<Moetedokument> {
  return (
    obj !== undefined &&
    Array.isArray((obj as PaginatedList<Moetedokument>)?.items) &&
    (obj as PaginatedList<Moetedokument>).items.every((i) => isMoetedokument(i))
  );
}
