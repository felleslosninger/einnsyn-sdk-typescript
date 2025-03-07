// Auto-generated from our API specification
// https://github.com/felleslosninger/einnsyn-api-spec

import { Resource } from '../../common/entity/Resource';
import type { ListParameters } from '../../common/queryparameters/ListParameters';
import type { PaginatedList } from '../../common/responses/PaginatedList';
import type { Bruker, BrukerRequest } from './Bruker';
import { isPaginatedBrukerList, isBruker } from './Bruker';
import { NetworkError } from '../../common/error/EInnsynError';
import type { GetParameters } from '../../common/queryparameters/GetParameters';
import type { ListByBrukerParameters } from './ListByBrukerParameters';
import type { Innsynskrav } from '../innsynskrav/Innsynskrav';
import { isPaginatedInnsynskravList } from '../innsynskrav/Innsynskrav';
import type {
  InnsynskravBestilling,
  InnsynskravBestillingRequest,
} from '../innsynskravbestilling/InnsynskravBestilling';
import {
  isPaginatedInnsynskravBestillingList,
  isInnsynskravBestilling,
} from '../innsynskravbestilling/InnsynskravBestilling';
import type { LagretSak, LagretSakRequest } from '../lagretsak/LagretSak';
import { isPaginatedLagretSakList, isLagretSak } from '../lagretsak/LagretSak';
import type { LagretSoek, LagretSoekRequest } from '../lagretsoek/LagretSoek';
import {
  isPaginatedLagretSoekList,
  isLagretSoek,
} from '../lagretsoek/LagretSoek';

export class BrukerResource extends Resource {
  async list(query?: ListParameters): Promise<PaginatedList<Bruker>> {
    const response = await this.requester.request({
      method: 'get',
      path: '/bruker',
      query: query,
    });
    if (isPaginatedBrukerList(response)) {
      return response;
    }
    throw new NetworkError('Unknown response type');
  }

  async add(body: BrukerRequest): Promise<Bruker> {
    const response = await this.requester.request({
      method: 'post',
      path: '/bruker',
      body: body,
    });
    if (isBruker(response)) {
      return response;
    }
    throw new NetworkError('Unknown response type');
  }

  async delete(id: string): Promise<Bruker> {
    const response = await this.requester.request({
      method: 'delete',
      path: `/bruker/${id}`,
    });
    if (isBruker(response)) {
      return response;
    }
    throw new NetworkError('Unknown response type');
  }

  async get(id: string, query?: GetParameters): Promise<Bruker> {
    const response = await this.requester.request({
      method: 'get',
      path: `/bruker/${id}`,
      query: query,
    });
    if (isBruker(response)) {
      return response;
    }
    throw new NetworkError('Unknown response type');
  }

  async update(id: string, body: BrukerRequest): Promise<Bruker> {
    const response = await this.requester.request({
      method: 'patch',
      path: `/bruker/${id}`,
      body: body,
    });
    if (isBruker(response)) {
      return response;
    }
    throw new NetworkError('Unknown response type');
  }

  async activate(id: string, secret: string): Promise<Bruker> {
    const response = await this.requester.request({
      method: 'patch',
      path: `/bruker/${id}/activate/${secret}`,
    });
    if (isBruker(response)) {
      return response;
    }
    throw new NetworkError('Unknown response type');
  }

  async listInnsynskrav(
    id: string,
    query?: ListByBrukerParameters,
  ): Promise<PaginatedList<Innsynskrav>> {
    const response = await this.requester.request({
      method: 'get',
      path: `/bruker/${id}/innsynskrav`,
      query: query,
    });
    if (isPaginatedInnsynskravList(response)) {
      return response;
    }
    throw new NetworkError('Unknown response type');
  }

  async listInnsynskravBestilling(
    id: string,
    query?: ListByBrukerParameters,
  ): Promise<PaginatedList<InnsynskravBestilling>> {
    const response = await this.requester.request({
      method: 'get',
      path: `/bruker/${id}/innsynskravBestilling`,
      query: query,
    });
    if (isPaginatedInnsynskravBestillingList(response)) {
      return response;
    }
    throw new NetworkError('Unknown response type');
  }

  async addInnsynskravBestilling(
    id: string,
    body: InnsynskravBestillingRequest,
  ): Promise<InnsynskravBestilling> {
    const response = await this.requester.request({
      method: 'post',
      path: `/bruker/${id}/innsynskravBestilling`,
      body: body,
    });
    if (isInnsynskravBestilling(response)) {
      return response;
    }
    throw new NetworkError('Unknown response type');
  }

  async listLagretSak(
    id: string,
    query?: ListByBrukerParameters,
  ): Promise<PaginatedList<LagretSak>> {
    const response = await this.requester.request({
      method: 'get',
      path: `/bruker/${id}/lagretSak`,
      query: query,
    });
    if (isPaginatedLagretSakList(response)) {
      return response;
    }
    throw new NetworkError('Unknown response type');
  }

  async addLagretSak(id: string, body: LagretSakRequest): Promise<LagretSak> {
    const response = await this.requester.request({
      method: 'post',
      path: `/bruker/${id}/lagretSak`,
      body: body,
    });
    if (isLagretSak(response)) {
      return response;
    }
    throw new NetworkError('Unknown response type');
  }

  async listLagretSoek(
    id: string,
    query?: ListByBrukerParameters,
  ): Promise<PaginatedList<LagretSoek>> {
    const response = await this.requester.request({
      method: 'get',
      path: `/bruker/${id}/lagretSoek`,
      query: query,
    });
    if (isPaginatedLagretSoekList(response)) {
      return response;
    }
    throw new NetworkError('Unknown response type');
  }

  async addLagretSoek(
    id: string,
    body: LagretSoekRequest,
  ): Promise<LagretSoek> {
    const response = await this.requester.request({
      method: 'post',
      path: `/bruker/${id}/lagretSoek`,
      body: body,
    });
    if (isLagretSoek(response)) {
      return response;
    }
    throw new NetworkError('Unknown response type');
  }

  async requestPasswordReset(id: string): Promise<Bruker> {
    const response = await this.requester.request({
      method: 'patch',
      path: `/bruker/${id}/requestPasswordReset`,
    });
    if (isBruker(response)) {
      return response;
    }
    throw new NetworkError('Unknown response type');
  }

  async updatePassword(
    id: string,
    body: {
      oldPassword: string;
      newPassword: string;
    },
  ): Promise<Bruker> {
    const response = await this.requester.request({
      method: 'patch',
      path: `/bruker/${id}/updatePassword`,
      body: body,
    });
    if (isBruker(response)) {
      return response;
    }
    throw new NetworkError('Unknown response type');
  }

  async updatePasswordWithSecret(
    id: string,
    secret: string,
    body: {
      newPassword: string;
    },
  ): Promise<Bruker> {
    const response = await this.requester.request({
      method: 'patch',
      path: `/bruker/${id}/updatePassword/${secret}`,
      body: body,
    });
    if (isBruker(response)) {
      return response;
    }
    throw new NetworkError('Unknown response type');
  }
}

export interface UpdatePasswordRequest {
  oldPassword: string;
  newPassword: string;
}

export interface UpdatePasswordWithSecretRequest {
  newPassword: string;
}
