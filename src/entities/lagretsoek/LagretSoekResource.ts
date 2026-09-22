// Auto-generated from our API specification
// https://github.com/felleslosninger/einnsyn-api-spec

import { Resource } from '../../common/entity/Resource';
import { NetworkError } from '../../common/error/EInnsynError';
import type { GetParameters } from '../../common/queryparameters/GetParameters';
import type { ListParameters } from '../../common/queryparameters/ListParameters';
import type { PaginatedList } from '../../common/responses/PaginatedList';
import type { LagretSoek, LagretSoekRequest } from './LagretSoek';
import { isLagretSoek, isPaginatedLagretSoekList } from './LagretSoek';

/**
 * Operations on the `LagretSoek` resource.
 */
export class LagretSoekResource extends Resource {
  /**
   * List all objects.
   *
   * @param query Optional query parameters.
   */
  async list(query?: ListParameters): Promise<PaginatedList<LagretSoek>> {
    const response = await this.requester.request({
      method: 'get',
      path: '/lagretSoek',
      query: query,
    });
    if (isPaginatedLagretSoekList(response)) {
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
  async delete(id: string): Promise<LagretSoek> {
    const response = await this.requester.request({
      method: 'delete',
      path: `/lagretSoek/${id}`,
    });
    if (isLagretSoek(response)) {
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
  async get(id: string, query?: GetParameters): Promise<LagretSoek> {
    const response = await this.requester.request({
      method: 'get',
      path: `/lagretSoek/${id}`,
      query: query,
    });
    if (isLagretSoek(response)) {
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
    body: Partial<LagretSoekRequest>,
  ): Promise<LagretSoek> {
    const response = await this.requester.request({
      method: 'patch',
      path: `/lagretSoek/${id}`,
      body: body,
    });
    if (isLagretSoek(response)) {
      return response;
    }
    throw new NetworkError('Unknown response type');
  }
}
