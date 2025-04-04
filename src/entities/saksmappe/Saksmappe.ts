// Auto-generated from our API specification
// https://github.com/felleslosninger/einnsyn-api-spec

import type { Enhet } from '../enhet/Enhet';
import type { Mappe, MappeRequest } from '../mappe/Mappe';
import type { JournalpostRequest } from '../journalpost/Journalpost';
import type { PaginatedList } from '../../common/responses/PaginatedList';

export interface Saksmappe extends Mappe {
  readonly entity: 'Saksmappe';
  readonly saksaar: number;
  readonly sakssekvensnummer: number;
  readonly saksnummer: string;
  readonly saksdato?: string;
  readonly administrativEnhet?: string;
  readonly administrativEnhetObjekt: Enhet | string;
}

export interface SaksmappeRequest extends MappeRequest {
  saksaar: number;
  sakssekvensnummer: number;
  saksdato?: string;
  journalpost?: Array<JournalpostRequest | string>;
  administrativEnhet?: string;
}

export function isSaksmappe(obj: unknown): obj is Saksmappe {
  switch ((obj as { entity: string })?.entity) {
    case 'Saksmappe':
      return true;
    default:
      return false;
  }
}

export function isPaginatedSaksmappeList(
  obj: unknown,
): obj is PaginatedList<Saksmappe> {
  return (
    obj !== undefined &&
    (obj as PaginatedList<Saksmappe>)?.items.every((i) => isSaksmappe(i))
  );
}
