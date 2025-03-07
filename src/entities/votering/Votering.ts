// Auto-generated from our API specification
// https://github.com/felleslosninger/einnsyn-api-spec

import type {
  Moetedeltaker,
  MoetedeltakerRequest,
} from '../moetedeltaker/Moetedeltaker';
import type {
  Identifikator,
  IdentifikatorRequest,
} from '../identifikator/Identifikator';
import type { ArkivBase, ArkivBaseRequest } from '../arkivbase/ArkivBase';
import type { PaginatedList } from '../../common/responses/PaginatedList';

export interface Votering extends ArkivBase {
  readonly entity: 'Votering';
  readonly moetedeltaker: Moetedeltaker | string;
  readonly stemme: 'Ja' | 'Nei' | 'Blankt';
  readonly representerer?: Identifikator | string;
}

export interface VoteringRequest extends ArkivBaseRequest {
  moetedeltaker: MoetedeltakerRequest | string;
  stemme: 'Ja' | 'Nei' | 'Blankt';
  representerer?: IdentifikatorRequest | string;
}

export function isVotering(obj: unknown): obj is Votering {
  switch ((obj as { entity: string })?.entity) {
    case 'Votering':
      return true;
    default:
      return false;
  }
}

export function isPaginatedVoteringList(
  obj: unknown,
): obj is PaginatedList<Votering> {
  return (
    obj !== undefined &&
    (obj as PaginatedList<Votering>)?.items.every((i) => isVotering(i))
  );
}
