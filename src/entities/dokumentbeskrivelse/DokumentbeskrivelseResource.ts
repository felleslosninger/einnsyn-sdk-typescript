// Auto-generated from our API specification
// https://github.com/felleslosninger/einnsyn-api-spec

import { Resource } from '../../common/entity/Resource';
import { NetworkError } from '../../common/error/EInnsynError';
import type { GetParameters } from '../../common/queryparameters/GetParameters';
import type { ListParameters } from '../../common/queryparameters/ListParameters';
import type { PaginatedList } from '../../common/responses/PaginatedList';
import type {
  Dokumentobjekt,
  DokumentobjektRequest,
} from '../dokumentobjekt/Dokumentobjekt';
import { isDokumentobjekt } from '../dokumentobjekt/Dokumentobjekt';
import type {
  Dokumentbeskrivelse,
  DokumentbeskrivelseRequest,
} from './Dokumentbeskrivelse';
import {
  isDokumentbeskrivelse,
  isPaginatedDokumentbeskrivelseList,
} from './Dokumentbeskrivelse';

/**
 * Operations on the `Dokumentbeskrivelse` resource.
 */
export class DokumentbeskrivelseResource extends Resource {
  /**
   * List all objects.
   *
   * @param query Optional query parameters.
   */
  async list(
    query?: ListParameters,
  ): Promise<PaginatedList<Dokumentbeskrivelse>> {
    const response = await this.requester.request({
      method: 'get',
      path: '/dokumentbeskrivelse',
      query: query,
    });
    if (isPaginatedDokumentbeskrivelseList(response)) {
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
  async delete(id: string): Promise<Dokumentbeskrivelse> {
    const response = await this.requester.request({
      method: 'delete',
      path: `/dokumentbeskrivelse/${id}`,
    });
    if (isDokumentbeskrivelse(response)) {
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
  async get(id: string, query?: GetParameters): Promise<Dokumentbeskrivelse> {
    const response = await this.requester.request({
      method: 'get',
      path: `/dokumentbeskrivelse/${id}`,
      query: query,
    });
    if (isDokumentbeskrivelse(response)) {
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
    body: Partial<DokumentbeskrivelseRequest>,
  ): Promise<Dokumentbeskrivelse> {
    const response = await this.requester.request({
      method: 'patch',
      path: `/dokumentbeskrivelse/${id}`,
      body: body,
    });
    if (isDokumentbeskrivelse(response)) {
      return response;
    }
    throw new NetworkError('Unknown response type');
  }

  /**
   * @param id The ID of the dokumentbeskrivelse.
   * @param body The request body.
   */
  async addDokumentobjekt(
    id: string,
    body: DokumentobjektRequest | string | 'string',
  ): Promise<Dokumentobjekt> {
    const response = await this.requester.request({
      method: 'post',
      path: `/dokumentbeskrivelse/${id}/dokumentobjekt`,
      body: body,
    });
    if (isDokumentobjekt(response)) {
      return response;
    }
    throw new NetworkError('Unknown response type');
  }
}
