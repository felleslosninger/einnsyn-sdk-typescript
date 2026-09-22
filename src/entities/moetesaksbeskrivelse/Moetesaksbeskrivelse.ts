// Auto-generated from our API specification
// https://github.com/felleslosninger/einnsyn-api-spec

import type { PaginatedList } from '../../common/responses/PaginatedList';
import type { ArkivBase, ArkivBaseRequest } from '../arkivbase/ArkivBase';

/**
 * Represents a textual description related to a meeting case, such as a recommendation or a report.
 */
export interface Moetesaksbeskrivelse extends ArkivBase {
  readonly entity: 'Moetesaksbeskrivelse';
  /**
   * The text content of the description.
   */
  readonly tekstInnhold: string;
  /**
   * The format of the text content (e.g., "text/html").
   */
  readonly tekstFormat: string;
}

/**
 * Represents a textual description related to a meeting case, such as a recommendation or a report.
 *
 * The writable variant of {@link Moetesaksbeskrivelse}, used as the request body when creating or updating a Moetesaksbeskrivelse.
 */
export interface MoetesaksbeskrivelseRequest extends ArkivBaseRequest {
  /**
   * The text content of the description.
   */
  tekstInnhold: string;
  /**
   * The format of the text content (e.g., "text/html").
   */
  tekstFormat: string;
}

/**
 * Type guard that narrows an unknown value to {@link Moetesaksbeskrivelse}, by checking its `entity` discriminator.
 *
 * @param obj The value to check.
 * @returns `true` if `obj` is a Moetesaksbeskrivelse.
 */
export function isMoetesaksbeskrivelse(
  obj: unknown,
): obj is Moetesaksbeskrivelse {
  switch ((obj as { entity: string })?.entity) {
    case 'Moetesaksbeskrivelse':
      return true;
    default:
      return false;
  }
}

/**
 * Type guard that narrows an unknown value to a paginated list of {@link Moetesaksbeskrivelse}.
 *
 * @param obj The value to check.
 * @returns `true` if `obj` is a `PaginatedList` where every item is a Moetesaksbeskrivelse.
 */
export function isPaginatedMoetesaksbeskrivelseList(
  obj: unknown,
): obj is PaginatedList<Moetesaksbeskrivelse> {
  return (
    obj !== undefined &&
    Array.isArray((obj as PaginatedList<Moetesaksbeskrivelse>)?.items) &&
    (obj as PaginatedList<Moetesaksbeskrivelse>).items.every((i) =>
      isMoetesaksbeskrivelse(i),
    )
  );
}
