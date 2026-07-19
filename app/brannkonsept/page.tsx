import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { CheckCircle, Phone, Mail } from 'lucide-react'
import FAQAccordion from '@/components/FAQAccordion'
import ScrollReveal from '@/components/ScrollReveal'
import AuroraRibbon from '@/components/AuroraRibbon'
import WaveDivider from '@/components/WaveDivider'
import JsonLd from '@/components/JsonLd'
import { breadcrumbJsonLd, faqPageJsonLd } from '@/lib/schema'

const title = 'Brannkonsept i Alta | Brannkonsult AS'
const description =
  'Brannkonsult AS utarbeider brannkonsept i Alta og Finnmark. Sentralt godkjent TKL 1+2. Fra ca. 15 000 kr inkl. branntegninger. Fastpris alltid.'

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: 'https://www.altabrannkonsult.no/brannkonsept' },
  openGraph: {
    title,
    description,
    url: 'https://www.altabrannkonsult.no/brannkonsept',
    images: [{ url: '/images/service-brannkonsept.jpg', width: 1200, height: 630, alt: 'Brannkonsept i Alta' }],
  },
}

const breadcrumb = breadcrumbJsonLd([
  { name: 'Hjem', path: '/' },
  { name: 'Brannkonsept', path: '/brannkonsept' },
])

const faqItems = [
  {
    question: 'Hva trenger jeg til mitt prosjekt — brannkonsept eller brannteknisk notat?',
    answer:
      'Et brannkonsept er en mer helhetlig rapport som beskriver brannsikkerhetsnivået til hele byggverket. Et brannteknisk notat er enklere og brukes for mindre tiltak. Vi veileder deg til riktig løsning for ditt prosjekt — ta kontakt for en gratis vurdering.',
  },
  {
    question: 'Krever dere befaring for å utarbeide brannkonseptet?',
    answer:
      'Sjelden — for nybygg og enklere tilbygg holder det som regel med tegninger og kartdata. For eldre bygg uten oppdatert tegningsgrunnlag, som det finnes en del av i Finnmark etter gjenreisningen, avtaler vi gjerne en befaring.',
  },
  {
    question: 'Hva ligger prisen på et brannkonsept på?',
    answer:
      'Et brannkonsept i tiltaksklasse 2 starter fra ca. 15 000 kr ekskl. mva., inkludert branntegninger. Vi oppgir alltid fastpris før vi setter i gang, uansett hvor i Finnmark prosjektet er.',
  },
  {
    question: 'Tilbyr dere håndverkertjenester?',
    answer:
      'Nei — vi er en nøytral rådgiver og selger ingen produkter eller håndverkertjenester. Dette sikrer at rådgivningen vår alltid er uavhengig og i ditt beste interesse.',
  },
  {
    question: 'Hva må jeg sende dere for å få et pristilbud?',
    answer:
      'Adresse eller matrikkel, antall etasjer og bruksareal, tegninger (situasjonsplan og plantegninger), og en kort beskrivelse av prosjektet. Send dette til oss, så har du tilbud i innboksen innen 24 timer.',
  },
  {
    question: 'Hvor lang tid tar det å utarbeide et brannkonsept?',
    answer:
      'Leveringstid avhenger av prosjektets omfang og vår arbeidsbelastning. For de fleste prosjekter leverer vi innen 5–10 virkedager etter mottatt bestilling og komplett underlag. Har du tidsfrist, oppgi dette i forespørselen.',
  },
  {
    question: 'Tilbyr dere brannkonsept utenfor Alta?',
    answer:
      'Ja. Foruten Alta bistår vi kunder i hele Finnmark — fra Hammerfest, Kirkenes, Vadsø og Vardø, via Kautokeino, Karasjok, Tana, Nesseby og Porsanger i innlandet, til Nordkapp, Måsøy, Loppa, Hasvik, Gamvik, Lebesby, Berlevåg og Båtsfjord langs kysten — samt i Troms og Nordland. Vi dekker med andre ord hele Nord-Norge, og tar også oppdrag i resten av landet.',
  },
]

export default function BrannkonseptPage() {
  return (
    <>
      <JsonLd data={breadcrumb} />
      <JsonLd data={faqPageJsonLd(faqItems)} />

      {/* Header */}
      <section className="relative bg-brand-dark py-24 lg:py-32 min-h-[40vh] flex items-end overflow-hidden">
        <Image
          src="/images/hero.jpg"
          alt="Alta"
          fill
          className="object-cover opacity-20"
          sizes="100vw"
        />
        <div className="opacity-30">
          <AuroraRibbon />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-brand-black/90 via-brand-black/50 to-brand-black/20" />
        <div className="relative z-10 max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="hero-1 flex items-center gap-2 text-brand-orange text-sm mb-4">
            <Link href="/" className="hover:underline">Hjem</Link>
            <span>/</span>
            <span>Brannkonsept</span>
          </div>
          <h1 className="hero-2 text-brand-white text-4xl lg:text-5xl font-black max-w-2xl">
            Brannkonsept i Alta
          </h1>
          <p className="hero-3 text-brand-white/70 text-lg mt-4 max-w-xl leading-relaxed">
            Vi utarbeider helhetlige brannkonsept for byggesaker i Alta og Finnmark. Fastpris, rask levering og sentral godkjenning.
          </p>
        </div>
        <WaveDivider fill="var(--color-brand-white)" />
      </section>

      {/* Content */}
      <section className="py-16 lg:py-24 bg-brand-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <p className="text-brand-darkgray text-lg leading-relaxed mb-8">
              Et brannkonsept er en skriftlig rapport som oppsummerer bygningens brannsikkerhetsnivå. Ved byggesaker krever kommunen som regel prosjekteringsdokumentasjon på brannkonseptnivå — en helhetlig overordnet plan som ivaretar brannsikkerheten både for det omsøkte tiltaket og den øvrige bygningsmassen. Vi hjelper private, arkitekter, entreprenører og utbyggere med å utarbeide komplette brannkonsept til fast pris — enten det gjelder et nytt boligfelt, et tilbygg på en eldre bolig eller et næringsbygg ved havna.
            </p>
          </ScrollReveal>

          <ScrollReveal variant="scale" className="mb-10">
            <div className="relative h-64 lg:h-80 rounded-[20px] overflow-hidden">
              <Image
                src="/images/service-brannkonsept.jpg"
                alt="Brannkonsept og branntegninger under utarbeidelse"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 800px"
              />
            </div>
          </ScrollReveal>

          <div className="border-t border-brand-gray my-10" />

          <ScrollReveal>
            <h2 className="text-brand-black text-2xl font-black mb-4">Hva inneholder et brannkonsept?</h2>
            <p className="text-brand-darkgray leading-relaxed mb-6">
              Et komplett brannkonsept fra Brannkonsult AS inneholder:
            </p>
            <ul className="space-y-3 mb-8">
              {[
                'Fastsettelse av risikoklasse (RKL) for alle bygningsdeler',
                'Fastsettelse av brannklasse (BKL)',
                'Oppdeling i brannceller og brannseksjoner',
                'Beskrivelse av rømningsveier og røykventilasjon',
                'Branntekniske tegninger (plantegninger med brannceller, rømning m.m.)',
                'Vurdering av bærende og skille konstruksjoner',
                'Krav til branntekniske installasjoner',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-brand-darkgray">
                  <CheckCircle size={18} className="text-brand-orange shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>
          </ScrollReveal>

          <div className="border-t border-brand-gray my-10" />

          <ScrollReveal>
            <h2 className="text-brand-black text-2xl font-black mb-4">Brannklasser og risikoklasser</h2>
            <p className="text-brand-darkgray leading-relaxed mb-4">
              Alle bygninger i Norge klassifiseres etter risikoklasse (RKL 1–6) og brannklasse (BKL 1–4). Risikoklassen bestemmes av hva bygget brukes til og hvilke konsekvenser en brann kan ha. Brannklassen fastsettes ut fra risikoklasse og antall etasjer.
            </p>
            <div className="bg-brand-lightgray rounded-[20px] p-6 mb-8">
              <h3 className="font-bold text-brand-black mb-3">Eksempler på risikoklasser:</h3>
              <ul className="space-y-2 text-brand-darkgray text-sm">
                <li><strong>RKL 1:</strong> Garasjer, lager (ingen personopphold)</li>
                <li><strong>RKL 2:</strong> Boliger med evakueringsmulighet fra egen enhet</li>
                <li><strong>RKL 4:</strong> Kontorbygg, undervisningsbygg</li>
                <li><strong>RKL 5:</strong> Hoteller, sykehjem (sover/overnatting)</li>
                <li><strong>RKL 6:</strong> Sykehus (svekkede beboere)</li>
              </ul>
            </div>
          </ScrollReveal>

          <div className="border-t border-brand-gray my-10" />

          <ScrollReveal>
            <h2 className="text-brand-black text-2xl font-black mb-4">Hva vi tilbyr</h2>
            <ul className="space-y-3 mb-8">
              {[
                'Utarbeidelse av komplett brannkonsept',
                'Branntekniske tegninger (brannceller, rømningsveier)',
                'Ansvarsrett overfor kommunen i tiltaksklasse 1 og 2',
                'Fastpris — ingen skjulte kostnader',
                'Levering innen 5–10 virkedager',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-brand-darkgray">
                  <CheckCircle size={18} className="text-brand-orange shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>
          </ScrollReveal>

          <div className="border-t border-brand-gray my-10" />

          <ScrollReveal>
            <div className="bg-brand-lightgray rounded-[20px] p-6 mb-4">
              <h3 className="font-bold text-brand-black text-lg mb-2">Pris</h3>
              <p className="text-brand-darkgray">
                Fra ca. <strong className="text-brand-black">15 000 kr</strong> i tiltaksklasse 2, inkl. branntegninger og ekskl. mva. Alltid fastpris.
              </p>
            </div>
          </ScrollReveal>

          <div className="mt-6 flex flex-wrap gap-3">
            {[
              { href: '/brannprosjektering', label: 'Brannprosjektering' },
              { href: '/branninspeksjon', label: 'Branninspeksjon' },
              { href: '/uavhengig-kontroll', label: 'Uavhengig kontroll' },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-brand-orange font-bold text-sm hover:underline"
              >
                → {link.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 lg:py-24 bg-brand-lightgray">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="text-brand-black text-3xl font-black mb-10 text-center">Ofte stilte spørsmål</h2>
          </ScrollReveal>
          <ScrollReveal delay={80} variant="fade">
            <FAQAccordion items={faqItems} />
          </ScrollReveal>
        </div>
      </section>

      {/* Bottom CTA */}
      <ScrollReveal variant="fade">
        <section className="bg-brand-orange py-14">
          <div className="max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-brand-white text-2xl lg:text-3xl font-black mb-4">
              Kontakt oss for uforpliktende tilbud på brannkonsept i Alta
            </h2>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/kontakt-oss" className="inline-block bg-brand-white text-brand-black font-bold px-8 py-3.5 rounded-[10px] hover:opacity-90 transition-opacity">
                Få tilbud nå
              </Link>
              <a href="tel:+4740051437" className="inline-flex items-center gap-2 border-2 border-brand-white text-brand-white font-bold px-8 py-3.5 rounded-[10px] hover:bg-brand-white hover:text-brand-black transition-all duration-200">
                <Phone size={16} /> +47 400 51 437
              </a>
            </div>
          </div>
        </section>
      </ScrollReveal>
    </>
  )
}
