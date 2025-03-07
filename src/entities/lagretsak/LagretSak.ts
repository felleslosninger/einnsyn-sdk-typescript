// Auto-generated from our API specification
// https://github.com/felleslosninger/einnsyn-api-spec

import type { Bruker } from '../bruker/Bruker';
import type { Saksmappe, SaksmappeRequest } from '../saksmappe/Saksmappe';
import type { Moetemappe, MoetemappeRequest } from '../moetemappe/Moetemappe';
import type { Base, BaseRequest } from '../base/Base';
import type { PaginatedList } from '../../common/responses/PaginatedList';

export interface LagretSak extends Base {
  readonly entity: 'LagretSak';
  readonly bruker: Bruker | string;
  readonly saksmappe?: Saksmappe | string;
  readonly moetemappe?: Moetemappe | string;
  readonly subscribe?: boolean;
}

export interface LagretSakRequest extends BaseRequest {
  saksmappe?: SaksmappeRequest | string;
  moetemappe?: MoetemappeRequest | string;
  subscribe?: boolean;
}

export function isLagretSak(obj: unknown): obj is LagretSak {
  switch ((obj as { entity: string })?.entity) {
    case 'LagretSak':
      return true;
    default:
      return false;
  }
}

export function isPaginatedLagretSakList(
  obj: unknown,
): obj is PaginatedList<LagretSak> {
  return (
    obj !== undefined &&
    (obj as PaginatedList<LagretSak>)?.items.every((i) => isLagretSak(i))
  );
}
