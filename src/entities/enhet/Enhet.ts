// Auto-generated from our API specification
// https://github.com/felleslosninger/einnsyn-api-spec

import type { Base, BaseRequest } from '../base/Base';
import type { PaginatedList } from '../../common/responses/PaginatedList';

export interface Enhet extends Base {
  readonly entity: 'Enhet';
  readonly slug?: string;
  readonly navn: string;
  readonly navnNynorsk?: string;
  readonly navnEngelsk?: string;
  readonly navnSami?: string;
  readonly orgnummer: string;
  readonly enhetskode?: string;
  readonly kontaktpunktAdresse?: string;
  readonly kontaktpunktEpost: string;
  readonly kontaktpunktTelefon?: string;
  readonly innsynskravEpost: string;
  readonly enhetstype:
    | 'ADMINISTRATIVENHET'
    | 'AVDELING'
    | 'BYDEL'
    | 'DUMMYENHET'
    | 'FYLKE'
    | 'KOMMUNE'
    | 'ORGAN'
    | 'SEKSJON'
    | 'UTVALG'
    | 'VIRKSOMHET';
  readonly avsluttetDato?: string;
  readonly skjult?: boolean;
  readonly eFormidling?: boolean;
  readonly teknisk?: boolean;
  readonly skalKonvertereId?: boolean;
  readonly skalMottaKvittering?: boolean;
  readonly visToppnode?: boolean;
  readonly orderXmlVersjon?: number;
  readonly underenhet?: Array<Enhet | string>;
  readonly handteresAv?: Enhet | string;
  readonly parent?: Enhet | string;
}

export interface EnhetRequest extends BaseRequest {
  slug?: string;
  navn: string;
  navnNynorsk?: string;
  navnEngelsk?: string;
  navnSami?: string;
  orgnummer: string;
  enhetskode?: string;
  kontaktpunktAdresse?: string;
  kontaktpunktEpost: string;
  kontaktpunktTelefon?: string;
  innsynskravEpost: string;
  enhetstype:
    | 'ADMINISTRATIVENHET'
    | 'AVDELING'
    | 'BYDEL'
    | 'DUMMYENHET'
    | 'FYLKE'
    | 'KOMMUNE'
    | 'ORGAN'
    | 'SEKSJON'
    | 'UTVALG'
    | 'VIRKSOMHET';
  avsluttetDato?: string;
  skjult?: boolean;
  eFormidling?: boolean;
  teknisk?: boolean;
  skalKonvertereId?: boolean;
  skalMottaKvittering?: boolean;
  visToppnode?: boolean;
  orderXmlVersjon?: number;
  underenhet?: Array<EnhetRequest | string>;
  handteresAv?: EnhetRequest | string;
  parent?: EnhetRequest | string;
}

export function isEnhet(obj: unknown): obj is Enhet {
  switch ((obj as { entity: string })?.entity) {
    case 'Enhet':
      return true;
    default:
      return false;
  }
}

export function isPaginatedEnhetList(
  obj: unknown,
): obj is PaginatedList<Enhet> {
  return (
    obj !== undefined &&
    (obj as PaginatedList<Enhet>)?.items.every((i) => isEnhet(i))
  );
}
