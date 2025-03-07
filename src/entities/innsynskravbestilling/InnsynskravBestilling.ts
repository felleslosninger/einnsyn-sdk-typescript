// Auto-generated from our API specification
// https://github.com/felleslosninger/einnsyn-api-spec

import type {
  Innsynskrav,
  InnsynskravRequest,
} from '../innsynskrav/Innsynskrav';
import type { Bruker } from '../bruker/Bruker';
import type { Base, BaseRequest } from '../base/Base';
import type { PaginatedList } from '../../common/responses/PaginatedList';

export interface InnsynskravBestilling extends Base {
  readonly entity: 'InnsynskravBestilling';
  readonly email: string;
  readonly innsynskrav: Array<Innsynskrav | string>;
  readonly verified?: boolean;
  readonly bruker?: Bruker | string;
  readonly language?: 'nb' | 'nn' | 'en' | 'se';
}

export interface InnsynskravBestillingRequest extends BaseRequest {
  email: string;
  innsynskrav: Array<InnsynskravRequest | string>;
  language?: 'nb' | 'nn' | 'en' | 'se';
}

export function isInnsynskravBestilling(
  obj: unknown,
): obj is InnsynskravBestilling {
  switch ((obj as { entity: string })?.entity) {
    case 'InnsynskravBestilling':
      return true;
    default:
      return false;
  }
}

export function isPaginatedInnsynskravBestillingList(
  obj: unknown,
): obj is PaginatedList<InnsynskravBestilling> {
  return (
    obj !== undefined &&
    (obj as PaginatedList<InnsynskravBestilling>)?.items.every((i) =>
      isInnsynskravBestilling(i),
    )
  );
}
