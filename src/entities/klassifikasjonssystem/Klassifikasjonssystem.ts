// Auto-generated from our API specification
// https://github.com/felleslosninger/einnsyn-api-spec

import type { PaginatedList } from '../../common/responses/PaginatedList';
import type { ArkivBase, ArkivBaseRequest } from '../arkivbase/ArkivBase';
import type { Arkivdel } from '../arkivdel/Arkivdel';

/**
 * Represents a classification system used to organize and retrieve cases and documents.
 */
export interface Klassifikasjonssystem extends ArkivBase {
  readonly entity: 'Klassifikasjonssystem';
  /**
   * The title of the classification system.
   */
  readonly tittel: string;
  /**
   * The parent arkivdel.
   */
  readonly arkivdel: Arkivdel | string;
}

/**
 * Represents a classification system used to organize and retrieve cases and documents.
 *
 * The writable variant of {@link Klassifikasjonssystem}, used as the request body when creating or updating a Klassifikasjonssystem.
 */
export interface KlassifikasjonssystemRequest extends ArkivBaseRequest {
  /**
   * The title of the classification system.
   */
  tittel: string;
}

/**
 * Type guard that narrows an unknown value to {@link Klassifikasjonssystem}, by checking its `entity` discriminator.
 *
 * @param obj The value to check.
 * @returns `true` if `obj` is a Klassifikasjonssystem.
 */
export function isKlassifikasjonssystem(
  obj: unknown,
): obj is Klassifikasjonssystem {
  switch ((obj as { entity: string })?.entity) {
    case 'Klassifikasjonssystem':
      return true;
    default:
      return false;
  }
}

/**
 * Type guard that narrows an unknown value to a paginated list of {@link Klassifikasjonssystem}.
 *
 * @param obj The value to check.
 * @returns `true` if `obj` is a `PaginatedList` where every item is a Klassifikasjonssystem.
 */
export function isPaginatedKlassifikasjonssystemList(
  obj: unknown,
): obj is PaginatedList<Klassifikasjonssystem> {
  return (
    obj !== undefined &&
    Array.isArray((obj as PaginatedList<Klassifikasjonssystem>)?.items) &&
    (obj as PaginatedList<Klassifikasjonssystem>).items.every((i) =>
      isKlassifikasjonssystem(i),
    )
  );
}
