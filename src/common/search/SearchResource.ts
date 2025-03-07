// Auto-generated from our API specification
// https://github.com/felleslosninger/einnsyn-api-spec

import { Resource } from '../entity/Resource';
import type { SearchParameters } from './SearchParameters';
import type { PaginatedList } from '../responses/PaginatedList';
import type { Base } from '../../entities/base/Base';
import { isPaginatedBaseList } from '../../entities/base/Base';
import { NetworkError } from '../error/EInnsynError';

export class SearchResource extends Resource {
  async search(query?: SearchParameters): Promise<PaginatedList<Base>> {
    const response = await this.requester.request({
      method: 'get',
      path: '/search',
      query: query,
    });
    if (isPaginatedBaseList(response)) {
      return response;
    }
    throw new NetworkError('Unknown response type');
  }
}
