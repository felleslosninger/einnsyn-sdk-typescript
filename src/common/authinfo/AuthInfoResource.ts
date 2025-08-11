// Auto-generated from our API specification
// https://github.com/felleslosninger/einnsyn-api-spec

import { Resource } from '../entity/Resource';

export class AuthInfoResource extends Resource {
  async get(): Promise<{
    readonly entity: 'AuthInfo';
    readonly authType: 'Ansattporten' | 'ApiKey' | 'Bruker';
    readonly type: 'Bruker' | 'Enhet';
    readonly id: string;
    readonly orgnummer?: string;
    readonly email?: string;
  }> {
    const response = await this.requester.request({
      method: 'get',
      path: '/me',
    });
    return response as {
      readonly entity: 'AuthInfo';
      readonly authType: 'Ansattporten' | 'ApiKey' | 'Bruker';
      readonly type: 'Bruker' | 'Enhet';
      readonly id: string;
      readonly orgnummer?: string;
      readonly email?: string;
    };
  }
}
