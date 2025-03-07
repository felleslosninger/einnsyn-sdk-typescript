// Auto-generated from our API specification
// https://github.com/felleslosninger/einnsyn-api-spec

import { Resource } from '../entity/Resource';
import type { StatisticsParameters } from './StatisticsParameters';

export class StatisticsResource extends Resource {
  async query(query?: StatisticsParameters): Promise<{
    readonly innsynskrav?: {
      readonly count: number;
      readonly interval: number;
      readonly bucket: Array<{
        readonly time: string;
        readonly count: number;
      }>;
    };
    readonly download?: {
      readonly count: number;
      readonly interval: number;
      readonly bucket: Array<{
        readonly time: string;
        readonly count: number;
      }>;
    };
  }> {
    const response = await this.requester.request({
      method: 'get',
      path: '/statistics',
      query: query,
    });
    return response as {
      readonly innsynskrav?: {
        readonly count: number;
        readonly interval: number;
        readonly bucket: Array<{
          readonly time: string;
          readonly count: number;
        }>;
      };
      readonly download?: {
        readonly count: number;
        readonly interval: number;
        readonly bucket: Array<{
          readonly time: string;
          readonly count: number;
        }>;
      };
    };
  }
}
