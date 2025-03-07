// Auto-generated from our API specification
// https://github.com/felleslosninger/einnsyn-api-spec

import { Resource } from '../../common/entity/Resource';
import type { ListParameters } from '../../common/queryparameters/ListParameters';
import type { PaginatedList } from '../../common/responses/PaginatedList';
import type { Arkiv, ArkivRequest } from './Arkiv';
import { isPaginatedArkivList, isArkiv } from './Arkiv';
import { NetworkError } from '../../common/error/EInnsynError';
import type { GetParameters } from '../../common/queryparameters/GetParameters';
import type { ListByArkivParameters } from './ListByArkivParameters';
import type { Arkivdel, ArkivdelRequest } from '../arkivdel/Arkivdel';
import { isPaginatedArkivdelList, isArkivdel } from '../arkivdel/Arkivdel';

export class ArkivResource extends Resource {
  async list(query?: ListParameters): Promise<PaginatedList<Arkiv>> {
    const response = await this.requester.request({
      method: 'get',
      path: '/arkiv',
      query: query,
    });
    if (isPaginatedArkivList(response)) {
      return response;
    }
    throw new NetworkError('Unknown response type');
  }

  async add(body: ArkivRequest): Promise<Arkiv> {
    const response = await this.requester.request({
      method: 'post',
      path: '/arkiv',
      body: body,
    });
    if (isArkiv(response)) {
      return response;
    }
    throw new NetworkError('Unknown response type');
  }

  async delete(id: string): Promise<Arkiv> {
    const response = await this.requester.request({
      method: 'delete',
      path: `/arkiv/${id}`,
    });
    if (isArkiv(response)) {
      return response;
    }
    throw new NetworkError('Unknown response type');
  }

  async get(id: string, query?: GetParameters): Promise<Arkiv> {
    const response = await this.requester.request({
      method: 'get',
      path: `/arkiv/${id}`,
      query: query,
    });
    if (isArkiv(response)) {
      return response;
    }
    throw new NetworkError('Unknown response type');
  }

  async update(id: string, body: ArkivRequest): Promise<Arkiv> {
    const response = await this.requester.request({
      method: 'patch',
      path: `/arkiv/${id}`,
      body: body,
    });
    if (isArkiv(response)) {
      return response;
    }
    throw new NetworkError('Unknown response type');
  }

  async listArkiv(
    id: string,
    query?: ListByArkivParameters,
  ): Promise<PaginatedList<Arkiv>> {
    const response = await this.requester.request({
      method: 'get',
      path: `/arkiv/${id}/arkiv`,
      query: query,
    });
    if (isPaginatedArkivList(response)) {
      return response;
    }
    throw new NetworkError('Unknown response type');
  }

  async addArkiv(id: string, body: ArkivRequest): Promise<Arkiv> {
    const response = await this.requester.request({
      method: 'post',
      path: `/arkiv/${id}/arkiv`,
      body: body,
    });
    if (isArkiv(response)) {
      return response;
    }
    throw new NetworkError('Unknown response type');
  }

  async listArkivdel(
    id: string,
    query?: ListByArkivParameters,
  ): Promise<PaginatedList<Arkivdel>> {
    const response = await this.requester.request({
      method: 'get',
      path: `/arkiv/${id}/arkivdel`,
      query: query,
    });
    if (isPaginatedArkivdelList(response)) {
      return response;
    }
    throw new NetworkError('Unknown response type');
  }

  async addArkivdel(id: string, body: ArkivdelRequest): Promise<Arkivdel> {
    const response = await this.requester.request({
      method: 'post',
      path: `/arkiv/${id}/arkivdel`,
      body: body,
    });
    if (isArkivdel(response)) {
      return response;
    }
    throw new NetworkError('Unknown response type');
  }
}
