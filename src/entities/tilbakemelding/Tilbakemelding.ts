// Auto-generated from our API specification
// https://github.com/felleslosninger/einnsyn-api-spec

import type { PaginatedList } from '../../common/responses/PaginatedList';
import type { Base, BaseRequest } from '../base/Base';

/**
 * Represents user feedback submitted through the application.
 */
export interface Tilbakemelding extends Base {
  readonly entity: 'Tilbakemelding';
  /**
   * The feedback message from the user.
   */
  readonly messageFromUser?: string;
  /**
   * The path of the page where the feedback was submitted.
   */
  readonly path?: string;
  /**
   * The referer URL.
   */
  readonly referer?: string;
  /**
   * The user agent string of the user's browser.
   */
  readonly userAgent?: string;
  /**
   * The screen height of the user's device.
   */
  readonly screenHeight?: number;
  /**
   * The screen width of the user's device.
   */
  readonly screenWidth?: number;
  /**
   * The document height of the page.
   */
  readonly docHeight?: number;
  /**
   * The document width of the page.
   */
  readonly docWidth?: number;
  /**
   * The window height of the browser.
   */
  readonly winHeight?: number;
  /**
   * The window width of the browser.
   */
  readonly winWidth?: number;
  /**
   * The horizontal scroll position.
   */
  readonly scrollX?: number;
  /**
   * The vertical scroll position.
   */
  readonly scrollY?: number;
  /**
   * Indicates whether the user was satisfied.
   */
  readonly userSatisfied?: boolean;
  /**
   * Indicates whether the feedback has been handled by an administrator.
   */
  readonly handledByAdmin?: boolean;
  /**
   * A comment from the administrator who handled the feedback.
   */
  readonly adminComment?: string;
}

/**
 * Represents user feedback submitted through the application.
 *
 * The writable variant of {@link Tilbakemelding}, used as the request body when creating or updating a Tilbakemelding.
 */
export interface TilbakemeldingRequest extends BaseRequest {
  /**
   * The feedback message from the user.
   */
  messageFromUser?: string;
  /**
   * The path of the page where the feedback was submitted.
   */
  path?: string;
  /**
   * The referer URL.
   */
  referer?: string;
  /**
   * The user agent string of the user's browser.
   */
  userAgent?: string;
  /**
   * The screen height of the user's device.
   */
  screenHeight?: number;
  /**
   * The screen width of the user's device.
   */
  screenWidth?: number;
  /**
   * The document height of the page.
   */
  docHeight?: number;
  /**
   * The document width of the page.
   */
  docWidth?: number;
  /**
   * The window height of the browser.
   */
  winHeight?: number;
  /**
   * The window width of the browser.
   */
  winWidth?: number;
  /**
   * The horizontal scroll position.
   */
  scrollX?: number;
  /**
   * The vertical scroll position.
   */
  scrollY?: number;
  /**
   * Indicates whether the user was satisfied.
   */
  userSatisfied?: boolean;
  /**
   * Indicates whether the feedback has been handled by an administrator.
   */
  handledByAdmin?: boolean;
  /**
   * A comment from the administrator who handled the feedback.
   */
  adminComment?: string;
}

/**
 * Type guard that narrows an unknown value to {@link Tilbakemelding}, by checking its `entity` discriminator.
 *
 * @param obj The value to check.
 * @returns `true` if `obj` is a Tilbakemelding.
 */
export function isTilbakemelding(obj: unknown): obj is Tilbakemelding {
  switch ((obj as { entity: string })?.entity) {
    case 'Tilbakemelding':
      return true;
    default:
      return false;
  }
}

/**
 * Type guard that narrows an unknown value to a paginated list of {@link Tilbakemelding}.
 *
 * @param obj The value to check.
 * @returns `true` if `obj` is a `PaginatedList` where every item is a Tilbakemelding.
 */
export function isPaginatedTilbakemeldingList(
  obj: unknown,
): obj is PaginatedList<Tilbakemelding> {
  return (
    obj !== undefined &&
    Array.isArray((obj as PaginatedList<Tilbakemelding>)?.items) &&
    (obj as PaginatedList<Tilbakemelding>).items.every((i) =>
      isTilbakemelding(i),
    )
  );
}
