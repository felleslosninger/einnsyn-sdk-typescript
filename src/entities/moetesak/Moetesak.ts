// Auto-generated from our API specification
// https://github.com/felleslosninger/einnsyn-api-spec

import type { Enhet } from '../enhet/Enhet';
import type { Utredning, UtredningRequest } from '../utredning/Utredning';
import type {
  Moetesaksbeskrivelse,
  MoetesaksbeskrivelseRequest,
} from '../moetesaksbeskrivelse/Moetesaksbeskrivelse';
import type { Vedtak, VedtakRequest } from '../vedtak/Vedtak';
import type { Moetemappe, MoetemappeRequest } from '../moetemappe/Moetemappe';
import type {
  Registrering,
  RegistreringRequest,
} from '../registrering/Registrering';
import type { PaginatedList } from '../../common/responses/PaginatedList';

export interface Moetesak extends Registrering {
  readonly entity: 'Moetesak';
  readonly moetesakstype:
    | 'moete'
    | 'politisk'
    | 'delegert'
    | 'interpellasjon'
    | 'godkjenning'
    | 'orientering'
    | 'referat'
    | 'annet';
  readonly moetesaksaar?: number;
  readonly moetesakssekvensnummer?: number;
  readonly utvalg?: string;
  readonly utvalgObjekt: Enhet | string;
  readonly videoLink?: string;
  readonly utredning?: Utredning | string;
  readonly innstilling?: Moetesaksbeskrivelse | string;
  readonly vedtak?: Vedtak | string;
  readonly moetemappe?: Moetemappe | string;
  readonly legacyMoetesakstype?: string;
  readonly legacyReferanseTilMoetesak?: string;
}

export interface MoetesakRequest extends RegistreringRequest {
  moetesakstype:
    | 'moete'
    | 'politisk'
    | 'delegert'
    | 'interpellasjon'
    | 'godkjenning'
    | 'orientering'
    | 'referat'
    | 'annet';
  moetesaksaar?: number;
  moetesakssekvensnummer?: number;
  utvalg?: string;
  videoLink?: string;
  utredning?: UtredningRequest | string;
  innstilling?: MoetesaksbeskrivelseRequest | string;
  vedtak?: VedtakRequest | string;
  moetemappe?: MoetemappeRequest | string;
  legacyMoetesakstype?: string;
  legacyReferanseTilMoetesak?: string;
}

export function isMoetesak(obj: unknown): obj is Moetesak {
  switch ((obj as { entity: string })?.entity) {
    case 'Moetesak':
      return true;
    default:
      return false;
  }
}

export function isPaginatedMoetesakList(
  obj: unknown,
): obj is PaginatedList<Moetesak> {
  return (
    obj !== undefined &&
    (obj as PaginatedList<Moetesak>)?.items.every((i) => isMoetesak(i))
  );
}
