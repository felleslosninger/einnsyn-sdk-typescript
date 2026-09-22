// Auto-generated from our API specification
// https://github.com/felleslosninger/einnsyn-api-spec

import { Resource } from '../../common/entity/Resource';
import { NetworkError } from '../../common/error/EInnsynError';
import type { GetParameters } from '../../common/queryparameters/GetParameters';
import type { ListParameters } from '../../common/queryparameters/ListParameters';
import type { PaginatedList } from '../../common/responses/PaginatedList';
import type { Moetedeltaker, MoetedeltakerRequest } from './Moetedeltaker';
import { isMoetedeltaker, isPaginatedMoetedeltakerList } from './Moetedeltaker';

/**
 * Operations on the `Moetedeltaker` resource.
 */
export class MoetedeltakerResource extends Resource {
  /**
   * List all objects.
   *
   * @param query Optional query parameters.
   */
  async list(query?: ListParameters): Promise<PaginatedList<Moetedeltaker>> {
    const response = await this.requester.request({
      method: 'get',
      path: '/moetedeltaker',
      query: query,
    });
    if (isPaginatedMoetedeltakerList(response)) {
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
  async delete(id: string): Promise<Moetedeltaker> {
    const response = await this.requester.request({
      method: 'delete',
      path: `/moetedeltaker/${id}`,
    });
    if (isMoetedeltaker(response)) {
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
  async get(id: string, query?: GetParameters): Promise<Moetedeltaker> {
    const response = await this.requester.request({
      method: 'get',
      path: `/moetedeltaker/${id}`,
      query: query,
    });
    if (isMoetedeltaker(response)) {
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
    body: Partial<MoetedeltakerRequest>,
  ): Promise<Moetedeltaker> {
    const response = await this.requester.request({
      method: 'patch',
      path: `/moetedeltaker/${id}`,
      body: body,
    });
    if (isMoetedeltaker(response)) {
      return response;
    }
    throw new NetworkError('Unknown response type');
  }
}
