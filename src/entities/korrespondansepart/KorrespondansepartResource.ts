// Auto-generated from our API specification
// https://github.com/felleslosninger/einnsyn-api-spec

import { Resource } from '../../common/entity/Resource';
import { NetworkError } from '../../common/error/EInnsynError';
import type { GetParameters } from '../../common/queryparameters/GetParameters';
import type { ListParameters } from '../../common/queryparameters/ListParameters';
import type { PaginatedList } from '../../common/responses/PaginatedList';
import type {
  Korrespondansepart,
  KorrespondansepartRequest,
} from './Korrespondansepart';
import {
  isKorrespondansepart,
  isPaginatedKorrespondansepartList,
} from './Korrespondansepart';

/**
 * Operations on the `Korrespondansepart` resource.
 */
export class KorrespondansepartResource extends Resource {
  /**
   * List all objects.
   *
   * @param query Optional query parameters.
   */
  async list(
    query?: ListParameters,
  ): Promise<PaginatedList<Korrespondansepart>> {
    const response = await this.requester.request({
      method: 'get',
      path: '/korrespondansepart',
      query: query,
    });
    if (isPaginatedKorrespondansepartList(response)) {
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
  async delete(id: string): Promise<Korrespondansepart> {
    const response = await this.requester.request({
      method: 'delete',
      path: `/korrespondansepart/${id}`,
    });
    if (isKorrespondansepart(response)) {
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
  async get(id: string, query?: GetParameters): Promise<Korrespondansepart> {
    const response = await this.requester.request({
      method: 'get',
      path: `/korrespondansepart/${id}`,
      query: query,
    });
    if (isKorrespondansepart(response)) {
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
    body: Partial<KorrespondansepartRequest>,
  ): Promise<Korrespondansepart> {
    const response = await this.requester.request({
      method: 'patch',
      path: `/korrespondansepart/${id}`,
      body: body,
    });
    if (isKorrespondansepart(response)) {
      return response;
    }
    throw new NetworkError('Unknown response type');
  }
}
