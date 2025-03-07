// Auto-generated from our API specification
// https://github.com/felleslosninger/einnsyn-api-spec

import { Resource } from '../../common/entity/Resource';
import type { ListParameters } from '../../common/queryparameters/ListParameters';
import type { PaginatedList } from '../../common/responses/PaginatedList';
import type { Identifikator, IdentifikatorRequest } from './Identifikator';
import { isPaginatedIdentifikatorList, isIdentifikator } from './Identifikator';
import { NetworkError } from '../../common/error/EInnsynError';
import type { GetParameters } from '../../common/queryparameters/GetParameters';

export class IdentifikatorResource extends Resource {
  async list(query?: ListParameters): Promise<PaginatedList<Identifikator>> {
    const response = await this.requester.request({
      method: 'get',
      path: '/identifikator',
      query: query,
    });
    if (isPaginatedIdentifikatorList(response)) {
      return response;
    }
    throw new NetworkError('Unknown response type');
  }

  async delete(id: string): Promise<Identifikator> {
    const response = await this.requester.request({
      method: 'delete',
      path: `/identifikator/${id}`,
    });
    if (isIdentifikator(response)) {
      return response;
    }
    throw new NetworkError('Unknown response type');
  }

  async get(id: string, query?: GetParameters): Promise<Identifikator> {
    const response = await this.requester.request({
      method: 'get',
      path: `/identifikator/${id}`,
      query: query,
    });
    if (isIdentifikator(response)) {
      return response;
    }
    throw new NetworkError('Unknown response type');
  }

  async update(id: string, body: IdentifikatorRequest): Promise<Identifikator> {
    const response = await this.requester.request({
      method: 'patch',
      path: `/identifikator/${id}`,
      body: body,
    });
    if (isIdentifikator(response)) {
      return response;
    }
    throw new NetworkError('Unknown response type');
  }
}
