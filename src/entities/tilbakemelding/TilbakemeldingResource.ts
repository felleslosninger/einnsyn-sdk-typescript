// Auto-generated from our API specification
// https://github.com/felleslosninger/einnsyn-api-spec

import { Resource } from '../../common/entity/Resource';
import { NetworkError } from '../../common/error/EInnsynError';
import type { GetParameters } from '../../common/queryparameters/GetParameters';
import type { ListParameters } from '../../common/queryparameters/ListParameters';
import type { PaginatedList } from '../../common/responses/PaginatedList';
import type { Tilbakemelding, TilbakemeldingRequest } from './Tilbakemelding';
import {
  isPaginatedTilbakemeldingList,
  isTilbakemelding,
} from './Tilbakemelding';

/**
 * Operations on the `Tilbakemelding` resource.
 */
export class TilbakemeldingResource extends Resource {
  /**
   * List all objects.
   *
   * @param query Optional query parameters.
   */
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

  /**
   * @param body The request body.
   */
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

  /**
   * Delete an object.
   *
   * @param id The ID of the object.
   * @returns The deleted object.
   */
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

  /**
   * Get an object.
   *
   * @param id The ID of the object.
   * @param query Optional query parameters.
   * @returns The object.
   */
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

  /**
   * Update an object.
   *
   * @param id The ID of the object.
   * @param body The request body.
   * @returns The updated object.
   */
  async update(
    id: string,
    body: Partial<TilbakemeldingRequest>,
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
