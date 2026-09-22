// Auto-generated from our API specification
// https://github.com/felleslosninger/einnsyn-api-spec

import type { PaginatedList } from '../../common/responses/PaginatedList';
import type { Base, BaseRequest } from '../base/Base';
import type { Bruker, BrukerRequest } from '../bruker/Bruker';
import type { Enhet, EnhetRequest } from '../enhet/Enhet';

/**
 * An API key used to authenticate requests to the eInnsyn API.
 */
export interface ApiKey extends Base {
  readonly entity: 'ApiKey';
  /**
   * A name for the API key. This can be used to identify the key, in case you have multiple keys for multiple systems.
   */
  readonly name?: string;
  /**
   * The API key used to authenticate requests. This will only be shown once, and we will only store a hashed version.
   */
  readonly secretKey: string;
  /**
   * An Enhet that requests using this key will be associated with.
   */
  readonly enhet?: Enhet | string;
  /**
   * A Bruker that requests using this key will be associated with.
   */
  readonly bruker?: Bruker | string;
  /**
   * Specifies the expiration date of the API key. If this is set, the key will not be usable after this date.
   */
  readonly expiresAt?: string;
}

/**
 * An API key used to authenticate requests to the eInnsyn API.
 *
 * The writable variant of {@link ApiKey}, used as the request body when creating or updating a ApiKey.
 */
export interface ApiKeyRequest extends BaseRequest {
  /**
   * A name for the API key. This can be used to identify the key, in case you have multiple keys for multiple systems.
   */
  name?: string;
  /**
   * An Enhet that requests using this key will be associated with.
   */
  enhet?: EnhetRequest | string;
  /**
   * A Bruker that requests using this key will be associated with.
   */
  bruker?: BrukerRequest | string;
  /**
   * Specifies the expiration date of the API key. If this is set, the key will not be usable after this date.
   */
  expiresAt?: string;
}

/**
 * Type guard that narrows an unknown value to {@link ApiKey}, by checking its `entity` discriminator.
 *
 * @param obj The value to check.
 * @returns `true` if `obj` is a ApiKey.
 */
export function isApiKey(obj: unknown): obj is ApiKey {
  switch ((obj as { entity: string })?.entity) {
    case 'ApiKey':
      return true;
    default:
      return false;
  }
}

/**
 * Type guard that narrows an unknown value to a paginated list of {@link ApiKey}.
 *
 * @param obj The value to check.
 * @returns `true` if `obj` is a `PaginatedList` where every item is a ApiKey.
 */
export function isPaginatedApiKeyList(
  obj: unknown,
): obj is PaginatedList<ApiKey> {
  return (
    obj !== undefined &&
    Array.isArray((obj as PaginatedList<ApiKey>)?.items) &&
    (obj as PaginatedList<ApiKey>).items.every((i) => isApiKey(i))
  );
}
