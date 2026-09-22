// Auto-generated from our API specification
// https://github.com/felleslosninger/einnsyn-api-spec

import type { PaginatedList } from '../../common/responses/PaginatedList';
import type { Arkiv } from '../arkiv/Arkiv';
import type { ArkivBase, ArkivBaseRequest } from '../arkivbase/ArkivBase';

/**
 * Represents a subdivision of an archive (Arkiv). In the Noark 5 standard, an archive can be divided into one or more archive parts.
 */
export interface Arkivdel extends ArkivBase {
  readonly entity: 'Arkivdel';
  /**
   * The title of the Arkivdel.
   */
  readonly tittel: string;
  /**
   * The parent Arkiv to which this Arkivdel belongs.
   */
  readonly arkiv: Arkiv | string;
}

/**
 * Represents a subdivision of an archive (Arkiv). In the Noark 5 standard, an archive can be divided into one or more archive parts.
 *
 * The writable variant of {@link Arkivdel}, used as the request body when creating or updating a Arkivdel.
 */
export interface ArkivdelRequest extends ArkivBaseRequest {
  /**
   * The title of the Arkivdel.
   */
  tittel: string;
}

/**
 * Type guard that narrows an unknown value to {@link Arkivdel}, by checking its `entity` discriminator.
 *
 * @param obj The value to check.
 * @returns `true` if `obj` is a Arkivdel.
 */
export function isArkivdel(obj: unknown): obj is Arkivdel {
  switch ((obj as { entity: string })?.entity) {
    case 'Arkivdel':
      return true;
    default:
      return false;
  }
}

/**
 * Type guard that narrows an unknown value to a paginated list of {@link Arkivdel}.
 *
 * @param obj The value to check.
 * @returns `true` if `obj` is a `PaginatedList` where every item is a Arkivdel.
 */
export function isPaginatedArkivdelList(
  obj: unknown,
): obj is PaginatedList<Arkivdel> {
  return (
    obj !== undefined &&
    Array.isArray((obj as PaginatedList<Arkivdel>)?.items) &&
    (obj as PaginatedList<Arkivdel>).items.every((i) => isArkivdel(i))
  );
}
