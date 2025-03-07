// Auto-generated from our API specification
// https://github.com/felleslosninger/einnsyn-api-spec

import type { ArkivBase, ArkivBaseRequest } from '../arkivbase/ArkivBase';
import type { PaginatedList } from '../../common/responses/PaginatedList';

export interface Arkiv extends ArkivBase {
  readonly entity: 'Arkiv';
  readonly tittel: string;
  readonly arkiv?: Arkiv | string;
}

export interface ArkivRequest extends ArkivBaseRequest {
  tittel: string;
  arkiv?: ArkivRequest | string;
}

export function isArkiv(obj: unknown): obj is Arkiv {
  switch ((obj as { entity: string })?.entity) {
    case 'Arkiv':
      return true;
    default:
      return false;
  }
}

export function isPaginatedArkivList(
  obj: unknown,
): obj is PaginatedList<Arkiv> {
  return (
    obj !== undefined &&
    (obj as PaginatedList<Arkiv>)?.items.every((i) => isArkiv(i))
  );
}
