// Auto-generated from our API specification
// https://github.com/felleslosninger/einnsyn-api-spec

import type {
  Korrespondansepart,
  KorrespondansepartRequest,
} from '../korrespondansepart/Korrespondansepart';
import type {
  Dokumentbeskrivelse,
  DokumentbeskrivelseRequest,
} from '../dokumentbeskrivelse/Dokumentbeskrivelse';
import type { Enhet, EnhetRequest } from '../enhet/Enhet';
import type { ArkivBase, ArkivBaseRequest } from '../arkivbase/ArkivBase';
import type { PaginatedList } from '../../common/responses/PaginatedList';

export interface Registrering extends ArkivBase {
  readonly offentligTittel: string;
  readonly offentligTittelSensitiv: string;
  readonly beskrivelse?: string;
  readonly publisertDato?: string;
  readonly oppdatertDato?: string;
  readonly korrespondansepart?: Array<Korrespondansepart | string>;
  readonly dokumentbeskrivelse?: Array<Dokumentbeskrivelse | string>;
  readonly avhendetTil?: Enhet | string;
}

export interface RegistreringRequest extends ArkivBaseRequest {
  offentligTittel: string;
  offentligTittelSensitiv: string;
  beskrivelse?: string;
  publisertDato?: string;
  oppdatertDato?: string;
  korrespondansepart?: Array<KorrespondansepartRequest | string>;
  dokumentbeskrivelse?: Array<DokumentbeskrivelseRequest | string>;
  avhendetTil?: EnhetRequest | string;
}

export function isRegistrering(obj: unknown): obj is Registrering {
  switch ((obj as { entity: string })?.entity) {
    case 'Journalpost':
    case 'Moetesak':
    case 'Moetedokument':
      return true;
    default:
      return false;
  }
}

export function isPaginatedRegistreringList(
  obj: unknown,
): obj is PaginatedList<Registrering> {
  return (
    obj !== undefined &&
    (obj as PaginatedList<Registrering>)?.items.every((i) => isRegistrering(i))
  );
}
