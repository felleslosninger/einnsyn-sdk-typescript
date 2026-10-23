import type { Base } from '../../entities/base/Base';

export type PaginatedList<T extends Base> = {
  items: T[];
  next?: string;
  previous?: string;
  /**
   * The total number of matching items. Only returned by the search endpoint.
   */
  total?: {
    /**
     * The number of matching items. A lower bound when `capped` is true.
     */
    value: number;
    /**
     * True if counting stopped at `value`, meaning there are at least `value` matching items.
     */
    capped: boolean;
  };
};

export function isPaginatedList<T extends Base>(
  obj: unknown,
): obj is PaginatedList<T> {
  const objAsPaginatedList = obj as PaginatedList<T>;

  if (!Array.isArray(objAsPaginatedList?.items)) {
    return false;
  }

  if (
    typeof objAsPaginatedList?.next !== 'string' &&
    objAsPaginatedList?.next !== undefined
  ) {
    return false;
  }

  if (
    typeof objAsPaginatedList.previous !== 'string' &&
    objAsPaginatedList.previous !== undefined
  ) {
    return false;
  }

  const total = objAsPaginatedList.total;
  if (
    total !== undefined &&
    (typeof total?.value !== 'number' || typeof total?.capped !== 'boolean')
  ) {
    return false;
  }

  return true;
}
