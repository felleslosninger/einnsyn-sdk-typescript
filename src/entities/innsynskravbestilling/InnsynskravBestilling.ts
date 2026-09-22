// Auto-generated from our API specification
// https://github.com/felleslosninger/einnsyn-api-spec

import type { PaginatedList } from '../../common/responses/PaginatedList';
import type { Base, BaseRequest } from '../base/Base';
import type { Bruker } from '../bruker/Bruker';
import type {
  Innsynskrav,
  InnsynskravRequest,
} from '../innsynskrav/Innsynskrav';

/**
 * Represents an order containing one or more access requests (Innsynskrav).
 */
export interface InnsynskravBestilling extends Base {
  readonly entity: 'InnsynskravBestilling';
  /**
   * The email address of the person who placed the order.
   */
  readonly email: string;
  /**
   * The list of individual access requests in this order.
   */
  readonly innsynskrav: Array<Innsynskrav | string>;
  /**
   * Indicates whether the email address has been verified.
   */
  readonly verified?: boolean;
  /**
   * The user who placed the order, if authenticated.
   */
  readonly bruker?: Bruker | string;
  /**
   * The preferred language for communication.
   */
  readonly language?: 'nb' | 'nn' | 'en' | 'se';
}

/**
 * Represents an order containing one or more access requests (Innsynskrav).
 *
 * The writable variant of {@link InnsynskravBestilling}, used as the request body when creating or updating a InnsynskravBestilling.
 */
export interface InnsynskravBestillingRequest extends BaseRequest {
  /**
   * The email address of the person who placed the order.
   */
  email: string;
  /**
   * The list of individual access requests in this order.
   */
  innsynskrav: Array<InnsynskravRequest | string>;
  /**
   * The preferred language for communication.
   */
  language?: 'nb' | 'nn' | 'en' | 'se';
}

/**
 * Type guard that narrows an unknown value to {@link InnsynskravBestilling}, by checking its `entity` discriminator.
 *
 * @param obj The value to check.
 * @returns `true` if `obj` is a InnsynskravBestilling.
 */
export function isInnsynskravBestilling(
  obj: unknown,
): obj is InnsynskravBestilling {
  switch ((obj as { entity: string })?.entity) {
    case 'InnsynskravBestilling':
      return true;
    default:
      return false;
  }
}

/**
 * Type guard that narrows an unknown value to a paginated list of {@link InnsynskravBestilling}.
 *
 * @param obj The value to check.
 * @returns `true` if `obj` is a `PaginatedList` where every item is a InnsynskravBestilling.
 */
export function isPaginatedInnsynskravBestillingList(
  obj: unknown,
): obj is PaginatedList<InnsynskravBestilling> {
  return (
    obj !== undefined &&
    Array.isArray((obj as PaginatedList<InnsynskravBestilling>)?.items) &&
    (obj as PaginatedList<InnsynskravBestilling>).items.every((i) =>
      isInnsynskravBestilling(i),
    )
  );
}
