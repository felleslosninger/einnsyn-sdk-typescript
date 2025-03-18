// Auto-generated from our API specification
// https://github.com/felleslosninger/einnsyn-api-spec

import { Resource } from '../../common/entity/Resource';
import type { ListParameters } from '../../common/queryparameters/ListParameters';
import type { PaginatedList } from '../../common/responses/PaginatedList';
import type {
  Moetesaksbeskrivelse,
  MoetesaksbeskrivelseRequest,
} from './Moetesaksbeskrivelse';
import {
  isPaginatedMoetesaksbeskrivelseList,
  isMoetesaksbeskrivelse,
} from './Moetesaksbeskrivelse';
import { NetworkError } from '../../common/error/EInnsynError';
import type { GetParameters } from '../../common/queryparameters/GetParameters';

export class MoetesaksbeskrivelseResource extends Resource {
  async list(
    query?: ListParameters,
  ): Promise<PaginatedList<Moetesaksbeskrivelse>> {
    const response = await this.requester.request({
      method: 'get',
      path: '/moetesaksbeskrivelse',
      query: query,
    });
    if (isPaginatedMoetesaksbeskrivelseList(response)) {
      return response;
    }
    throw new NetworkError('Unknown response type');
  }

  async delete(id: string): Promise<Moetesaksbeskrivelse> {
    const response = await this.requester.request({
      method: 'delete',
      path: `/moetesaksbeskrivelse/${id}`,
    });
    if (isMoetesaksbeskrivelse(response)) {
      return response;
    }
    throw new NetworkError('Unknown response type');
  }

  async get(id: string, query?: GetParameters): Promise<Moetesaksbeskrivelse> {
    const response = await this.requester.request({
      method: 'get',
      path: `/moetesaksbeskrivelse/${id}`,
      query: query,
    });
    if (isMoetesaksbeskrivelse(response)) {
      return response;
    }
    throw new NetworkError('Unknown response type');
  }

  async update(
    id: string,
    body: Partial<MoetesaksbeskrivelseRequest>,
  ): Promise<Moetesaksbeskrivelse> {
    const response = await this.requester.request({
      method: 'patch',
      path: `/moetesaksbeskrivelse/${id}`,
      body: body,
    });
    if (isMoetesaksbeskrivelse(response)) {
      return response;
    }
    throw new NetworkError('Unknown response type');
  }
}
