// Auto-generated from our API specification
// https://github.com/felleslosninger/einnsyn-api-spec

import type { Arkiv } from '../arkiv/Arkiv';
import type { ArkivBase, ArkivBaseRequest } from '../arkivbase/ArkivBase';
import type { PaginatedList } from '../../common/responses/PaginatedList';

export interface Arkivdel extends ArkivBase {
  readonly entity: 'Arkivdel';
  readonly tittel: string;
  readonly arkiv: Arkiv | string;
}

export interface ArkivdelRequest extends ArkivBaseRequest {
  tittel: string;
}

export function isArkivdel(obj: unknown): obj is Arkivdel {
  switch ((obj as { entity: string })?.entity) {
    case 'Arkivdel':
      return true;
    default:
      return false;
  }
}

export function isPaginatedArkivdelList(
  obj: unknown,
): obj is PaginatedList<Arkivdel> {
  return (
    obj !== undefined &&
    (obj as PaginatedList<Arkivdel>)?.items.every((i) => isArkivdel(i))
  );
}
