// Auto-generated from our API specification
// https://github.com/felleslosninger/einnsyn-api-spec

import type { PaginatedList } from '../../common/responses/PaginatedList';
import type { ArkivBase, ArkivBaseRequest } from '../arkivbase/ArkivBase';
import type {
  Dokumentbeskrivelse,
  DokumentbeskrivelseRequest,
} from '../dokumentbeskrivelse/Dokumentbeskrivelse';
import type { Enhet, EnhetRequest } from '../enhet/Enhet';
import type {
  Korrespondansepart,
  KorrespondansepartRequest,
} from '../korrespondansepart/Korrespondansepart';
import type {
  Matrikkelnummer,
  MatrikkelnummerRequest,
} from '../matrikkelnummer/Matrikkelnummer';

/**
 * An abstract base model for registry entries, such as journal entries (Journalpost) and meeting-related entries (Moetesak, Moetedokument).
 */
export interface Registrering extends ArkivBase {
  /**
   * A URL-friendly unique slug for the resource.
   */
  readonly slug?: string;
  /**
   * The title of the resource, with sensitive information redacted.
   */
  readonly offentligTittel: string;
  /**
   * The title of the resource, with sensitive information included.
   */
  readonly offentligTittelSensitiv: string;
  readonly beskrivelse?: string;
  /**
   * The date the resource was published. This field is updated automatically, but can be set manually by admins.
   */
  readonly publisertDato?: string;
  /**
   * The date the resource was last updated. This field is updated automatically, but can be set manually by admins.
   */
  readonly oppdatertDato?: string;
  readonly korrespondansepart?: Array<Korrespondansepart | string>;
  readonly dokumentbeskrivelse?: Array<Dokumentbeskrivelse | string>;
  /**
   * Property identifiers (matrikkelnummer) associated with this Registrering.
   */
  readonly matrikkelnummer?: Array<Matrikkelnummer | string>;
  /**
   * The administrative unit that has been handed the responsibility for this resource.
   */
  readonly avhendetTil?: Enhet | string;
}

/**
 * An abstract base model for registry entries, such as journal entries (Journalpost) and meeting-related entries (Moetesak, Moetedokument).
 *
 * The writable variant of {@link Registrering}, used as the request body when creating or updating a Registrering.
 */
export interface RegistreringRequest extends ArkivBaseRequest {
  /**
   * A URL-friendly unique slug for the resource.
   */
  slug?: string;
  /**
   * The title of the resource, with sensitive information redacted.
   */
  offentligTittel: string;
  /**
   * The title of the resource, with sensitive information included.
   */
  offentligTittelSensitiv: string;
  beskrivelse?: string;
  /**
   * The date the resource was published. This field is updated automatically, but can be set manually by admins.
   */
  publisertDato?: string;
  /**
   * The date the resource was last updated. This field is updated automatically, but can be set manually by admins.
   */
  oppdatertDato?: string;
  korrespondansepart?: Array<KorrespondansepartRequest | string>;
  dokumentbeskrivelse?: Array<DokumentbeskrivelseRequest | string>;
  /**
   * Property identifiers (matrikkelnummer) associated with this Registrering.
   */
  matrikkelnummer?: Array<MatrikkelnummerRequest | string>;
  /**
   * The administrative unit that has been handed the responsibility for this resource.
   */
  avhendetTil?: EnhetRequest | string;
}

/**
 * Type guard that narrows an unknown value to {@link Registrering}, by checking its `entity` discriminator.
 *
 * @param obj The value to check.
 * @returns `true` if `obj` is a Registrering.
 */
export function isRegistrering(obj: unknown): obj is Registrering {
  switch ((obj as { entity: string })?.entity) {
    case 'Journalpost':
    case 'Moetesak':
    case 'Moetedokument':
      return true;
    default:
      return false;
  }
}

/**
 * Type guard that narrows an unknown value to a paginated list of {@link Registrering}.
 *
 * @param obj The value to check.
 * @returns `true` if `obj` is a `PaginatedList` where every item is a Registrering.
 */
export function isPaginatedRegistreringList(
  obj: unknown,
): obj is PaginatedList<Registrering> {
  return (
    obj !== undefined &&
    Array.isArray((obj as PaginatedList<Registrering>)?.items) &&
    (obj as PaginatedList<Registrering>).items.every((i) => isRegistrering(i))
  );
}
