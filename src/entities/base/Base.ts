// Auto-generated from our API specification
// https://github.com/felleslosninger/einnsyn-api-spec

import type { PaginatedList } from '../../common/responses/PaginatedList';

export interface Base {
  readonly id: string;
  readonly deleted: boolean;
  readonly externalId?: string;
  readonly accessibleAfter?: string;
}

export interface BaseRequest {
  externalId?: string;
  accessibleAfter?: string;
}

export function isBase(obj: unknown): obj is Base {
  switch ((obj as { entity: string })?.entity) {
    case 'ApiKey':
    case 'Enhet':
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
    case 'Innsynskrav':
    case 'InnsynskravBestilling':
    case 'Bruker':
    case 'LagretSak':
    case 'LagretSoek':
    case 'Tilbakemelding':
      return true;
    default:
      return false;
  }
}

export function isPaginatedBaseList(obj: unknown): obj is PaginatedList<Base> {
  return (
    obj !== undefined &&
    (obj as PaginatedList<Base>)?.items.every((i) => isBase(i))
  );
}
