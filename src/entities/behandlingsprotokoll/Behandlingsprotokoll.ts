// Auto-generated from our API specification
// https://github.com/felleslosninger/einnsyn-api-spec

import type { ArkivBase, ArkivBaseRequest } from '../arkivbase/ArkivBase';
import type { PaginatedList } from '../../common/responses/PaginatedList';

export interface Behandlingsprotokoll extends ArkivBase {
  readonly entity: 'Behandlingsprotokoll';
  readonly tekstInnhold: string;
  readonly tekstFormat: string;
}

export interface BehandlingsprotokollRequest extends ArkivBaseRequest {
  tekstInnhold: string;
  tekstFormat: string;
}

export function isBehandlingsprotokoll(
  obj: unknown,
): obj is Behandlingsprotokoll {
  switch ((obj as { entity: string })?.entity) {
    case 'Behandlingsprotokoll':
      return true;
    default:
      return false;
  }
}

export function isPaginatedBehandlingsprotokollList(
  obj: unknown,
): obj is PaginatedList<Behandlingsprotokoll> {
  return (
    obj !== undefined &&
    (obj as PaginatedList<Behandlingsprotokoll>)?.items.every((i) =>
      isBehandlingsprotokoll(i),
    )
  );
}
