// Auto-generated from our API specification
// https://github.com/felleslosninger/einnsyn-api-spec

import type {
  Dokumentobjekt,
  DokumentobjektRequest,
} from '../dokumentobjekt/Dokumentobjekt';
import type { ArkivBase, ArkivBaseRequest } from '../arkivbase/ArkivBase';
import type { PaginatedList } from '../../common/responses/PaginatedList';

export interface Dokumentbeskrivelse extends ArkivBase {
  readonly entity: 'Dokumentbeskrivelse';
  readonly tittel: string;
  readonly tittelSensitiv: string;
  readonly dokumentnummer: number;
  readonly dokumenttype?: string;
  readonly tilknyttetRegistreringSom: string;
  readonly dokumentobjekt?: Array<Dokumentobjekt | string>;
}

export interface DokumentbeskrivelseRequest extends ArkivBaseRequest {
  tittel: string;
  tittelSensitiv: string;
  dokumentnummer: number;
  dokumenttype?: string;
  tilknyttetRegistreringSom: string;
  dokumentobjekt?: Array<DokumentobjektRequest | string>;
}

export function isDokumentbeskrivelse(
  obj: unknown,
): obj is Dokumentbeskrivelse {
  switch ((obj as { entity: string })?.entity) {
    case 'Dokumentbeskrivelse':
      return true;
    default:
      return false;
  }
}

export function isPaginatedDokumentbeskrivelseList(
  obj: unknown,
): obj is PaginatedList<Dokumentbeskrivelse> {
  return (
    obj !== undefined &&
    (obj as PaginatedList<Dokumentbeskrivelse>)?.items.every((i) =>
      isDokumentbeskrivelse(i),
    )
  );
}
