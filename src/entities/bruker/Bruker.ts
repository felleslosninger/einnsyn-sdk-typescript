// Auto-generated from our API specification
// https://github.com/felleslosninger/einnsyn-api-spec

import type { PaginatedList } from '../../common/responses/PaginatedList';
import type { Base, BaseRequest } from '../base/Base';

export interface Bruker extends Base {
  readonly entity: 'Bruker';
  readonly email: string;
  readonly active: boolean;
  readonly password: string;
  readonly language?: 'nb' | 'nn' | 'en' | 'se';
}

export interface BrukerRequest extends BaseRequest {
  email: string;
  password: string;
  language?: 'nb' | 'nn' | 'en' | 'se';
}

export function isBruker(obj: unknown): obj is Bruker {
  switch ((obj as { entity: string })?.entity) {
    case 'Bruker':
      return true;
    default:
      return false;
  }
}

export function isPaginatedBrukerList(
  obj: unknown,
): obj is PaginatedList<Bruker> {
  return (
    obj !== undefined &&
    (obj as PaginatedList<Bruker>)?.items.every((i) => isBruker(i))
  );
}
