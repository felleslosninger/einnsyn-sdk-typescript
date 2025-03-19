// Auto-generated from our API specification
// https://github.com/felleslosninger/einnsyn-api-spec

import { Resource } from '../../common/entity/Resource';
import type { ListParameters } from '../../common/queryparameters/ListParameters';
import type { PaginatedList } from '../../common/responses/PaginatedList';
import type { Moetesak, MoetesakRequest } from './Moetesak';
import { isPaginatedMoetesakList, isMoetesak } from './Moetesak';
import { NetworkError } from '../../common/error/EInnsynError';
import type { GetParameters } from '../../common/queryparameters/GetParameters';
import type { ListByMoetesakParameters } from './ListByMoetesakParameters';
import type {
  Dokumentbeskrivelse,
  DokumentbeskrivelseRequest,
} from '../dokumentbeskrivelse/Dokumentbeskrivelse';
import {
  isPaginatedDokumentbeskrivelseList,
  isDokumentbeskrivelse,
} from '../dokumentbeskrivelse/Dokumentbeskrivelse';
import type { GetByMoetesakParameters } from './GetByMoetesakParameters';
import type { Utredning, UtredningRequest } from '../utredning/Utredning';
import { isUtredning } from '../utredning/Utredning';
import type { Vedtak, VedtakRequest } from '../vedtak/Vedtak';
import { isVedtak } from '../vedtak/Vedtak';

export class MoetesakResource extends Resource {
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
