// Auto-generated from our API specification
// https://github.com/felleslosninger/einnsyn-api-spec

import type { ArkivBase, ArkivBaseRequest } from '../arkivbase/ArkivBase';
import type { PaginatedList } from '../../common/responses/PaginatedList';

export interface Skjerming extends ArkivBase {
  readonly entity: 'Skjerming';
  readonly tilgangsrestriksjon: string;
  readonly skjermingshjemmel?: string;
}

export interface SkjermingRequest extends ArkivBaseRequest {
  tilgangsrestriksjon: string;
  skjermingshjemmel?: string;
}

export function isSkjerming(obj: unknown): obj is Skjerming {
  switch ((obj as { entity: string })?.entity) {
    case 'Skjerming':
      return true;
    default:
      return false;
  }
}

export function isPaginatedSkjermingList(
  obj: unknown,
): obj is PaginatedList<Skjerming> {
  return (
    obj !== undefined &&
    (obj as PaginatedList<Skjerming>)?.items.every((i) => isSkjerming(i))
  );
}
