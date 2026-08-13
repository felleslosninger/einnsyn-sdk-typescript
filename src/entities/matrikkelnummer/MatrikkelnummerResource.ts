// Auto-generated from our API specification
// https://github.com/felleslosninger/einnsyn-api-spec

import { Resource } from '../../common/entity/Resource';
import { NetworkError } from '../../common/error/EInnsynError';
import type { GetParameters } from '../../common/queryparameters/GetParameters';
import type { ListParameters } from '../../common/queryparameters/ListParameters';
import type { PaginatedList } from '../../common/responses/PaginatedList';
import type {
  Matrikkelnummer,
  MatrikkelnummerRequest,
} from './Matrikkelnummer';
import {
  isMatrikkelnummer,
  isPaginatedMatrikkelnummerList,
} from './Matrikkelnummer';

export class MatrikkelnummerResource extends Resource {
  async list(query?: ListParameters): Promise<PaginatedList<Matrikkelnummer>> {
    const response = await this.requester.request({
      method: 'get',
      path: '/matrikkelnummer',
      query: query,
    });
    if (isPaginatedMatrikkelnummerList(response)) {
      return response;
    }
    throw new NetworkError('Unknown response type');
  }

  async delete(id: string): Promise<Matrikkelnummer> {
    const response = await this.requester.request({
      method: 'delete',
      path: `/matrikkelnummer/${id}`,
    });
    if (isMatrikkelnummer(response)) {
      return response;
    }
    throw new NetworkError('Unknown response type');
  }

  async get(id: string, query?: GetParameters): Promise<Matrikkelnummer> {
    const response = await this.requester.request({
      method: 'get',
      path: `/matrikkelnummer/${id}`,
      query: query,
    });
    if (isMatrikkelnummer(response)) {
      return response;
    }
    throw new NetworkError('Unknown response type');
  }

  async update(
    id: string,
    body: Partial<MatrikkelnummerRequest>,
  ): Promise<Matrikkelnummer> {
    const response = await this.requester.request({
      method: 'patch',
      path: `/matrikkelnummer/${id}`,
      body: body,
    });
    if (isMatrikkelnummer(response)) {
      return response;
    }
    throw new NetworkError('Unknown response type');
  }
}
