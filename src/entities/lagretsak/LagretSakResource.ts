// Auto-generated from our API specification
// https://github.com/felleslosninger/einnsyn-api-spec

import { Resource } from '../../common/entity/Resource';
import type { ListParameters } from '../../common/queryparameters/ListParameters';
import type { PaginatedList } from '../../common/responses/PaginatedList';
import type { LagretSak, LagretSakRequest } from './LagretSak';
import { isPaginatedLagretSakList, isLagretSak } from './LagretSak';
import { NetworkError } from '../../common/error/EInnsynError';
import type { GetParameters } from '../../common/queryparameters/GetParameters';

export class LagretSakResource extends Resource {
  async list(query?: ListParameters): Promise<PaginatedList<LagretSak>> {
    const response = await this.requester.request({
      method: 'get',
      path: '/lagretSak',
      query: query,
    });
    if (isPaginatedLagretSakList(response)) {
      return response;
    }
    throw new NetworkError('Unknown response type');
  }

  async delete(id: string): Promise<LagretSak> {
    const response = await this.requester.request({
      method: 'delete',
      path: `/lagretSak/${id}`,
    });
    if (isLagretSak(response)) {
      return response;
    }
    throw new NetworkError('Unknown response type');
  }

  async get(id: string, query?: GetParameters): Promise<LagretSak> {
    const response = await this.requester.request({
      method: 'get',
      path: `/lagretSak/${id}`,
      query: query,
    });
    if (isLagretSak(response)) {
      return response;
    }
    throw new NetworkError('Unknown response type');
  }

  async update(id: string, body: LagretSakRequest): Promise<LagretSak> {
    const response = await this.requester.request({
      method: 'patch',
      path: `/lagretSak/${id}`,
      body: body,
    });
    if (isLagretSak(response)) {
      return response;
    }
    throw new NetworkError('Unknown response type');
  }
}
