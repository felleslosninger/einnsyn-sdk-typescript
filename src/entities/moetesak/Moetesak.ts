// Auto-generated from our API specification
// https://github.com/felleslosninger/einnsyn-api-spec

import type { PaginatedList } from '../../common/responses/PaginatedList';
import type { Enhet } from '../enhet/Enhet';
import type { Moetemappe, MoetemappeRequest } from '../moetemappe/Moetemappe';
import type {
  Moetesaksbeskrivelse,
  MoetesaksbeskrivelseRequest,
} from '../moetesaksbeskrivelse/Moetesaksbeskrivelse';
import type {
  Registrering,
  RegistreringRequest,
} from '../registrering/Registrering';
import type { Utredning, UtredningRequest } from '../utredning/Utredning';
import type { Vedtak, VedtakRequest } from '../vedtak/Vedtak';

/**
 * Represents a case discussed in a meeting.
 */
export interface Moetesak extends Registrering {
  readonly entity: 'Moetesak';
  /**
   * The type of meeting case.
   */
  readonly moetesakstype:
    | 'moete'
    | 'politisk'
    | 'delegert'
    | 'interpellasjon'
    | 'godkjenning'
    | 'orientering'
    | 'referat'
    | 'annet';
  /**
   * The year of the meeting case.
   */
  readonly moetesaksaar?: number;
  /**
   * The sequence number of the meeting case within the year.
   */
  readonly moetesakssekvensnummer?: number;
  /**
   * The name of the committee or board handling the case.
   */
  readonly utvalg?: string;
  /**
   * The committee or board handling the case.
   */
  readonly utvalgObjekt: Enhet | string;
  /**
   * A link to a video recording of the case discussion.
   */
  readonly videoLink?: string;
  /**
   * The report or investigation related to the case.
   */
  readonly utredning?: Utredning | string;
  /**
   * The recommendation or proposition for the case.
   */
  readonly innstilling?: Moetesaksbeskrivelse | string;
  /**
   * The decision made in the case.
   */
  readonly vedtak?: Vedtak | string;
  /**
   * The meeting record this case belongs to.
   */
  readonly moetemappe?: Moetemappe | string;
  /**
   * Legacy field for the meeting case type.
   */
  readonly legacyMoetesakstype?: string;
  /**
   * Legacy field for a reference to another meeting case.
   */
  readonly legacyReferanseTilMoetesak?: string;
}

/**
 * Represents a case discussed in a meeting.
 *
 * The writable variant of {@link Moetesak}, used as the request body when creating or updating a Moetesak.
 */
export interface MoetesakRequest extends RegistreringRequest {
  /**
   * The type of meeting case.
   */
  moetesakstype:
    | 'moete'
    | 'politisk'
    | 'delegert'
    | 'interpellasjon'
    | 'godkjenning'
    | 'orientering'
    | 'referat'
    | 'annet';
  /**
   * The year of the meeting case.
   */
  moetesaksaar?: number;
  /**
   * The sequence number of the meeting case within the year.
   */
  moetesakssekvensnummer?: number;
  /**
   * The name of the committee or board handling the case.
   */
  utvalg?: string;
  /**
   * A link to a video recording of the case discussion.
   */
  videoLink?: string;
  /**
   * The report or investigation related to the case.
   */
  utredning?: UtredningRequest | string;
  /**
   * The recommendation or proposition for the case.
   */
  innstilling?: MoetesaksbeskrivelseRequest | string;
  /**
   * The decision made in the case.
   */
  vedtak?: VedtakRequest | string;
  /**
   * The meeting record this case belongs to.
   */
  moetemappe?: MoetemappeRequest | string;
  /**
   * Legacy field for the meeting case type.
   */
  legacyMoetesakstype?: string;
  /**
   * Legacy field for a reference to another meeting case.
   */
  legacyReferanseTilMoetesak?: string;
}

/**
 * Type guard that narrows an unknown value to {@link Moetesak}, by checking its `entity` discriminator.
 *
 * @param obj The value to check.
 * @returns `true` if `obj` is a Moetesak.
 */
export function isMoetesak(obj: unknown): obj is Moetesak {
  switch ((obj as { entity: string })?.entity) {
    case 'Moetesak':
      return true;
    default:
      return false;
  }
}

/**
 * Type guard that narrows an unknown value to a paginated list of {@link Moetesak}.
 *
 * @param obj The value to check.
 * @returns `true` if `obj` is a `PaginatedList` where every item is a Moetesak.
 */
export function isPaginatedMoetesakList(
  obj: unknown,
): obj is PaginatedList<Moetesak> {
  return (
    obj !== undefined &&
    Array.isArray((obj as PaginatedList<Moetesak>)?.items) &&
    (obj as PaginatedList<Moetesak>).items.every((i) => isMoetesak(i))
  );
}
