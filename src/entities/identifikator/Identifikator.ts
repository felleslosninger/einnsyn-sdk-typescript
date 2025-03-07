// Auto-generated from our API specification
// https://github.com/felleslosninger/einnsyn-api-spec

import type { ArkivBase, ArkivBaseRequest } from '../arkivbase/ArkivBase';
import type { PaginatedList } from '../../common/responses/PaginatedList';

export interface Identifikator extends ArkivBase {
  readonly entity: 'Identifikator';
  readonly navn: string;
  readonly identifikator: string;
  readonly initialer: string;
  readonly epostadresse: string;
}

export interface IdentifikatorRequest extends ArkivBaseRequest {
  navn: string;
  identifikator: string;
  initialer: string;
  epostadresse: string;
}

export function isIdentifikator(obj: unknown): obj is Identifikator {
  switch ((obj as { entity: string })?.entity) {
    case 'Identifikator':
      return true;
    default:
      return false;
  }
}

export function isPaginatedIdentifikatorList(
  obj: unknown,
): obj is PaginatedList<Identifikator> {
  return (
    obj !== undefined &&
    (obj as PaginatedList<Identifikator>)?.items.every((i) =>
      isIdentifikator(i),
    )
  );
}
