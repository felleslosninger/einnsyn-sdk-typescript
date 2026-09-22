// Auto-generated from our API specification
// https://github.com/felleslosninger/einnsyn-api-spec

import { Resource } from '../../common/entity/Resource';
import { NetworkError } from '../../common/error/EInnsynError';
import type { GetParameters } from '../../common/queryparameters/GetParameters';
import type { ListParameters } from '../../common/queryparameters/ListParameters';
import type { PaginatedList } from '../../common/responses/PaginatedList';
import type { Votering, VoteringRequest } from './Votering';
import { isPaginatedVoteringList, isVotering } from './Votering';

/**
 * Operations on the `Votering` resource.
 */
export class VoteringResource extends Resource {
  /**
   * List all objects.
   *
   * @param query Optional query parameters.
   */
  async list(query?: ListParameters): Promise<PaginatedList<Votering>> {
    const response = await this.requester.request({
      method: 'get',
      path: '/votering',
      query: query,
    });
    if (isPaginatedVoteringList(response)) {
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
  async delete(id: string): Promise<Votering> {
    const response = await this.requester.request({
      method: 'delete',
      path: `/votering/${id}`,
    });
    if (isVotering(response)) {
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
  async get(id: string, query?: GetParameters): Promise<Votering> {
    const response = await this.requester.request({
      method: 'get',
      path: `/votering/${id}`,
      query: query,
    });
    if (isVotering(response)) {
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
  async update(id: string, body: Partial<VoteringRequest>): Promise<Votering> {
    const response = await this.requester.request({
      method: 'patch',
      path: `/votering/${id}`,
      body: body,
    });
    if (isVotering(response)) {
      return response;
    }
    throw new NetworkError('Unknown response type');
  }
}
