// Auto-generated from our API specification
// https://github.com/felleslosninger/einnsyn-api-spec

import type { PaginatedList } from '../../common/responses/PaginatedList';
import type { ArkivBase, ArkivBaseRequest } from '../arkivbase/ArkivBase';
import type { Journalpost } from '../journalpost/Journalpost';
import type { Moetedokument } from '../moetedokument/Moetedokument';
import type { Moetemappe } from '../moetemappe/Moetemappe';
import type { Moetesak } from '../moetesak/Moetesak';
import type { Saksmappe } from '../saksmappe/Saksmappe';

export interface Matrikkelnummer extends ArkivBase {
  readonly entity: 'Matrikkelnummer';
  readonly kommunenummer: string;
  readonly gaardsnummer: number;
  readonly bruksnummer: number;
  readonly festenummer?: number;
  readonly seksjonsnummer?: number;
  readonly saksmappe?: Saksmappe | string;
  readonly moetemappe?: Moetemappe | string;
  readonly journalpost?: Journalpost | string;
  readonly moetesak?: Moetesak | string;
  readonly moetedokument?: Moetedokument | string;
}

export interface MatrikkelnummerRequest extends ArkivBaseRequest {
  kommunenummer: string;
  gaardsnummer: number;
  bruksnummer: number;
  festenummer?: number;
  seksjonsnummer?: number;
}

export function isMatrikkelnummer(obj: unknown): obj is Matrikkelnummer {
  switch ((obj as { entity: string })?.entity) {
    case 'Matrikkelnummer':
      return true;
    default:
      return false;
  }
}

export function isPaginatedMatrikkelnummerList(
  obj: unknown,
): obj is PaginatedList<Matrikkelnummer> {
  return (
    obj !== undefined &&
    Array.isArray((obj as PaginatedList<Matrikkelnummer>)?.items) &&
    (obj as PaginatedList<Matrikkelnummer>).items.every((i) =>
      isMatrikkelnummer(i),
    )
  );
}
