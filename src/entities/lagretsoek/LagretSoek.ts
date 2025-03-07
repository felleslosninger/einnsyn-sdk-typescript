// Auto-generated from our API specification
// https://github.com/felleslosninger/einnsyn-api-spec

import type { Bruker, BrukerRequest } from '../bruker/Bruker';
import type { SearchParameters } from '../../common/search/SearchParameters';
import type { Base, BaseRequest } from '../base/Base';
import type { PaginatedList } from '../../common/responses/PaginatedList';

export interface LagretSoek extends Base {
  readonly entity: 'LagretSoek';
  readonly bruker?: Bruker | string;
  readonly label: string;
  readonly subscribe?: boolean;
  readonly searchParameters?: SearchParameters;
  readonly legacyQuery?: string;
}

export interface LagretSoekRequest extends BaseRequest {
  bruker?: BrukerRequest | string;
  label: string;
  subscribe?: boolean;
  searchParameters?: SearchParameters;
  legacyQuery?: string;
}

export function isLagretSoek(obj: unknown): obj is LagretSoek {
  switch ((obj as { entity: string })?.entity) {
    case 'LagretSoek':
      return true;
    default:
      return false;
  }
}

export function isPaginatedLagretSoekList(
  obj: unknown,
): obj is PaginatedList<LagretSoek> {
  return (
    obj !== undefined &&
    (obj as PaginatedList<LagretSoek>)?.items.every((i) => isLagretSoek(i))
  );
}
