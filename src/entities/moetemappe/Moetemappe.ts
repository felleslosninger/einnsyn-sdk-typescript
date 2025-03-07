// Auto-generated from our API specification
// https://github.com/felleslosninger/einnsyn-api-spec

import type { Enhet } from '../enhet/Enhet';
import type {
  Moetedokument,
  MoetedokumentRequest,
} from '../moetedokument/Moetedokument';
import type { Moetesak, MoetesakRequest } from '../moetesak/Moetesak';
import type { Mappe, MappeRequest } from '../mappe/Mappe';
import type { PaginatedList } from '../../common/responses/PaginatedList';

export interface Moetemappe extends Mappe {
  readonly entity: 'Moetemappe';
  readonly moetenummer: string;
  readonly utvalg: string;
  readonly utvalgObjekt: Enhet | string;
  readonly moetedato: string;
  readonly moetested?: string;
  readonly videoLink?: string;
  readonly referanseForrigeMoete?: Moetemappe | string;
  readonly referanseNesteMoete?: Moetemappe | string;
  readonly moetedokument?: Array<Moetedokument | string>;
  readonly moetesak?: Array<Moetesak | string>;
}

export interface MoetemappeRequest extends MappeRequest {
  moetenummer: string;
  utvalg: string;
  moetedato: string;
  moetested?: string;
  videoLink?: string;
  referanseForrigeMoete?: MoetemappeRequest | string;
  referanseNesteMoete?: MoetemappeRequest | string;
  moetedokument?: Array<MoetedokumentRequest | string>;
  moetesak?: Array<MoetesakRequest | string>;
}

export function isMoetemappe(obj: unknown): obj is Moetemappe {
  switch ((obj as { entity: string })?.entity) {
    case 'Moetemappe':
      return true;
    default:
      return false;
  }
}

export function isPaginatedMoetemappeList(
  obj: unknown,
): obj is PaginatedList<Moetemappe> {
  return (
    obj !== undefined &&
    (obj as PaginatedList<Moetemappe>)?.items.every((i) => isMoetemappe(i))
  );
}
