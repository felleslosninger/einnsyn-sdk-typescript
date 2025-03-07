// Auto-generated from our API specification
// https://github.com/felleslosninger/einnsyn-api-spec

import { Resource } from '../../common/entity/Resource';
import type { ListParameters } from '../../common/queryparameters/ListParameters';
import type { PaginatedList } from '../../common/responses/PaginatedList';
import type { Moetedeltaker, MoetedeltakerRequest } from './Moetedeltaker';
import { isPaginatedMoetedeltakerList, isMoetedeltaker } from './Moetedeltaker';
import { NetworkError } from '../../common/error/EInnsynError';
import type { GetParameters } from '../../common/queryparameters/GetParameters';

export class MoetedeltakerResource extends Resource {
  async list(query?: ListParameters): Promise<PaginatedList<Moetedeltaker>> {
    const response = await this.requester.request({
      method: 'get',
      path: '/moetedeltaker',
      query: query,
    });
    if (isPaginatedMoetedeltakerList(response)) {
      return response;
    }
    throw new NetworkError('Unknown response type');
  }

  async delete(id: string): Promise<Moetedeltaker> {
    const response = await this.requester.request({
      method: 'delete',
      path: `/moetedeltaker/${id}`,
    });
    if (isMoetedeltaker(response)) {
      return response;
    }
    throw new NetworkError('Unknown response type');
  }

  async get(id: string, query?: GetParameters): Promise<Moetedeltaker> {
    const response = await this.requester.request({
      method: 'get',
      path: `/moetedeltaker/${id}`,
      query: query,
    });
    if (isMoetedeltaker(response)) {
      return response;
    }
    throw new NetworkError('Unknown response type');
  }

  async update(id: string, body: MoetedeltakerRequest): Promise<Moetedeltaker> {
    const response = await this.requester.request({
      method: 'patch',
      path: `/moetedeltaker/${id}`,
      body: body,
    });
    if (isMoetedeltaker(response)) {
      return response;
    }
    throw new NetworkError('Unknown response type');
  }
}
