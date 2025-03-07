// Auto-generated from our API specification
// https://github.com/felleslosninger/einnsyn-api-spec

import { Resource } from '../../common/entity/Resource';
import type { ListParameters } from '../../common/queryparameters/ListParameters';
import type { PaginatedList } from '../../common/responses/PaginatedList';
import type { ApiKey, ApiKeyRequest } from './ApiKey';
import { isPaginatedApiKeyList, isApiKey } from './ApiKey';
import { NetworkError } from '../../common/error/EInnsynError';
import type { GetParameters } from '../../common/queryparameters/GetParameters';

export class ApiKeyResource extends Resource {
  async list(query?: ListParameters): Promise<PaginatedList<ApiKey>> {
    const response = await this.requester.request({
      method: 'get',
      path: '/apiKey',
      query: query,
    });
    if (isPaginatedApiKeyList(response)) {
      return response;
    }
    throw new NetworkError('Unknown response type');
  }

  async delete(id: string): Promise<ApiKey> {
    const response = await this.requester.request({
      method: 'delete',
      path: `/apiKey/${id}`,
    });
    if (isApiKey(response)) {
      return response;
    }
    throw new NetworkError('Unknown response type');
  }

  async get(id: string, query?: GetParameters): Promise<ApiKey> {
    const response = await this.requester.request({
      method: 'get',
      path: `/apiKey/${id}`,
      query: query,
    });
    if (isApiKey(response)) {
      return response;
    }
    throw new NetworkError('Unknown response type');
  }

  async update(id: string, body: ApiKeyRequest): Promise<ApiKey> {
    const response = await this.requester.request({
      method: 'patch',
      path: `/apiKey/${id}`,
      body: body,
    });
    if (isApiKey(response)) {
      return response;
    }
    throw new NetworkError('Unknown response type');
  }
}
