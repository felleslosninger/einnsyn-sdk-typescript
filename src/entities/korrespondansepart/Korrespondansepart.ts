// Auto-generated from our API specification
// https://github.com/felleslosninger/einnsyn-api-spec

import type { Journalpost } from '../journalpost/Journalpost';
import type { Moetedokument } from '../moetedokument/Moetedokument';
import type { Moetesak } from '../moetesak/Moetesak';
import type { ArkivBase, ArkivBaseRequest } from '../arkivbase/ArkivBase';
import type { PaginatedList } from '../../common/responses/PaginatedList';

export interface Korrespondansepart extends ArkivBase {
  readonly entity: 'Korrespondansepart';
  readonly korrespondansepartNavn: string;
  readonly korrespondansepartNavnSensitiv: string;
  readonly korrespondanseparttype: string;
  readonly saksbehandler?: string;
  readonly epostadresse?: string;
  readonly postnummer?: string;
  readonly erBehandlingsansvarlig?: boolean;
  readonly administrativEnhet?: string;
  readonly journalpost?: Journalpost | string;
  readonly moetedokument?: Moetedokument | string;
  readonly moetesak?: Moetesak | string;
}

export interface KorrespondansepartRequest extends ArkivBaseRequest {
  korrespondansepartNavn: string;
  korrespondansepartNavnSensitiv: string;
  korrespondanseparttype: string;
  saksbehandler?: string;
  epostadresse?: string;
  postnummer?: string;
  erBehandlingsansvarlig?: boolean;
  administrativEnhet?: string;
}

export function isKorrespondansepart(obj: unknown): obj is Korrespondansepart {
  switch ((obj as { entity: string })?.entity) {
    case 'Korrespondansepart':
      return true;
    default:
      return false;
  }
}

export function isPaginatedKorrespondansepartList(
  obj: unknown,
): obj is PaginatedList<Korrespondansepart> {
  return (
    obj !== undefined &&
    (obj as PaginatedList<Korrespondansepart>)?.items.every((i) =>
      isKorrespondansepart(i),
    )
  );
}
