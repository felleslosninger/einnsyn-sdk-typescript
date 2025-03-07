// Auto-generated from our API specification
// https://github.com/felleslosninger/einnsyn-api-spec

import type {
  InnsynskravBestilling,
  InnsynskravBestillingRequest,
} from '../innsynskravbestilling/InnsynskravBestilling';
import type {
  Journalpost,
  JournalpostRequest,
} from '../journalpost/Journalpost';
import type { Enhet, EnhetRequest } from '../enhet/Enhet';
import type { Base, BaseRequest } from '../base/Base';
import type { PaginatedList } from '../../common/responses/PaginatedList';

export interface Innsynskrav extends Base {
  readonly entity: 'Innsynskrav';
  readonly innsynskravBestilling?: InnsynskravBestilling | string;
  readonly journalpost: Journalpost | string;
  readonly enhet?: Enhet | string;
  readonly email?: string;
  readonly sent?: string;
}

export interface InnsynskravRequest extends BaseRequest {
  innsynskravBestilling?: InnsynskravBestillingRequest | string;
  journalpost: JournalpostRequest | string;
  enhet?: EnhetRequest | string;
  sent?: string;
}

export function isInnsynskrav(obj: unknown): obj is Innsynskrav {
  switch ((obj as { entity: string })?.entity) {
    case 'Innsynskrav':
      return true;
    default:
      return false;
  }
}

export function isPaginatedInnsynskravList(
  obj: unknown,
): obj is PaginatedList<Innsynskrav> {
  return (
    obj !== undefined &&
    (obj as PaginatedList<Innsynskrav>)?.items.every((i) => isInnsynskrav(i))
  );
}
