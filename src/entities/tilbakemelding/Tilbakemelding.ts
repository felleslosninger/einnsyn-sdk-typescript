// Auto-generated from our API specification
// https://github.com/felleslosninger/einnsyn-api-spec

import type { Base, BaseRequest } from '../base/Base';
import type { PaginatedList } from '../../common/responses/PaginatedList';

export interface Tilbakemelding extends Base {
  readonly entity: 'Tilbakemelding';
  readonly messageFromUser?: string;
  readonly path?: string;
  readonly referer?: string;
  readonly userAgent?: string;
  readonly screenHeight?: number;
  readonly screenWidth?: number;
  readonly docHeight?: number;
  readonly docWidth?: number;
  readonly winHeight?: number;
  readonly winWidth?: number;
  readonly scrollX?: number;
  readonly scrollY?: number;
  readonly userSatisfied?: boolean;
  readonly handledByAdmin?: boolean;
  readonly adminComment?: string;
}

export interface TilbakemeldingRequest extends BaseRequest {
  messageFromUser?: string;
  path?: string;
  referer?: string;
  userAgent?: string;
  screenHeight?: number;
  screenWidth?: number;
  docHeight?: number;
  docWidth?: number;
  winHeight?: number;
  winWidth?: number;
  scrollX?: number;
  scrollY?: number;
  userSatisfied?: boolean;
  handledByAdmin?: boolean;
  adminComment?: string;
}

export function isTilbakemelding(obj: unknown): obj is Tilbakemelding {
  switch ((obj as { entity: string })?.entity) {
    case 'Tilbakemelding':
      return true;
    default:
      return false;
  }
}

export function isPaginatedTilbakemeldingList(
  obj: unknown,
): obj is PaginatedList<Tilbakemelding> {
  return (
    obj !== undefined &&
    (obj as PaginatedList<Tilbakemelding>)?.items.every((i) =>
      isTilbakemelding(i),
    )
  );
}
