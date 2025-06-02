// Auto-generated from our API specification
// https://github.com/felleslosninger/einnsyn-api-spec

export interface AuthInfo {
  readonly entity: 'AuthInfo';
  readonly authType: 'Ansattporten' | 'ApiKey' | 'Bruker';
  readonly type: 'Bruker' | 'Enhet';
  readonly id: string;
  readonly orgnummer?: string;
  readonly email?: string;
}
