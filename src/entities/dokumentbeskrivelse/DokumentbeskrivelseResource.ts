// Auto-generated from our API specification
// https://github.com/felleslosninger/einnsyn-api-spec

import { Resource } from '../../common/entity/Resource';
import type { ListParameters } from '../../common/queryparameters/ListParameters';
import type { PaginatedList } from '../../common/responses/PaginatedList';
import type {
  Dokumentbeskrivelse,
  DokumentbeskrivelseRequest,
} from './Dokumentbeskrivelse';
import {
  isPaginatedDokumentbeskrivelseList,
  isDokumentbeskrivelse,
} from './Dokumentbeskrivelse';
import { NetworkError } from '../../common/error/EInnsynError';
import type { GetParameters } from '../../common/queryparameters/GetParameters';

export class DokumentbeskrivelseResource extends Resource {
  async list(
    query?: ListParameters,
  ): Promise<PaginatedList<Dokumentbeskrivelse>> {
    const response = await this.requester.request({
      method: 'get',
      path: '/dokumentbeskrivelse',
      query: query,
    });
    if (isPaginatedDokumentbeskrivelseList(response)) {
      return response;
    }
    throw new NetworkError('Unknown response type');
  }

  async delete(id: string): Promise<Dokumentbeskrivelse> {
    const response = await this.requester.request({
      method: 'delete',
      path: `/dokumentbeskrivelse/${id}`,
    });
    if (isDokumentbeskrivelse(response)) {
      return response;
    }
    throw new NetworkError('Unknown response type');
  }

  async get(id: string, query?: GetParameters): Promise<Dokumentbeskrivelse> {
    const response = await this.requester.request({
      method: 'get',
      path: `/dokumentbeskrivelse/${id}`,
      query: query,
    });
    if (isDokumentbeskrivelse(response)) {
      return response;
    }
    throw new NetworkError('Unknown response type');
  }

  async update(
    id: string,
    body: DokumentbeskrivelseRequest,
  ): Promise<Dokumentbeskrivelse> {
    const response = await this.requester.request({
      method: 'patch',
      path: `/dokumentbeskrivelse/${id}`,
      body: body,
    });
    if (isDokumentbeskrivelse(response)) {
      return response;
    }
    throw new NetworkError('Unknown response type');
  }
}
