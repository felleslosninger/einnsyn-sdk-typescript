import type { QueryParameters } from '../common/queryparameters/QueryParameters';

function serializeQueryParameterValue(params: unknown, prefix = ''): string[] {
  const str = [];
  if (Array.isArray(params)) {
    for (const param of params) {
      str.push(...serializeQueryParameterValue(param, prefix));
    }
  } else if (typeof params === 'object' && params !== null) {
    for (const paramName of Object.keys(params).sort()) {
      const param = (params as QueryParameters)[paramName];
      str.push(
        ...serializeQueryParameterValue(
          param,
          prefix ? `${prefix}[${paramName}]` : paramName,
        ),
      );
    }
  } else if (
    typeof params === 'boolean' ||
    typeof params === 'number' ||
    typeof params === 'string'
  ) {
    str.push(
      `${encodeURIComponent(prefix)}=${encodeURIComponent(String(params))}`,
    );
  }
  return str;
}

export function searchQuerySerializer(
  params: QueryParameters = {},
  prefix = '',
): string[] {
  return serializeQueryParameterValue(params, prefix);
}
