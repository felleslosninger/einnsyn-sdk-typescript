// Auto-generated from our API specification
// https://github.com/felleslosninger/einnsyn-api-spec

import type { PaginatedList } from '../../common/responses/PaginatedList';
import type { ArkivBase, ArkivBaseRequest } from '../arkivbase/ArkivBase';
import type { Arkivdel } from '../arkivdel/Arkivdel';
import type { Klasse, KlasseRequest } from '../klasse/Klasse';
import type {
  Matrikkelnummer,
  MatrikkelnummerRequest,
} from '../matrikkelnummer/Matrikkelnummer';
import type { Moetemappe } from '../moetemappe/Moetemappe';
import type { Saksmappe } from '../saksmappe/Saksmappe';

/**
 * An abstract base model for case files (Saksmappe) and meeting records (Moetemappe). It contains common properties for these folder-like structures.
 */
export interface Mappe extends ArkivBase {
  /**
   * A URL-friendly unique slug for the resource.
   */
  readonly slug?: string;
  /**
   * The title of the Mappe, with sensitive information redacted.
   */
  readonly offentligTittel: string;
  /**
   * The title of the Mappe, with sensitive information included.
   */
  readonly offentligTittelSensitiv: string;
  readonly beskrivelse?: string;
  readonly noekkelord?: string;
  /**
   * The date the resource was published. This field is updated automatically, but can be set manually by admins.
   */
  readonly publisertDato?: string;
  /**
   * The date the resource was last updated. This field is updated automatically, but can be set manually by admins.
   */
  readonly oppdatertDato?: string;
  /**
   * An optional Klasse for this Mappe.
   */
  readonly klasse?: Klasse | string;
  /**
   * If this Mappe is the child of a Saksmappe, this field will contain the parent Saksmappe.
   */
  readonly saksmappe?: Saksmappe | string;
  /**
   * If this Mappe is the child of a Moetemappe, this field will contain the parent Moetemappe.
   */
  readonly moetemappe?: Moetemappe | string;
  /**
   * If this Mappe is not a child of a Saksmappe or Moetemappe, this field will contain the parent Arkivdel.
   */
  readonly arkivdel?: Arkivdel | string;
  /**
   * Property identifiers (matrikkelnummer) associated with this Mappe.
   */
  readonly matrikkelnummer?: Array<Matrikkelnummer | string>;
}

/**
 * An abstract base model for case files (Saksmappe) and meeting records (Moetemappe). It contains common properties for these folder-like structures.
 *
 * The writable variant of {@link Mappe}, used as the request body when creating or updating a Mappe.
 */
export interface MappeRequest extends ArkivBaseRequest {
  /**
   * A URL-friendly unique slug for the resource.
   */
  slug?: string;
  /**
   * The title of the Mappe, with sensitive information redacted.
   */
  offentligTittel: string;
  /**
   * The title of the Mappe, with sensitive information included.
   */
  offentligTittelSensitiv: string;
  beskrivelse?: string;
  noekkelord?: string;
  /**
   * The date the resource was published. This field is updated automatically, but can be set manually by admins.
   */
  publisertDato?: string;
  /**
   * The date the resource was last updated. This field is updated automatically, but can be set manually by admins.
   */
  oppdatertDato?: string;
  /**
   * An optional Klasse for this Mappe.
   */
  klasse?: KlasseRequest | string;
  /**
   * Property identifiers (matrikkelnummer) associated with this Mappe.
   */
  matrikkelnummer?: Array<MatrikkelnummerRequest | string>;
}

/**
 * Type guard that narrows an unknown value to {@link Mappe}, by checking its `entity` discriminator.
 *
 * @param obj The value to check.
 * @returns `true` if `obj` is a Mappe.
 */
export function isMappe(obj: unknown): obj is Mappe {
  switch ((obj as { entity: string })?.entity) {
    case 'Moetemappe':
    case 'Saksmappe':
      return true;
    default:
      return false;
  }
}

/**
 * Type guard that narrows an unknown value to a paginated list of {@link Mappe}.
 *
 * @param obj The value to check.
 * @returns `true` if `obj` is a `PaginatedList` where every item is a Mappe.
 */
export function isPaginatedMappeList(
  obj: unknown,
): obj is PaginatedList<Mappe> {
  return (
    obj !== undefined &&
    Array.isArray((obj as PaginatedList<Mappe>)?.items) &&
    (obj as PaginatedList<Mappe>).items.every((i) => isMappe(i))
  );
}
