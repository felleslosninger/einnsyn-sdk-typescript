// Auto-generated from our API specification
// https://github.com/felleslosninger/einnsyn-api-spec

import type { PaginatedList } from '../../common/responses/PaginatedList';
import type { Enhet } from '../enhet/Enhet';
import type { JournalpostRequest } from '../journalpost/Journalpost';
import type { Mappe, MappeRequest } from '../mappe/Mappe';

/**
 * Represents a case file, which is a folder for collecting all documents related to a specific case.
 */
export interface Saksmappe extends Mappe {
  readonly entity: 'Saksmappe';
  readonly saksaar: number;
  readonly sakssekvensnummer: number;
  readonly saksnummer: string;
  readonly saksdato?: string;
  /**
   * A code for the administrative Enhet associated with this Saksmappe.
   */
  readonly administrativEnhet?: string;
  /**
   * The administrative Enhet associated with this Saksmappe. This is derived from the code given in `administrativEnhet`.
   * If no `administrativEnhet` is given, or the code is not found, the `journalenhet` of the authenticated user will be used.
   */
  readonly administrativEnhetObjekt: Enhet | string;
}

/**
 * Represents a case file, which is a folder for collecting all documents related to a specific case.
 *
 * The writable variant of {@link Saksmappe}, used as the request body when creating or updating a Saksmappe.
 */
export interface SaksmappeRequest extends MappeRequest {
  saksaar: number;
  sakssekvensnummer: number;
  saksdato?: string;
  /**
   * A list of journalposts associated with this Saksmappe. This is write-only, reads should use the separate `journalpost` endpoint.
   */
  journalpost?: Array<JournalpostRequest | string>;
  /**
   * A code for the administrative Enhet associated with this Saksmappe.
   */
  administrativEnhet?: string;
}

/**
 * Type guard that narrows an unknown value to {@link Saksmappe}, by checking its `entity` discriminator.
 *
 * @param obj The value to check.
 * @returns `true` if `obj` is a Saksmappe.
 */
export function isSaksmappe(obj: unknown): obj is Saksmappe {
  switch ((obj as { entity: string })?.entity) {
    case 'Saksmappe':
      return true;
    default:
      return false;
  }
}

/**
 * Type guard that narrows an unknown value to a paginated list of {@link Saksmappe}.
 *
 * @param obj The value to check.
 * @returns `true` if `obj` is a `PaginatedList` where every item is a Saksmappe.
 */
export function isPaginatedSaksmappeList(
  obj: unknown,
): obj is PaginatedList<Saksmappe> {
  return (
    obj !== undefined &&
    Array.isArray((obj as PaginatedList<Saksmappe>)?.items) &&
    (obj as PaginatedList<Saksmappe>).items.every((i) => isSaksmappe(i))
  );
}
