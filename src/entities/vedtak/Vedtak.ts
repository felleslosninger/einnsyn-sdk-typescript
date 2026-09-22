// Auto-generated from our API specification
// https://github.com/felleslosninger/einnsyn-api-spec

import type { PaginatedList } from '../../common/responses/PaginatedList';
import type { ArkivBase, ArkivBaseRequest } from '../arkivbase/ArkivBase';
import type {
  Behandlingsprotokoll,
  BehandlingsprotokollRequest,
} from '../behandlingsprotokoll/Behandlingsprotokoll';
import type {
  Dokumentbeskrivelse,
  DokumentbeskrivelseRequest,
} from '../dokumentbeskrivelse/Dokumentbeskrivelse';
import type {
  Moetesaksbeskrivelse,
  MoetesaksbeskrivelseRequest,
} from '../moetesaksbeskrivelse/Moetesaksbeskrivelse';
import type { Votering, VoteringRequest } from '../votering/Votering';

/**
 * Represents a decision made in a meeting case.
 */
export interface Vedtak extends ArkivBase {
  readonly entity: 'Vedtak';
  /**
   * The text of the decision.
   */
  readonly vedtakstekst: Moetesaksbeskrivelse | string;
  /**
   * The voting results related to the decision.
   */
  readonly votering?: Array<Votering | string>;
  /**
   * The protocol of proceedings for the decision.
   */
  readonly behandlingsprotokoll?: Behandlingsprotokoll | string;
  /**
   * The document containing the decision.
   */
  readonly vedtaksdokument?: Array<Dokumentbeskrivelse | string>;
  /**
   * The date the decision was made.
   */
  readonly dato: string;
}

/**
 * Represents a decision made in a meeting case.
 *
 * The writable variant of {@link Vedtak}, used as the request body when creating or updating a Vedtak.
 */
export interface VedtakRequest extends ArkivBaseRequest {
  /**
   * The text of the decision.
   */
  vedtakstekst: MoetesaksbeskrivelseRequest | string;
  /**
   * The voting results related to the decision.
   */
  votering?: Array<VoteringRequest | string>;
  /**
   * The protocol of proceedings for the decision.
   */
  behandlingsprotokoll?: BehandlingsprotokollRequest | string;
  /**
   * The document containing the decision.
   */
  vedtaksdokument?: Array<DokumentbeskrivelseRequest | string>;
  /**
   * The date the decision was made.
   */
  dato: string;
}

/**
 * Type guard that narrows an unknown value to {@link Vedtak}, by checking its `entity` discriminator.
 *
 * @param obj The value to check.
 * @returns `true` if `obj` is a Vedtak.
 */
export function isVedtak(obj: unknown): obj is Vedtak {
  switch ((obj as { entity: string })?.entity) {
    case 'Vedtak':
      return true;
    default:
      return false;
  }
}

/**
 * Type guard that narrows an unknown value to a paginated list of {@link Vedtak}.
 *
 * @param obj The value to check.
 * @returns `true` if `obj` is a `PaginatedList` where every item is a Vedtak.
 */
export function isPaginatedVedtakList(
  obj: unknown,
): obj is PaginatedList<Vedtak> {
  return (
    obj !== undefined &&
    Array.isArray((obj as PaginatedList<Vedtak>)?.items) &&
    (obj as PaginatedList<Vedtak>).items.every((i) => isVedtak(i))
  );
}
