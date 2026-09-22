// Auto-generated from our API specification
// https://github.com/felleslosninger/einnsyn-api-spec

import type { PaginatedList } from '../../common/responses/PaginatedList';
import type { ArkivBase, ArkivBaseRequest } from '../arkivbase/ArkivBase';
import type {
  Identifikator,
  IdentifikatorRequest,
} from '../identifikator/Identifikator';
import type {
  Moetedeltaker,
  MoetedeltakerRequest,
} from '../moetedeltaker/Moetedeltaker';

/**
 * Represents a vote cast by a participant in a meeting.
 */
export interface Votering extends ArkivBase {
  readonly entity: 'Votering';
  /**
   * The meeting participant who cast the vote.
   */
  readonly moetedeltaker: Moetedeltaker | string;
  /**
   * The vote cast ('Ja' for yes, 'Nei' for no, 'Blankt' for blank).
   */
  readonly stemme: 'Ja' | 'Nei' | 'Blankt';
  /**
   * The person or party the participant is representing, if applicable.
   */
  readonly representerer?: Identifikator | string;
}

/**
 * Represents a vote cast by a participant in a meeting.
 *
 * The writable variant of {@link Votering}, used as the request body when creating or updating a Votering.
 */
export interface VoteringRequest extends ArkivBaseRequest {
  /**
   * The meeting participant who cast the vote.
   */
  moetedeltaker: MoetedeltakerRequest | string;
  /**
   * The vote cast ('Ja' for yes, 'Nei' for no, 'Blankt' for blank).
   */
  stemme: 'Ja' | 'Nei' | 'Blankt';
  /**
   * The person or party the participant is representing, if applicable.
   */
  representerer?: IdentifikatorRequest | string;
}

/**
 * Type guard that narrows an unknown value to {@link Votering}, by checking its `entity` discriminator.
 *
 * @param obj The value to check.
 * @returns `true` if `obj` is a Votering.
 */
export function isVotering(obj: unknown): obj is Votering {
  switch ((obj as { entity: string })?.entity) {
    case 'Votering':
      return true;
    default:
      return false;
  }
}

/**
 * Type guard that narrows an unknown value to a paginated list of {@link Votering}.
 *
 * @param obj The value to check.
 * @returns `true` if `obj` is a `PaginatedList` where every item is a Votering.
 */
export function isPaginatedVoteringList(
  obj: unknown,
): obj is PaginatedList<Votering> {
  return (
    obj !== undefined &&
    Array.isArray((obj as PaginatedList<Votering>)?.items) &&
    (obj as PaginatedList<Votering>).items.every((i) => isVotering(i))
  );
}
