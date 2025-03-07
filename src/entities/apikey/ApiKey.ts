// Auto-generated from our API specification
// https://github.com/felleslosninger/einnsyn-api-spec

import type { Enhet, EnhetRequest } from '../enhet/Enhet';
import type { Base, BaseRequest } from '../base/Base';
import type { PaginatedList } from '../../common/responses/PaginatedList';

export interface ApiKey extends Base {
  readonly entity: 'ApiKey';
  readonly name?: string;
  readonly secretKey: string;
  readonly enhet?: Enhet | string;
}

export interface ApiKeyRequest extends BaseRequest {
  name?: string;
  enhet?: EnhetRequest | string;
}

export function isApiKey(obj: unknown): obj is ApiKey {
  switch ((obj as { entity: string })?.entity) {
    case 'ApiKey':
      return true;
    default:
      return false;
  }
}

export function isPaginatedApiKeyList(
  obj: unknown,
): obj is PaginatedList<ApiKey> {
  return (
    obj !== undefined &&
    (obj as PaginatedList<ApiKey>)?.items.every((i) => isApiKey(i))
  );
}
