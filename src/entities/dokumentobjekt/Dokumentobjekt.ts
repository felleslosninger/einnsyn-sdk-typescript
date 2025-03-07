// Auto-generated from our API specification
// https://github.com/felleslosninger/einnsyn-api-spec

import type {
  Dokumentbeskrivelse,
  DokumentbeskrivelseRequest,
} from '../dokumentbeskrivelse/Dokumentbeskrivelse';
import type { ArkivBase, ArkivBaseRequest } from '../arkivbase/ArkivBase';
import type { PaginatedList } from '../../common/responses/PaginatedList';

export interface Dokumentobjekt extends ArkivBase {
  readonly entity: 'Dokumentobjekt';
  readonly referanseDokumentfil: string;
  readonly format?: string;
  readonly sjekksum?: string;
  readonly sjekksumAlgoritme?: string;
  readonly dokumentbeskrivelse?: Dokumentbeskrivelse | string;
}

export interface DokumentobjektRequest extends ArkivBaseRequest {
  referanseDokumentfil: string;
  format?: string;
  sjekksum?: string;
  sjekksumAlgoritme?: string;
  dokumentbeskrivelse?: DokumentbeskrivelseRequest | string;
}

export function isDokumentobjekt(obj: unknown): obj is Dokumentobjekt {
  switch ((obj as { entity: string })?.entity) {
    case 'Dokumentobjekt':
      return true;
    default:
      return false;
  }
}

export function isPaginatedDokumentobjektList(
  obj: unknown,
): obj is PaginatedList<Dokumentobjekt> {
  return (
    obj !== undefined &&
    (obj as PaginatedList<Dokumentobjekt>)?.items.every((i) =>
      isDokumentobjekt(i),
    )
  );
}
