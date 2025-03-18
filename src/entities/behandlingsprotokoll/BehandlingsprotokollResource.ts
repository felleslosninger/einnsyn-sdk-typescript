// Auto-generated from our API specification
// https://github.com/felleslosninger/einnsyn-api-spec

import { Resource } from '../../common/entity/Resource';
import type { ListParameters } from '../../common/queryparameters/ListParameters';
import type { PaginatedList } from '../../common/responses/PaginatedList';
import type {
  Behandlingsprotokoll,
  BehandlingsprotokollRequest,
} from './Behandlingsprotokoll';
import {
  isPaginatedBehandlingsprotokollList,
  isBehandlingsprotokoll,
} from './Behandlingsprotokoll';
import { NetworkError } from '../../common/error/EInnsynError';
import type { GetParameters } from '../../common/queryparameters/GetParameters';

export class BehandlingsprotokollResource extends Resource {
  async list(
    query?: ListParameters,
  ): Promise<PaginatedList<Behandlingsprotokoll>> {
    const response = await this.requester.request({
      method: 'get',
      path: '/behandlingsprotokoll',
      query: query,
    });
    if (isPaginatedBehandlingsprotokollList(response)) {
      return response;
    }
    throw new NetworkError('Unknown response type');
  }

  async delete(id: string): Promise<Behandlingsprotokoll> {
    const response = await this.requester.request({
      method: 'delete',
      path: `/behandlingsprotokoll/${id}`,
    });
    if (isBehandlingsprotokoll(response)) {
      return response;
    }
    throw new NetworkError('Unknown response type');
  }

  async get(id: string, query?: GetParameters): Promise<Behandlingsprotokoll> {
    const response = await this.requester.request({
      method: 'get',
      path: `/behandlingsprotokoll/${id}`,
      query: query,
    });
    if (isBehandlingsprotokoll(response)) {
      return response;
    }
    throw new NetworkError('Unknown response type');
  }

  async update(
    id: string,
    body: Partial<BehandlingsprotokollRequest>,
  ): Promise<Behandlingsprotokoll> {
    const response = await this.requester.request({
      method: 'patch',
      path: `/behandlingsprotokoll/${id}`,
      body: body,
    });
    if (isBehandlingsprotokoll(response)) {
      return response;
    }
    throw new NetworkError('Unknown response type');
  }
}
