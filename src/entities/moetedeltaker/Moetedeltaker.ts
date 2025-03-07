// Auto-generated from our API specification
// https://github.com/felleslosninger/einnsyn-api-spec

import type { ArkivBase, ArkivBaseRequest } from '../arkivbase/ArkivBase';
import type { PaginatedList } from '../../common/responses/PaginatedList';

export interface Moetedeltaker extends ArkivBase {
  readonly entity: 'Moetedeltaker';
  readonly moetedeltakerNavn: string;
  readonly moetedeltakerFunksjon?: string;
}

export interface MoetedeltakerRequest extends ArkivBaseRequest {
  moetedeltakerNavn: string;
  moetedeltakerFunksjon?: string;
}

export function isMoetedeltaker(obj: unknown): obj is Moetedeltaker {
  switch ((obj as { entity: string })?.entity) {
    case 'Moetedeltaker':
      return true;
    default:
      return false;
  }
}

export function isPaginatedMoetedeltakerList(
  obj: unknown,
): obj is PaginatedList<Moetedeltaker> {
  return (
    obj !== undefined &&
    (obj as PaginatedList<Moetedeltaker>)?.items.every((i) =>
      isMoetedeltaker(i),
    )
  );
}
