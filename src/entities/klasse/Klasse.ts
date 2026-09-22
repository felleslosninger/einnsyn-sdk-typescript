// Auto-generated from our API specification
// https://github.com/felleslosninger/einnsyn-api-spec

import type { PaginatedList } from '../../common/responses/PaginatedList';
import type { ArkivBase, ArkivBaseRequest } from '../arkivbase/ArkivBase';
import type { Arkivdel, ArkivdelRequest } from '../arkivdel/Arkivdel';
import type {
  Klassifikasjonssystem,
  KlassifikasjonssystemRequest,
} from '../klassifikasjonssystem/Klassifikasjonssystem';

/**
 * Klasse
 */
export interface Klasse extends ArkivBase {
  readonly entity: 'Klasse';
  /**
   * The title of the class.
   */
  readonly tittel: string;
  /**
   * An optional parent klassifikasjonssystem
   */
  readonly klassifikasjonssystem?: Klassifikasjonssystem | string;
  /**
   * An optional parent klasse
   */
  readonly klasse?: Klasse | string;
  /**
   * An optional parent arkivdel (non-standard field, due to legacy data)
   */
  readonly arkivdel?: Arkivdel | string;
}

/**
 * Klasse
 *
 * The writable variant of {@link Klasse}, used as the request body when creating or updating a Klasse.
 */
export interface KlasseRequest extends ArkivBaseRequest {
  /**
   * The title of the class.
   */
  tittel: string;
  /**
   * An optional parent klassifikasjonssystem
   */
  klassifikasjonssystem?: KlassifikasjonssystemRequest | string;
  /**
   * An optional parent klasse
   */
  klasse?: KlasseRequest | string;
  /**
   * An optional parent arkivdel (non-standard field, due to legacy data)
   */
  arkivdel?: ArkivdelRequest | string;
}

/**
 * Type guard that narrows an unknown value to {@link Klasse}, by checking its `entity` discriminator.
 *
 * @param obj The value to check.
 * @returns `true` if `obj` is a Klasse.
 */
export function isKlasse(obj: unknown): obj is Klasse {
  switch ((obj as { entity: string })?.entity) {
    case 'Klasse':
      return true;
    default:
      return false;
  }
}

/**
 * Type guard that narrows an unknown value to a paginated list of {@link Klasse}.
 *
 * @param obj The value to check.
 * @returns `true` if `obj` is a `PaginatedList` where every item is a Klasse.
 */
export function isPaginatedKlasseList(
  obj: unknown,
): obj is PaginatedList<Klasse> {
  return (
    obj !== undefined &&
    Array.isArray((obj as PaginatedList<Klasse>)?.items) &&
    (obj as PaginatedList<Klasse>).items.every((i) => isKlasse(i))
  );
}
