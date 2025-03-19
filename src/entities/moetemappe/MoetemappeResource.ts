// Auto-generated from our API specification
// https://github.com/felleslosninger/einnsyn-api-spec

import { Resource } from '../../common/entity/Resource';
import type { ListParameters } from '../../common/queryparameters/ListParameters';
import type { PaginatedList } from '../../common/responses/PaginatedList';
import type { Moetemappe, MoetemappeRequest } from './Moetemappe';
import { isPaginatedMoetemappeList, isMoetemappe } from './Moetemappe';
import { NetworkError } from '../../common/error/EInnsynError';
import type { GetParameters } from '../../common/queryparameters/GetParameters';
import type { ListByMoetemappeParameters } from './ListByMoetemappeParameters';
import type {
  Moetedokument,
  MoetedokumentRequest,
} from '../moetedokument/Moetedokument';
import {
  isPaginatedMoetedokumentList,
  isMoetedokument,
} from '../moetedokument/Moetedokument';
import type { Moetesak, MoetesakRequest } from '../moetesak/Moetesak';
import { isPaginatedMoetesakList, isMoetesak } from '../moetesak/Moetesak';

export class MoetemappeResource extends Resource {
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
