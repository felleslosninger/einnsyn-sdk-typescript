// Auto-generated from our API specification
// https://github.com/felleslosninger/einnsyn-api-spec

import type {
  Klassifikasjonssystem,
  KlassifikasjonssystemRequest,
} from '../klassifikasjonssystem/Klassifikasjonssystem';
import type { Arkivdel, ArkivdelRequest } from '../arkivdel/Arkivdel';
import type { ArkivBase, ArkivBaseRequest } from '../arkivbase/ArkivBase';
import type { PaginatedList } from '../../common/responses/PaginatedList';

export interface Klasse extends ArkivBase {
  readonly entity: 'Klasse';
  readonly tittel: string;
  readonly klassifikasjonssystem?: Klassifikasjonssystem | string;
  readonly klasse?: Klasse | string;
  readonly arkivdel?: Arkivdel | string;
}

export interface KlasseRequest extends ArkivBaseRequest {
  tittel: string;
  klassifikasjonssystem?: KlassifikasjonssystemRequest | string;
  klasse?: KlasseRequest | string;
  arkivdel?: ArkivdelRequest | string;
}

export function isKlasse(obj: unknown): obj is Klasse {
  switch ((obj as { entity: string })?.entity) {
    case 'Klasse':
      return true;
    default:
      return false;
  }
}

export function isPaginatedKlasseList(
  obj: unknown,
): obj is PaginatedList<Klasse> {
  return (
    obj !== undefined &&
    (obj as PaginatedList<Klasse>)?.items.every((i) => isKlasse(i))
  );
}
