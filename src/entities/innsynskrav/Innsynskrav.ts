// Auto-generated from our API specification
// https://github.com/felleslosninger/einnsyn-api-spec

import type { PaginatedList } from '../../common/responses/PaginatedList';
import type { Base, BaseRequest } from '../base/Base';
import type { Enhet, EnhetRequest } from '../enhet/Enhet';
import type {
  InnsynskravBestilling,
  InnsynskravBestillingRequest,
} from '../innsynskravbestilling/InnsynskravBestilling';
import type {
  Journalpost,
  JournalpostRequest,
} from '../journalpost/Journalpost';

/**
 * Represents a request for access to a specific registry entry (Journalpost).
 */
export interface Innsynskrav extends Base {
  readonly entity: 'Innsynskrav';
  /**
   * The order containing this access request.
   */
  readonly innsynskravBestilling?: InnsynskravBestilling | string;
  /**
   * The registry entry being requested.
   */
  readonly journalpost: Journalpost | string;
  /**
   * The public authority responsible for handling the request.
   */
  readonly enhet?: Enhet | string;
  /**
   * The email address of the requester.
   */
  readonly email?: string;
  /**
   * The timestamp when the request was sent to the public authority.
   */
  readonly sent?: string;
}

/**
 * Represents a request for access to a specific registry entry (Journalpost).
 *
 * The writable variant of {@link Innsynskrav}, used as the request body when creating or updating a Innsynskrav.
 */
export interface InnsynskravRequest extends BaseRequest {
  /**
   * The order containing this access request.
   */
  innsynskravBestilling?: InnsynskravBestillingRequest | string;
  /**
   * The registry entry being requested.
   */
  journalpost: JournalpostRequest | string;
  /**
   * The public authority responsible for handling the request.
   */
  enhet?: EnhetRequest | string;
  /**
   * The timestamp when the request was sent to the public authority.
   */
  sent?: string;
}

/**
 * Type guard that narrows an unknown value to {@link Innsynskrav}, by checking its `entity` discriminator.
 *
 * @param obj The value to check.
 * @returns `true` if `obj` is a Innsynskrav.
 */
export function isInnsynskrav(obj: unknown): obj is Innsynskrav {
  switch ((obj as { entity: string })?.entity) {
    case 'Innsynskrav':
      return true;
    default:
      return false;
  }
}

/**
 * Type guard that narrows an unknown value to a paginated list of {@link Innsynskrav}.
 *
 * @param obj The value to check.
 * @returns `true` if `obj` is a `PaginatedList` where every item is a Innsynskrav.
 */
export function isPaginatedInnsynskravList(
  obj: unknown,
): obj is PaginatedList<Innsynskrav> {
  return (
    obj !== undefined &&
    Array.isArray((obj as PaginatedList<Innsynskrav>)?.items) &&
    (obj as PaginatedList<Innsynskrav>).items.every((i) => isInnsynskrav(i))
  );
}
