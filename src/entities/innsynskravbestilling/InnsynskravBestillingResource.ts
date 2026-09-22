// Auto-generated from our API specification
// https://github.com/felleslosninger/einnsyn-api-spec

import { Resource } from '../../common/entity/Resource';
import { NetworkError } from '../../common/error/EInnsynError';
import type { GetParameters } from '../../common/queryparameters/GetParameters';
import type { ListParameters } from '../../common/queryparameters/ListParameters';
import type { PaginatedList } from '../../common/responses/PaginatedList';
import type { Innsynskrav } from '../innsynskrav/Innsynskrav';
import { isPaginatedInnsynskravList } from '../innsynskrav/Innsynskrav';
import type {
  InnsynskravBestilling,
  InnsynskravBestillingRequest,
} from './InnsynskravBestilling';
import {
  isInnsynskravBestilling,
  isPaginatedInnsynskravBestillingList,
} from './InnsynskravBestilling';
import type { ListByInnsynskravBestillingParameters } from './ListByInnsynskravBestillingParameters';

/**
 * Operations on the `InnsynskravBestilling` resource.
 */
export class InnsynskravBestillingResource extends Resource {
  /**
   * List all objects.
   *
   * @param query Optional query parameters.
   */
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

  /**
   * @param body The request body.
   */
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

  /**
   * Delete an object.
   *
   * @param id The ID of the object.
   * @returns The deleted object.
   */
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

  /**
   * Get an object.
   *
   * @param id The ID of the object.
   * @param query Optional query parameters.
   * @returns The object.
   */
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

  /**
   * Update an object.
   *
   * @param id The ID of the object.
   * @param body The request body.
   * @returns The updated object.
   */
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

  /**
   * @param id The ID of the innsynskravBestilling.
   * @param query Optional query parameters.
   */
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

  /**
   * @param id The ID of the innsynskravBestilling.
   * @param secret The ID of the verify.
   */
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
