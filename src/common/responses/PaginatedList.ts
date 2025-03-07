import type { Base } from '../../entities/base/Base';

export type PaginatedList<T extends Base> = {
  items: T[];
  next?: string;
  previous?: string;
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

  return true;
}
