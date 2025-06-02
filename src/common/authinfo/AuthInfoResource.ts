// Auto-generated from our API specification
// https://github.com/felleslosninger/einnsyn-api-spec

import { Resource } from '../entity/Resource';
import type { AuthInfo } from './AuthInfo';

export class AuthInfoResource extends Resource {
  async get(): Promise<AuthInfo> {
    const response = await this.requester.request({
      method: 'get',
      path: '/me',
    });
    return response as AuthInfo;
  }
}
