// Auto-generated from our API specification
// https://github.com/felleslosninger/einnsyn-api-spec

import { Resource } from '../../common/entity/Resource';
import { NetworkError } from '../../common/error/EInnsynError';
import type { GetParameters } from '../../common/queryparameters/GetParameters';
import type { ListParameters } from '../../common/queryparameters/ListParameters';
import type { PaginatedList } from '../../common/responses/PaginatedList';
import type {
  Matrikkelnummer,
  MatrikkelnummerRequest,
} from './Matrikkelnummer';
import {
  isMatrikkelnummer,
  isPaginatedMatrikkelnummerList,
} from './Matrikkelnummer';

/**
 * Operations on the `Matrikkelnummer` resource.
 */
export class MatrikkelnummerResource extends Resource {
  /**
   * List all objects.
   *
   * @param query Optional query parameters.
   */
  async list(query?: ListParameters): Promise<PaginatedList<Matrikkelnummer>> {
    const response = await this.requester.request({
      method: 'get',
      path: '/matrikkelnummer',
      query: query,
    });
    if (isPaginatedMatrikkelnummerList(response)) {
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
  async delete(id: string): Promise<Matrikkelnummer> {
    const response = await this.requester.request({
      method: 'delete',
      path: `/matrikkelnummer/${id}`,
    });
    if (isMatrikkelnummer(response)) {
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
  async get(id: string, query?: GetParameters): Promise<Matrikkelnummer> {
    const response = await this.requester.request({
      method: 'get',
      path: `/matrikkelnummer/${id}`,
      query: query,
    });
    if (isMatrikkelnummer(response)) {
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
    body: Partial<MatrikkelnummerRequest>,
  ): Promise<Matrikkelnummer> {
    const response = await this.requester.request({
      method: 'patch',
      path: `/matrikkelnummer/${id}`,
      body: body,
    });
    if (isMatrikkelnummer(response)) {
      return response;
    }
    throw new NetworkError('Unknown response type');
  }
}
