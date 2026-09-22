// Auto-generated from our API specification
// https://github.com/felleslosninger/einnsyn-api-spec

import { Resource } from '../entity/Resource';
import type { StatisticsParameters } from './StatisticsParameters';

/**
 * Statistics namespace for querying usage and activity metrics
 */
export class StatisticsResource extends Resource {
  /**
   * Query statistics data with optional filtering and aggregation parameters.
   * Returns both a summary of total statistics and optional time series data.
   *
   * @param query Optional query parameters.
   */
  async query(query?: StatisticsParameters): Promise<{
    /**
     * Aggregated summary of statistics over the entire queried period
     */
    readonly summary: {
      /**
       * Total number of entities created in the period
       */
      readonly createdCount: number;
      /**
       * Total number of entities created with fulltext content in the period
       */
      readonly createdWithFulltextCount: number;
      /**
       * Total number of innsynskrav (access requests) created in the period
       */
      readonly createdInnsynskravCount: number;
      /**
       * Total number of document downloads in the period
       */
      readonly downloadCount: number;
    };
    readonly metadata: {
      /**
       * The aggregation interval used for the time series data
       */
      readonly aggregateInterval: string;
      /**
       * The start date for the aggregated statistics
       */
      readonly aggregateFrom?: string;
      /**
       * The end date for the aggregated statistics
       */
      readonly aggregateTo?: string;
    };
    /**
     * Time series data showing statistics broken down by the specified aggregation interval.
     * Each entry represents metrics for a specific time period.
     */
    readonly timeSeries?: Array<{
      /**
       * The timestamp for this time series data point
       */
      readonly time: string;
      /**
       * Number of entities created during this time interval
       */
      readonly createdCount: number;
      /**
       * Number of entities created with fulltext content during this time interval
       */
      readonly createdWithFulltextCount: number;
      /**
       * Number of innsynskrav (access requests) created during this time interval
       */
      readonly createdInnsynskravCount: number;
      /**
       * Number of document downloads during this time interval
       */
      readonly downloadCount: number;
    }>;
  }> {
    const response = await this.requester.request({
      method: 'get',
      path: '/statistics',
      query: query,
    });
    return response as {
      /**
       * Aggregated summary of statistics over the entire queried period
       */
      readonly summary: {
        /**
         * Total number of entities created in the period
         */
        readonly createdCount: number;
        /**
         * Total number of entities created with fulltext content in the period
         */
        readonly createdWithFulltextCount: number;
        /**
         * Total number of innsynskrav (access requests) created in the period
         */
        readonly createdInnsynskravCount: number;
        /**
         * Total number of document downloads in the period
         */
        readonly downloadCount: number;
      };
      readonly metadata: {
        /**
         * The aggregation interval used for the time series data
         */
        readonly aggregateInterval: string;
        /**
         * The start date for the aggregated statistics
         */
        readonly aggregateFrom?: string;
        /**
         * The end date for the aggregated statistics
         */
        readonly aggregateTo?: string;
      };
      /**
       * Time series data showing statistics broken down by the specified aggregation interval.
       * Each entry represents metrics for a specific time period.
       */
      readonly timeSeries?: Array<{
        /**
         * The timestamp for this time series data point
         */
        readonly time: string;
        /**
         * Number of entities created during this time interval
         */
        readonly createdCount: number;
        /**
         * Number of entities created with fulltext content during this time interval
         */
        readonly createdWithFulltextCount: number;
        /**
         * Number of innsynskrav (access requests) created during this time interval
         */
        readonly createdInnsynskravCount: number;
        /**
         * Number of document downloads during this time interval
         */
        readonly downloadCount: number;
      }>;
    };
  }
}
