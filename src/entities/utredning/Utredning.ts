// Auto-generated from our API specification
// https://github.com/felleslosninger/einnsyn-api-spec

import type { PaginatedList } from '../../common/responses/PaginatedList';
import type { ArkivBase, ArkivBaseRequest } from '../arkivbase/ArkivBase';
import type {
  Dokumentbeskrivelse,
  DokumentbeskrivelseRequest,
} from '../dokumentbeskrivelse/Dokumentbeskrivelse';
import type {
  Moetesaksbeskrivelse,
  MoetesaksbeskrivelseRequest,
} from '../moetesaksbeskrivelse/Moetesaksbeskrivelse';

/**
 * Represents a report or investigation related to a meeting case.
 */
export interface Utredning extends ArkivBase {
  readonly entity: 'Utredning';
  /**
   * The description of the case.
   */
  readonly saksbeskrivelse: Moetesaksbeskrivelse | string;
  /**
   * The recommendation or proposition.
   */
  readonly innstilling: Moetesaksbeskrivelse | string;
  /**
   * Documents that are part of the investigation.
   */
  readonly utredningsdokument?: Array<Dokumentbeskrivelse | string>;
}

/**
 * Represents a report or investigation related to a meeting case.
 *
 * The writable variant of {@link Utredning}, used as the request body when creating or updating a Utredning.
 */
export interface UtredningRequest extends ArkivBaseRequest {
  /**
   * The description of the case.
   */
  saksbeskrivelse: MoetesaksbeskrivelseRequest | string;
  /**
   * The recommendation or proposition.
   */
  innstilling: MoetesaksbeskrivelseRequest | string;
  /**
   * Documents that are part of the investigation.
   */
  utredningsdokument?: Array<DokumentbeskrivelseRequest | string>;
}

/**
 * Type guard that narrows an unknown value to {@link Utredning}, by checking its `entity` discriminator.
 *
 * @param obj The value to check.
 * @returns `true` if `obj` is a Utredning.
 */
export function isUtredning(obj: unknown): obj is Utredning {
  switch ((obj as { entity: string })?.entity) {
    case 'Utredning':
      return true;
    default:
      return false;
  }
}

/**
 * Type guard that narrows an unknown value to a paginated list of {@link Utredning}.
 *
 * @param obj The value to check.
 * @returns `true` if `obj` is a `PaginatedList` where every item is a Utredning.
 */
export function isPaginatedUtredningList(
  obj: unknown,
): obj is PaginatedList<Utredning> {
  return (
    obj !== undefined &&
    Array.isArray((obj as PaginatedList<Utredning>)?.items) &&
    (obj as PaginatedList<Utredning>).items.every((i) => isUtredning(i))
  );
}
