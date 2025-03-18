// Auto-generated from our API specification
// https://github.com/felleslosninger/einnsyn-api-spec

import { Resource } from '../../common/entity/Resource';
import type { ListParameters } from '../../common/queryparameters/ListParameters';
import type { PaginatedList } from '../../common/responses/PaginatedList';
import type { Innsynskrav, InnsynskravRequest } from './Innsynskrav';
import { isPaginatedInnsynskravList, isInnsynskrav } from './Innsynskrav';
import { NetworkError } from '../../common/error/EInnsynError';
import type { GetParameters } from '../../common/queryparameters/GetParameters';

export class InnsynskravResource extends Resource {
  async list(query?: ListParameters): Promise<PaginatedList<Innsynskrav>> {
    const response = await this.requester.request({
      method: 'get',
      path: '/innsynskrav',
      query: query,
    });
    if (isPaginatedInnsynskravList(response)) {
      return response;
    }
    throw new NetworkError('Unknown response type');
  }

  async delete(id: string): Promise<Innsynskrav> {
    const response = await this.requester.request({
      method: 'delete',
      path: `/innsynskrav/${id}`,
    });
    if (isInnsynskrav(response)) {
      return response;
    }
    throw new NetworkError('Unknown response type');
  }

  async get(id: string, query?: GetParameters): Promise<Innsynskrav> {
    const response = await this.requester.request({
      method: 'get',
      path: `/innsynskrav/${id}`,
      query: query,
    });
    if (isInnsynskrav(response)) {
      return response;
    }
    throw new NetworkError('Unknown response type');
  }

  async update(
    id: string,
    body: Partial<InnsynskravRequest>,
  ): Promise<Innsynskrav> {
    const response = await this.requester.request({
      method: 'patch',
      path: `/innsynskrav/${id}`,
      body: body,
    });
    if (isInnsynskrav(response)) {
      return response;
    }
    throw new NetworkError('Unknown response type');
  }
}
