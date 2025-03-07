// Auto-generated from our API specification
// https://github.com/felleslosninger/einnsyn-api-spec

import { Resource } from '../../common/entity/Resource';
import type { ListParameters } from '../../common/queryparameters/ListParameters';
import type { PaginatedList } from '../../common/responses/PaginatedList';
import type { Skjerming, SkjermingRequest } from './Skjerming';
import { isPaginatedSkjermingList, isSkjerming } from './Skjerming';
import { NetworkError } from '../../common/error/EInnsynError';
import type { GetParameters } from '../../common/queryparameters/GetParameters';

export class SkjermingResource extends Resource {
  async list(query?: ListParameters): Promise<PaginatedList<Skjerming>> {
    const response = await this.requester.request({
      method: 'get',
      path: '/skjerming',
      query: query,
    });
    if (isPaginatedSkjermingList(response)) {
      return response;
    }
    throw new NetworkError('Unknown response type');
  }

  async add(body: SkjermingRequest): Promise<Skjerming> {
    const response = await this.requester.request({
      method: 'post',
      path: '/skjerming',
      body: body,
    });
    if (isSkjerming(response)) {
      return response;
    }
    throw new NetworkError('Unknown response type');
  }

  async delete(id: string): Promise<Skjerming> {
    const response = await this.requester.request({
      method: 'delete',
      path: `/skjerming/${id}`,
    });
    if (isSkjerming(response)) {
      return response;
    }
    throw new NetworkError('Unknown response type');
  }

  async get(id: string, query?: GetParameters): Promise<Skjerming> {
    const response = await this.requester.request({
      method: 'get',
      path: `/skjerming/${id}`,
      query: query,
    });
    if (isSkjerming(response)) {
      return response;
    }
    throw new NetworkError('Unknown response type');
  }

  async update(id: string, body: SkjermingRequest): Promise<Skjerming> {
    const response = await this.requester.request({
      method: 'patch',
      path: `/skjerming/${id}`,
      body: body,
    });
    if (isSkjerming(response)) {
      return response;
    }
    throw new NetworkError('Unknown response type');
  }
}
