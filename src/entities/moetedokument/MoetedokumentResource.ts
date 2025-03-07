// Auto-generated from our API specification
// https://github.com/felleslosninger/einnsyn-api-spec

import { Resource } from '../../common/entity/Resource';
import type { ListParameters } from '../../common/queryparameters/ListParameters';
import type { PaginatedList } from '../../common/responses/PaginatedList';
import type { Moetedokument, MoetedokumentRequest } from './Moetedokument';
import { isPaginatedMoetedokumentList, isMoetedokument } from './Moetedokument';
import { NetworkError } from '../../common/error/EInnsynError';
import type { GetParameters } from '../../common/queryparameters/GetParameters';
import type { ListByMoetedokumentParameters } from './ListByMoetedokumentParameters';
import type {
  Dokumentbeskrivelse,
  DokumentbeskrivelseRequest,
} from '../dokumentbeskrivelse/Dokumentbeskrivelse';
import {
  isPaginatedDokumentbeskrivelseList,
  isDokumentbeskrivelse,
} from '../dokumentbeskrivelse/Dokumentbeskrivelse';

export class MoetedokumentResource extends Resource {
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

  async update(id: string, body: MoetedokumentRequest): Promise<Moetedokument> {
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
}
