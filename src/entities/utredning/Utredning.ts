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

export interface Utredning extends ArkivBase {
  readonly entity: 'Utredning';
  readonly saksbeskrivelse: Moetesaksbeskrivelse | string;
  readonly innstilling: Moetesaksbeskrivelse | string;
  readonly utredningsdokument?: Array<Dokumentbeskrivelse | string>;
}

export interface UtredningRequest extends ArkivBaseRequest {
  saksbeskrivelse: MoetesaksbeskrivelseRequest | string;
  innstilling: MoetesaksbeskrivelseRequest | string;
  utredningsdokument?: Array<DokumentbeskrivelseRequest | string>;
}

export function isUtredning(obj: unknown): obj is Utredning {
  switch ((obj as { entity: string })?.entity) {
    case 'Utredning':
      return true;
    default:
      return false;
  }
}

export function isPaginatedUtredningList(
  obj: unknown,
): obj is PaginatedList<Utredning> {
  return (
    obj !== undefined &&
    (obj as PaginatedList<Utredning>)?.items.every((i) => isUtredning(i))
  );
}
