// Auto-generated from our API specification
// https://github.com/felleslosninger/einnsyn-api-spec

import { Resource } from '../../common/entity/Resource';
import { NetworkError } from '../../common/error/EInnsynError';
import type { GetParameters } from '../../common/queryparameters/GetParameters';
import type { PaginatedList } from '../../common/responses/PaginatedList';
import type { ApiKey, ApiKeyRequest } from '../apikey/ApiKey';
import { isApiKey, isPaginatedApiKeyList } from '../apikey/ApiKey';
import type { Arkiv } from '../arkiv/Arkiv';
import { isPaginatedArkivList } from '../arkiv/Arkiv';
import type { Innsynskrav } from '../innsynskrav/Innsynskrav';
import { isPaginatedInnsynskravList } from '../innsynskrav/Innsynskrav';
import type { Enhet, EnhetRequest } from './Enhet';
import { isEnhet, isPaginatedEnhetList } from './Enhet';
import type { EnhetFilterParameters } from './EnhetFilterParameters';
import type { ListByEnhetParameters } from './ListByEnhetParameters';

/**
 * Operations on the `Enhet` resource.
 */
export class EnhetResource extends Resource {
  /**
   * List all enhets, with optional filtering by orgnummer or free-text query.
   *
   * @param query Optional query parameters.
   */
  async list(query?: EnhetFilterParameters): Promise<PaginatedList<Enhet>> {
    const response = await this.requester.request({
      method: 'get',
      path: '/enhet',
      query: query,
    });
    if (isPaginatedEnhetList(response)) {
      return response;
    }
    throw new NetworkError('Unknown response type');
  }

  /**
   * @param body The request body.
   */
  async add(body: EnhetRequest): Promise<Enhet> {
    const response = await this.requester.request({
      method: 'post',
      path: '/enhet',
      body: body,
    });
    if (isEnhet(response)) {
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
  async delete(id: string): Promise<Enhet> {
    const response = await this.requester.request({
      method: 'delete',
      path: `/enhet/${id}`,
    });
    if (isEnhet(response)) {
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
  async get(id: string, query?: GetParameters): Promise<Enhet> {
    const response = await this.requester.request({
      method: 'get',
      path: `/enhet/${id}`,
      query: query,
    });
    if (isEnhet(response)) {
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
  async update(id: string, body: Partial<EnhetRequest>): Promise<Enhet> {
    const response = await this.requester.request({
      method: 'patch',
      path: `/enhet/${id}`,
      body: body,
    });
    if (isEnhet(response)) {
      return response;
    }
    throw new NetworkError('Unknown response type');
  }

  /**
   * @param id The ID of the enhet.
   * @param query Optional query parameters.
   */
  async listApiKey(
    id: string,
    query?: ListByEnhetParameters,
  ): Promise<PaginatedList<ApiKey>> {
    const response = await this.requester.request({
      method: 'get',
      path: `/enhet/${id}/apiKey`,
      query: query,
    });
    if (isPaginatedApiKeyList(response)) {
      return response;
    }
    throw new NetworkError('Unknown response type');
  }

  /**
   * @param id The ID of the enhet.
   * @param body The request body.
   */
  async addApiKey(id: string, body: ApiKeyRequest): Promise<ApiKey> {
    const response = await this.requester.request({
      method: 'post',
      path: `/enhet/${id}/apiKey`,
      body: body,
    });
    if (isApiKey(response)) {
      return response;
    }
    throw new NetworkError('Unknown response type');
  }

  /**
   * @param id The ID of the enhet.
   * @param query Optional query parameters.
   */
  async listArkiv(
    id: string,
    query?: ListByEnhetParameters,
  ): Promise<PaginatedList<Arkiv>> {
    const response = await this.requester.request({
      method: 'get',
      path: `/enhet/${id}/arkiv`,
      query: query,
    });
    if (isPaginatedArkivList(response)) {
      return response;
    }
    throw new NetworkError('Unknown response type');
  }

  /**
   * @param id The ID of the enhet.
   * @param query Optional query parameters.
   */
  async listInnsynskrav(
    id: string,
    query?: ListByEnhetParameters,
  ): Promise<PaginatedList<Innsynskrav>> {
    const response = await this.requester.request({
      method: 'get',
      path: `/enhet/${id}/innsynskrav`,
      query: query,
    });
    if (isPaginatedInnsynskravList(response)) {
      return response;
    }
    throw new NetworkError('Unknown response type');
  }

  /**
   * @param id The ID of the enhet.
   * @param query Optional query parameters.
   */
  async listUnderenhet(
    id: string,
    query?: ListByEnhetParameters,
  ): Promise<PaginatedList<Enhet>> {
    const response = await this.requester.request({
      method: 'get',
      path: `/enhet/${id}/underenhet`,
      query: query,
    });
    if (isPaginatedEnhetList(response)) {
      return response;
    }
    throw new NetworkError('Unknown response type');
  }

  /**
   * @param id The ID of the enhet.
   * @param body The request body.
   */
  async addUnderenhet(
    id: string,
    body: EnhetRequest | string | 'string',
  ): Promise<Enhet> {
    const response = await this.requester.request({
      method: 'post',
      path: `/enhet/${id}/underenhet`,
      body: body,
    });
    if (isEnhet(response)) {
      return response;
    }
    throw new NetworkError('Unknown response type');
  }
}
