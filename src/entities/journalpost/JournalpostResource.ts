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
  Korrespondansepart,
  KorrespondansepartRequest,
} from '../korrespondansepart/Korrespondansepart';
import {
  isKorrespondansepart,
  isPaginatedKorrespondansepartList,
} from '../korrespondansepart/Korrespondansepart';
import type {
  Matrikkelnummer,
  MatrikkelnummerRequest,
} from '../matrikkelnummer/Matrikkelnummer';
import {
  isMatrikkelnummer,
  isPaginatedMatrikkelnummerList,
} from '../matrikkelnummer/Matrikkelnummer';
import type { Skjerming, SkjermingRequest } from '../skjerming/Skjerming';
import { isSkjerming } from '../skjerming/Skjerming';
import type { Journalpost, JournalpostRequest } from './Journalpost';
import { isJournalpost, isPaginatedJournalpostList } from './Journalpost';
import type { ListByJournalpostParameters } from './ListByJournalpostParameters';

/**
 * Operations on the `Journalpost` resource.
 */
export class JournalpostResource extends Resource {
  /**
   * List all objects.
   *
   * @param query Optional query parameters.
   */
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

  /**
   * Delete an object.
   *
   * @param id The ID of the object.
   * @returns The deleted object.
   */
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

  /**
   * Get an object.
   *
   * @param id The ID of the object.
   * @param query Optional query parameters.
   * @returns The object.
   */
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

  /**
   * Update an object.
   *
   * @param id The ID of the object.
   * @param body The request body.
   * @returns The updated object.
   */
  async update(
    id: string,
    body: Partial<JournalpostRequest>,
  ): Promise<Journalpost> {
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

  /**
   * @param id The ID of the journalpost.
   * @param query Optional query parameters.
   */
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

  /**
   * @param id The ID of the journalpost.
   * @param body The request body.
   */
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

  /**
   * @param id The ID of the journalpost.
   * @param dokumentbeskrivelseId The ID of the dokumentbeskrivelse.
   */
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

  /**
   * @param id The ID of the journalpost.
   * @param query Optional query parameters.
   */
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

  /**
   * @param id The ID of the journalpost.
   * @param body The request body.
   */
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

  /**
   * @param id The ID of the journalpost.
   * @param query Optional query parameters.
   */
  async listMatrikkelnummer(
    id: string,
    query?: ListByJournalpostParameters,
  ): Promise<PaginatedList<Matrikkelnummer>> {
    const response = await this.requester.request({
      method: 'get',
      path: `/journalpost/${id}/matrikkelnummer`,
      query: query,
    });
    if (isPaginatedMatrikkelnummerList(response)) {
      return response;
    }
    throw new NetworkError('Unknown response type');
  }

  /**
   * @param id The ID of the journalpost.
   * @param body The request body.
   */
  async addMatrikkelnummer(
    id: string,
    body: MatrikkelnummerRequest,
  ): Promise<Matrikkelnummer> {
    const response = await this.requester.request({
      method: 'post',
      path: `/journalpost/${id}/matrikkelnummer`,
      body: body,
    });
    if (isMatrikkelnummer(response)) {
      return response;
    }
    throw new NetworkError('Unknown response type');
  }

  /**
   * @param id The ID of the journalpost.
   * @param body The request body.
   */
  async addSkjerming(
    id: string,
    body: SkjermingRequest | string | 'string',
  ): Promise<Skjerming> {
    const response = await this.requester.request({
      method: 'post',
      path: `/journalpost/${id}/skjerming`,
      body: body,
    });
    if (isSkjerming(response)) {
      return response;
    }
    throw new NetworkError('Unknown response type');
  }

  /**
   * @param id The ID of the journalpost.
   * @param skjermingId The ID of the skjerming.
   */
  async deleteSkjerming(id: string, skjermingId: string): Promise<Skjerming> {
    const response = await this.requester.request({
      method: 'delete',
      path: `/journalpost/${id}/skjerming/${skjermingId}`,
    });
    if (isSkjerming(response)) {
      return response;
    }
    throw new NetworkError('Unknown response type');
  }
}
