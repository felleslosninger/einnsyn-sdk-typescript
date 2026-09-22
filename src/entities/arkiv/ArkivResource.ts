// Auto-generated from our API specification
// https://github.com/felleslosninger/einnsyn-api-spec

import { Resource } from '../../common/entity/Resource';
import { NetworkError } from '../../common/error/EInnsynError';
import type { GetParameters } from '../../common/queryparameters/GetParameters';
import type { ListParameters } from '../../common/queryparameters/ListParameters';
import type { PaginatedList } from '../../common/responses/PaginatedList';
import type { Arkivdel, ArkivdelRequest } from '../arkivdel/Arkivdel';
import { isArkivdel, isPaginatedArkivdelList } from '../arkivdel/Arkivdel';
import type { Arkiv, ArkivRequest } from './Arkiv';
import { isArkiv, isPaginatedArkivList } from './Arkiv';
import type { ListByArkivParameters } from './ListByArkivParameters';

/**
 * Operations on the `Arkiv` resource.
 */
export class ArkivResource extends Resource {
  /**
   * List all objects.
   *
   * @param query Optional query parameters.
   */
  async list(query?: ListParameters): Promise<PaginatedList<Arkiv>> {
    const response = await this.requester.request({
      method: 'get',
      path: '/arkiv',
      query: query,
    });
    if (isPaginatedArkivList(response)) {
      return response;
    }
    throw new NetworkError('Unknown response type');
  }

  /**
   * @param body The request body.
   */
  async add(body: ArkivRequest): Promise<Arkiv> {
    const response = await this.requester.request({
      method: 'post',
      path: '/arkiv',
      body: body,
    });
    if (isArkiv(response)) {
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
  async delete(id: string): Promise<Arkiv> {
    const response = await this.requester.request({
      method: 'delete',
      path: `/arkiv/${id}`,
    });
    if (isArkiv(response)) {
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
  async get(id: string, query?: GetParameters): Promise<Arkiv> {
    const response = await this.requester.request({
      method: 'get',
      path: `/arkiv/${id}`,
      query: query,
    });
    if (isArkiv(response)) {
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
  async update(id: string, body: Partial<ArkivRequest>): Promise<Arkiv> {
    const response = await this.requester.request({
      method: 'patch',
      path: `/arkiv/${id}`,
      body: body,
    });
    if (isArkiv(response)) {
      return response;
    }
    throw new NetworkError('Unknown response type');
  }

  /**
   * @param id The ID of the arkiv.
   * @param query Optional query parameters.
   */
  async listArkiv(
    id: string,
    query?: ListByArkivParameters,
  ): Promise<PaginatedList<Arkiv>> {
    const response = await this.requester.request({
      method: 'get',
      path: `/arkiv/${id}/arkiv`,
      query: query,
    });
    if (isPaginatedArkivList(response)) {
      return response;
    }
    throw new NetworkError('Unknown response type');
  }

  /**
   * @param id The ID of the arkiv.
   * @param body The request body.
   */
  async addArkiv(id: string, body: ArkivRequest): Promise<Arkiv> {
    const response = await this.requester.request({
      method: 'post',
      path: `/arkiv/${id}/arkiv`,
      body: body,
    });
    if (isArkiv(response)) {
      return response;
    }
    throw new NetworkError('Unknown response type');
  }

  /**
   * @param id The ID of the arkiv.
   * @param query Optional query parameters.
   */
  async listArkivdel(
    id: string,
    query?: ListByArkivParameters,
  ): Promise<PaginatedList<Arkivdel>> {
    const response = await this.requester.request({
      method: 'get',
      path: `/arkiv/${id}/arkivdel`,
      query: query,
    });
    if (isPaginatedArkivdelList(response)) {
      return response;
    }
    throw new NetworkError('Unknown response type');
  }

  /**
   * @param id The ID of the arkiv.
   * @param body The request body.
   */
  async addArkivdel(id: string, body: ArkivdelRequest): Promise<Arkivdel> {
    const response = await this.requester.request({
      method: 'post',
      path: `/arkiv/${id}/arkivdel`,
      body: body,
    });
    if (isArkivdel(response)) {
      return response;
    }
    throw new NetworkError('Unknown response type');
  }
}
