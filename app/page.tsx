import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { CheckCircle, ArrowRight, Phone } from 'lucide-react'
import ServiceCard from '@/components/ServiceCard'
import FAQAccordion from '@/components/FAQAccordion'
import ReviewCard from '@/components/ReviewCard'
import ScrollReveal from '@/components/ScrollReveal'
import AuroraRibbon from '@/components/AuroraRibbon'
import WaveDivider from '@/components/WaveDivider'
import JsonLd from '@/components/JsonLd'
import { faqPageJsonLd } from '@/lib/schema'

const title = 'Brannrådgiver i Alta | Brannkonsult AS'
const description =
  'Brannkonsult AS tilbyr brannkonsept, brannprosjektering og branntilsyn i Alta og Finnmark. Sentralt godkjent foretak. Få uforpliktende tilbud i dag.'

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: 'https://www.altabrannkonsult.no' },
  openGraph: {
    title,
    description,
    url: 'https://www.altabrannkonsult.no',
    images: [{ url: '/images/hero.jpg', width: 1200, height: 630, alt: 'Brannkonsult AS' }],
  },
}

const services = [
  {
    iconImage: '/images/icon-brannkonsept.gif',
    title: 'Brannkonsept',
    description:
      'Skal du bygge, bygge på eller endre bruken av et bygg? Kommunen krever normalt et brannkonsept før byggesøknaden kan godkjennes — vi setter opp dokumentasjonen som viser at brannsikkerheten er ivaretatt.',
    href: '/brannkonsept',
  },
  {
    iconImage: '/images/icon-brannprosjektering.gif',
    title: 'Brannprosjektering',
    description:
      'Vi finner løsninger som oppfyller brannkravene uten å gjøre byggeprosjektet mer komplisert eller kostbart enn nødvendig — med fastpris du kjenner før arbeidet starter.',
    href: '/brannprosjektering',
  },
  {
    iconImage: '/images/icon-branntilsyn.png',
    title: 'Branninspeksjon',
    description:
      'Har brannvesenet gitt pålegg, eller lurer du på hvor bygget faktisk står brannteknisk? Vi kartlegger avvik og leverer en tilstandsrapport med konkrete tiltak.',
    href: '/branninspeksjon',
  },
  {
    iconImage: '/images/icon-uavhengig-kontroll.png',
    title: 'Uavhengig kontroll',
    description:
      'Krever prosjektet ditt uavhengig kontroll av brannkonseptet? Vi kontrollerer at dokumentasjonen holder mål opp mot forskriftene — uavhengig av hvem som prosjekterte den.',
    href: '/uavhengig-kontroll',
  },
]

const stats = [
  { number: '1200+', label: 'Prosjekter siden 2013' },
  { number: 'TKL 1+2', label: 'Godkjenning fra DiBK' },
  { number: 'Fastpris', label: 'Ingen timepris' },
  { number: '5–10 dager', label: 'Vanlig leveringstid' },
]

const reviews = [
  {
    quote:
      'Brannkonsult utarbeidet et ryddig og svært grundig dokument som ble til god nytte under oppføring av et tilbygg i et bevaringsverdig område i Fredrikstad. Det ga den nødvendige tryggheten vedr brannforskrifter for meg som byggherre og for de ansvarlige for bygget. I tillegg er jeg blitt møtt med stor imøtekommenhet og gode svar ved flere telefonhenvendelser både før og etter at jeg mottok dokumentet. Jeg gir mine beste anbefalinger.',
    author: 'Anne-Grete Halmrast',
  },
  {
    quote:
      'Raskt svar og god hjelp. Meget godt gjennomført brannkonsept som var greit å skjønne. Gode tips og forslag til endringer underveis. Meget fornøyd!',
    author: 'Sandra Roksøy',
  },
  {
    quote:
      'Fikk bistand med brannprosjektering ved oppføring av to stk. vertikaldelte tomannsboliger i Lørenskog kommune. Godt fornøyd med rapport og resultat, og tar kontakt med dem ved neste prosjekt som vil være aktuelt!',
    author: 'Jon Steiland',
    company: 'ASC Eiendomsutvikling AS',
  },
  {
    quote:
      'Rask og god brannprosjektering. Har ingenting å utsette på hjelpen jeg fikk til mitt boligprosjekt i Tromsø.',
    author: 'Tony Berntsen',
  },
  {
    quote:
      'Vi brukte Brannkonsult AS i forbindelse med et tilbygg på en barnehage. Vi fikk rask tilbakemelding på vår forespørsel, med veiledning og pris. Etter bestilling ble tjenesten levert i henhold til tilbud og leveringstid. Enkelt og greit godt fornøyd med hele prosessen.',
    author: 'Håvard Musdalslien',
    company: 'Contre AS',
  },
  {
    quote:
      'Thomas har ekspertise og gir en trygghet. Han forstod behovet vårt og har dekket det på en effektiv måte. Veldig fornøyd så langt!',
    author: 'Ibrahim Temel',
  },
]

const faqItems = [
  {
    question: 'Hva må jeg regne med å betale for brannprosjektering?',
    answer:
      'Prisen avhenger av prosjektets omfang. Et brannkonsept i tiltaksklasse 2 starter normalt fra 15 000 kr eks. mva., inkludert branntegninger — og du får alltid fastpris før vi setter i gang.',
  },
  {
    question: 'Må jeg ha brannprosjektering for prosjektet mitt?',
    answer:
      'Sannsynligvis, ja. Søker du kommunen om tilbygg, bruksendring, ny boenhet eller påbygg, følger det som regel krav til brannteknisk dokumentasjon. Send oss noen ord om prosjektet, så sier vi ifra.',
  },
  {
    question: 'Må dere befare bygget først?',
    answer:
      'Ikke alltid. Ved nybygg og de fleste tilbygg holder det med tegninger og kartdata. Er bygningen eldre eller mer komplisert, avtaler vi en befaring.',
  },
  {
    question: 'Har eldre bygg i Finnmark spesielle branntekniske utfordringer?',
    answer:
      'Mye av bygningsmassen i Finnmark er fra gjenreisningen etter andre verdenskrig, da store deler av fylket ble bygget opp igjen i høyt tempo. Disse byggene er sjelden dokumentert etter dagens krav, og vi ser ofte behov for oppgradering av rømningsveier og brannceller ved ombygging eller bruksendring.',
  },
  {
    question: 'Hva innebærer det at dere er sentralt godkjent?',
    answer:
      'Vi har sentral godkjenning fra DiBK for brannprosjektering i tiltaksklasse 1 og 2 — dokumentasjon på at vi har kompetansen, forsikringen og kvalitetssystemet som kreves for å ta ansvarsrett i byggesaken.',
  },
  {
    question: 'Tar dere oppdrag utenfor Alta?',
    answer:
      'Ja. Foruten Alta bistår vi kunder i hele Finnmark — fra Hammerfest, Kirkenes, Vadsø og Vardø, via Kautokeino, Karasjok, Tana, Nesseby og Porsanger i innlandet, til Nordkapp, Måsøy, Loppa, Hasvik, Gamvik, Lebesby, Berlevåg og Båtsfjord langs kysten — samt i Troms og Nordland. Vi dekker med andre ord hele Nord-Norge, og tar også oppdrag i resten av landet.',
  },
]

const articles = [
  {
    href: '/artikler/pipebrann',
    image: '/images/article-pipebrann.jpg',
    title: 'Forebygg pipebrann med enkle grep',
    excerpt:
      'Er du i faresonen for å kunne få brann i skorsteinen? Les om hva som forårsaker pipebrann og enkle tiltak for å redusere risikoen.',
  },
  {
    href: '/artikler/brannslokker',
    image: '/images/article-brannslukker.jpg',
    title: 'Har du riktig brannslokkeapparat?',
    excerpt:
      'Vet du hvilken type brannslokker du trenger i hjemmet? Vi gjennomgår krav og forskjellen mellom pulver- og skumapparater.',
  },
  {
    href: '/artikler/roykvarsler',
    image: '/images/article-roykvarsler.jpg',
    title: 'Riktig røykvarsler redder liv',
    excerpt:
      'Er du godt nok sikret hvis det oppstår brann om natten? Vi forklarer krav til røykvarslere og riktig plassering.',
  },
]

export default function HomePage() {
  return (
    <>
      <JsonLd data={faqPageJsonLd(faqItems)} />

      {/* ── HERO ── */}
      <section className="relative min-h-screen flex items-center bg-brand-dark">
        <Image
          src="/images/hero.jpg"
          alt="Alta by nattestemning"
          fill
          priority
          className="object-cover opacity-40"
          sizes="100vw"
        />
        <AuroraRibbon />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-black/90 via-brand-black/40 to-brand-black/20" />
        <div className="relative z-10 w-full max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <p className="hero-1 uppercase tracking-[0.3em] text-brand-orange text-sm lg:text-base mb-6 font-bold">
            Alta · Finnmark
          </p>
          <h1 className="hero-2 text-brand-white text-4xl lg:text-5xl xl:text-6xl font-black leading-tight mb-6 max-w-2xl">
            Brannprosjektering av uavhengig rådgiver
          </h1>
          <p className="hero-3 text-brand-white/70 text-base lg:text-lg leading-relaxed mb-8 max-w-xl">
            Over 1200 gjennomførte prosjekter — fra oppgradering av gjenreisningsbygg til nye
            boligfelt og næringsbygg i Finnmark. Fastpris, og svar på henvendelsen din innen 24 timer.
          </p>
          <div className="hero-4 flex flex-wrap gap-4 mb-10">
            <Link
              href="/kontakt-oss"
              className="bg-brand-orange text-brand-white font-bold px-8 py-3.5 rounded-[10px] hover:opacity-90 hover:scale-[1.03] transition-all duration-200"
            >
              Få gratis tilbud
            </Link>
            <Link
              href="/om-oss"
              className="border-2 border-brand-white text-brand-white font-bold px-8 py-3.5 rounded-[10px] hover:bg-brand-white hover:text-brand-black transition-all duration-200"
            >
              Om oss
            </Link>
          </div>
          <div className="hero-5 flex flex-wrap items-center gap-6 text-sm text-brand-white/70">
            <div className="flex items-center gap-2">
              <CheckCircle size={16} className="text-brand-orange shrink-0" />
              Sentralt godkjent TKL 1+2
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle size={16} className="text-brand-orange shrink-0" />
              Fast pris
            </div>
          </div>
        </div>
        <WaveDivider fill="var(--color-brand-white)" />
      </section>

      {/* ── SERVICES ── */}
      <section className="py-16 lg:py-24 bg-brand-white">
        <div className="max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="text-center mb-12">
            <p className="font-accent text-brand-orange text-xl mb-2">Våre tjenester</p>
            <h2 className="text-brand-black text-3xl lg:text-4xl font-black">
              Fra brannkonsept til ferdig byggesak
            </h2>
          </ScrollReveal>
          <div className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-4 lg:pb-0 lg:overflow-visible lg:grid lg:grid-cols-4">
            {services.map((service, i) => (
              <ScrollReveal
                key={service.href}
                delay={i * 80}
                className="min-w-[260px] snap-start lg:min-w-0"
              >
                <ServiceCard {...service} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── ABOUT / TRUST STRIP ── */}
      <section className="py-16 lg:py-24 bg-brand-lightgray">
        <div className="max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="text-center max-w-2xl mx-auto mb-14">
            <p className="font-accent text-brand-orange text-xl mb-2">Lokalkunnskap fra Finnmarksvidda til Hjemmeluft</p>
            <h2 className="text-brand-black text-3xl lg:text-4xl font-black mb-4">
              Trygg brannrådgivning i arktisk klima
            </h2>
            <p className="text-brand-darkgray leading-relaxed">
              Fra de eldgamle helleristningene i Hjemmeluft til moderne boligfelt langs
              Finnmarksvidda — vi kjenner utfordringene et arktisk klima med lange, mørke
              vintre og lyse sommernetter stiller til brannsikkerhet.
            </p>
          </ScrollReveal>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <ScrollReveal key={i} delay={i * 80} variant="scale" className="text-center">
                <div className="text-brand-orange font-black text-3xl lg:text-4xl mb-2">
                  {stat.number}
                </div>
                <div className="text-brand-darkgray text-sm lg:text-base">{stat.label}</div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── REVIEWS ── */}
      <section className="py-16 lg:py-24 bg-brand-white">
        <div className="max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="text-center mb-12">
            <p className="font-accent text-brand-orange text-xl mb-2">Kundene våre sier</p>
            <h2 className="text-brand-black text-3xl lg:text-4xl font-black">Hva sier kundene?</h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reviews.map((r, i) => (
              <ScrollReveal key={i} delay={i * 80}>
                <ReviewCard {...r} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-16 lg:py-24 bg-brand-lightgray">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="text-brand-black text-3xl lg:text-4xl font-black mb-10 text-center">
              Ofte stilte spørsmål
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={80} variant="fade">
            <FAQAccordion items={faqItems} />
          </ScrollReveal>
        </div>
      </section>

      {/* ── ARTICLES ── */}
      <section className="py-16 lg:py-24 bg-brand-white">
        <div className="max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="flex items-end justify-between mb-10">
            <h2 className="text-brand-black text-3xl lg:text-4xl font-black">Nyttige artikler</h2>
            <Link
              href="/artikler/pipebrann"
              className="text-brand-orange font-bold text-sm flex items-center gap-1 hover:gap-2 transition-all"
            >
              Se alle <ArrowRight size={16} />
            </Link>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {articles.map((a, i) => (
              <ScrollReveal key={a.href} delay={i * 80}>
                <Link
                  href={a.href}
                  className="group bg-brand-white rounded-[30px] overflow-hidden border border-brand-gray hover:-translate-y-1 hover:shadow-lg transition-all duration-300 flex flex-col h-full"
                >
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={a.image}
                      alt={a.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <h3 className="font-bold text-brand-black text-lg mb-2 group-hover:text-brand-orange transition-colors duration-200">
                      {a.title}
                    </h3>
                    <p className="text-brand-darkgray text-sm leading-relaxed mb-4 flex-1">{a.excerpt}</p>
                    <span className="text-brand-orange font-bold text-sm flex items-center gap-1">
                      Les mer <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-200" />
                    </span>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section className="relative bg-brand-dark py-16 lg:py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-50">
          <AuroraRibbon />
        </div>
        <ScrollReveal variant="fade" className="relative z-10 max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-brand-white text-3xl lg:text-4xl font-black mb-4">
            Send oss prosjektet ditt
          </h2>
          <p className="text-brand-white/70 text-lg mb-8 max-w-xl mx-auto">
            Fortell oss kort om bygget og hva du trenger — så har du et fastprisforslag
            i hånden innen 24 timer.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/kontakt-oss"
              className="bg-brand-orange text-brand-white font-bold px-8 py-3.5 rounded-[10px] hover:opacity-90 hover:scale-[1.03] transition-all duration-200"
            >
              Få gratis tilbud
            </Link>
            <a
              href="tel:+4740051437"
              className="border-2 border-brand-white text-brand-white font-bold px-8 py-3.5 rounded-[10px] hover:bg-brand-white hover:text-brand-black transition-all duration-200 flex items-center gap-2"
            >
              <Phone size={16} /> Ring oss
            </a>
          </div>
        </ScrollReveal>
      </section>
    </>
  )
}
