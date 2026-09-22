// Auto-generated from our API specification
// https://github.com/felleslosninger/einnsyn-api-spec

import type { PaginatedList } from '../../common/responses/PaginatedList';
import type { Base, BaseRequest } from '../base/Base';
import type { Enhet, EnhetRequest } from '../enhet/Enhet';

/**
 * Properties shared by all Noark objects
 */
export interface ArkivBase extends Base {
  /**
   * An identifier for the resource, given by the user's system.
   *
   * For most entities the systemId is unique, and can be used in place of the eInnsynId when looking up a single object. It is *not* unique for Arkiv, Arkivdel and Klasse, and can not be used to look those up.
   */
  readonly systemId?: string;
  /**
   * The administrative unit that is responsible for the resource. This
   * is by default derived from the credentials used to authenticate the
   * request on creation, or it can manually be set to an Enhet owned by
   * that derived Enhet.
   */
  readonly journalenhet?: Enhet | string;
}

/**
 * Properties shared by all Noark objects
 *
 * The writable variant of {@link ArkivBase}, used as the request body when creating or updating a ArkivBase.
 */
export interface ArkivBaseRequest extends BaseRequest {
  /**
   * An identifier for the resource, given by the user's system.
   *
   * For most entities the systemId is unique, and can be used in place of the eInnsynId when looking up a single object. It is *not* unique for Arkiv, Arkivdel and Klasse, and can not be used to look those up.
   */
  systemId?: string;
  /**
   * The administrative unit that is responsible for the resource. This
   * is by default derived from the credentials used to authenticate the
   * request on creation, or it can manually be set to an Enhet owned by
   * that derived Enhet.
   */
  journalenhet?: EnhetRequest | string;
}

/**
 * Type guard that narrows an unknown value to {@link ArkivBase}, by checking its `entity` discriminator.
 *
 * @param obj The value to check.
 * @returns `true` if `obj` is a ArkivBase.
 */
export function isArkivBase(obj: unknown): obj is ArkivBase {
  switch ((obj as { entity: string })?.entity) {
    case 'Arkiv':
    case 'Arkivdel':
    case 'Klasse':
    case 'Klassifikasjonssystem':
    case 'Moetemappe':
    case 'Saksmappe':
    case 'Journalpost':
    case 'Moetesak':
    case 'Moetedokument':
    case 'Korrespondansepart':
    case 'Skjerming':
    case 'Utredning':
    case 'Moetesaksbeskrivelse':
    case 'Dokumentbeskrivelse':
    case 'Dokumentobjekt':
    case 'Vedtak':
    case 'Votering':
    case 'Moetedeltaker':
    case 'Identifikator':
    case 'Behandlingsprotokoll':
    case 'Matrikkelnummer':
      return true;
    default:
      return false;
  }
}

/**
 * Type guard that narrows an unknown value to a paginated list of {@link ArkivBase}.
 *
 * @param obj The value to check.
 * @returns `true` if `obj` is a `PaginatedList` where every item is a ArkivBase.
 */
export function isPaginatedArkivBaseList(
  obj: unknown,
): obj is PaginatedList<ArkivBase> {
  return (
    obj !== undefined &&
    Array.isArray((obj as PaginatedList<ArkivBase>)?.items) &&
    (obj as PaginatedList<ArkivBase>).items.every((i) => isArkivBase(i))
  );
}
