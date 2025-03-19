// Auto-generated from our API specification
// https://github.com/felleslosninger/einnsyn-api-spec

import { Resource } from '../../common/entity/Resource';
import type { ListParameters } from '../../common/queryparameters/ListParameters';
import type { PaginatedList } from '../../common/responses/PaginatedList';
import type { Dokumentobjekt, DokumentobjektRequest } from './Dokumentobjekt';
import {
  isPaginatedDokumentobjektList,
  isDokumentobjekt,
} from './Dokumentobjekt';
import { NetworkError } from '../../common/error/EInnsynError';
import type { GetParameters } from '../../common/queryparameters/GetParameters';

export class DokumentobjektResource extends Resource {
  async list(query?: ListParameters): Promise<PaginatedList<Dokumentobjekt>> {
    const response = await this.requester.request({
      method: 'get',
      path: '/dokumentobjekt',
      query: query,
    });
    if (isPaginatedDokumentobjektList(response)) {
      return response;
    }
    throw new NetworkError('Unknown response type');
  }

  async delete(id: string): Promise<Dokumentobjekt> {
    const response = await this.requester.request({
      method: 'delete',
      path: `/dokumentobjekt/${id}`,
    });
    if (isDokumentobjekt(response)) {
      return response;
    }
    throw new NetworkError('Unknown response type');
  }

  async get(id: string, query?: GetParameters): Promise<Dokumentobjekt> {
    const response = await this.requester.request({
      method: 'get',
      path: `/dokumentobjekt/${id}`,
      query: query,
    });
    if (isDokumentobjekt(response)) {
      return response;
    }
    throw new NetworkError('Unknown response type');
  }

  async update(
    id: string,
    body: Partial<DokumentobjektRequest>,
  ): Promise<Dokumentobjekt> {
    const response = await this.requester.request({
      method: 'patch',
      path: `/dokumentobjekt/${id}`,
      body: body,
    });
    if (isDokumentobjekt(response)) {
      return response;
    }
    throw new NetworkError('Unknown response type');
  }
}
