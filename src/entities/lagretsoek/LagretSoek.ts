// Auto-generated from our API specification
// https://github.com/felleslosninger/einnsyn-api-spec

import type { PaginatedList } from '../../common/responses/PaginatedList';
import type { SavedSearchParameters } from '../../common/search/SavedSearchParameters';
import type { Base, BaseRequest } from '../base/Base';
import type { Bruker, BrukerRequest } from '../bruker/Bruker';

/**
 * Represents a search query saved by a user.
 */
export interface LagretSoek extends Base {
  readonly entity: 'LagretSoek';
  /**
   * The user who saved the search.
   */
  readonly bruker?: Bruker | string;
  /**
   * A user-defined label for the saved search.
   */
  readonly label: string;
  /**
   * Specifies whether the user wants to receive notifications for new results matching this search.
   */
  readonly subscribe?: boolean;
  /**
   * The parameters of the saved search.
   */
  readonly searchParameters?: SavedSearchParameters;
  /**
   * A legacy field for storing the raw query string.
   */
  readonly legacyQuery?: string;
}

/**
 * Represents a search query saved by a user.
 *
 * The writable variant of {@link LagretSoek}, used as the request body when creating or updating a LagretSoek.
 */
export interface LagretSoekRequest extends BaseRequest {
  /**
   * The user who saved the search.
   */
  bruker?: BrukerRequest | string;
  /**
   * A user-defined label for the saved search.
   */
  label: string;
  /**
   * Specifies whether the user wants to receive notifications for new results matching this search.
   */
  subscribe?: boolean;
  /**
   * The parameters of the saved search.
   */
  searchParameters?: SavedSearchParameters;
  /**
   * A legacy field for storing the raw query string.
   */
  legacyQuery?: string;
}

/**
 * Type guard that narrows an unknown value to {@link LagretSoek}, by checking its `entity` discriminator.
 *
 * @param obj The value to check.
 * @returns `true` if `obj` is a LagretSoek.
 */
export function isLagretSoek(obj: unknown): obj is LagretSoek {
  switch ((obj as { entity: string })?.entity) {
    case 'LagretSoek':
      return true;
    default:
      return false;
  }
}

/**
 * Type guard that narrows an unknown value to a paginated list of {@link LagretSoek}.
 *
 * @param obj The value to check.
 * @returns `true` if `obj` is a `PaginatedList` where every item is a LagretSoek.
 */
export function isPaginatedLagretSoekList(
  obj: unknown,
): obj is PaginatedList<LagretSoek> {
  return (
    obj !== undefined &&
    Array.isArray((obj as PaginatedList<LagretSoek>)?.items) &&
    (obj as PaginatedList<LagretSoek>).items.every((i) => isLagretSoek(i))
  );
}
