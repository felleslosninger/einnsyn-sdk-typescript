// Auto-generated from our API specification
// https://github.com/felleslosninger/einnsyn-api-spec

import type { PaginatedList } from '../../common/responses/PaginatedList';
import type { ArkivBase, ArkivBaseRequest } from '../arkivbase/ArkivBase';

/**
 * Represents a top-level archive in the Noark structure.
 */
export interface Arkiv extends ArkivBase {
  readonly entity: 'Arkiv';
  /**
   * The title of the archive.
   */
  readonly tittel: string;
  /**
   * The parent archive to which this archive belongs.
   */
  readonly arkiv?: Arkiv | string;
}

/**
 * Represents a top-level archive in the Noark structure.
 *
 * The writable variant of {@link Arkiv}, used as the request body when creating or updating a Arkiv.
 */
export interface ArkivRequest extends ArkivBaseRequest {
  /**
   * The title of the archive.
   */
  tittel: string;
  /**
   * The parent archive to which this archive belongs.
   */
  arkiv?: ArkivRequest | string;
}

/**
 * Type guard that narrows an unknown value to {@link Arkiv}, by checking its `entity` discriminator.
 *
 * @param obj The value to check.
 * @returns `true` if `obj` is a Arkiv.
 */
export function isArkiv(obj: unknown): obj is Arkiv {
  switch ((obj as { entity: string })?.entity) {
    case 'Arkiv':
      return true;
    default:
      return false;
  }
}

/**
 * Type guard that narrows an unknown value to a paginated list of {@link Arkiv}.
 *
 * @param obj The value to check.
 * @returns `true` if `obj` is a `PaginatedList` where every item is a Arkiv.
 */
export function isPaginatedArkivList(
  obj: unknown,
): obj is PaginatedList<Arkiv> {
  return (
    obj !== undefined &&
    Array.isArray((obj as PaginatedList<Arkiv>)?.items) &&
    (obj as PaginatedList<Arkiv>).items.every((i) => isArkiv(i))
  );
}
