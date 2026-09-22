// Auto-generated from our API specification
// https://github.com/felleslosninger/einnsyn-api-spec

import { Resource } from '../../common/entity/Resource';
import { NetworkError } from '../../common/error/EInnsynError';
import type { GetParameters } from '../../common/queryparameters/GetParameters';
import type { ListParameters } from '../../common/queryparameters/ListParameters';
import type { PaginatedList } from '../../common/responses/PaginatedList';
import type {
  Behandlingsprotokoll,
  BehandlingsprotokollRequest,
} from './Behandlingsprotokoll';
import {
  isBehandlingsprotokoll,
  isPaginatedBehandlingsprotokollList,
} from './Behandlingsprotokoll';

/**
 * Operations on the `Behandlingsprotokoll` resource.
 */
export class BehandlingsprotokollResource extends Resource {
  /**
   * List all objects.
   *
   * @param query Optional query parameters.
   */
  async list(
    query?: ListParameters,
  ): Promise<PaginatedList<Behandlingsprotokoll>> {
    const response = await this.requester.request({
      method: 'get',
      path: '/behandlingsprotokoll',
      query: query,
    });
    if (isPaginatedBehandlingsprotokollList(response)) {
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
  async delete(id: string): Promise<Behandlingsprotokoll> {
    const response = await this.requester.request({
      method: 'delete',
      path: `/behandlingsprotokoll/${id}`,
    });
    if (isBehandlingsprotokoll(response)) {
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
  async get(id: string, query?: GetParameters): Promise<Behandlingsprotokoll> {
    const response = await this.requester.request({
      method: 'get',
      path: `/behandlingsprotokoll/${id}`,
      query: query,
    });
    if (isBehandlingsprotokoll(response)) {
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
    body: Partial<BehandlingsprotokollRequest>,
  ): Promise<Behandlingsprotokoll> {
    const response = await this.requester.request({
      method: 'patch',
      path: `/behandlingsprotokoll/${id}`,
      body: body,
    });
    if (isBehandlingsprotokoll(response)) {
      return response;
    }
    throw new NetworkError('Unknown response type');
  }
}
