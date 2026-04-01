// Auto-generated from our API specification
// https://github.com/felleslosninger/einnsyn-api-spec

import { Resource } from '../entity/Resource';
import type { StatisticsParameters } from './StatisticsParameters';

export class StatisticsResource extends Resource {
  async query(query?: StatisticsParameters): Promise<{
    readonly summary: {
      readonly createdCount: number;
      readonly createdWithFulltextCount: number;
      readonly createdInnsynskravCount: number;
      readonly downloadCount: number;
    };
    readonly metadata: {
      readonly aggregateInterval: string;
      readonly aggregateFrom?: string;
      readonly aggregateTo?: string;
    };
    readonly timeSeries?: Array<{
      readonly time: string;
      readonly createdCount: number;
      readonly createdWithFulltextCount: number;
      readonly createdInnsynskravCount: number;
      readonly downloadCount: number;
    }>;
  }> {
    const response = await this.requester.request({
      method: 'get',
      path: '/statistics',
      query: query,
    });
    return response as {
      readonly summary: {
        readonly createdCount: number;
        readonly createdWithFulltextCount: number;
        readonly createdInnsynskravCount: number;
        readonly downloadCount: number;
      };
      readonly metadata: {
        readonly aggregateInterval: string;
        readonly aggregateFrom?: string;
        readonly aggregateTo?: string;
      };
      readonly timeSeries?: Array<{
        readonly time: string;
        readonly createdCount: number;
        readonly createdWithFulltextCount: number;
        readonly createdInnsynskravCount: number;
        readonly downloadCount: number;
      }>;
    };
  }
}
