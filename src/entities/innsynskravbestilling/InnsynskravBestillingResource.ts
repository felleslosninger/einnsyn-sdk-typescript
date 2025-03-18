// Auto-generated from our API specification
// https://github.com/felleslosninger/einnsyn-api-spec

import { Resource } from '../../common/entity/Resource';
import type { ListParameters } from '../../common/queryparameters/ListParameters';
import type { PaginatedList } from '../../common/responses/PaginatedList';
import type {
  InnsynskravBestilling,
  InnsynskravBestillingRequest,
} from './InnsynskravBestilling';
import {
  isPaginatedInnsynskravBestillingList,
  isInnsynskravBestilling,
} from './InnsynskravBestilling';
import { NetworkError } from '../../common/error/EInnsynError';
import type { GetParameters } from '../../common/queryparameters/GetParameters';
import type { ListByInnsynskravBestillingParameters } from './ListByInnsynskravBestillingParameters';
import type { Innsynskrav } from '../innsynskrav/Innsynskrav';
import { isPaginatedInnsynskravList } from '../innsynskrav/Innsynskrav';

export class InnsynskravBestillingResource extends Resource {
  async list(
    query?: ListParameters,
  ): Promise<PaginatedList<InnsynskravBestilling>> {
    const response = await this.requester.request({
      method: 'get',
      path: '/innsynskravBestilling',
      query: query,
    });
    if (isPaginatedInnsynskravBestillingList(response)) {
      return response;
    }
    throw new NetworkError('Unknown response type');
  }

  async add(
    body: InnsynskravBestillingRequest,
  ): Promise<InnsynskravBestilling> {
    const response = await this.requester.request({
      method: 'post',
      path: '/innsynskravBestilling',
      body: body,
    });
    if (isInnsynskravBestilling(response)) {
      return response;
    }
    throw new NetworkError('Unknown response type');
  }

  async delete(id: string): Promise<InnsynskravBestilling> {
    const response = await this.requester.request({
      method: 'delete',
      path: `/innsynskravBestilling/${id}`,
    });
    if (isInnsynskravBestilling(response)) {
      return response;
    }
    throw new NetworkError('Unknown response type');
  }

  async get(id: string, query?: GetParameters): Promise<InnsynskravBestilling> {
    const response = await this.requester.request({
      method: 'get',
      path: `/innsynskravBestilling/${id}`,
      query: query,
    });
    if (isInnsynskravBestilling(response)) {
      return response;
    }
    throw new NetworkError('Unknown response type');
  }

  async update(
    id: string,
    body: Partial<InnsynskravBestillingRequest>,
  ): Promise<InnsynskravBestilling> {
    const response = await this.requester.request({
      method: 'patch',
      path: `/innsynskravBestilling/${id}`,
      body: body,
    });
    if (isInnsynskravBestilling(response)) {
      return response;
    }
    throw new NetworkError('Unknown response type');
  }

  async listInnsynskrav(
    id: string,
    query?: ListByInnsynskravBestillingParameters,
  ): Promise<PaginatedList<Innsynskrav>> {
    const response = await this.requester.request({
      method: 'get',
      path: `/innsynskravBestilling/${id}/innsynskrav`,
      query: query,
    });
    if (isPaginatedInnsynskravList(response)) {
      return response;
    }
    throw new NetworkError('Unknown response type');
  }

  async verify(id: string, secret: string): Promise<InnsynskravBestilling> {
    const response = await this.requester.request({
      method: 'patch',
      path: `/innsynskravBestilling/${id}/verify/${secret}`,
    });
    if (isInnsynskravBestilling(response)) {
      return response;
    }
    throw new NetworkError('Unknown response type');
  }
}
