// Auto-generated from our API specification
// https://github.com/felleslosninger/einnsyn-api-spec

import type { PaginatedList } from '../../common/responses/PaginatedList';
import type { Base, BaseRequest } from '../base/Base';
import type { Bruker } from '../bruker/Bruker';
import type { Moetemappe, MoetemappeRequest } from '../moetemappe/Moetemappe';
import type { Saksmappe, SaksmappeRequest } from '../saksmappe/Saksmappe';

/**
 * Represents a case file (Saksmappe or Moetemappe) that a user has saved for quick access.
 */
export interface LagretSak extends Base {
  readonly entity: 'LagretSak';
  /**
   * The bruker that has saved this sak. This will be set to the authenticated user.
   */
  readonly bruker: Bruker | string;
  /**
   * The saksmappe that has been saved.
   */
  readonly saksmappe?: Saksmappe | string;
  /**
   * The moetemappe that has been saved.
   */
  readonly moetemappe?: Moetemappe | string;
  /**
   * Specifies whether the user wants to receive notifications about this sak.
   */
  readonly subscribe?: boolean;
}

/**
 * Represents a case file (Saksmappe or Moetemappe) that a user has saved for quick access.
 *
 * The writable variant of {@link LagretSak}, used as the request body when creating or updating a LagretSak.
 */
export interface LagretSakRequest extends BaseRequest {
  /**
   * The saksmappe that has been saved.
   */
  saksmappe?: SaksmappeRequest | string;
  /**
   * The moetemappe that has been saved.
   */
  moetemappe?: MoetemappeRequest | string;
  /**
   * Specifies whether the user wants to receive notifications about this sak.
   */
  subscribe?: boolean;
}

/**
 * Type guard that narrows an unknown value to {@link LagretSak}, by checking its `entity` discriminator.
 *
 * @param obj The value to check.
 * @returns `true` if `obj` is a LagretSak.
 */
export function isLagretSak(obj: unknown): obj is LagretSak {
  switch ((obj as { entity: string })?.entity) {
    case 'LagretSak':
      return true;
    default:
      return false;
  }
}

/**
 * Type guard that narrows an unknown value to a paginated list of {@link LagretSak}.
 *
 * @param obj The value to check.
 * @returns `true` if `obj` is a `PaginatedList` where every item is a LagretSak.
 */
export function isPaginatedLagretSakList(
  obj: unknown,
): obj is PaginatedList<LagretSak> {
  return (
    obj !== undefined &&
    Array.isArray((obj as PaginatedList<LagretSak>)?.items) &&
    (obj as PaginatedList<LagretSak>).items.every((i) => isLagretSak(i))
  );
}
