// Auto-generated from our API specification
// https://github.com/felleslosninger/einnsyn-api-spec

import type { PaginatedList } from '../../common/responses/PaginatedList';

export interface Base {
  /**
   * The unique identifier for the resource. This is is assigned by the system when the resource is created.
   */
  readonly id: string;
  /**
   * This field is only present if the resource has been deleted. If present, it will always be `true`.
   */
  readonly deleted: boolean;
  /**
   * An external ID for the resource. This is similar to "systemId", but will be used for legacy IRIs that were used in earlier eInnsyn versions.
   *
   * For most entities the externalId is unique, and can be used in place of the eInnsynId when looking up a single object. It is *not* unique for Arkiv, Arkivdel, Klasse and Korrespondansepart, and can not be used to look those up. For those entities, a value given in the `externalIds` list parameter may also match more than one object.
   */
  readonly externalId?: string;
  /**
   * This object should not be accessible to the public before the given dateTime.
   */
  readonly accessibleAfter?: string;
}

/**
 * The writable variant of {@link Base}, used as the request body when creating or updating a Base.
 */
export interface BaseRequest {
  /**
   * An external ID for the resource. This is similar to "systemId", but will be used for legacy IRIs that were used in earlier eInnsyn versions.
   *
   * For most entities the externalId is unique, and can be used in place of the eInnsynId when looking up a single object. It is *not* unique for Arkiv, Arkivdel, Klasse and Korrespondansepart, and can not be used to look those up. For those entities, a value given in the `externalIds` list parameter may also match more than one object.
   */
  externalId?: string;
  /**
   * This object should not be accessible to the public before the given dateTime.
   */
  accessibleAfter?: string;
}

/**
 * Type guard that narrows an unknown value to {@link Base}, by checking its `entity` discriminator.
 *
 * @param obj The value to check.
 * @returns `true` if `obj` is a Base.
 */
export function isBase(obj: unknown): obj is Base {
  switch ((obj as { entity: string })?.entity) {
    case 'ApiKey':
    case 'Enhet':
    case 'Bruker':
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
    case 'Innsynskrav':
    case 'InnsynskravBestilling':
    case 'LagretSak':
    case 'LagretSoek':
    case 'Tilbakemelding':
      return true;
    default:
      return false;
  }
}

/**
 * Type guard that narrows an unknown value to a paginated list of {@link Base}.
 *
 * @param obj The value to check.
 * @returns `true` if `obj` is a `PaginatedList` where every item is a Base.
 */
export function isPaginatedBaseList(obj: unknown): obj is PaginatedList<Base> {
  return (
    obj !== undefined &&
    Array.isArray((obj as PaginatedList<Base>)?.items) &&
    (obj as PaginatedList<Base>).items.every((i) => isBase(i))
  );
}
