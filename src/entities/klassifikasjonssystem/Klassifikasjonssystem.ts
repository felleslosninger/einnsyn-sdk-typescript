// Auto-generated from our API specification
// https://github.com/felleslosninger/einnsyn-api-spec

import type { Arkivdel } from '../arkivdel/Arkivdel';
import type { ArkivBase, ArkivBaseRequest } from '../arkivbase/ArkivBase';
import type { PaginatedList } from '../../common/responses/PaginatedList';

export interface Klassifikasjonssystem extends ArkivBase {
  readonly entity: 'Klassifikasjonssystem';
  readonly tittel: string;
  readonly arkivdel: Arkivdel | string;
}

export interface KlassifikasjonssystemRequest extends ArkivBaseRequest {
  tittel: string;
}

export function isKlassifikasjonssystem(
  obj: unknown,
): obj is Klassifikasjonssystem {
  switch ((obj as { entity: string })?.entity) {
    case 'Klassifikasjonssystem':
      return true;
    default:
      return false;
  }
}

export function isPaginatedKlassifikasjonssystemList(
  obj: unknown,
): obj is PaginatedList<Klassifikasjonssystem> {
  return (
    obj !== undefined &&
    (obj as PaginatedList<Klassifikasjonssystem>)?.items.every((i) =>
      isKlassifikasjonssystem(i),
    )
  );
}
