// Auto-generated from our API specification
// https://github.com/felleslosninger/einnsyn-api-spec

import type { PaginatedList } from '../../common/responses/PaginatedList';
import type { ArkivBase, ArkivBaseRequest } from '../arkivbase/ArkivBase';
import type {
  Dokumentbeskrivelse,
  DokumentbeskrivelseRequest,
} from '../dokumentbeskrivelse/Dokumentbeskrivelse';

/**
 * Represents an electronic document or file. It contains information needed to locate and render the document.
 */
export interface Dokumentobjekt extends ArkivBase {
  readonly entity: 'Dokumentobjekt';
  /**
   * A reference (URL) to the document file. This will be hidden from public view unless it redirects to a HTML page.
   */
  readonly referanseDokumentfil: string;
  /**
   * The file format of the document (e.g., 'PDF/A').
   */
  readonly format?: string;
  /**
   * The checksum of the document file, for integrity verification.
   */
  readonly sjekksum?: string;
  /**
   * The algorithm used to calculate the checksum (e.g., 'SHA-256').
   */
  readonly sjekksumAlgoritme?: string;
  /**
   * The document description this object belongs to.
   */
  readonly dokumentbeskrivelse?: Dokumentbeskrivelse | string;
  /**
   * The URL to access the actual document. This will either be a binary download, or a redirect to a HTML page.
   */
  readonly url: string;
}

/**
 * Represents an electronic document or file. It contains information needed to locate and render the document.
 *
 * The writable variant of {@link Dokumentobjekt}, used as the request body when creating or updating a Dokumentobjekt.
 */
export interface DokumentobjektRequest extends ArkivBaseRequest {
  /**
   * A reference (URL) to the document file. This will be hidden from public view unless it redirects to a HTML page.
   */
  referanseDokumentfil: string;
  /**
   * The file format of the document (e.g., 'PDF/A').
   */
  format?: string;
  /**
   * The checksum of the document file, for integrity verification.
   */
  sjekksum?: string;
  /**
   * The algorithm used to calculate the checksum (e.g., 'SHA-256').
   */
  sjekksumAlgoritme?: string;
  /**
   * The document description this object belongs to.
   */
  dokumentbeskrivelse?: DokumentbeskrivelseRequest | string;
}

/**
 * Type guard that narrows an unknown value to {@link Dokumentobjekt}, by checking its `entity` discriminator.
 *
 * @param obj The value to check.
 * @returns `true` if `obj` is a Dokumentobjekt.
 */
export function isDokumentobjekt(obj: unknown): obj is Dokumentobjekt {
  switch ((obj as { entity: string })?.entity) {
    case 'Dokumentobjekt':
      return true;
    default:
      return false;
  }
}

/**
 * Type guard that narrows an unknown value to a paginated list of {@link Dokumentobjekt}.
 *
 * @param obj The value to check.
 * @returns `true` if `obj` is a `PaginatedList` where every item is a Dokumentobjekt.
 */
export function isPaginatedDokumentobjektList(
  obj: unknown,
): obj is PaginatedList<Dokumentobjekt> {
  return (
    obj !== undefined &&
    Array.isArray((obj as PaginatedList<Dokumentobjekt>)?.items) &&
    (obj as PaginatedList<Dokumentobjekt>).items.every((i) =>
      isDokumentobjekt(i),
    )
  );
}
