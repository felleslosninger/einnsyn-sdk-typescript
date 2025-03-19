// Auto-generated from our API specification
// https://github.com/felleslosninger/einnsyn-api-spec

import { Resource } from '../../common/entity/Resource';
import type { ListParameters } from '../../common/queryparameters/ListParameters';
import type { PaginatedList } from '../../common/responses/PaginatedList';
import type {
  Klassifikasjonssystem,
  KlassifikasjonssystemRequest,
} from './Klassifikasjonssystem';
import {
  isPaginatedKlassifikasjonssystemList,
  isKlassifikasjonssystem,
} from './Klassifikasjonssystem';
import { NetworkError } from '../../common/error/EInnsynError';
import type { GetParameters } from '../../common/queryparameters/GetParameters';
import type { ListByKlassifikasjonssystemParameters } from './ListByKlassifikasjonssystemParameters';
import type { Klasse, KlasseRequest } from '../klasse/Klasse';
import { isPaginatedKlasseList, isKlasse } from '../klasse/Klasse';

export class KlassifikasjonssystemResource extends Resource {
  async list(
    query?: ListParameters,
  ): Promise<PaginatedList<Klassifikasjonssystem>> {
    const response = await this.requester.request({
      method: 'get',
      path: '/klassifikasjonssystem',
      query: query,
    });
    if (isPaginatedKlassifikasjonssystemList(response)) {
      return response;
    }
    throw new NetworkError('Unknown response type');
  }

  async delete(id: string): Promise<Klassifikasjonssystem> {
    const response = await this.requester.request({
      method: 'delete',
      path: `/klassifikasjonssystem/${id}`,
    });
    if (isKlassifikasjonssystem(response)) {
      return response;
    }
    throw new NetworkError('Unknown response type');
  }

  async get(id: string, query?: GetParameters): Promise<Klassifikasjonssystem> {
    const response = await this.requester.request({
      method: 'get',
      path: `/klassifikasjonssystem/${id}`,
      query: query,
    });
    if (isKlassifikasjonssystem(response)) {
      return response;
    }
    throw new NetworkError('Unknown response type');
  }

  async update(
    id: string,
    body: Partial<KlassifikasjonssystemRequest>,
  ): Promise<Klassifikasjonssystem> {
    const response = await this.requester.request({
      method: 'patch',
      path: `/klassifikasjonssystem/${id}`,
      body: body,
    });
    if (isKlassifikasjonssystem(response)) {
      return response;
    }
    throw new NetworkError('Unknown response type');
  }

  async listKlasse(
    id: string,
    query?: ListByKlassifikasjonssystemParameters,
  ): Promise<PaginatedList<Klasse>> {
    const response = await this.requester.request({
      method: 'get',
      path: `/klassifikasjonssystem/${id}/klasse`,
      query: query,
    });
    if (isPaginatedKlasseList(response)) {
      return response;
    }
    throw new NetworkError('Unknown response type');
  }

  async addKlasse(id: string, body: KlasseRequest): Promise<Klasse> {
    const response = await this.requester.request({
      method: 'post',
      path: `/klassifikasjonssystem/${id}/klasse`,
      body: body,
    });
    if (isKlasse(response)) {
      return response;
    }
    throw new NetworkError('Unknown response type');
  }
}
