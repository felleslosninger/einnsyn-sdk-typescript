// Auto-generated from our API specification
// https://github.com/felleslosninger/einnsyn-api-spec

import { Resource } from '../../common/entity/Resource';
import type { ListParameters } from '../../common/queryparameters/ListParameters';
import type { PaginatedList } from '../../common/responses/PaginatedList';
import type { Arkivdel, ArkivdelRequest } from './Arkivdel';
import { isPaginatedArkivdelList, isArkivdel } from './Arkivdel';
import { NetworkError } from '../../common/error/EInnsynError';
import type { GetParameters } from '../../common/queryparameters/GetParameters';
import type { ListByArkivdelParameters } from './ListByArkivdelParameters';
import type { Klasse, KlasseRequest } from '../klasse/Klasse';
import { isPaginatedKlasseList, isKlasse } from '../klasse/Klasse';
import type {
  Klassifikasjonssystem,
  KlassifikasjonssystemRequest,
} from '../klassifikasjonssystem/Klassifikasjonssystem';
import {
  isPaginatedKlassifikasjonssystemList,
  isKlassifikasjonssystem,
} from '../klassifikasjonssystem/Klassifikasjonssystem';
import type { Moetemappe, MoetemappeRequest } from '../moetemappe/Moetemappe';
import {
  isPaginatedMoetemappeList,
  isMoetemappe,
} from '../moetemappe/Moetemappe';
import type { Saksmappe, SaksmappeRequest } from '../saksmappe/Saksmappe';
import { isPaginatedSaksmappeList, isSaksmappe } from '../saksmappe/Saksmappe';

export class ArkivdelResource extends Resource {
  async list(query?: ListParameters): Promise<PaginatedList<Arkivdel>> {
    const response = await this.requester.request({
      method: 'get',
      path: '/arkivdel',
      query: query,
    });
    if (isPaginatedArkivdelList(response)) {
      return response;
    }
    throw new NetworkError('Unknown response type');
  }

  async delete(id: string): Promise<Arkivdel> {
    const response = await this.requester.request({
      method: 'delete',
      path: `/arkivdel/${id}`,
    });
    if (isArkivdel(response)) {
      return response;
    }
    throw new NetworkError('Unknown response type');
  }

  async get(id: string, query?: GetParameters): Promise<Arkivdel> {
    const response = await this.requester.request({
      method: 'get',
      path: `/arkivdel/${id}`,
      query: query,
    });
    if (isArkivdel(response)) {
      return response;
    }
    throw new NetworkError('Unknown response type');
  }

  async update(id: string, body: ArkivdelRequest): Promise<Arkivdel> {
    const response = await this.requester.request({
      method: 'patch',
      path: `/arkivdel/${id}`,
      body: body,
    });
    if (isArkivdel(response)) {
      return response;
    }
    throw new NetworkError('Unknown response type');
  }

  async listKlasse(
    id: string,
    query?: ListByArkivdelParameters,
  ): Promise<PaginatedList<Klasse>> {
    const response = await this.requester.request({
      method: 'get',
      path: `/arkivdel/${id}/klasse`,
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
      path: `/arkivdel/${id}/klasse`,
      body: body,
    });
    if (isKlasse(response)) {
      return response;
    }
    throw new NetworkError('Unknown response type');
  }

  async listKlassifikasjonssystem(
    id: string,
    query?: ListByArkivdelParameters,
  ): Promise<PaginatedList<Klassifikasjonssystem>> {
    const response = await this.requester.request({
      method: 'get',
      path: `/arkivdel/${id}/klassifikasjonssystem`,
      query: query,
    });
    if (isPaginatedKlassifikasjonssystemList(response)) {
      return response;
    }
    throw new NetworkError('Unknown response type');
  }

  async addKlassifikasjonssystem(
    id: string,
    body: KlassifikasjonssystemRequest,
  ): Promise<Klassifikasjonssystem> {
    const response = await this.requester.request({
      method: 'post',
      path: `/arkivdel/${id}/klassifikasjonssystem`,
      body: body,
    });
    if (isKlassifikasjonssystem(response)) {
      return response;
    }
    throw new NetworkError('Unknown response type');
  }

  async listMoetemappe(
    id: string,
    query?: ListByArkivdelParameters,
  ): Promise<PaginatedList<Moetemappe>> {
    const response = await this.requester.request({
      method: 'get',
      path: `/arkivdel/${id}/moetemappe`,
      query: query,
    });
    if (isPaginatedMoetemappeList(response)) {
      return response;
    }
    throw new NetworkError('Unknown response type');
  }

  async addMoetemappe(
    id: string,
    body: MoetemappeRequest,
  ): Promise<Moetemappe> {
    const response = await this.requester.request({
      method: 'post',
      path: `/arkivdel/${id}/moetemappe`,
      body: body,
    });
    if (isMoetemappe(response)) {
      return response;
    }
    throw new NetworkError('Unknown response type');
  }

  async listSaksmappe(
    id: string,
    query?: ListByArkivdelParameters,
  ): Promise<PaginatedList<Saksmappe>> {
    const response = await this.requester.request({
      method: 'get',
      path: `/arkivdel/${id}/saksmappe`,
      query: query,
    });
    if (isPaginatedSaksmappeList(response)) {
      return response;
    }
    throw new NetworkError('Unknown response type');
  }

  async addSaksmappe(id: string, body: SaksmappeRequest): Promise<Saksmappe> {
    const response = await this.requester.request({
      method: 'post',
      path: `/arkivdel/${id}/saksmappe`,
      body: body,
    });
    if (isSaksmappe(response)) {
      return response;
    }
    throw new NetworkError('Unknown response type');
  }
}
