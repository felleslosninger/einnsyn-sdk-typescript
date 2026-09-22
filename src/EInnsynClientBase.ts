// Auto-generated from our API specification
// https://github.com/felleslosninger/einnsyn-api-spec

import { AuthInfoResource } from './common/authinfo/AuthInfoResource';
import { SearchResource } from './common/search/SearchResource';
import { StatisticsResource } from './common/statistics/StatisticsResource';
import type { EInnsynRequester } from './EInnsynRequester';
import { ApiKeyResource } from './entities/apikey/ApiKeyResource';
import { ArkivResource } from './entities/arkiv/ArkivResource';
import { ArkivdelResource } from './entities/arkivdel/ArkivdelResource';
import { BehandlingsprotokollResource } from './entities/behandlingsprotokoll/BehandlingsprotokollResource';
import { BrukerResource } from './entities/bruker/BrukerResource';
import { DokumentbeskrivelseResource } from './entities/dokumentbeskrivelse/DokumentbeskrivelseResource';
import { DokumentobjektResource } from './entities/dokumentobjekt/DokumentobjektResource';
import { EnhetResource } from './entities/enhet/EnhetResource';
import { IdentifikatorResource } from './entities/identifikator/IdentifikatorResource';
import { InnsynskravResource } from './entities/innsynskrav/InnsynskravResource';
import { InnsynskravBestillingResource } from './entities/innsynskravbestilling/InnsynskravBestillingResource';
import { JournalpostResource } from './entities/journalpost/JournalpostResource';
import { KlasseResource } from './entities/klasse/KlasseResource';
import { KlassifikasjonssystemResource } from './entities/klassifikasjonssystem/KlassifikasjonssystemResource';
import { KorrespondansepartResource } from './entities/korrespondansepart/KorrespondansepartResource';
import { LagretSakResource } from './entities/lagretsak/LagretSakResource';
import { LagretSoekResource } from './entities/lagretsoek/LagretSoekResource';
import { MatrikkelnummerResource } from './entities/matrikkelnummer/MatrikkelnummerResource';
import { MoetedeltakerResource } from './entities/moetedeltaker/MoetedeltakerResource';
import { MoetedokumentResource } from './entities/moetedokument/MoetedokumentResource';
import { MoetemappeResource } from './entities/moetemappe/MoetemappeResource';
import { MoetesakResource } from './entities/moetesak/MoetesakResource';
import { MoetesaksbeskrivelseResource } from './entities/moetesaksbeskrivelse/MoetesaksbeskrivelseResource';
import { SaksmappeResource } from './entities/saksmappe/SaksmappeResource';
import { SkjermingResource } from './entities/skjerming/SkjermingResource';
import { TilbakemeldingResource } from './entities/tilbakemelding/TilbakemeldingResource';
import { UtredningResource } from './entities/utredning/UtredningResource';
import { VedtakResource } from './entities/vedtak/VedtakResource';
import { VoteringResource } from './entities/votering/VoteringResource';

/**
 * Base client exposing one resource accessor per API namespace.
 */
export class EInnsynClientBase {
  /**
   * Operations on the `ApiKey` resource.
   */
  readonly apikey: ApiKeyResource;
  /**
   * Operations on the `Arkiv` resource.
   */
  readonly arkiv: ArkivResource;
  /**
   * Operations on the `Arkivdel` resource.
   */
  readonly arkivdel: ArkivdelResource;
  /**
   * Operations on the `Behandlingsprotokoll` resource.
   */
  readonly behandlingsprotokoll: BehandlingsprotokollResource;
  /**
   * Operations on the `Dokumentbeskrivelse` resource.
   */
  readonly dokumentbeskrivelse: DokumentbeskrivelseResource;
  /**
   * Operations on the `Dokumentobjekt` resource.
   */
  readonly dokumentobjekt: DokumentobjektResource;
  /**
   * Operations on the `Enhet` resource.
   */
  readonly enhet: EnhetResource;
  /**
   * Operations on the `Identifikator` resource.
   */
  readonly identifikator: IdentifikatorResource;
  /**
   * Operations on the `Journalpost` resource.
   */
  readonly journalpost: JournalpostResource;
  /**
   * Operations on the `Klasse` resource.
   */
  readonly klasse: KlasseResource;
  /**
   * Operations on the `Klassifikasjonssystem` resource.
   */
  readonly klassifikasjonssystem: KlassifikasjonssystemResource;
  /**
   * Operations on the `Korrespondansepart` resource.
   */
  readonly korrespondansepart: KorrespondansepartResource;
  /**
   * Operations on the `Matrikkelnummer` resource.
   */
  readonly matrikkelnummer: MatrikkelnummerResource;
  /**
   * Operations on the `Moetedeltaker` resource.
   */
  readonly moetedeltaker: MoetedeltakerResource;
  /**
   * Operations on the `Moetedokument` resource.
   */
  readonly moetedokument: MoetedokumentResource;
  /**
   * Operations on the `Moetemappe` resource.
   */
  readonly moetemappe: MoetemappeResource;
  /**
   * Operations on the `Moetesak` resource.
   */
  readonly moetesak: MoetesakResource;
  /**
   * Operations on the `Moetesaksbeskrivelse` resource.
   */
  readonly moetesaksbeskrivelse: MoetesaksbeskrivelseResource;
  /**
   * Operations on the `Saksmappe` resource.
   */
  readonly saksmappe: SaksmappeResource;
  /**
   * Operations on the `Skjerming` resource.
   */
  readonly skjerming: SkjermingResource;
  /**
   * Operations on the `Utredning` resource.
   */
  readonly utredning: UtredningResource;
  /**
   * Operations on the `Vedtak` resource.
   */
  readonly vedtak: VedtakResource;
  /**
   * Operations on the `Votering` resource.
   */
  readonly votering: VoteringResource;
  /**
   * Operations on the `Bruker` resource.
   */
  readonly bruker: BrukerResource;
  /**
   * Operations on the `Innsynskrav` resource.
   */
  readonly innsynskrav: InnsynskravResource;
  /**
   * Operations on the `InnsynskravBestilling` resource.
   */
  readonly innsynskravbestilling: InnsynskravBestillingResource;
  /**
   * Operations on the `LagretSak` resource.
   */
  readonly lagretsak: LagretSakResource;
  /**
   * Operations on the `LagretSoek` resource.
   */
  readonly lagretsoek: LagretSoekResource;
  /**
   * Operations on the `Tilbakemelding` resource.
   */
  readonly tilbakemelding: TilbakemeldingResource;
  /**
   * Operations on the `Search` resource.
   */
  readonly search: SearchResource;
  /**
   * Statistics namespace for querying usage and activity metrics
   */
  readonly statistics: StatisticsResource;
  /**
   * Operations on the `AuthInfo` resource.
   */
  readonly authinfo: AuthInfoResource;

  /**
   * Create a new eInnsyn client.
   *
   * @param requester The transport used to perform the HTTP requests.
   */
  constructor(requester: EInnsynRequester) {
    this.apikey = new ApiKeyResource(requester);
    this.arkiv = new ArkivResource(requester);
    this.arkivdel = new ArkivdelResource(requester);
    this.behandlingsprotokoll = new BehandlingsprotokollResource(requester);
    this.dokumentbeskrivelse = new DokumentbeskrivelseResource(requester);
    this.dokumentobjekt = new DokumentobjektResource(requester);
    this.enhet = new EnhetResource(requester);
    this.identifikator = new IdentifikatorResource(requester);
    this.journalpost = new JournalpostResource(requester);
    this.klasse = new KlasseResource(requester);
    this.klassifikasjonssystem = new KlassifikasjonssystemResource(requester);
    this.korrespondansepart = new KorrespondansepartResource(requester);
    this.matrikkelnummer = new MatrikkelnummerResource(requester);
    this.moetedeltaker = new MoetedeltakerResource(requester);
    this.moetedokument = new MoetedokumentResource(requester);
    this.moetemappe = new MoetemappeResource(requester);
    this.moetesak = new MoetesakResource(requester);
    this.moetesaksbeskrivelse = new MoetesaksbeskrivelseResource(requester);
    this.saksmappe = new SaksmappeResource(requester);
    this.skjerming = new SkjermingResource(requester);
    this.utredning = new UtredningResource(requester);
    this.vedtak = new VedtakResource(requester);
    this.votering = new VoteringResource(requester);
    this.bruker = new BrukerResource(requester);
    this.innsynskrav = new InnsynskravResource(requester);
    this.innsynskravbestilling = new InnsynskravBestillingResource(requester);
    this.lagretsak = new LagretSakResource(requester);
    this.lagretsoek = new LagretSoekResource(requester);
    this.tilbakemelding = new TilbakemeldingResource(requester);
    this.search = new SearchResource(requester);
    this.statistics = new StatisticsResource(requester);
    this.authinfo = new AuthInfoResource(requester);
  }
}
