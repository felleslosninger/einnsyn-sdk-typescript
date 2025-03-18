// Auto-generated from our API specification
// https://github.com/felleslosninger/einnsyn-api-spec

import { Resource } from '../../common/entity/Resource';
import type { ListParameters } from '../../common/queryparameters/ListParameters';
import type { PaginatedList } from '../../common/responses/PaginatedList';
import type { LagretSoek, LagretSoekRequest } from './LagretSoek';
import { isPaginatedLagretSoekList, isLagretSoek } from './LagretSoek';
import { NetworkError } from '../../common/error/EInnsynError';
import type { GetParameters } from '../../common/queryparameters/GetParameters';

export class LagretSoekResource extends Resource {
  async list(query?: ListParameters): Promise<PaginatedList<LagretSoek>> {
    const response = await this.requester.request({
      method: 'get',
      path: '/lagretSoek',
      query: query,
    });
    if (isPaginatedLagretSoekList(response)) {
      return response;
    }
    throw new NetworkError('Unknown response type');
  }

  async delete(id: string): Promise<LagretSoek> {
    const response = await this.requester.request({
      method: 'delete',
      path: `/lagretSoek/${id}`,
    });
    if (isLagretSoek(response)) {
      return response;
    }
    throw new NetworkError('Unknown response type');
  }

  async get(id: string, query?: GetParameters): Promise<LagretSoek> {
    const response = await this.requester.request({
      method: 'get',
      path: `/lagretSoek/${id}`,
      query: query,
    });
    if (isLagretSoek(response)) {
      return response;
    }
    throw new NetworkError('Unknown response type');
  }

  async update(
    id: string,
    body: Partial<LagretSoekRequest>,
  ): Promise<LagretSoek> {
    const response = await this.requester.request({
      method: 'patch',
      path: `/lagretSoek/${id}`,
      body: body,
    });
    if (isLagretSoek(response)) {
      return response;
    }
    throw new NetworkError('Unknown response type');
  }
}
