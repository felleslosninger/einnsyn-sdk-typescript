// Auto-generated from our API specification
// https://github.com/felleslosninger/einnsyn-api-spec

import type { FilterParameters } from '../queryparameters/FilterParameters';

/**
 * Parameters for querying statistics data
 */
export interface StatisticsParameters extends FilterParameters {
  /**
   * The start date for aggregating statistics. If not provided, it will be set to one year before `aggregateTo`.
   */
  aggregateFrom?: string;
  /**
   * The end date for aggregating statistics. If not provided, statistics up to the current date will be included.
   */
  aggregateTo?: string;
  /**
   * The preferred time interval for aggregating statistics data. Determines how data points are grouped in the time series.
   * Note: There is a maximum limit of 1000 data points in the time series. If the requested interval combined with the
   * date range would exceed this limit, the interval will be automatically adjusted to a larger granularity to stay
   * within the limit. Default is "hour".
   */
  aggregateInterval?: 'hour' | 'day' | 'week' | 'month' | 'year';
}
