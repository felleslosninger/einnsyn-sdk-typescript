// Auto-generated from our API specification
// https://github.com/felleslosninger/einnsyn-api-spec

import type { PaginatedList } from '../../common/responses/PaginatedList';
import type { ArkivBase, ArkivBaseRequest } from '../arkivbase/ArkivBase';
import type { Journalpost } from '../journalpost/Journalpost';
import type { Moetedokument } from '../moetedokument/Moetedokument';
import type { Moetemappe } from '../moetemappe/Moetemappe';
import type { Moetesak } from '../moetesak/Moetesak';
import type { Saksmappe } from '../saksmappe/Saksmappe';

/**
 * Identifies a property unit (matrikkelenhet) in the Norwegian cadastre, following Kartverket's standard format.
 */
export interface Matrikkelnummer extends ArkivBase {
  readonly entity: 'Matrikkelnummer';
  /**
   * Four-digit municipality number (kommunenummer).
   */
  readonly kommunenummer: string;
  /**
   * Garden number (gaardsnummer).
   */
  readonly gaardsnummer: number;
  /**
   * Bruk number (bruksnummer).
   */
  readonly bruksnummer: number;
  /**
   * Leasehold number (festenummer). 0 means no leasehold.
   */
  readonly festenummer?: number;
  /**
   * Section number (seksjonsnummer). 0 means no section.
   */
  readonly seksjonsnummer?: number;
  /**
   * The Saksmappe this Matrikkelnummer is associated with, if any.
   */
  readonly saksmappe?: Saksmappe | string;
  /**
   * The Moetemappe this Matrikkelnummer is associated with, if any.
   */
  readonly moetemappe?: Moetemappe | string;
  /**
   * The Journalpost this Matrikkelnummer is associated with, if any.
   */
  readonly journalpost?: Journalpost | string;
  /**
   * The Moetesak this Matrikkelnummer is associated with, if any.
   */
  readonly moetesak?: Moetesak | string;
  /**
   * The Moetedokument this Matrikkelnummer is associated with, if any.
   */
  readonly moetedokument?: Moetedokument | string;
}

/**
 * Identifies a property unit (matrikkelenhet) in the Norwegian cadastre, following Kartverket's standard format.
 *
 * The writable variant of {@link Matrikkelnummer}, used as the request body when creating or updating a Matrikkelnummer.
 */
export interface MatrikkelnummerRequest extends ArkivBaseRequest {
  /**
   * Four-digit municipality number (kommunenummer).
   */
  kommunenummer: string;
  /**
   * Garden number (gaardsnummer).
   */
  gaardsnummer: number;
  /**
   * Bruk number (bruksnummer).
   */
  bruksnummer: number;
  /**
   * Leasehold number (festenummer). 0 means no leasehold.
   */
  festenummer?: number;
  /**
   * Section number (seksjonsnummer). 0 means no section.
   */
  seksjonsnummer?: number;
}

/**
 * Type guard that narrows an unknown value to {@link Matrikkelnummer}, by checking its `entity` discriminator.
 *
 * @param obj The value to check.
 * @returns `true` if `obj` is a Matrikkelnummer.
 */
export function isMatrikkelnummer(obj: unknown): obj is Matrikkelnummer {
  switch ((obj as { entity: string })?.entity) {
    case 'Matrikkelnummer':
      return true;
    default:
      return false;
  }
}

/**
 * Type guard that narrows an unknown value to a paginated list of {@link Matrikkelnummer}.
 *
 * @param obj The value to check.
 * @returns `true` if `obj` is a `PaginatedList` where every item is a Matrikkelnummer.
 */
export function isPaginatedMatrikkelnummerList(
  obj: unknown,
): obj is PaginatedList<Matrikkelnummer> {
  return (
    obj !== undefined &&
    Array.isArray((obj as PaginatedList<Matrikkelnummer>)?.items) &&
    (obj as PaginatedList<Matrikkelnummer>).items.every((i) =>
      isMatrikkelnummer(i),
    )
  );
}
