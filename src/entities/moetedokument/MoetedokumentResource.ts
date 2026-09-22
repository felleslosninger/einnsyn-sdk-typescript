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
import type {
  Matrikkelnummer,
  MatrikkelnummerRequest,
} from '../matrikkelnummer/Matrikkelnummer';
import {
  isMatrikkelnummer,
  isPaginatedMatrikkelnummerList,
} from '../matrikkelnummer/Matrikkelnummer';
import type { ListByMoetedokumentParameters } from './ListByMoetedokumentParameters';
import type { Moetedokument, MoetedokumentRequest } from './Moetedokument';
import { isMoetedokument, isPaginatedMoetedokumentList } from './Moetedokument';

/**
 * Operations on the `Moetedokument` resource.
 */
export class MoetedokumentResource extends Resource {
  /**
   * List all objects.
   *
   * @param query Optional query parameters.
   */
  async list(query?: ListParameters): Promise<PaginatedList<Moetedokument>> {
    const response = await this.requester.request({
      method: 'get',
      path: '/moetedokument',
      query: query,
    });
    if (isPaginatedMoetedokumentList(response)) {
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
  async delete(id: string): Promise<Moetedokument> {
    const response = await this.requester.request({
      method: 'delete',
      path: `/moetedokument/${id}`,
    });
    if (isMoetedokument(response)) {
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
  async get(id: string, query?: GetParameters): Promise<Moetedokument> {
    const response = await this.requester.request({
      method: 'get',
      path: `/moetedokument/${id}`,
      query: query,
    });
    if (isMoetedokument(response)) {
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
    body: Partial<MoetedokumentRequest>,
  ): Promise<Moetedokument> {
    const response = await this.requester.request({
      method: 'patch',
      path: `/moetedokument/${id}`,
      body: body,
    });
    if (isMoetedokument(response)) {
      return response;
    }
    throw new NetworkError('Unknown response type');
  }

  /**
   * @param id The ID of the moetedokument.
   * @param query Optional query parameters.
   */
  async listDokumentbeskrivelse(
    id: string,
    query?: ListByMoetedokumentParameters,
  ): Promise<PaginatedList<Dokumentbeskrivelse>> {
    const response = await this.requester.request({
      method: 'get',
      path: `/moetedokument/${id}/dokumentbeskrivelse`,
      query: query,
    });
    if (isPaginatedDokumentbeskrivelseList(response)) {
      return response;
    }
    throw new NetworkError('Unknown response type');
  }

  /**
   * @param id The ID of the moetedokument.
   * @param body The request body.
   */
  async addDokumentbeskrivelse(
    id: string,
    body: DokumentbeskrivelseRequest | string | 'string',
  ): Promise<Dokumentbeskrivelse> {
    const response = await this.requester.request({
      method: 'post',
      path: `/moetedokument/${id}/dokumentbeskrivelse`,
      body: body,
    });
    if (isDokumentbeskrivelse(response)) {
      return response;
    }
    throw new NetworkError('Unknown response type');
  }

  /**
   * @param id The ID of the moetedokument.
   * @param dokumentbeskrivelseId The ID of the dokumentbeskrivelse.
   */
  async deleteDokumentbeskrivelse(
    id: string,
    dokumentbeskrivelseId: string,
  ): Promise<Dokumentbeskrivelse> {
    const response = await this.requester.request({
      method: 'delete',
      path: `/moetedokument/${id}/dokumentbeskrivelse/${dokumentbeskrivelseId}`,
    });
    if (isDokumentbeskrivelse(response)) {
      return response;
    }
    throw new NetworkError('Unknown response type');
  }

  /**
   * @param id The ID of the moetedokument.
   * @param query Optional query parameters.
   */
  async listMatrikkelnummer(
    id: string,
    query?: ListByMoetedokumentParameters,
  ): Promise<PaginatedList<Matrikkelnummer>> {
    const response = await this.requester.request({
      method: 'get',
      path: `/moetedokument/${id}/matrikkelnummer`,
      query: query,
    });
    if (isPaginatedMatrikkelnummerList(response)) {
      return response;
    }
    throw new NetworkError('Unknown response type');
  }

  /**
   * @param id The ID of the moetedokument.
   * @param body The request body.
   */
  async addMatrikkelnummer(
    id: string,
    body: MatrikkelnummerRequest,
  ): Promise<Matrikkelnummer> {
    const response = await this.requester.request({
      method: 'post',
      path: `/moetedokument/${id}/matrikkelnummer`,
      body: body,
    });
    if (isMatrikkelnummer(response)) {
      return response;
    }
    throw new NetworkError('Unknown response type');
  }
}
