// Auto-generated from our API specification
// https://github.com/felleslosninger/einnsyn-api-spec

import { Resource } from '../../common/entity/Resource';
import type { ListParameters } from '../../common/queryparameters/ListParameters';
import type { PaginatedList } from '../../common/responses/PaginatedList';
import type { Journalpost, JournalpostRequest } from './Journalpost';
import { isPaginatedJournalpostList, isJournalpost } from './Journalpost';
import { NetworkError } from '../../common/error/EInnsynError';
import type { GetParameters } from '../../common/queryparameters/GetParameters';
import type { ListByJournalpostParameters } from './ListByJournalpostParameters';
import type {
  Dokumentbeskrivelse,
  DokumentbeskrivelseRequest,
} from '../dokumentbeskrivelse/Dokumentbeskrivelse';
import {
  isPaginatedDokumentbeskrivelseList,
  isDokumentbeskrivelse,
} from '../dokumentbeskrivelse/Dokumentbeskrivelse';
import type {
  Korrespondansepart,
  KorrespondansepartRequest,
} from '../korrespondansepart/Korrespondansepart';
import {
  isPaginatedKorrespondansepartList,
  isKorrespondansepart,
} from '../korrespondansepart/Korrespondansepart';

export class JournalpostResource extends Resource {
  async list(query?: ListParameters): Promise<PaginatedList<Journalpost>> {
    const response = await this.requester.request({
      method: 'get',
      path: '/journalpost',
      query: query,
    });
    if (isPaginatedJournalpostList(response)) {
      return response;
    }
    throw new NetworkError('Unknown response type');
  }

  async delete(id: string): Promise<Journalpost> {
    const response = await this.requester.request({
      method: 'delete',
      path: `/journalpost/${id}`,
    });
    if (isJournalpost(response)) {
      return response;
    }
    throw new NetworkError('Unknown response type');
  }

  async get(id: string, query?: GetParameters): Promise<Journalpost> {
    const response = await this.requester.request({
      method: 'get',
      path: `/journalpost/${id}`,
      query: query,
    });
    if (isJournalpost(response)) {
      return response;
    }
    throw new NetworkError('Unknown response type');
  }

  async update(id: string, body: JournalpostRequest): Promise<Journalpost> {
    const response = await this.requester.request({
      method: 'patch',
      path: `/journalpost/${id}`,
      body: body,
    });
    if (isJournalpost(response)) {
      return response;
    }
    throw new NetworkError('Unknown response type');
  }

  async listDokumentbeskrivelse(
    id: string,
    query?: ListByJournalpostParameters,
  ): Promise<PaginatedList<Dokumentbeskrivelse>> {
    const response = await this.requester.request({
      method: 'get',
      path: `/journalpost/${id}/dokumentbeskrivelse`,
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
      path: `/journalpost/${id}/dokumentbeskrivelse`,
      body: body,
    });
    if (isDokumentbeskrivelse(response)) {
      return response;
    }
    throw new NetworkError('Unknown response type');
  }

  async deleteDokumentbeskrivelse(
    id: string,
    dokumentbeskrivelseId: string,
  ): Promise<Dokumentbeskrivelse> {
    const response = await this.requester.request({
      method: 'delete',
      path: `/journalpost/${id}/dokumentbeskrivelse/${dokumentbeskrivelseId}`,
    });
    if (isDokumentbeskrivelse(response)) {
      return response;
    }
    throw new NetworkError('Unknown response type');
  }

  async listKorrespondansepart(
    id: string,
    query?: ListByJournalpostParameters,
  ): Promise<PaginatedList<Korrespondansepart>> {
    const response = await this.requester.request({
      method: 'get',
      path: `/journalpost/${id}/korrespondansepart`,
      query: query,
    });
    if (isPaginatedKorrespondansepartList(response)) {
      return response;
    }
    throw new NetworkError('Unknown response type');
  }

  async addKorrespondansepart(
    id: string,
    body: KorrespondansepartRequest,
  ): Promise<Korrespondansepart> {
    const response = await this.requester.request({
      method: 'post',
      path: `/journalpost/${id}/korrespondansepart`,
      body: body,
    });
    if (isKorrespondansepart(response)) {
      return response;
    }
    throw new NetworkError('Unknown response type');
  }
}
