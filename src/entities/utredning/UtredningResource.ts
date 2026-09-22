// Auto-generated from our API specification
// https://github.com/felleslosninger/einnsyn-api-spec

import { Resource } from '../../common/entity/Resource';
import { NetworkError } from '../../common/error/EInnsynError';
import type { GetParameters } from '../../common/queryparameters/GetParameters';
import type { ListParameters } from '../../common/queryparameters/ListParameters';
import type { PaginatedList } from '../../common/responses/PaginatedList';
import type {
  Dokumentbeskrivelse,
  DokumentbeskrivelseRequest,
} from '../dokumentbeskrivelse/Dokumentbeskrivelse';
import {
  isDokumentbeskrivelse,
  isPaginatedDokumentbeskrivelseList,
} from '../dokumentbeskrivelse/Dokumentbeskrivelse';
import type { ListByUtredningParameters } from './ListByUtredningParameters';
import type { Utredning, UtredningRequest } from './Utredning';
import { isPaginatedUtredningList, isUtredning } from './Utredning';

/**
 * Operations on the `Utredning` resource.
 */
export class UtredningResource extends Resource {
  /**
   * List all objects.
   *
   * @param query Optional query parameters.
   */
  async list(query?: ListParameters): Promise<PaginatedList<Utredning>> {
    const response = await this.requester.request({
      method: 'get',
      path: '/utredning',
      query: query,
    });
    if (isPaginatedUtredningList(response)) {
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
  async delete(id: string): Promise<Utredning> {
    const response = await this.requester.request({
      method: 'delete',
      path: `/utredning/${id}`,
    });
    if (isUtredning(response)) {
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
  async get(id: string, query?: GetParameters): Promise<Utredning> {
    const response = await this.requester.request({
      method: 'get',
      path: `/utredning/${id}`,
      query: query,
    });
    if (isUtredning(response)) {
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
    body: Partial<UtredningRequest>,
  ): Promise<Utredning> {
    const response = await this.requester.request({
      method: 'patch',
      path: `/utredning/${id}`,
      body: body,
    });
    if (isUtredning(response)) {
      return response;
    }
    throw new NetworkError('Unknown response type');
  }

  /**
   * @param id The ID of the utredning.
   * @param query Optional query parameters.
   */
  async listUtredningsdokument(
    id: string,
    query?: ListByUtredningParameters,
  ): Promise<PaginatedList<Dokumentbeskrivelse>> {
    const response = await this.requester.request({
      method: 'get',
      path: `/utredning/${id}/utredningsdokument`,
      query: query,
    });
    if (isPaginatedDokumentbeskrivelseList(response)) {
      return response;
    }
    throw new NetworkError('Unknown response type');
  }

  /**
   * @param id The ID of the utredning.
   * @param body The request body.
   */
  async addUtredningsdokument(
    id: string,
    body: DokumentbeskrivelseRequest | string | 'string',
  ): Promise<Dokumentbeskrivelse> {
    const response = await this.requester.request({
      method: 'post',
      path: `/utredning/${id}/utredningsdokument`,
      body: body,
    });
    if (isDokumentbeskrivelse(response)) {
      return response;
    }
    throw new NetworkError('Unknown response type');
  }

  /**
   * @param id The ID of the utredning.
   * @param utredningsdokumentId The ID of the utredningsdokument.
   */
  async deleteUtredningsdokument(
    id: string,
    utredningsdokumentId: string,
  ): Promise<Dokumentbeskrivelse> {
    const response = await this.requester.request({
      method: 'delete',
      path: `/utredning/${id}/utredningsdokument/${utredningsdokumentId}`,
    });
    if (isDokumentbeskrivelse(response)) {
      return response;
    }
    throw new NetworkError('Unknown response type');
  }
}
