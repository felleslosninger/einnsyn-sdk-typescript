// Auto-generated from our API specification
// https://github.com/felleslosninger/einnsyn-api-spec

import { Resource } from '../../common/entity/Resource';
import type { ListParameters } from '../../common/queryparameters/ListParameters';
import type { PaginatedList } from '../../common/responses/PaginatedList';
import type { Enhet, EnhetRequest } from './Enhet';
import { isPaginatedEnhetList, isEnhet } from './Enhet';
import { NetworkError } from '../../common/error/EInnsynError';
import type { GetParameters } from '../../common/queryparameters/GetParameters';
import type { ListByEnhetParameters } from './ListByEnhetParameters';
import type { ApiKey, ApiKeyRequest } from '../apikey/ApiKey';
import { isPaginatedApiKeyList, isApiKey } from '../apikey/ApiKey';
import type { Arkiv } from '../arkiv/Arkiv';
import { isPaginatedArkivList } from '../arkiv/Arkiv';
import type { Innsynskrav } from '../innsynskrav/Innsynskrav';
import { isPaginatedInnsynskravList } from '../innsynskrav/Innsynskrav';

export class EnhetResource extends Resource {
  async list(query?: ListParameters): Promise<PaginatedList<Enhet>> {
    const response = await this.requester.request({
      method: 'get',
      path: '/enhet',
      query: query,
    });
    if (isPaginatedEnhetList(response)) {
      return response;
    }
    throw new NetworkError('Unknown response type');
  }

  async add(body: EnhetRequest): Promise<Enhet> {
    const response = await this.requester.request({
      method: 'post',
      path: '/enhet',
      body: body,
    });
    if (isEnhet(response)) {
      return response;
    }
    throw new NetworkError('Unknown response type');
  }

  async delete(id: string): Promise<Enhet> {
    const response = await this.requester.request({
      method: 'delete',
      path: `/enhet/${id}`,
    });
    if (isEnhet(response)) {
      return response;
    }
    throw new NetworkError('Unknown response type');
  }

  async get(id: string, query?: GetParameters): Promise<Enhet> {
    const response = await this.requester.request({
      method: 'get',
      path: `/enhet/${id}`,
      query: query,
    });
    if (isEnhet(response)) {
      return response;
    }
    throw new NetworkError('Unknown response type');
  }

  async update(id: string, body: Partial<EnhetRequest>): Promise<Enhet> {
    const response = await this.requester.request({
      method: 'patch',
      path: `/enhet/${id}`,
      body: body,
    });
    if (isEnhet(response)) {
      return response;
    }
    throw new NetworkError('Unknown response type');
  }

  async listApiKey(
    id: string,
    query?: ListByEnhetParameters,
  ): Promise<PaginatedList<ApiKey>> {
    const response = await this.requester.request({
      method: 'get',
      path: `/enhet/${id}/apiKey`,
      query: query,
    });
    if (isPaginatedApiKeyList(response)) {
      return response;
    }
    throw new NetworkError('Unknown response type');
  }

  async addApiKey(id: string, body: ApiKeyRequest): Promise<ApiKey> {
    const response = await this.requester.request({
      method: 'post',
      path: `/enhet/${id}/apiKey`,
      body: body,
    });
    if (isApiKey(response)) {
      return response;
    }
    throw new NetworkError('Unknown response type');
  }

  async listArkiv(
    id: string,
    query?: ListByEnhetParameters,
  ): Promise<PaginatedList<Arkiv>> {
    const response = await this.requester.request({
      method: 'get',
      path: `/enhet/${id}/arkiv`,
      query: query,
    });
    if (isPaginatedArkivList(response)) {
      return response;
    }
    throw new NetworkError('Unknown response type');
  }

  async listInnsynskrav(
    id: string,
    query?: ListByEnhetParameters,
  ): Promise<PaginatedList<Innsynskrav>> {
    const response = await this.requester.request({
      method: 'get',
      path: `/enhet/${id}/innsynskrav`,
      query: query,
    });
    if (isPaginatedInnsynskravList(response)) {
      return response;
    }
    throw new NetworkError('Unknown response type');
  }

  async listUnderenhet(
    id: string,
    query?: ListByEnhetParameters,
  ): Promise<PaginatedList<Enhet>> {
    const response = await this.requester.request({
      method: 'get',
      path: `/enhet/${id}/underenhet`,
      query: query,
    });
    if (isPaginatedEnhetList(response)) {
      return response;
    }
    throw new NetworkError('Unknown response type');
  }

  async addUnderenhet(
    id: string,
    body: EnhetRequest | string | 'string',
  ): Promise<Enhet> {
    const response = await this.requester.request({
      method: 'post',
      path: `/enhet/${id}/underenhet`,
      body: body,
    });
    if (isEnhet(response)) {
      return response;
    }
    throw new NetworkError('Unknown response type');
  }
}
