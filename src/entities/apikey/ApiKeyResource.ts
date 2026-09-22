// Auto-generated from our API specification
// https://github.com/felleslosninger/einnsyn-api-spec

import { Resource } from '../../common/entity/Resource';
import { NetworkError } from '../../common/error/EInnsynError';
import type { GetParameters } from '../../common/queryparameters/GetParameters';
import type { ListParameters } from '../../common/queryparameters/ListParameters';
import type { PaginatedList } from '../../common/responses/PaginatedList';
import type { ApiKey, ApiKeyRequest } from './ApiKey';
import { isApiKey, isPaginatedApiKeyList } from './ApiKey';

/**
 * Operations on the `ApiKey` resource.
 */
export class ApiKeyResource extends Resource {
  /**
   * List all objects.
   *
   * @param query Optional query parameters.
   */
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

  /**
   * Delete an object.
   *
   * @param id The ID of the object.
   * @returns The deleted object.
   */
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

  /**
   * Get an object.
   *
   * @param id The ID of the object.
   * @param query Optional query parameters.
   * @returns The object.
   */
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

  /**
   * Update an object.
   *
   * @param id The ID of the object.
   * @param body The request body.
   * @returns The updated object.
   */
  async update(id: string, body: Partial<ApiKeyRequest>): Promise<ApiKey> {
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
