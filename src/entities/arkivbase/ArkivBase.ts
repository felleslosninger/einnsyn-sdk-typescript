// Auto-generated from our API specification
// https://github.com/felleslosninger/einnsyn-api-spec

import type { Enhet, EnhetRequest } from '../enhet/Enhet';
import type { Base, BaseRequest } from '../base/Base';
import type { PaginatedList } from '../../common/responses/PaginatedList';

export interface ArkivBase extends Base {
  readonly systemId?: string;
  readonly journalenhet?: Enhet | string;
}

export interface ArkivBaseRequest extends BaseRequest {
  systemId?: string;
  journalenhet?: EnhetRequest | string;
}

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
      return true;
    default:
      return false;
  }
}

export function isPaginatedArkivBaseList(
  obj: unknown,
): obj is PaginatedList<ArkivBase> {
  return (
    obj !== undefined &&
    (obj as PaginatedList<ArkivBase>)?.items.every((i) => isArkivBase(i))
  );
}
