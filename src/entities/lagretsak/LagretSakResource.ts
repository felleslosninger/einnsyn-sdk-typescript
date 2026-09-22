// Auto-generated from our API specification
// https://github.com/felleslosninger/einnsyn-api-spec

import { Resource } from '../../common/entity/Resource';
import { NetworkError } from '../../common/error/EInnsynError';
import type { GetParameters } from '../../common/queryparameters/GetParameters';
import type { ListParameters } from '../../common/queryparameters/ListParameters';
import type { PaginatedList } from '../../common/responses/PaginatedList';
import type { LagretSak, LagretSakRequest } from './LagretSak';
import { isLagretSak, isPaginatedLagretSakList } from './LagretSak';

/**
 * Operations on the `LagretSak` resource.
 */
export class LagretSakResource extends Resource {
  /**
   * List all objects.
   *
   * @param query Optional query parameters.
   */
  async list(query?: ListParameters): Promise<PaginatedList<LagretSak>> {
    const response = await this.requester.request({
      method: 'get',
      path: '/lagretSak',
      query: query,
    });
    if (isPaginatedLagretSakList(response)) {
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
  async delete(id: string): Promise<LagretSak> {
    const response = await this.requester.request({
      method: 'delete',
      path: `/lagretSak/${id}`,
    });
    if (isLagretSak(response)) {
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
  async get(id: string, query?: GetParameters): Promise<LagretSak> {
    const response = await this.requester.request({
      method: 'get',
      path: `/lagretSak/${id}`,
      query: query,
    });
    if (isLagretSak(response)) {
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
    body: Partial<LagretSakRequest>,
  ): Promise<LagretSak> {
    const response = await this.requester.request({
      method: 'patch',
      path: `/lagretSak/${id}`,
      body: body,
    });
    if (isLagretSak(response)) {
      return response;
    }
    throw new NetworkError('Unknown response type');
  }
}
