// Auto-generated from our API specification
// https://github.com/felleslosninger/einnsyn-api-spec

import { Resource } from '../../common/entity/Resource';
import type { ListParameters } from '../../common/queryparameters/ListParameters';
import type { PaginatedList } from '../../common/responses/PaginatedList';
import type { Saksmappe, SaksmappeRequest } from './Saksmappe';
import { isPaginatedSaksmappeList, isSaksmappe } from './Saksmappe';
import { NetworkError } from '../../common/error/EInnsynError';
import type { GetParameters } from '../../common/queryparameters/GetParameters';
import type { ListBySaksmappeParameters } from './ListBySaksmappeParameters';
import type {
  Journalpost,
  JournalpostRequest,
} from '../journalpost/Journalpost';
import {
  isPaginatedJournalpostList,
  isJournalpost,
} from '../journalpost/Journalpost';

export class SaksmappeResource extends Resource {
  async list(query?: ListParameters): Promise<PaginatedList<Saksmappe>> {
    const response = await this.requester.request({
      method: 'get',
      path: '/saksmappe',
      query: query,
    });
    if (isPaginatedSaksmappeList(response)) {
      return response;
    }
    throw new NetworkError('Unknown response type');
  }

  async delete(id: string): Promise<Saksmappe> {
    const response = await this.requester.request({
      method: 'delete',
      path: `/saksmappe/${id}`,
    });
    if (isSaksmappe(response)) {
      return response;
    }
    throw new NetworkError('Unknown response type');
  }

  async get(id: string, query?: GetParameters): Promise<Saksmappe> {
    const response = await this.requester.request({
      method: 'get',
      path: `/saksmappe/${id}`,
      query: query,
    });
    if (isSaksmappe(response)) {
      return response;
    }
    throw new NetworkError('Unknown response type');
  }

  async update(id: string, body: SaksmappeRequest): Promise<Saksmappe> {
    const response = await this.requester.request({
      method: 'patch',
      path: `/saksmappe/${id}`,
      body: body,
    });
    if (isSaksmappe(response)) {
      return response;
    }
    throw new NetworkError('Unknown response type');
  }

  async listJournalpost(
    id: string,
    query?: ListBySaksmappeParameters,
  ): Promise<PaginatedList<Journalpost>> {
    const response = await this.requester.request({
      method: 'get',
      path: `/saksmappe/${id}/journalpost`,
      query: query,
    });
    if (isPaginatedJournalpostList(response)) {
      return response;
    }
    throw new NetworkError('Unknown response type');
  }

  async addJournalpost(
    id: string,
    body: JournalpostRequest,
  ): Promise<Journalpost> {
    const response = await this.requester.request({
      method: 'post',
      path: `/saksmappe/${id}/journalpost`,
      body: body,
    });
    if (isJournalpost(response)) {
      return response;
    }
    throw new NetworkError('Unknown response type');
  }
}
