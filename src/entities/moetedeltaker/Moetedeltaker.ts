// Auto-generated from our API specification
// https://github.com/felleslosninger/einnsyn-api-spec

import type { PaginatedList } from '../../common/responses/PaginatedList';
import type { ArkivBase, ArkivBaseRequest } from '../arkivbase/ArkivBase';

/**
 * Represents a participant in a meeting.
 */
export interface Moetedeltaker extends ArkivBase {
  readonly entity: 'Moetedeltaker';
  /**
   * The name of the meeting participant.
   */
  readonly moetedeltakerNavn: string;
  /**
   * The function or role of the participant in the meeting (e.g., 'Chairperson').
   */
  readonly moetedeltakerFunksjon?: string;
}

/**
 * Represents a participant in a meeting.
 *
 * The writable variant of {@link Moetedeltaker}, used as the request body when creating or updating a Moetedeltaker.
 */
export interface MoetedeltakerRequest extends ArkivBaseRequest {
  /**
   * The name of the meeting participant.
   */
  moetedeltakerNavn: string;
  /**
   * The function or role of the participant in the meeting (e.g., 'Chairperson').
   */
  moetedeltakerFunksjon?: string;
}

/**
 * Type guard that narrows an unknown value to {@link Moetedeltaker}, by checking its `entity` discriminator.
 *
 * @param obj The value to check.
 * @returns `true` if `obj` is a Moetedeltaker.
 */
export function isMoetedeltaker(obj: unknown): obj is Moetedeltaker {
  switch ((obj as { entity: string })?.entity) {
    case 'Moetedeltaker':
      return true;
    default:
      return false;
  }
}

/**
 * Type guard that narrows an unknown value to a paginated list of {@link Moetedeltaker}.
 *
 * @param obj The value to check.
 * @returns `true` if `obj` is a `PaginatedList` where every item is a Moetedeltaker.
 */
export function isPaginatedMoetedeltakerList(
  obj: unknown,
): obj is PaginatedList<Moetedeltaker> {
  return (
    obj !== undefined &&
    Array.isArray((obj as PaginatedList<Moetedeltaker>)?.items) &&
    (obj as PaginatedList<Moetedeltaker>).items.every((i) => isMoetedeltaker(i))
  );
}
