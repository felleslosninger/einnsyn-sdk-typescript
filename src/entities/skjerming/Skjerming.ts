// Auto-generated from our API specification
// https://github.com/felleslosninger/einnsyn-api-spec

import type { PaginatedList } from '../../common/responses/PaginatedList';
import type { ArkivBase, ArkivBaseRequest } from '../arkivbase/ArkivBase';

/**
 * Represents access control information for a resource, specifying restrictions and the legal basis for them.
 */
export interface Skjerming extends ArkivBase {
  readonly entity: 'Skjerming';
  /**
   * The code for the access restriction.
   */
  readonly tilgangsrestriksjon: string;
  /**
   * The legal basis for the access restriction (a reference to a law or regulation).
   */
  readonly skjermingshjemmel?: string;
}

/**
 * Represents access control information for a resource, specifying restrictions and the legal basis for them.
 *
 * The writable variant of {@link Skjerming}, used as the request body when creating or updating a Skjerming.
 */
export interface SkjermingRequest extends ArkivBaseRequest {
  /**
   * The code for the access restriction.
   */
  tilgangsrestriksjon: string;
  /**
   * The legal basis for the access restriction (a reference to a law or regulation).
   */
  skjermingshjemmel?: string;
}

/**
 * Type guard that narrows an unknown value to {@link Skjerming}, by checking its `entity` discriminator.
 *
 * @param obj The value to check.
 * @returns `true` if `obj` is a Skjerming.
 */
export function isSkjerming(obj: unknown): obj is Skjerming {
  switch ((obj as { entity: string })?.entity) {
    case 'Skjerming':
      return true;
    default:
      return false;
  }
}

/**
 * Type guard that narrows an unknown value to a paginated list of {@link Skjerming}.
 *
 * @param obj The value to check.
 * @returns `true` if `obj` is a `PaginatedList` where every item is a Skjerming.
 */
export function isPaginatedSkjermingList(
  obj: unknown,
): obj is PaginatedList<Skjerming> {
  return (
    obj !== undefined &&
    Array.isArray((obj as PaginatedList<Skjerming>)?.items) &&
    (obj as PaginatedList<Skjerming>).items.every((i) => isSkjerming(i))
  );
}
