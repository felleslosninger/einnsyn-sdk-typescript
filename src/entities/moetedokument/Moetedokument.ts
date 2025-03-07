// Auto-generated from our API specification
// https://github.com/felleslosninger/einnsyn-api-spec

import type { Moetemappe, MoetemappeRequest } from '../moetemappe/Moetemappe';
import type {
  Registrering,
  RegistreringRequest,
} from '../registrering/Registrering';
import type { PaginatedList } from '../../common/responses/PaginatedList';

export interface Moetedokument extends Registrering {
  readonly entity: 'Moetedokument';
  readonly moetedokumenttype: string;
  readonly saksbehandler?: string;
  readonly saksbehandlerSensitiv?: string;
  readonly moetemappe?: Moetemappe | string;
}

export interface MoetedokumentRequest extends RegistreringRequest {
  moetedokumenttype: string;
  saksbehandler?: string;
  saksbehandlerSensitiv?: string;
  moetemappe?: MoetemappeRequest | string;
}

export function isMoetedokument(obj: unknown): obj is Moetedokument {
  switch ((obj as { entity: string })?.entity) {
    case 'Moetedokument':
      return true;
    default:
      return false;
  }
}

export function isPaginatedMoetedokumentList(
  obj: unknown,
): obj is PaginatedList<Moetedokument> {
  return (
    obj !== undefined &&
    (obj as PaginatedList<Moetedokument>)?.items.every((i) =>
      isMoetedokument(i),
    )
  );
}
