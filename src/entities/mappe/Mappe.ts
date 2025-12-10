// Auto-generated from our API specification
// https://github.com/felleslosninger/einnsyn-api-spec

import type { Klasse, KlasseRequest } from '../klasse/Klasse';
import type { Saksmappe } from '../saksmappe/Saksmappe';
import type { Moetemappe } from '../moetemappe/Moetemappe';
import type { Arkivdel } from '../arkivdel/Arkivdel';
import type { ArkivBase, ArkivBaseRequest } from '../arkivbase/ArkivBase';
import type { PaginatedList } from '../../common/responses/PaginatedList';

export interface Mappe extends ArkivBase {
  readonly slug?: string;
  readonly offentligTittel: string;
  readonly offentligTittelSensitiv: string;
  readonly beskrivelse?: string;
  readonly noekkelord?: string;
  readonly publisertDato?: string;
  readonly oppdatertDato?: string;
  readonly klasse?: Klasse | string;
  readonly saksmappe?: Saksmappe | string;
  readonly moetemappe?: Moetemappe | string;
  readonly arkivdel?: Arkivdel | string;
}

export interface MappeRequest extends ArkivBaseRequest {
  slug?: string;
  offentligTittel: string;
  offentligTittelSensitiv: string;
  beskrivelse?: string;
  noekkelord?: string;
  publisertDato?: string;
  oppdatertDato?: string;
  klasse?: KlasseRequest | string;
}

export function isMappe(obj: unknown): obj is Mappe {
  switch ((obj as { entity: string })?.entity) {
    case 'Moetemappe':
    case 'Saksmappe':
      return true;
    default:
      return false;
  }
}

export function isPaginatedMappeList(
  obj: unknown,
): obj is PaginatedList<Mappe> {
  return (
    obj !== undefined &&
    (obj as PaginatedList<Mappe>)?.items.every((i) => isMappe(i))
  );
}
