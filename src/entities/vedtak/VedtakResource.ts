// Auto-generated from our API specification
// https://github.com/felleslosninger/einnsyn-api-spec

import { Resource } from '../../common/entity/Resource';
import type { ListParameters } from '../../common/queryparameters/ListParameters';
import type { PaginatedList } from '../../common/responses/PaginatedList';
import type { Vedtak, VedtakRequest } from './Vedtak';
import { isPaginatedVedtakList, isVedtak } from './Vedtak';
import { NetworkError } from '../../common/error/EInnsynError';
import type { GetParameters } from '../../common/queryparameters/GetParameters';
import type { ListByVedtakParameters } from './ListByVedtakParameters';
import type {
  Dokumentbeskrivelse,
  DokumentbeskrivelseRequest,
} from '../dokumentbeskrivelse/Dokumentbeskrivelse';
import {
  isPaginatedDokumentbeskrivelseList,
  isDokumentbeskrivelse,
} from '../dokumentbeskrivelse/Dokumentbeskrivelse';
import type { Votering, VoteringRequest } from '../votering/Votering';
import { isPaginatedVoteringList, isVotering } from '../votering/Votering';

export class VedtakResource extends Resource {
  async list(query?: ListParameters): Promise<PaginatedList<Vedtak>> {
    const response = await this.requester.request({
      method: 'get',
      path: '/vedtak',
      query: query,
    });
    if (isPaginatedVedtakList(response)) {
      return response;
    }
    throw new NetworkError('Unknown response type');
  }

  async delete(id: string): Promise<Vedtak> {
    const response = await this.requester.request({
      method: 'delete',
      path: `/vedtak/${id}`,
    });
    if (isVedtak(response)) {
      return response;
    }
    throw new NetworkError('Unknown response type');
  }

  async get(id: string, query?: GetParameters): Promise<Vedtak> {
    const response = await this.requester.request({
      method: 'get',
      path: `/vedtak/${id}`,
      query: query,
    });
    if (isVedtak(response)) {
      return response;
    }
    throw new NetworkError('Unknown response type');
  }

  async update(id: string, body: VedtakRequest): Promise<Vedtak> {
    const response = await this.requester.request({
      method: 'patch',
      path: `/vedtak/${id}`,
      body: body,
    });
    if (isVedtak(response)) {
      return response;
    }
    throw new NetworkError('Unknown response type');
  }

  async listVedtaksdokument(
    id: string,
    query?: ListByVedtakParameters,
  ): Promise<PaginatedList<Dokumentbeskrivelse>> {
    const response = await this.requester.request({
      method: 'get',
      path: `/vedtak/${id}/vedtaksdokument`,
      query: query,
    });
    if (isPaginatedDokumentbeskrivelseList(response)) {
      return response;
    }
    throw new NetworkError('Unknown response type');
  }

  async addVedtaksdokument(
    id: string,
    body: DokumentbeskrivelseRequest | string | 'string',
  ): Promise<Dokumentbeskrivelse> {
    const response = await this.requester.request({
      method: 'post',
      path: `/vedtak/${id}/vedtaksdokument`,
      body: body,
    });
    if (isDokumentbeskrivelse(response)) {
      return response;
    }
    throw new NetworkError('Unknown response type');
  }

  async deleteVedtaksdokument(
    id: string,
    vedtaksdokumentId: string,
  ): Promise<Dokumentbeskrivelse> {
    const response = await this.requester.request({
      method: 'delete',
      path: `/vedtak/${id}/vedtaksdokument/${vedtaksdokumentId}`,
    });
    if (isDokumentbeskrivelse(response)) {
      return response;
    }
    throw new NetworkError('Unknown response type');
  }

  async listVotering(
    id: string,
    query?: ListByVedtakParameters,
  ): Promise<PaginatedList<Votering>> {
    const response = await this.requester.request({
      method: 'get',
      path: `/vedtak/${id}/votering`,
      query: query,
    });
    if (isPaginatedVoteringList(response)) {
      return response;
    }
    throw new NetworkError('Unknown response type');
  }

  async addVotering(id: string, body: VoteringRequest): Promise<Votering> {
    const response = await this.requester.request({
      method: 'post',
      path: `/vedtak/${id}/votering`,
      body: body,
    });
    if (isVotering(response)) {
      return response;
    }
    throw new NetworkError('Unknown response type');
  }
}
