// Auto-generated from our API specification
// https://github.com/felleslosninger/einnsyn-api-spec

import { Resource } from '../../common/entity/Resource';
import type { ListParameters } from '../../common/queryparameters/ListParameters';
import type { PaginatedList } from '../../common/responses/PaginatedList';
import type { Tilbakemelding, TilbakemeldingRequest } from './Tilbakemelding';
import {
  isPaginatedTilbakemeldingList,
  isTilbakemelding,
} from './Tilbakemelding';
import { NetworkError } from '../../common/error/EInnsynError';
import type { GetParameters } from '../../common/queryparameters/GetParameters';

export class TilbakemeldingResource extends Resource {
  async list(query?: ListParameters): Promise<PaginatedList<Tilbakemelding>> {
    const response = await this.requester.request({
      method: 'get',
      path: '/tilbakemelding',
      query: query,
    });
    if (isPaginatedTilbakemeldingList(response)) {
      return response;
    }
    throw new NetworkError('Unknown response type');
  }

  async add(body: TilbakemeldingRequest): Promise<Tilbakemelding> {
    const response = await this.requester.request({
      method: 'post',
      path: '/tilbakemelding',
      body: body,
    });
    if (isTilbakemelding(response)) {
      return response;
    }
    throw new NetworkError('Unknown response type');
  }

  async delete(id: string): Promise<Tilbakemelding> {
    const response = await this.requester.request({
      method: 'delete',
      path: `/tilbakemelding/${id}`,
    });
    if (isTilbakemelding(response)) {
      return response;
    }
    throw new NetworkError('Unknown response type');
  }

  async get(id: string, query?: GetParameters): Promise<Tilbakemelding> {
    const response = await this.requester.request({
      method: 'get',
      path: `/tilbakemelding/${id}`,
      query: query,
    });
    if (isTilbakemelding(response)) {
      return response;
    }
    throw new NetworkError('Unknown response type');
  }

  async update(
    id: string,
    body: TilbakemeldingRequest,
  ): Promise<Tilbakemelding> {
    const response = await this.requester.request({
      method: 'patch',
      path: `/tilbakemelding/${id}`,
      body: body,
    });
    if (isTilbakemelding(response)) {
      return response;
    }
    throw new NetworkError('Unknown response type');
  }
}
