// Auto-generated from our API specification
// https://github.com/felleslosninger/einnsyn-api-spec

import { Resource } from '../../common/entity/Resource';
import type { ListParameters } from '../../common/queryparameters/ListParameters';
import type { PaginatedList } from '../../common/responses/PaginatedList';
import type { Utredning, UtredningRequest } from './Utredning';
import { isPaginatedUtredningList, isUtredning } from './Utredning';
import { NetworkError } from '../../common/error/EInnsynError';
import type { GetParameters } from '../../common/queryparameters/GetParameters';
import type { ListByUtredningParameters } from './ListByUtredningParameters';
import type {
  Dokumentbeskrivelse,
  DokumentbeskrivelseRequest,
} from '../dokumentbeskrivelse/Dokumentbeskrivelse';
import {
  isPaginatedDokumentbeskrivelseList,
  isDokumentbeskrivelse,
} from '../dokumentbeskrivelse/Dokumentbeskrivelse';

export class UtredningResource extends Resource {
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
