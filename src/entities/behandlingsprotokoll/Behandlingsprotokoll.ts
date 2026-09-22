// Auto-generated from our API specification
// https://github.com/felleslosninger/einnsyn-api-spec

import type { PaginatedList } from '../../common/responses/PaginatedList';
import type { ArkivBase, ArkivBaseRequest } from '../arkivbase/ArkivBase';

/**
 * Represents a record of proceedings, often related to a decision-making process in a meeting.
 */
export interface Behandlingsprotokoll extends ArkivBase {
  readonly entity: 'Behandlingsprotokoll';
  /**
   * The content of the protocol.
   */
  readonly tekstInnhold: string;
  /**
   * The format of the content (e.g., "text/html").
   */
  readonly tekstFormat: string;
}

/**
 * Represents a record of proceedings, often related to a decision-making process in a meeting.
 *
 * The writable variant of {@link Behandlingsprotokoll}, used as the request body when creating or updating a Behandlingsprotokoll.
 */
export interface BehandlingsprotokollRequest extends ArkivBaseRequest {
  /**
   * The content of the protocol.
   */
  tekstInnhold: string;
  /**
   * The format of the content (e.g., "text/html").
   */
  tekstFormat: string;
}

/**
 * Type guard that narrows an unknown value to {@link Behandlingsprotokoll}, by checking its `entity` discriminator.
 *
 * @param obj The value to check.
 * @returns `true` if `obj` is a Behandlingsprotokoll.
 */
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

/**
 * Type guard that narrows an unknown value to a paginated list of {@link Behandlingsprotokoll}.
 *
 * @param obj The value to check.
 * @returns `true` if `obj` is a `PaginatedList` where every item is a Behandlingsprotokoll.
 */
export function isPaginatedBehandlingsprotokollList(
  obj: unknown,
): obj is PaginatedList<Behandlingsprotokoll> {
  return (
    obj !== undefined &&
    Array.isArray((obj as PaginatedList<Behandlingsprotokoll>)?.items) &&
    (obj as PaginatedList<Behandlingsprotokoll>).items.every((i) =>
      isBehandlingsprotokoll(i),
    )
  );
}
