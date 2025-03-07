import type { QueryParameters } from '../common/queryparameters/QueryParameters';

export function searchQuerySerializer(
  params: QueryParameters = {},
  prefix = '',
): string[] {
  const str = [];
  if (Array.isArray(params)) {
    for (const param of params) {
      str.push(...searchQuerySerializer(param, prefix));
    }
  } else if (typeof params === 'object' && params !== null) {
    const keys = Object.keys(params).sort() as (keyof typeof params)[];
    for (const paramName of keys) {
      const param = params[paramName];
      str.push(
        ...searchQuerySerializer(
          param,
          prefix ? `${prefix}[${paramName}]` : paramName,
        ),
      );
    }
  } else if (typeof params === 'number' || typeof params === 'string') {
    str.push(`${encodeURIComponent(prefix)}=${encodeURIComponent(params)}`);
  }
  return str;
}
