// Auto-generated from our API specification
// https://github.com/felleslosninger/einnsyn-api-spec

import { Resource } from '../../common/entity/Resource';
import { NetworkError } from '../../common/error/EInnsynError';
import type { GetParameters } from '../../common/queryparameters/GetParameters';
import type { ListParameters } from '../../common/queryparameters/ListParameters';
import type { PaginatedList } from '../../common/responses/PaginatedList';
import type { Dokumentobjekt, DokumentobjektRequest } from './Dokumentobjekt';
import {
  isDokumentobjekt,
  isPaginatedDokumentobjektList,
} from './Dokumentobjekt';

/**
 * Operations on the `Dokumentobjekt` resource.
 */
export class DokumentobjektResource extends Resource {
  /**
   * List all objects.
   *
   * @param query Optional query parameters.
   */
  async list(query?: ListParameters): Promise<PaginatedList<Dokumentobjekt>> {
    const response = await this.requester.request({
      method: 'get',
      path: '/dokumentobjekt',
      query: query,
    });
    if (isPaginatedDokumentobjektList(response)) {
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
  async delete(id: string): Promise<Dokumentobjekt> {
    const response = await this.requester.request({
      method: 'delete',
      path: `/dokumentobjekt/${id}`,
    });
    if (isDokumentobjekt(response)) {
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
  async get(id: string, query?: GetParameters): Promise<Dokumentobjekt> {
    const response = await this.requester.request({
      method: 'get',
      path: `/dokumentobjekt/${id}`,
      query: query,
    });
    if (isDokumentobjekt(response)) {
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
    body: Partial<DokumentobjektRequest>,
  ): Promise<Dokumentobjekt> {
    const response = await this.requester.request({
      method: 'patch',
      path: `/dokumentobjekt/${id}`,
      body: body,
    });
    if (isDokumentobjekt(response)) {
      return response;
    }
    throw new NetworkError('Unknown response type');
  }
}
