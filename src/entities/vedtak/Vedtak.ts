// Auto-generated from our API specification
// https://github.com/felleslosninger/einnsyn-api-spec

import type {
  Moetesaksbeskrivelse,
  MoetesaksbeskrivelseRequest,
} from '../moetesaksbeskrivelse/Moetesaksbeskrivelse';
import type { Votering, VoteringRequest } from '../votering/Votering';
import type {
  Behandlingsprotokoll,
  BehandlingsprotokollRequest,
} from '../behandlingsprotokoll/Behandlingsprotokoll';
import type {
  Dokumentbeskrivelse,
  DokumentbeskrivelseRequest,
} from '../dokumentbeskrivelse/Dokumentbeskrivelse';
import type { ArkivBase, ArkivBaseRequest } from '../arkivbase/ArkivBase';
import type { PaginatedList } from '../../common/responses/PaginatedList';

export interface Vedtak extends ArkivBase {
  readonly entity: 'Vedtak';
  readonly vedtakstekst: Moetesaksbeskrivelse | string;
  readonly votering?: Array<Votering | string>;
  readonly behandlingsprotokoll?: Behandlingsprotokoll | string;
  readonly vedtaksdokument?: Array<Dokumentbeskrivelse | string>;
  readonly dato: string;
}

export interface VedtakRequest extends ArkivBaseRequest {
  vedtakstekst: MoetesaksbeskrivelseRequest | string;
  votering?: Array<VoteringRequest | string>;
  behandlingsprotokoll?: BehandlingsprotokollRequest | string;
  vedtaksdokument?: Array<DokumentbeskrivelseRequest | string>;
  dato: string;
}

export function isVedtak(obj: unknown): obj is Vedtak {
  switch ((obj as { entity: string })?.entity) {
    case 'Vedtak':
      return true;
    default:
      return false;
  }
}

export function isPaginatedVedtakList(
  obj: unknown,
): obj is PaginatedList<Vedtak> {
  return (
    obj !== undefined &&
    (obj as PaginatedList<Vedtak>)?.items.every((i) => isVedtak(i))
  );
}
