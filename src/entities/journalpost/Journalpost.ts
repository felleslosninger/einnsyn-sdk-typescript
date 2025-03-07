// Auto-generated from our API specification
// https://github.com/felleslosninger/einnsyn-api-spec

import type { Skjerming, SkjermingRequest } from '../skjerming/Skjerming';
import type { Enhet, EnhetRequest } from '../enhet/Enhet';
import type { Saksmappe } from '../saksmappe/Saksmappe';
import type {
  Registrering,
  RegistreringRequest,
} from '../registrering/Registrering';
import type { PaginatedList } from '../../common/responses/PaginatedList';

export interface Journalpost extends Registrering {
  readonly entity: 'Journalpost';
  readonly journalaar: number;
  readonly journalsekvensnummer: number;
  readonly journalpostnummer: number;
  readonly journalposttype:
    | 'inngaaende_dokument'
    | 'utgaaende_dokument'
    | 'organinternt_dokument_uten_oppfoelging'
    | 'organinternt_dokument_for_oppfoelging'
    | 'saksframlegg'
    | 'sakskart'
    | 'moeteprotokoll'
    | 'moetebok'
    | 'ukjent';
  readonly journaldato: string;
  readonly dokumentetsDato?: string;
  readonly skjerming?: Skjerming | string;
  readonly legacyJournalposttype?: string;
  readonly legacyFoelgsakenReferanse?: Array<string>;
  readonly administrativEnhet?: string;
  readonly administrativEnhetObjekt?: Enhet | string;
  readonly saksmappe: Saksmappe | string;
}

export interface JournalpostRequest extends RegistreringRequest {
  journalaar: number;
  journalsekvensnummer: number;
  journalpostnummer: number;
  journalposttype:
    | 'inngaaende_dokument'
    | 'utgaaende_dokument'
    | 'organinternt_dokument_uten_oppfoelging'
    | 'organinternt_dokument_for_oppfoelging'
    | 'saksframlegg'
    | 'sakskart'
    | 'moeteprotokoll'
    | 'moetebok'
    | 'ukjent';
  journaldato: string;
  dokumentetsDato?: string;
  skjerming?: SkjermingRequest | string;
  legacyJournalposttype?: string;
  legacyFoelgsakenReferanse?: Array<string>;
  administrativEnhet?: string;
  administrativEnhetObjekt?: EnhetRequest | string;
}

export function isJournalpost(obj: unknown): obj is Journalpost {
  switch ((obj as { entity: string })?.entity) {
    case 'Journalpost':
      return true;
    default:
      return false;
  }
}

export function isPaginatedJournalpostList(
  obj: unknown,
): obj is PaginatedList<Journalpost> {
  return (
    obj !== undefined &&
    (obj as PaginatedList<Journalpost>)?.items.every((i) => isJournalpost(i))
  );
}
