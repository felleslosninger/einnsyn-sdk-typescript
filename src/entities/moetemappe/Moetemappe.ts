// Auto-generated from our API specification
// https://github.com/felleslosninger/einnsyn-api-spec

import type { PaginatedList } from '../../common/responses/PaginatedList';
import type { Enhet } from '../enhet/Enhet';
import type { Mappe, MappeRequest } from '../mappe/Mappe';
import type {
  Moetedokument,
  MoetedokumentRequest,
} from '../moetedokument/Moetedokument';
import type { Moetesak, MoetesakRequest } from '../moetesak/Moetesak';

/**
 * Represents a meeting, containing information about a specific meeting.
 */
export interface Moetemappe extends Mappe {
  readonly entity: 'Moetemappe';
  /**
   * A unique number or identifier for the meeting.
   */
  readonly moetenummer: string;
  /**
   * The name of the committee or board holding the meeting.
   */
  readonly utvalg: string;
  /**
   * The committee or board holding the meeting.
   */
  readonly utvalgObjekt: Enhet | string;
  /**
   * The date and time of the meeting.
   */
  readonly moetedato: string;
  /**
   * The location of the meeting.
   */
  readonly moetested?: string;
  /**
   * A link to a video recording of the meeting.
   */
  readonly videoLink?: string;
  /**
   * A reference to the previous meeting.
   */
  readonly referanseForrigeMoete?: Moetemappe | string;
  /**
   * A reference to the next meeting.
   */
  readonly referanseNesteMoete?: Moetemappe | string;
  /**
   * Documents associated with the meeting.
   */
  readonly moetedokument?: Array<Moetedokument | string>;
  /**
   * Cases discussed in the meeting.
   */
  readonly moetesak?: Array<Moetesak | string>;
}

/**
 * Represents a meeting, containing information about a specific meeting.
 *
 * The writable variant of {@link Moetemappe}, used as the request body when creating or updating a Moetemappe.
 */
export interface MoetemappeRequest extends MappeRequest {
  /**
   * A unique number or identifier for the meeting.
   */
  moetenummer: string;
  /**
   * The name of the committee or board holding the meeting.
   */
  utvalg: string;
  /**
   * The date and time of the meeting.
   */
  moetedato: string;
  /**
   * The location of the meeting.
   */
  moetested?: string;
  /**
   * A link to a video recording of the meeting.
   */
  videoLink?: string;
  /**
   * A reference to the previous meeting.
   */
  referanseForrigeMoete?: MoetemappeRequest | string;
  /**
   * A reference to the next meeting.
   */
  referanseNesteMoete?: MoetemappeRequest | string;
  /**
   * Documents associated with the meeting.
   */
  moetedokument?: Array<MoetedokumentRequest | string>;
  /**
   * Cases discussed in the meeting.
   */
  moetesak?: Array<MoetesakRequest | string>;
}

/**
 * Type guard that narrows an unknown value to {@link Moetemappe}, by checking its `entity` discriminator.
 *
 * @param obj The value to check.
 * @returns `true` if `obj` is a Moetemappe.
 */
export function isMoetemappe(obj: unknown): obj is Moetemappe {
  switch ((obj as { entity: string })?.entity) {
    case 'Moetemappe':
      return true;
    default:
      return false;
  }
}

/**
 * Type guard that narrows an unknown value to a paginated list of {@link Moetemappe}.
 *
 * @param obj The value to check.
 * @returns `true` if `obj` is a `PaginatedList` where every item is a Moetemappe.
 */
export function isPaginatedMoetemappeList(
  obj: unknown,
): obj is PaginatedList<Moetemappe> {
  return (
    obj !== undefined &&
    Array.isArray((obj as PaginatedList<Moetemappe>)?.items) &&
    (obj as PaginatedList<Moetemappe>).items.every((i) => isMoetemappe(i))
  );
}
