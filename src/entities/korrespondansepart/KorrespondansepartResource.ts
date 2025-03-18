// Auto-generated from our API specification
// https://github.com/felleslosninger/einnsyn-api-spec

import { Resource } from '../../common/entity/Resource';
import type { ListParameters } from '../../common/queryparameters/ListParameters';
import type { PaginatedList } from '../../common/responses/PaginatedList';
import type {
  Korrespondansepart,
  KorrespondansepartRequest,
} from './Korrespondansepart';
import {
  isPaginatedKorrespondansepartList,
  isKorrespondansepart,
} from './Korrespondansepart';
import { NetworkError } from '../../common/error/EInnsynError';
import type { GetParameters } from '../../common/queryparameters/GetParameters';

export class KorrespondansepartResource extends Resource {
  async list(
    query?: ListParameters,
  ): Promise<PaginatedList<Korrespondansepart>> {
    const response = await this.requester.request({
      method: 'get',
      path: '/korrespondansepart',
      query: query,
    });
    if (isPaginatedKorrespondansepartList(response)) {
      return response;
    }
    throw new NetworkError('Unknown response type');
  }

  async delete(id: string): Promise<Korrespondansepart> {
    const response = await this.requester.request({
      method: 'delete',
      path: `/korrespondansepart/${id}`,
    });
    if (isKorrespondansepart(response)) {
      return response;
    }
    throw new NetworkError('Unknown response type');
  }

  async get(id: string, query?: GetParameters): Promise<Korrespondansepart> {
    const response = await this.requester.request({
      method: 'get',
      path: `/korrespondansepart/${id}`,
      query: query,
    });
    if (isKorrespondansepart(response)) {
      return response;
    }
    throw new NetworkError('Unknown response type');
  }

  async update(
    id: string,
    body: Partial<KorrespondansepartRequest>,
  ): Promise<Korrespondansepart> {
    const response = await this.requester.request({
      method: 'patch',
      path: `/korrespondansepart/${id}`,
      body: body,
    });
    if (isKorrespondansepart(response)) {
      return response;
    }
    throw new NetworkError('Unknown response type');
  }
}
