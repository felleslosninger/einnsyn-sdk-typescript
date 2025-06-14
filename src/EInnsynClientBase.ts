// Auto-generated from our API specification
// https://github.com/felleslosninger/einnsyn-api-spec

import type { EInnsynRequester } from './EInnsynRequester';
import { ApiKeyResource } from './entities/apikey/ApiKeyResource';
import { ArkivResource } from './entities/arkiv/ArkivResource';
import { ArkivdelResource } from './entities/arkivdel/ArkivdelResource';
import { BehandlingsprotokollResource } from './entities/behandlingsprotokoll/BehandlingsprotokollResource';
import { DokumentbeskrivelseResource } from './entities/dokumentbeskrivelse/DokumentbeskrivelseResource';
import { DokumentobjektResource } from './entities/dokumentobjekt/DokumentobjektResource';
import { EnhetResource } from './entities/enhet/EnhetResource';
import { IdentifikatorResource } from './entities/identifikator/IdentifikatorResource';
import { JournalpostResource } from './entities/journalpost/JournalpostResource';
import { KlasseResource } from './entities/klasse/KlasseResource';
import { KlassifikasjonssystemResource } from './entities/klassifikasjonssystem/KlassifikasjonssystemResource';
import { KorrespondansepartResource } from './entities/korrespondansepart/KorrespondansepartResource';
import { MoetedeltakerResource } from './entities/moetedeltaker/MoetedeltakerResource';
import { MoetedokumentResource } from './entities/moetedokument/MoetedokumentResource';
import { MoetemappeResource } from './entities/moetemappe/MoetemappeResource';
import { MoetesakResource } from './entities/moetesak/MoetesakResource';
import { MoetesaksbeskrivelseResource } from './entities/moetesaksbeskrivelse/MoetesaksbeskrivelseResource';
import { SaksmappeResource } from './entities/saksmappe/SaksmappeResource';
import { SkjermingResource } from './entities/skjerming/SkjermingResource';
import { UtredningResource } from './entities/utredning/UtredningResource';
import { VedtakResource } from './entities/vedtak/VedtakResource';
import { VoteringResource } from './entities/votering/VoteringResource';
import { BrukerResource } from './entities/bruker/BrukerResource';
import { InnsynskravResource } from './entities/innsynskrav/InnsynskravResource';
import { InnsynskravBestillingResource } from './entities/innsynskravbestilling/InnsynskravBestillingResource';
import { LagretSakResource } from './entities/lagretsak/LagretSakResource';
import { LagretSoekResource } from './entities/lagretsoek/LagretSoekResource';
import { TilbakemeldingResource } from './entities/tilbakemelding/TilbakemeldingResource';
import { SearchResource } from './common/search/SearchResource';
import { StatisticsResource } from './common/statistics/StatisticsResource';
import { AuthInfoResource } from './common/authinfo/AuthInfoResource';

export class EInnsynClientBase {
  readonly apikey: ApiKeyResource;
  readonly arkiv: ArkivResource;
  readonly arkivdel: ArkivdelResource;
  readonly behandlingsprotokoll: BehandlingsprotokollResource;
  readonly dokumentbeskrivelse: DokumentbeskrivelseResource;
  readonly dokumentobjekt: DokumentobjektResource;
  readonly enhet: EnhetResource;
  readonly identifikator: IdentifikatorResource;
  readonly journalpost: JournalpostResource;
  readonly klasse: KlasseResource;
  readonly klassifikasjonssystem: KlassifikasjonssystemResource;
  readonly korrespondansepart: KorrespondansepartResource;
  readonly moetedeltaker: MoetedeltakerResource;
  readonly moetedokument: MoetedokumentResource;
  readonly moetemappe: MoetemappeResource;
  readonly moetesak: MoetesakResource;
  readonly moetesaksbeskrivelse: MoetesaksbeskrivelseResource;
  readonly saksmappe: SaksmappeResource;
  readonly skjerming: SkjermingResource;
  readonly utredning: UtredningResource;
  readonly vedtak: VedtakResource;
  readonly votering: VoteringResource;
  readonly bruker: BrukerResource;
  readonly innsynskrav: InnsynskravResource;
  readonly innsynskravbestilling: InnsynskravBestillingResource;
  readonly lagretsak: LagretSakResource;
  readonly lagretsoek: LagretSoekResource;
  readonly tilbakemelding: TilbakemeldingResource;
  readonly search: SearchResource;
  readonly statistics: StatisticsResource;
  readonly authinfo: AuthInfoResource;

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
