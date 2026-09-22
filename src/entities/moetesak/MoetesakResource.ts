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
import type { Utredning, UtredningRequest } from '../utredning/Utredning';
import { isUtredning } from '../utredning/Utredning';
import type { Vedtak, VedtakRequest } from '../vedtak/Vedtak';
import { isVedtak } from '../vedtak/Vedtak';
import type { GetByMoetesakParameters } from './GetByMoetesakParameters';
import type { ListByMoetesakParameters } from './ListByMoetesakParameters';
import type { Moetesak, MoetesakRequest } from './Moetesak';
import { isMoetesak, isPaginatedMoetesakList } from './Moetesak';

/**
 * Operations on the `Moetesak` resource.
 */
export class MoetesakResource extends Resource {
  /**
   * List all objects.
   *
   * @param query Optional query parameters.
   */
  async list(query?: ListParameters): Promise<PaginatedList<Moetesak>> {
    const response = await this.requester.request({
      method: 'get',
      path: '/moetesak',
      query: query,
    });
    if (isPaginatedMoetesakList(response)) {
      return response;
    }
    throw new NetworkError('Unknown response type');
  }

  /**
   * @param body The request body.
   */
  async add(body: MoetesakRequest): Promise<Moetesak> {
    const response = await this.requester.request({
      method: 'post',
      path: '/moetesak',
      body: body,
    });
    if (isMoetesak(response)) {
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
  async delete(id: string): Promise<Moetesak> {
    const response = await this.requester.request({
      method: 'delete',
      path: `/moetesak/${id}`,
    });
    if (isMoetesak(response)) {
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
  async get(id: string, query?: GetParameters): Promise<Moetesak> {
    const response = await this.requester.request({
      method: 'get',
      path: `/moetesak/${id}`,
      query: query,
    });
    if (isMoetesak(response)) {
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
  async update(id: string, body: Partial<MoetesakRequest>): Promise<Moetesak> {
    const response = await this.requester.request({
      method: 'patch',
      path: `/moetesak/${id}`,
      body: body,
    });
    if (isMoetesak(response)) {
      return response;
    }
    throw new NetworkError('Unknown response type');
  }

  /**
   * @param id The ID of the moetesak.
   * @param query Optional query parameters.
   */
  async listDokumentbeskrivelse(
    id: string,
    query?: ListByMoetesakParameters,
  ): Promise<PaginatedList<Dokumentbeskrivelse>> {
    const response = await this.requester.request({
      method: 'get',
      path: `/moetesak/${id}/dokumentbeskrivelse`,
      query: query,
    });
    if (isPaginatedDokumentbeskrivelseList(response)) {
      return response;
    }
    throw new NetworkError('Unknown response type');
  }

  /**
   * @param id The ID of the moetesak.
   * @param body The request body.
   */
  async addDokumentbeskrivelse(
    id: string,
    body: DokumentbeskrivelseRequest | string | 'string',
  ): Promise<Dokumentbeskrivelse> {
    const response = await this.requester.request({
      method: 'post',
      path: `/moetesak/${id}/dokumentbeskrivelse`,
      body: body,
    });
    if (isDokumentbeskrivelse(response)) {
      return response;
    }
    throw new NetworkError('Unknown response type');
  }

  /**
   * @param id The ID of the moetesak.
   * @param dokumentbeskrivelseId The ID of the dokumentbeskrivelse.
   */
  async deleteDokumentbeskrivelse(
    id: string,
    dokumentbeskrivelseId: string,
  ): Promise<Dokumentbeskrivelse> {
    const response = await this.requester.request({
      method: 'delete',
      path: `/moetesak/${id}/dokumentbeskrivelse/${dokumentbeskrivelseId}`,
    });
    if (isDokumentbeskrivelse(response)) {
      return response;
    }
    throw new NetworkError('Unknown response type');
  }

  /**
   * @param id The ID of the moetesak.
   * @param query Optional query parameters.
   */
  async listMatrikkelnummer(
    id: string,
    query?: ListByMoetesakParameters,
  ): Promise<PaginatedList<Matrikkelnummer>> {
    const response = await this.requester.request({
      method: 'get',
      path: `/moetesak/${id}/matrikkelnummer`,
      query: query,
    });
    if (isPaginatedMatrikkelnummerList(response)) {
      return response;
    }
    throw new NetworkError('Unknown response type');
  }

  /**
   * @param id The ID of the moetesak.
   * @param body The request body.
   */
  async addMatrikkelnummer(
    id: string,
    body: MatrikkelnummerRequest,
  ): Promise<Matrikkelnummer> {
    const response = await this.requester.request({
      method: 'post',
      path: `/moetesak/${id}/matrikkelnummer`,
      body: body,
    });
    if (isMatrikkelnummer(response)) {
      return response;
    }
    throw new NetworkError('Unknown response type');
  }

  /**
   * @param id The ID of the moetesak.
   * @param query Optional query parameters.
   */
  async getUtredning(
    id: string,
    query?: GetByMoetesakParameters,
  ): Promise<Utredning> {
    const response = await this.requester.request({
      method: 'get',
      path: `/moetesak/${id}/utredning`,
      query: query,
    });
    if (isUtredning(response)) {
      return response;
    }
    throw new NetworkError('Unknown response type');
  }

  /**
   * @param id The ID of the moetesak.
   * @param body The request body.
   */
  async addUtredning(id: string, body: UtredningRequest): Promise<Utredning> {
    const response = await this.requester.request({
      method: 'post',
      path: `/moetesak/${id}/utredning`,
      body: body,
    });
    if (isUtredning(response)) {
      return response;
    }
    throw new NetworkError('Unknown response type');
  }

  /**
   * @param id The ID of the moetesak.
   * @param query Optional query parameters.
   */
  async getVedtak(
    id: string,
    query?: GetByMoetesakParameters,
  ): Promise<Vedtak> {
    const response = await this.requester.request({
      method: 'get',
      path: `/moetesak/${id}/vedtak`,
      query: query,
    });
    if (isVedtak(response)) {
      return response;
    }
    throw new NetworkError('Unknown response type');
  }

  /**
   * @param id The ID of the moetesak.
   * @param body The request body.
   */
  async addVedtak(id: string, body: VedtakRequest): Promise<Vedtak> {
    const response = await this.requester.request({
      method: 'post',
      path: `/moetesak/${id}/vedtak`,
      body: body,
    });
    if (isVedtak(response)) {
      return response;
    }
    throw new NetworkError('Unknown response type');
  }
}
