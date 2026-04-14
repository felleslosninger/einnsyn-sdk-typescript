// Auto-generated from our API specification
// https://github.com/felleslosninger/einnsyn-api-spec

import type { PaginatedList } from '../../common/responses/PaginatedList';
import type { ArkivBase, ArkivBaseRequest } from '../arkivbase/ArkivBase';

export interface Moetesaksbeskrivelse extends ArkivBase {
  readonly entity: 'Moetesaksbeskrivelse';
  readonly tekstInnhold: string;
  readonly tekstFormat: string;
}

export interface MoetesaksbeskrivelseRequest extends ArkivBaseRequest {
  tekstInnhold: string;
  tekstFormat: string;
}

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

export function isPaginatedMoetesaksbeskrivelseList(
  obj: unknown,
): obj is PaginatedList<Moetesaksbeskrivelse> {
  return (
    obj !== undefined &&
    (obj as PaginatedList<Moetesaksbeskrivelse>)?.items.every((i) =>
      isMoetesaksbeskrivelse(i),
    )
  );
}
