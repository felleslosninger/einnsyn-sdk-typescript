// Auto-generated from our API specification
// https://github.com/felleslosninger/einnsyn-api-spec

import { Resource } from '../../common/entity/Resource';
import { NetworkError } from '../../common/error/EInnsynError';
import type { GetParameters } from '../../common/queryparameters/GetParameters';
import type { ListParameters } from '../../common/queryparameters/ListParameters';
import type { PaginatedList } from '../../common/responses/PaginatedList';
import type { Innsynskrav, InnsynskravRequest } from './Innsynskrav';
import { isInnsynskrav, isPaginatedInnsynskravList } from './Innsynskrav';

/**
 * Operations on the `Innsynskrav` resource.
 */
export class InnsynskravResource extends Resource {
  /**
   * List all objects.
   *
   * @param query Optional query parameters.
   */
  async list(query?: ListParameters): Promise<PaginatedList<Innsynskrav>> {
    const response = await this.requester.request({
      method: 'get',
      path: '/innsynskrav',
      query: query,
    });
    if (isPaginatedInnsynskravList(response)) {
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
  async delete(id: string): Promise<Innsynskrav> {
    const response = await this.requester.request({
      method: 'delete',
      path: `/innsynskrav/${id}`,
    });
    if (isInnsynskrav(response)) {
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
  async get(id: string, query?: GetParameters): Promise<Innsynskrav> {
    const response = await this.requester.request({
      method: 'get',
      path: `/innsynskrav/${id}`,
      query: query,
    });
    if (isInnsynskrav(response)) {
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
    body: Partial<InnsynskravRequest>,
  ): Promise<Innsynskrav> {
    const response = await this.requester.request({
      method: 'patch',
      path: `/innsynskrav/${id}`,
      body: body,
    });
    if (isInnsynskrav(response)) {
      return response;
    }
    throw new NetworkError('Unknown response type');
  }
}
