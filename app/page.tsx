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

export const metadata: Metadata = {
  title: 'Brannprosjektering i Alta | Alta Brannkonsult',
  description:
    'Alta Brannkonsult tilbyr brannkonsept, brannprosjektering og branntilsyn i Alta og Finnmark. Sentralt godkjent foretak. Få uforpliktende tilbud i dag.',
  alternates: { canonical: 'https://www.altabrannkonsult.no' },
}

const services = [
  {
    iconImage: '/images/icon-brannkonsept.gif',
    title: 'Brannkonsept',
    description:
      'Kommunen krever et brannkonsept ved de fleste byggesaker. Vi utarbeider helhetlige brannkonsept som ivaretar brannsikkerheten i ditt prosjekt — fra garasjer til leilighetsbygg.',
    href: '/brannkonsept',
  },
  {
    iconImage: '/images/icon-brannprosjektering.gif',
    title: 'Brannprosjektering',
    description:
      'Vi sørger for at bygget ditt oppfyller alle krav til brannsikkerhet, og finner praktiske løsninger som sparer både tid og kostnader. Fast pris der det er mulig.',
    href: '/brannprosjektering',
  },
  {
    iconImage: '/images/icon-branntilsyn.png',
    title: 'Branntilsyn',
    description:
      'Har du fått pålegg etter branntilsyn, eller ønsker du en grundig gjennomgang av byggets brannsikkerhet? Vi inspiserer hele bygningen og utarbeider tilstandsrapport.',
    href: '/branntilsyn',
  },
  {
    iconImage: '/images/icon-uavhengig-kontroll.png',
    title: 'Uavhengig kontroll',
    description:
      'I mange byggeprosjekter er det krav om uavhengig kontroll av brannsikkerheten. Vi sikrer at brannkonseptet er i tråd med gjeldende forskrifter.',
    href: '/uavhengig-kontroll',
  },
]

const stats = [
  { number: '1200+', label: 'Prosjekter gjennomført' },
  { number: 'TKL 1+2', label: 'Sentralt godkjent' },
  { number: 'Fast pris', label: 'Der det er mulig' },
  { number: 'Hele landet', label: 'Vi tar oppdrag overalt' },
]

const reviews = [
  {
    quote:
      'Jeg fikk hjelp med en ny boenhet. Rask tilbakemelding og grundig rapport. Anbefaler andre å bruke Brannkonsult AS!',
    author: 'Jan-David Antonsen',
    company: 'Anton Arkitekt AS',
  },
  {
    quote:
      'Raskt svar, relevant og grundig rapport, kommunen likte måten det var gjort på. Ny oppdatert rapport innen kort tid. Alt til bra priser.',
    author: 'Vegard Hals',
  },
  {
    quote:
      'Alta Brannkonsult er lette å samarbeide med, de svarer raskt, finner gode løsninger og leverer arbeid av jevnt høy kvalitet. Brannotatene deres er praktiske og enkle å bruke.',
    author: 'Daniel Hagelin',
    company: 'Hagelin Byggservice',
  },
  {
    quote:
      'Brannkonsult AS er faglig dyktige, ryddige og løsningsorienterte. Det er viktig for oss som arkitekter og for våre kunder.',
    author: 'Jon Cederbrand',
    company: 'Jon Cederbrand Arkitektur AS',
  },
]

const faqItems = [
  {
    question: 'Hva koster brannprosjektering i Alta?',
    answer:
      'Prisen varierer etter omfang og kompleksitet. Et brannkonsept i tiltaksklasse 2 starter hos oss fra ca. 15 000 kr ekskl. mva., inkludert branntegninger. Vi tilbyr alltid fastpris.',
  },
  {
    question: 'Trenger jeg brannprosjektering for mitt prosjekt?',
    answer:
      'De fleste byggesaker krever brannprosjektering — tilbygg, bruksendring, ny boenhet, påbygg. Ta kontakt for en gratis vurdering av ditt prosjekt.',
  },
  {
    question: 'Er befaring nødvendig?',
    answer:
      'For nybygg og enklere saker er det ofte ikke nødvendig. Takket være digitale verktøy og kartdata kan vi i mange tilfeller jobbe uten fysisk befaring.',
  },
  {
    question: 'Er dere sentralt godkjent?',
    answer:
      'Ja, vi har sentral godkjenning for brannprosjektering i tiltaksklasse 1 og 2. Dette er en garanti for at vi er seriøse, godt forsikret og har dokumenterte referanseprosjekter.',
  },
  {
    question: 'Tar dere oppdrag utenfor Alta?',
    answer:
      'Vi hjelper kunder i Alta, Finnmark og hele Nord-Norge, og tar oppdrag over hele landet.',
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
            Brannprosjektering under nordlyshimmelen
          </h1>
          <p className="hero-3 text-brand-white/70 text-base lg:text-lg leading-relaxed mb-8 max-w-xl">
            Vi hjelper deg med brannprosjektering i Alta og Finnmark. Sentralt godkjent foretak
            med over 1200 gjennomførte prosjekter, fast pris og personlig oppfølging.
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
              Hva kan vi hjelpe deg med?
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
            Klar for å komme i gang?
          </h2>
          <p className="text-brand-white/70 text-lg mb-8 max-w-xl mx-auto">
            Ta kontakt i dag for et uforpliktende tilbud på brannprosjektering i Alta.
            Vi svarer innen 24 timer.
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
