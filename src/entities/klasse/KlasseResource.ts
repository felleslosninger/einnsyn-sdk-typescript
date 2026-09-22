// Auto-generated from our API specification
// https://github.com/felleslosninger/einnsyn-api-spec

import { Resource } from '../../common/entity/Resource';
import { NetworkError } from '../../common/error/EInnsynError';
import type { GetParameters } from '../../common/queryparameters/GetParameters';
import type { ListParameters } from '../../common/queryparameters/ListParameters';
import type { PaginatedList } from '../../common/responses/PaginatedList';
import type { Moetemappe } from '../moetemappe/Moetemappe';
import { isPaginatedMoetemappeList } from '../moetemappe/Moetemappe';
import type { Saksmappe } from '../saksmappe/Saksmappe';
import { isPaginatedSaksmappeList } from '../saksmappe/Saksmappe';
import type { Klasse, KlasseRequest } from './Klasse';
import { isKlasse, isPaginatedKlasseList } from './Klasse';
import type { ListByKlasseParameters } from './ListByKlasseParameters';

/**
 * Operations on the `Klasse` resource.
 */
export class KlasseResource extends Resource {
  /**
   * List all objects.
   *
   * @param query Optional query parameters.
   */
  async list(query?: ListParameters): Promise<PaginatedList<Klasse>> {
    const response = await this.requester.request({
      method: 'get',
      path: '/klasse',
      query: query,
    });
    if (isPaginatedKlasseList(response)) {
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
  async delete(id: string): Promise<Klasse> {
    const response = await this.requester.request({
      method: 'delete',
      path: `/klasse/${id}`,
    });
    if (isKlasse(response)) {
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
  async get(id: string, query?: GetParameters): Promise<Klasse> {
    const response = await this.requester.request({
      method: 'get',
      path: `/klasse/${id}`,
      query: query,
    });
    if (isKlasse(response)) {
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
  async update(id: string, body: Partial<KlasseRequest>): Promise<Klasse> {
    const response = await this.requester.request({
      method: 'patch',
      path: `/klasse/${id}`,
      body: body,
    });
    if (isKlasse(response)) {
      return response;
    }
    throw new NetworkError('Unknown response type');
  }

  /**
   * @param id The ID of the klasse.
   * @param query Optional query parameters.
   */
  async listKlasse(
    id: string,
    query?: ListByKlasseParameters,
  ): Promise<PaginatedList<Klasse>> {
    const response = await this.requester.request({
      method: 'get',
      path: `/klasse/${id}/klasse`,
      query: query,
    });
    if (isPaginatedKlasseList(response)) {
      return response;
    }
    throw new NetworkError('Unknown response type');
  }

  /**
   * @param id The ID of the klasse.
   * @param body The request body.
   */
  async addKlasse(id: string, body: KlasseRequest): Promise<Klasse> {
    const response = await this.requester.request({
      method: 'post',
      path: `/klasse/${id}/klasse`,
      body: body,
    });
    if (isKlasse(response)) {
      return response;
    }
    throw new NetworkError('Unknown response type');
  }

  /**
   * @param id The ID of the klasse.
   * @param query Optional query parameters.
   */
  async listMoetemappe(
    id: string,
    query?: ListByKlasseParameters,
  ): Promise<PaginatedList<Moetemappe>> {
    const response = await this.requester.request({
      method: 'get',
      path: `/klasse/${id}/moetemappe`,
      query: query,
    });
    if (isPaginatedMoetemappeList(response)) {
      return response;
    }
    throw new NetworkError('Unknown response type');
  }

  /**
   * @param id The ID of the klasse.
   * @param query Optional query parameters.
   */
  async listSaksmappe(
    id: string,
    query?: ListByKlasseParameters,
  ): Promise<PaginatedList<Saksmappe>> {
    const response = await this.requester.request({
      method: 'get',
      path: `/klasse/${id}/saksmappe`,
      query: query,
    });
    if (isPaginatedSaksmappeList(response)) {
      return response;
    }
    throw new NetworkError('Unknown response type');
  }
}
