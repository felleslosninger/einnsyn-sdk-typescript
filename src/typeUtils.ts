// Auto-generated from our API specification
// https://github.com/felleslosninger/einnsyn-api-spec

export type { AuthInfo } from './common/authinfo/AuthInfo';
export {
  AuthenticationError,
  AuthorizationError,
  BadRequestError,
  ConflictError,
  EInnsynError,
  InternalServerError,
  MethodNotAllowedError,
  NetworkError,
  NotFoundError,
  TooManyRequestsError,
  TooManyUnverifiedOrdersError,
  ValidationError,
} from './common/error/EInnsynError';
export type { FilterParameters } from './common/queryparameters/FilterParameters';
export type { GetParameters } from './common/queryparameters/GetParameters';
export type { ListParameters } from './common/queryparameters/ListParameters';
export type { QueryParameters } from './common/queryparameters/QueryParameters';
export type { PaginatedList } from './common/responses/PaginatedList';
export type { SearchParameters } from './common/search/SearchParameters';
export type { StatisticsParameters } from './common/statistics/StatisticsParameters';
export {
  type ApiKey,
  type ApiKeyRequest,
  isApiKey,
} from './entities/apikey/ApiKey';
export { type Arkiv, type ArkivRequest, isArkiv } from './entities/arkiv/Arkiv';
export type { ListByArkivParameters } from './entities/arkiv/ListByArkivParameters';
export {
  type ArkivBase,
  type ArkivBaseRequest,
  isArkivBase,
} from './entities/arkivbase/ArkivBase';
export {
  type Arkivdel,
  type ArkivdelRequest,
  isArkivdel,
} from './entities/arkivdel/Arkivdel';
export type { ListByArkivdelParameters } from './entities/arkivdel/ListByArkivdelParameters';
export { type Base, type BaseRequest, isBase } from './entities/base/Base';
export {
  type Behandlingsprotokoll,
  type BehandlingsprotokollRequest,
  isBehandlingsprotokoll,
} from './entities/behandlingsprotokoll/Behandlingsprotokoll';
export {
  type Bruker,
  type BrukerRequest,
  isBruker,
} from './entities/bruker/Bruker';
export type { ListByBrukerParameters } from './entities/bruker/ListByBrukerParameters';
export {
  type Dokumentbeskrivelse,
  type DokumentbeskrivelseRequest,
  isDokumentbeskrivelse,
} from './entities/dokumentbeskrivelse/Dokumentbeskrivelse';
export {
  type Dokumentobjekt,
  type DokumentobjektRequest,
  isDokumentobjekt,
} from './entities/dokumentobjekt/Dokumentobjekt';
export { type Enhet, type EnhetRequest, isEnhet } from './entities/enhet/Enhet';
export type { ListByEnhetParameters } from './entities/enhet/ListByEnhetParameters';
export {
  type Identifikator,
  type IdentifikatorRequest,
  isIdentifikator,
} from './entities/identifikator/Identifikator';
export {
  type Innsynskrav,
  type InnsynskravRequest,
  isInnsynskrav,
} from './entities/innsynskrav/Innsynskrav';
export type { ListByInnsynskravParameters } from './entities/innsynskrav/ListByInnsynskravParameters';
export {
  type InnsynskravBestilling,
  type InnsynskravBestillingRequest,
  isInnsynskravBestilling,
} from './entities/innsynskravbestilling/InnsynskravBestilling';
export type { ListByInnsynskravBestillingParameters } from './entities/innsynskravbestilling/ListByInnsynskravBestillingParameters';
export {
  isJournalpost,
  type Journalpost,
  type JournalpostRequest,
} from './entities/journalpost/Journalpost';
export type { ListByJournalpostParameters } from './entities/journalpost/ListByJournalpostParameters';
export {
  isKlasse,
  type Klasse,
  type KlasseRequest,
} from './entities/klasse/Klasse';
export type { ListByKlasseParameters } from './entities/klasse/ListByKlasseParameters';
export {
  isKlassifikasjonssystem,
  type Klassifikasjonssystem,
  type KlassifikasjonssystemRequest,
} from './entities/klassifikasjonssystem/Klassifikasjonssystem';
export type { ListByKlassifikasjonssystemParameters } from './entities/klassifikasjonssystem/ListByKlassifikasjonssystemParameters';
export {
  isKorrespondansepart,
  type Korrespondansepart,
  type KorrespondansepartRequest,
} from './entities/korrespondansepart/Korrespondansepart';
export {
  isLagretSak,
  type LagretSak,
  type LagretSakRequest,
} from './entities/lagretsak/LagretSak';
export {
  isLagretSoek,
  type LagretSoek,
  type LagretSoekRequest,
} from './entities/lagretsoek/LagretSoek';
export { isMappe, type Mappe, type MappeRequest } from './entities/mappe/Mappe';
export {
  isMoetedeltaker,
  type Moetedeltaker,
  type MoetedeltakerRequest,
} from './entities/moetedeltaker/Moetedeltaker';
export type { ListByMoetedokumentParameters } from './entities/moetedokument/ListByMoetedokumentParameters';
export {
  isMoetedokument,
  type Moetedokument,
  type MoetedokumentRequest,
} from './entities/moetedokument/Moetedokument';
export type { ListByMoetemappeParameters } from './entities/moetemappe/ListByMoetemappeParameters';
export {
  isMoetemappe,
  type Moetemappe,
  type MoetemappeRequest,
} from './entities/moetemappe/Moetemappe';
export type { GetByMoetesakParameters } from './entities/moetesak/GetByMoetesakParameters';
export type { ListByMoetesakParameters } from './entities/moetesak/ListByMoetesakParameters';
export {
  isMoetesak,
  type Moetesak,
  type MoetesakRequest,
} from './entities/moetesak/Moetesak';
export {
  isMoetesaksbeskrivelse,
  type Moetesaksbeskrivelse,
  type MoetesaksbeskrivelseRequest,
} from './entities/moetesaksbeskrivelse/Moetesaksbeskrivelse';
export {
  isRegistrering,
  type Registrering,
  type RegistreringRequest,
} from './entities/registrering/Registrering';
export type { ListBySaksmappeParameters } from './entities/saksmappe/ListBySaksmappeParameters';
export {
  isSaksmappe,
  type Saksmappe,
  type SaksmappeRequest,
} from './entities/saksmappe/Saksmappe';
export {
  isSkjerming,
  type Skjerming,
  type SkjermingRequest,
} from './entities/skjerming/Skjerming';
export {
  isTilbakemelding,
  type Tilbakemelding,
  type TilbakemeldingRequest,
} from './entities/tilbakemelding/Tilbakemelding';
export type { ListByUtredningParameters } from './entities/utredning/ListByUtredningParameters';
export {
  isUtredning,
  type Utredning,
  type UtredningRequest,
} from './entities/utredning/Utredning';
export type { ListByVedtakParameters } from './entities/vedtak/ListByVedtakParameters';
export {
  isVedtak,
  type Vedtak,
  type VedtakRequest,
} from './entities/vedtak/Vedtak';
export {
  isVotering,
  type Votering,
  type VoteringRequest,
} from './entities/votering/Votering';

export class EInnsynClientBase {}
