// Auto-generated from our API specification
// https://github.com/felleslosninger/einnsyn-api-spec

import type { PaginatedList } from '../../common/responses/PaginatedList';
import type { Base, BaseRequest } from '../base/Base';

/**
 * Represents an organizational unit within the public sector, such as a municipality, a government agency, or a department. This is a central model for identifying the public entities that own and manage the information in eInnsyn.
 */
export interface Enhet extends Base {
  readonly entity: 'Enhet';
  /**
   * A URL-friendly unique slug for the resource.
   */
  readonly slug?: string;
  /**
   * The official name of the unit in Norwegian bokmål.
   */
  readonly navn: string;
  /**
   * The name of the unit in Norwegian nynorsk.
   */
  readonly navnNynorsk?: string;
  /**
   * The name of the unit in English.
   */
  readonly navnEngelsk?: string;
  /**
   * The name of the unit in Sami.
   */
  readonly navnSami?: string;
  /**
   * The 9-digit organization number from the Brønnøysund Register Centre. Only admins can change it after creation.
   */
  readonly orgnummer: string;
  /**
   * An internal code or identifier for the unit.
   */
  readonly enhetskode?: string;
  /**
   * The postal address for the unit's contact point.
   */
  readonly kontaktpunktAdresse?: string;
  /**
   * The primary contact email address for the unit.
   */
  readonly kontaktpunktEpost: string;
  /**
   * The primary contact phone number for the unit.
   */
  readonly kontaktpunktTelefon?: string;
  /**
   * The dedicated email address for receiving Freedom of Information (FOI) requests.
   */
  readonly innsynskravEpost: string;
  /**
   * The type of the organizational unit. Only admins can create top nodes, that is `DUMMYENHET` units whose ancestors are all `DUMMYENHET`.
   */
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
  /**
   * The date when the unit was officially dissolved or became inactive.
   */
  readonly avsluttetDato?: string;
  /**
   * If true, this unit should be hidden from public view.
   */
  readonly skjult?: boolean;
  /**
   * Whether an admin has verified this unit. Unverified units are listed only for admins, can be fetched by id or orgnummer by admins and the unit itself, and cannot publish data or create API keys. Only admins can read or set this field.
   */
  readonly verified?: boolean;
  /**
   * If true, this unit is configured to use the eFormidling platform for digital communication.
   */
  readonly eFormidling?: boolean;
  /**
   * If true, this is a technical or system-internal unit, not a real-world organizational unit.
   */
  readonly teknisk?: boolean;
  /**
   * A flag indicating if legacy identifiers for this unit should be converted.
   */
  readonly skalKonvertereId?: boolean;
  /**
   * A flag indicating if the unit should receive receipts for submissions.
   */
  readonly skalMottaKvittering?: boolean;
  /**
   * A UI hint to display this unit as a top-level node in a hierarchy.
   */
  readonly visToppnode?: boolean;
  /**
   * The version of the order XML format used by this unit.
   */
  readonly orderXmlVersjon?: number;
  /**
   * A list of sub-units belonging to this unit.
   */
  readonly underenhet?: Array<Enhet | string>;
  /**
   * The unit that is responsible for handling tasks on behalf of this unit.
   */
  readonly handteresAv?: Enhet | string;
  /**
   * The parent unit in the organizational hierarchy.
   */
  readonly parent?: Enhet | string;
}

/**
 * Represents an organizational unit within the public sector, such as a municipality, a government agency, or a department. This is a central model for identifying the public entities that own and manage the information in eInnsyn.
 *
 * The writable variant of {@link Enhet}, used as the request body when creating or updating a Enhet.
 */
export interface EnhetRequest extends BaseRequest {
  /**
   * A URL-friendly unique slug for the resource.
   */
  slug?: string;
  /**
   * The official name of the unit in Norwegian bokmål.
   */
  navn: string;
  /**
   * The name of the unit in Norwegian nynorsk.
   */
  navnNynorsk?: string;
  /**
   * The name of the unit in English.
   */
  navnEngelsk?: string;
  /**
   * The name of the unit in Sami.
   */
  navnSami?: string;
  /**
   * The 9-digit organization number from the Brønnøysund Register Centre. Only admins can change it after creation.
   */
  orgnummer: string;
  /**
   * An internal code or identifier for the unit.
   */
  enhetskode?: string;
  /**
   * The postal address for the unit's contact point.
   */
  kontaktpunktAdresse?: string;
  /**
   * The primary contact email address for the unit.
   */
  kontaktpunktEpost: string;
  /**
   * The primary contact phone number for the unit.
   */
  kontaktpunktTelefon?: string;
  /**
   * The dedicated email address for receiving Freedom of Information (FOI) requests.
   */
  innsynskravEpost: string;
  /**
   * The type of the organizational unit. Only admins can create top nodes, that is `DUMMYENHET` units whose ancestors are all `DUMMYENHET`.
   */
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
  /**
   * The date when the unit was officially dissolved or became inactive.
   */
  avsluttetDato?: string;
  /**
   * If true, this unit should be hidden from public view.
   */
  skjult?: boolean;
  /**
   * Whether an admin has verified this unit. Unverified units are listed only for admins, can be fetched by id or orgnummer by admins and the unit itself, and cannot publish data or create API keys. Only admins can read or set this field.
   */
  verified?: boolean;
  /**
   * If true, this unit is configured to use the eFormidling platform for digital communication.
   */
  eFormidling?: boolean;
  /**
   * If true, this is a technical or system-internal unit, not a real-world organizational unit.
   */
  teknisk?: boolean;
  /**
   * A flag indicating if legacy identifiers for this unit should be converted.
   */
  skalKonvertereId?: boolean;
  /**
   * A flag indicating if the unit should receive receipts for submissions.
   */
  skalMottaKvittering?: boolean;
  /**
   * A UI hint to display this unit as a top-level node in a hierarchy.
   */
  visToppnode?: boolean;
  /**
   * The version of the order XML format used by this unit.
   */
  orderXmlVersjon?: number;
  /**
   * A list of sub-units belonging to this unit.
   */
  underenhet?: Array<EnhetRequest | string>;
  /**
   * The unit that is responsible for handling tasks on behalf of this unit.
   */
  handteresAv?: EnhetRequest | string;
  /**
   * The parent unit in the organizational hierarchy.
   */
  parent?: EnhetRequest | string;
}

/**
 * Type guard that narrows an unknown value to {@link Enhet}, by checking its `entity` discriminator.
 *
 * @param obj The value to check.
 * @returns `true` if `obj` is a Enhet.
 */
export function isEnhet(obj: unknown): obj is Enhet {
  switch ((obj as { entity: string })?.entity) {
    case 'Enhet':
      return true;
    default:
      return false;
  }
}

/**
 * Type guard that narrows an unknown value to a paginated list of {@link Enhet}.
 *
 * @param obj The value to check.
 * @returns `true` if `obj` is a `PaginatedList` where every item is a Enhet.
 */
export function isPaginatedEnhetList(
  obj: unknown,
): obj is PaginatedList<Enhet> {
  return (
    obj !== undefined &&
    Array.isArray((obj as PaginatedList<Enhet>)?.items) &&
    (obj as PaginatedList<Enhet>).items.every((i) => isEnhet(i))
  );
}
