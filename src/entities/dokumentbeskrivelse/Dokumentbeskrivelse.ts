// Auto-generated from our API specification
// https://github.com/felleslosninger/einnsyn-api-spec

import type { PaginatedList } from '../../common/responses/PaginatedList';
import type { ArkivBase, ArkivBaseRequest } from '../arkivbase/ArkivBase';
import type {
  Dokumentobjekt,
  DokumentobjektRequest,
} from '../dokumentobjekt/Dokumentobjekt';

/**
 * Represents the metadata for a document. It is connected to a registry entry and describes a single document.
 */
export interface Dokumentbeskrivelse extends ArkivBase {
  readonly entity: 'Dokumentbeskrivelse';
  /**
   * The title of the document, with sensitive information redacted.
   */
  readonly tittel: string;
  /**
   * The title of the document, with sensitive information included.
   */
  readonly tittelSensitiv: string;
  /**
   * The document number within the parent registry entry.
   */
  readonly dokumentnummer: number;
  /**
   * The type of document (e.g., 'letter', 'invoice').
   */
  readonly dokumenttype?: string;
  /**
   * Describes the document's role in relation to the registry entry (e.g., 'main document', 'attachment').
   */
  readonly tilknyttetRegistreringSom: string;
  /**
   * The associated electronic document(s).
   */
  readonly dokumentobjekt?: Array<Dokumentobjekt | string>;
}

/**
 * Represents the metadata for a document. It is connected to a registry entry and describes a single document.
 *
 * The writable variant of {@link Dokumentbeskrivelse}, used as the request body when creating or updating a Dokumentbeskrivelse.
 */
export interface DokumentbeskrivelseRequest extends ArkivBaseRequest {
  /**
   * The title of the document, with sensitive information redacted.
   */
  tittel: string;
  /**
   * The title of the document, with sensitive information included.
   */
  tittelSensitiv: string;
  /**
   * The document number within the parent registry entry.
   */
  dokumentnummer: number;
  /**
   * The type of document (e.g., 'letter', 'invoice').
   */
  dokumenttype?: string;
  /**
   * Describes the document's role in relation to the registry entry (e.g., 'main document', 'attachment').
   */
  tilknyttetRegistreringSom: string;
  /**
   * The associated electronic document(s).
   */
  dokumentobjekt?: Array<DokumentobjektRequest | string>;
}

/**
 * Type guard that narrows an unknown value to {@link Dokumentbeskrivelse}, by checking its `entity` discriminator.
 *
 * @param obj The value to check.
 * @returns `true` if `obj` is a Dokumentbeskrivelse.
 */
export function isDokumentbeskrivelse(
  obj: unknown,
): obj is Dokumentbeskrivelse {
  switch ((obj as { entity: string })?.entity) {
    case 'Dokumentbeskrivelse':
      return true;
    default:
      return false;
  }
}

/**
 * Type guard that narrows an unknown value to a paginated list of {@link Dokumentbeskrivelse}.
 *
 * @param obj The value to check.
 * @returns `true` if `obj` is a `PaginatedList` where every item is a Dokumentbeskrivelse.
 */
export function isPaginatedDokumentbeskrivelseList(
  obj: unknown,
): obj is PaginatedList<Dokumentbeskrivelse> {
  return (
    obj !== undefined &&
    Array.isArray((obj as PaginatedList<Dokumentbeskrivelse>)?.items) &&
    (obj as PaginatedList<Dokumentbeskrivelse>).items.every((i) =>
      isDokumentbeskrivelse(i),
    )
  );
}
