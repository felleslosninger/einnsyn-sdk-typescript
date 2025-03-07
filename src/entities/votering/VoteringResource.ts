// Auto-generated from our API specification
// https://github.com/felleslosninger/einnsyn-api-spec

import { Resource } from '../../common/entity/Resource';
import type { ListParameters } from '../../common/queryparameters/ListParameters';
import type { PaginatedList } from '../../common/responses/PaginatedList';
import type { Votering, VoteringRequest } from './Votering';
import { isPaginatedVoteringList, isVotering } from './Votering';
import { NetworkError } from '../../common/error/EInnsynError';
import type { GetParameters } from '../../common/queryparameters/GetParameters';

export class VoteringResource extends Resource {
  async list(query?: ListParameters): Promise<PaginatedList<Votering>> {
    const response = await this.requester.request({
      method: 'get',
      path: '/votering',
      query: query,
    });
    if (isPaginatedVoteringList(response)) {
      return response;
    }
    throw new NetworkError('Unknown response type');
  }

  async delete(id: string): Promise<Votering> {
    const response = await this.requester.request({
      method: 'delete',
      path: `/votering/${id}`,
    });
    if (isVotering(response)) {
      return response;
    }
    throw new NetworkError('Unknown response type');
  }

  async get(id: string, query?: GetParameters): Promise<Votering> {
    const response = await this.requester.request({
      method: 'get',
      path: `/votering/${id}`,
      query: query,
    });
    if (isVotering(response)) {
      return response;
    }
    throw new NetworkError('Unknown response type');
  }

  async update(id: string, body: VoteringRequest): Promise<Votering> {
    const response = await this.requester.request({
      method: 'patch',
      path: `/votering/${id}`,
      body: body,
    });
    if (isVotering(response)) {
      return response;
    }
    throw new NetworkError('Unknown response type');
  }
}
