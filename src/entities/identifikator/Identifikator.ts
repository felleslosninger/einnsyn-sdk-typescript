// Auto-generated from our API specification
// https://github.com/felleslosninger/einnsyn-api-spec

import type { PaginatedList } from '../../common/responses/PaginatedList';
import type { ArkivBase, ArkivBaseRequest } from '../arkivbase/ArkivBase';

/**
 * Represents an identifier for a person, such as a case officer or an author.
 */
export interface Identifikator extends ArkivBase {
  readonly entity: 'Identifikator';
  /**
   * The full name of the person.
   */
  readonly navn: string;
  /**
   * A unique identifier for the person, often a username or an employee ID.
   */
  readonly identifikator: string;
  /**
   * The initials of the person.
   */
  readonly initialer: string;
  /**
   * The email address of the person.
   */
  readonly epostadresse: string;
}

/**
 * Represents an identifier for a person, such as a case officer or an author.
 *
 * The writable variant of {@link Identifikator}, used as the request body when creating or updating a Identifikator.
 */
export interface IdentifikatorRequest extends ArkivBaseRequest {
  /**
   * The full name of the person.
   */
  navn: string;
  /**
   * A unique identifier for the person, often a username or an employee ID.
   */
  identifikator: string;
  /**
   * The initials of the person.
   */
  initialer: string;
  /**
   * The email address of the person.
   */
  epostadresse: string;
}

/**
 * Type guard that narrows an unknown value to {@link Identifikator}, by checking its `entity` discriminator.
 *
 * @param obj The value to check.
 * @returns `true` if `obj` is a Identifikator.
 */
export function isIdentifikator(obj: unknown): obj is Identifikator {
  switch ((obj as { entity: string })?.entity) {
    case 'Identifikator':
      return true;
    default:
      return false;
  }
}

/**
 * Type guard that narrows an unknown value to a paginated list of {@link Identifikator}.
 *
 * @param obj The value to check.
 * @returns `true` if `obj` is a `PaginatedList` where every item is a Identifikator.
 */
export function isPaginatedIdentifikatorList(
  obj: unknown,
): obj is PaginatedList<Identifikator> {
  return (
    obj !== undefined &&
    Array.isArray((obj as PaginatedList<Identifikator>)?.items) &&
    (obj as PaginatedList<Identifikator>).items.every((i) => isIdentifikator(i))
  );
}
