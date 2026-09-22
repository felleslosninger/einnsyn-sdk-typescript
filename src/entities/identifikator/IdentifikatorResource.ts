// Auto-generated from our API specification
// https://github.com/felleslosninger/einnsyn-api-spec

import { Resource } from '../../common/entity/Resource';
import { NetworkError } from '../../common/error/EInnsynError';
import type { GetParameters } from '../../common/queryparameters/GetParameters';
import type { ListParameters } from '../../common/queryparameters/ListParameters';
import type { PaginatedList } from '../../common/responses/PaginatedList';
import type { Identifikator, IdentifikatorRequest } from './Identifikator';
import { isIdentifikator, isPaginatedIdentifikatorList } from './Identifikator';

/**
 * Operations on the `Identifikator` resource.
 */
export class IdentifikatorResource extends Resource {
  /**
   * List all objects.
   *
   * @param query Optional query parameters.
   */
  async list(query?: ListParameters): Promise<PaginatedList<Identifikator>> {
    const response = await this.requester.request({
      method: 'get',
      path: '/identifikator',
      query: query,
    });
    if (isPaginatedIdentifikatorList(response)) {
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
  async delete(id: string): Promise<Identifikator> {
    const response = await this.requester.request({
      method: 'delete',
      path: `/identifikator/${id}`,
    });
    if (isIdentifikator(response)) {
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
  async get(id: string, query?: GetParameters): Promise<Identifikator> {
    const response = await this.requester.request({
      method: 'get',
      path: `/identifikator/${id}`,
      query: query,
    });
    if (isIdentifikator(response)) {
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
  async update(
    id: string,
    body: Partial<IdentifikatorRequest>,
  ): Promise<Identifikator> {
    const response = await this.requester.request({
      method: 'patch',
      path: `/identifikator/${id}`,
      body: body,
    });
    if (isIdentifikator(response)) {
      return response;
    }
    throw new NetworkError('Unknown response type');
  }
}
