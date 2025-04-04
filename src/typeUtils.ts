// Auto-generated from our API specification
// https://github.com/felleslosninger/einnsyn-api-spec

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
  type Journalpost,
  type JournalpostRequest,
  isJournalpost,
} from './entities/journalpost/Journalpost';
export type { ListByJournalpostParameters } from './entities/journalpost/ListByJournalpostParameters';
export {
  type Klasse,
  type KlasseRequest,
  isKlasse,
} from './entities/klasse/Klasse';
export type { ListByKlasseParameters } from './entities/klasse/ListByKlasseParameters';
export {
  type Klassifikasjonssystem,
  type KlassifikasjonssystemRequest,
  isKlassifikasjonssystem,
} from './entities/klassifikasjonssystem/Klassifikasjonssystem';
export type { ListByKlassifikasjonssystemParameters } from './entities/klassifikasjonssystem/ListByKlassifikasjonssystemParameters';
export {
  type Korrespondansepart,
  type KorrespondansepartRequest,
  isKorrespondansepart,
} from './entities/korrespondansepart/Korrespondansepart';
export {
  type LagretSak,
  type LagretSakRequest,
  isLagretSak,
} from './entities/lagretsak/LagretSak';
export {
  type LagretSoek,
  type LagretSoekRequest,
  isLagretSoek,
} from './entities/lagretsoek/LagretSoek';
export { type Mappe, type MappeRequest, isMappe } from './entities/mappe/Mappe';
export {
  type Moetedeltaker,
  type MoetedeltakerRequest,
  isMoetedeltaker,
} from './entities/moetedeltaker/Moetedeltaker';
export type { ListByMoetedokumentParameters } from './entities/moetedokument/ListByMoetedokumentParameters';
export {
  type Moetedokument,
  type MoetedokumentRequest,
  isMoetedokument,
} from './entities/moetedokument/Moetedokument';
export type { ListByMoetemappeParameters } from './entities/moetemappe/ListByMoetemappeParameters';
export {
  type Moetemappe,
  type MoetemappeRequest,
  isMoetemappe,
} from './entities/moetemappe/Moetemappe';
export type { GetByMoetesakParameters } from './entities/moetesak/GetByMoetesakParameters';
export type { ListByMoetesakParameters } from './entities/moetesak/ListByMoetesakParameters';
export {
  type Moetesak,
  type MoetesakRequest,
  isMoetesak,
} from './entities/moetesak/Moetesak';
export {
  type Moetesaksbeskrivelse,
  type MoetesaksbeskrivelseRequest,
  isMoetesaksbeskrivelse,
} from './entities/moetesaksbeskrivelse/Moetesaksbeskrivelse';
export {
  type Registrering,
  type RegistreringRequest,
  isRegistrering,
} from './entities/registrering/Registrering';
export type { ListBySaksmappeParameters } from './entities/saksmappe/ListBySaksmappeParameters';
export {
  type Saksmappe,
  type SaksmappeRequest,
  isSaksmappe,
} from './entities/saksmappe/Saksmappe';
export {
  type Skjerming,
  type SkjermingRequest,
  isSkjerming,
} from './entities/skjerming/Skjerming';
export {
  type Tilbakemelding,
  type TilbakemeldingRequest,
  isTilbakemelding,
} from './entities/tilbakemelding/Tilbakemelding';
export type { ListByUtredningParameters } from './entities/utredning/ListByUtredningParameters';
export {
  type Utredning,
  type UtredningRequest,
  isUtredning,
} from './entities/utredning/Utredning';
export type { ListByVedtakParameters } from './entities/vedtak/ListByVedtakParameters';
export {
  type Vedtak,
  type VedtakRequest,
  isVedtak,
} from './entities/vedtak/Vedtak';
export {
  type Votering,
  type VoteringRequest,
  isVotering,
} from './entities/votering/Votering';

export class EInnsynClientBase {}
