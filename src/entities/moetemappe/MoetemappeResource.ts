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
} from '../matrikkelnummer/Matrikkelnummer';
import {
  isMatrikkelnummer,
  isPaginatedMatrikkelnummerList,
} from '../matrikkelnummer/Matrikkelnummer';
import type {
  Moetedokument,
  MoetedokumentRequest,
} from '../moetedokument/Moetedokument';
import {
  isMoetedokument,
  isPaginatedMoetedokumentList,
} from '../moetedokument/Moetedokument';
import type { Moetesak, MoetesakRequest } from '../moetesak/Moetesak';
import { isMoetesak, isPaginatedMoetesakList } from '../moetesak/Moetesak';
import type { ListByMoetemappeParameters } from './ListByMoetemappeParameters';
import type { Moetemappe, MoetemappeRequest } from './Moetemappe';
import { isMoetemappe, isPaginatedMoetemappeList } from './Moetemappe';

/**
 * Operations on the `Moetemappe` resource.
 */
export class MoetemappeResource extends Resource {
  /**
   * List all objects.
   *
   * @param query Optional query parameters.
   */
  async list(query?: ListParameters): Promise<PaginatedList<Moetemappe>> {
    const response = await this.requester.request({
      method: 'get',
      path: '/moetemappe',
      query: query,
    });
    if (isPaginatedMoetemappeList(response)) {
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
  async delete(id: string): Promise<Moetemappe> {
    const response = await this.requester.request({
      method: 'delete',
      path: `/moetemappe/${id}`,
    });
    if (isMoetemappe(response)) {
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
  async get(id: string, query?: GetParameters): Promise<Moetemappe> {
    const response = await this.requester.request({
      method: 'get',
      path: `/moetemappe/${id}`,
      query: query,
    });
    if (isMoetemappe(response)) {
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
    body: Partial<MoetemappeRequest>,
  ): Promise<Moetemappe> {
    const response = await this.requester.request({
      method: 'patch',
      path: `/moetemappe/${id}`,
      body: body,
    });
    if (isMoetemappe(response)) {
      return response;
    }
    throw new NetworkError('Unknown response type');
  }

  /**
   * @param id The ID of the moetemappe.
   * @param query Optional query parameters.
   */
  async listMatrikkelnummer(
    id: string,
    query?: ListByMoetemappeParameters,
  ): Promise<PaginatedList<Matrikkelnummer>> {
    const response = await this.requester.request({
      method: 'get',
      path: `/moetemappe/${id}/matrikkelnummer`,
      query: query,
    });
    if (isPaginatedMatrikkelnummerList(response)) {
      return response;
    }
    throw new NetworkError('Unknown response type');
  }

  /**
   * @param id The ID of the moetemappe.
   * @param body The request body.
   */
  async addMatrikkelnummer(
    id: string,
    body: MatrikkelnummerRequest,
  ): Promise<Matrikkelnummer> {
    const response = await this.requester.request({
      method: 'post',
      path: `/moetemappe/${id}/matrikkelnummer`,
      body: body,
    });
    if (isMatrikkelnummer(response)) {
      return response;
    }
    throw new NetworkError('Unknown response type');
  }

  /**
   * @param id The ID of the moetemappe.
   * @param query Optional query parameters.
   */
  async listMoetedokument(
    id: string,
    query?: ListByMoetemappeParameters,
  ): Promise<PaginatedList<Moetedokument>> {
    const response = await this.requester.request({
      method: 'get',
      path: `/moetemappe/${id}/moetedokument`,
      query: query,
    });
    if (isPaginatedMoetedokumentList(response)) {
      return response;
    }
    throw new NetworkError('Unknown response type');
  }

  /**
   * @param id The ID of the moetemappe.
   * @param body The request body.
   */
  async addMoetedokument(
    id: string,
    body: MoetedokumentRequest,
  ): Promise<Moetedokument> {
    const response = await this.requester.request({
      method: 'post',
      path: `/moetemappe/${id}/moetedokument`,
      body: body,
    });
    if (isMoetedokument(response)) {
      return response;
    }
    throw new NetworkError('Unknown response type');
  }

  /**
   * @param id The ID of the moetemappe.
   * @param query Optional query parameters.
   */
  async listMoetesak(
    id: string,
    query?: ListByMoetemappeParameters,
  ): Promise<PaginatedList<Moetesak>> {
    const response = await this.requester.request({
      method: 'get',
      path: `/moetemappe/${id}/moetesak`,
      query: query,
    });
    if (isPaginatedMoetesakList(response)) {
      return response;
    }
    throw new NetworkError('Unknown response type');
  }

  /**
   * @param id The ID of the moetemappe.
   * @param body The request body.
   */
  async addMoetesak(id: string, body: MoetesakRequest): Promise<Moetesak> {
    const response = await this.requester.request({
      method: 'post',
      path: `/moetemappe/${id}/moetesak`,
      body: body,
    });
    if (isMoetesak(response)) {
      return response;
    }
    throw new NetworkError('Unknown response type');
  }
}
