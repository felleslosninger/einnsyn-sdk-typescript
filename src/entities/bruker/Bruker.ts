// Auto-generated from our API specification
// https://github.com/felleslosninger/einnsyn-api-spec

import type { PaginatedList } from '../../common/responses/PaginatedList';
import type { Base, BaseRequest } from '../base/Base';

/**
 * eInnsyn bruker
 */
export interface Bruker extends Base {
  readonly entity: 'Bruker';
  readonly email: string;
  readonly active: boolean;
  readonly password: string;
  readonly language?: 'nb' | 'nn' | 'en' | 'se';
}

/**
 * eInnsyn bruker
 *
 * The writable variant of {@link Bruker}, used as the request body when creating or updating a Bruker.
 */
export interface BrukerRequest extends BaseRequest {
  email: string;
  password: string;
  language?: 'nb' | 'nn' | 'en' | 'se';
}

/**
 * Type guard that narrows an unknown value to {@link Bruker}, by checking its `entity` discriminator.
 *
 * @param obj The value to check.
 * @returns `true` if `obj` is a Bruker.
 */
export function isBruker(obj: unknown): obj is Bruker {
  switch ((obj as { entity: string })?.entity) {
    case 'Bruker':
      return true;
    default:
      return false;
  }
}

/**
 * Type guard that narrows an unknown value to a paginated list of {@link Bruker}.
 *
 * @param obj The value to check.
 * @returns `true` if `obj` is a `PaginatedList` where every item is a Bruker.
 */
export function isPaginatedBrukerList(
  obj: unknown,
): obj is PaginatedList<Bruker> {
  return (
    obj !== undefined &&
    Array.isArray((obj as PaginatedList<Bruker>)?.items) &&
    (obj as PaginatedList<Bruker>).items.every((i) => isBruker(i))
  );
}
