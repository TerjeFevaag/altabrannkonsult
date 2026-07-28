import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Phone } from 'lucide-react'
import FAQAccordion from '@/components/FAQAccordion'
import ScrollReveal from '@/components/ScrollReveal'
import AuroraRibbon from '@/components/AuroraRibbon'
import WaveDivider from '@/components/WaveDivider'
import JsonLd from '@/components/JsonLd'
import { breadcrumbJsonLd, faqPageJsonLd } from '@/lib/schema'

const title = 'Branntilsyn og branninspeksjon i Alta | Brannkonsult AS'
const description =
  'Har du fått pålegg etter branntilsyn i Alta? Brannkonsult AS tilbyr branninspeksjon, tilstandsrapport og handlingsplan. Sentralt godkjent. Kontakt oss i dag.'

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: 'https://www.altabrannkonsult.no/branninspeksjon' },
  openGraph: {
    title,
    description,
    url: 'https://www.altabrannkonsult.no/branninspeksjon',
    images: [{ url: '/images/service-branntilsyn.jpg', width: 1200, height: 630, alt: 'Branninspeksjon i Alta' }],
  },
}

const breadcrumb = breadcrumbJsonLd([
  { name: 'Hjem', path: '/' },
  { name: 'Branninspeksjon', path: '/branninspeksjon' },
])

const faqItems = [
  {
    question: 'Hva er forskjellen på branntilsyn og branninspeksjon?',
    answer:
      'Branntilsyn utføres av brann- og redningsetaten og er ofte en stikkprøvekontroll. Branninspeksjon fra oss er en grundig, helhetlig gjennomgang av byggets brannsikkerhet, med tilstandsrapport og handlingsplan.',
  },
  {
    question: 'Hvem er ansvarlig for brannsikkerheten i et sameie?',
    answer:
      'Styret i sameiet eller borettslaget er som regel ansvarlig for brannsikkerheten i fellesarealer, mens den enkelte eier har ansvar for egen enhet.',
  },
  {
    question: 'Hva skjer hvis bygget ikke oppfyller kravene?',
    answer:
      'Brannvesenet kan gi pålegg om utbedring innen en frist. Vi hjelper deg med å kartlegge avvik og utarbeide en plan for å lukke dem.',
  },
  {
    question: 'Hva må jeg regne med at en branninspeksjon koster?',
    answer:
      'Prisen avhenger av byggets størrelse og kompleksitet. Ta kontakt for et uforpliktende tilbud tilpasset ditt bygg.',
  },
  {
    question: 'Gjelder oppgraderingskravet for alle eldre bygninger?',
    answer:
      'Eldre bygninger skal minst oppfylle et forsvarlig sikkerhetsnivå (ofte omtalt som BF85). Dette er særlig aktuelt i Finnmark, der mye av bygningsmassen stammer fra gjenreisningen etter krigen og sjelden er dokumentert etter dagens krav. Vi vurderer konkret hva som gjelder for ditt bygg.',
  },
  {
    question: 'Må vi ha fått pålegg for å bestille en branninspeksjon?',
    answer:
      'Nei. Mange styrer og næringsdrivende bestiller en gjennomgang på eget initiativ — for eksempel før et eierskifte, i forkant av en forsikringsfornyelse, eller rett og slett for å vite hvor bygget faktisk står. Det er ofte rimeligere å rydde opp i egne avvik enn å svare på et pålegg med kort frist.',
  },
  {
    question: 'Tilbyr dere branninspeksjon utenfor Alta?',
    answer:
      'Ja. Foruten Alta bistår vi kunder i hele Finnmark — fra Hammerfest, Kirkenes, Vadsø og Vardø, via Kautokeino, Karasjok, Tana, Nesseby og Porsanger i innlandet, til Nordkapp, Måsøy, Loppa, Hasvik, Gamvik, Lebesby, Berlevåg og Båtsfjord langs kysten — samt i Troms og Nordland. Vi dekker med andre ord hele Nord-Norge, og tar også oppdrag i resten av landet.',
  },
]

export default function BranninspeksjonPage() {
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
            <span>Branninspeksjon</span>
          </div>
          <h1 className="hero-2 text-brand-white text-4xl lg:text-5xl font-black max-w-2xl">
            Branntilsyn og branninspeksjon i Alta
          </h1>
          <p className="hero-3 text-brand-white/70 text-lg mt-4 max-w-xl leading-relaxed">
            Vi hjelper borettslag, sameier, næringsbygg og eiendomseiere med branninspeksjon og vurdering av byggets brannsikkerhet.
          </p>
        </div>
        <WaveDivider fill="var(--color-brand-white)" />
      </section>

      {/* Content */}
      <section className="py-16 lg:py-24 bg-brand-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <p className="text-brand-darkgray text-lg leading-relaxed mb-8">
              Har brannvesenet vært på tilsyn i bygget ditt, eller lurer du rett og slett på hvor godt sikret en eldre bolig, et sameie eller et næringsbygg i Alta faktisk er? Vi tilbyr en grundigere gjennomgang enn det et kommunalt tilsyn normalt rekker over — for borettslag, sameier, næringsbygg og private eiere i hele Finnmark.
            </p>
          </ScrollReveal>

          <ScrollReveal variant="scale" className="mb-10">
            <div className="relative h-64 lg:h-80 rounded-[20px] overflow-hidden">
              <Image
                src="/images/service-branntilsyn.jpg"
                alt="Branntilsyn og inspeksjon av brannslukningsutstyr"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 800px"
              />
            </div>
          </ScrollReveal>

          <div className="border-t border-brand-gray my-10" />

          <ScrollReveal>
            <h2 className="text-brand-black text-2xl font-black mb-4">Hvorfor så mange bygg i Finnmark har et etterslep</h2>
            <p className="text-brand-darkgray leading-relaxed mb-8">
              Alle bygninger i Norge skal minst tilfredsstille brannsikkerhetsnivået som gjaldt for nybygg i 1985 (BF85). I Finnmark treffer dette en uvanlig stor andel av bygningsmassen: det meste ble reist i årene rett etter 1945, i et tempo der dokumentasjon sjelden fulgte med. Det er ikke uvanlig at vi finner rømningsveier som er stengt igjen ved senere ombygging, brannceller som er brutt, eller manuelt slokkeutstyr som rett og slett er borte.
            </p>
          </ScrollReveal>

          <div className="border-t border-brand-gray my-10" />

          <ScrollReveal>
            <h2 className="text-brand-black text-2xl font-black mb-4">Et tilsyn er en stikkprøve — ikke en fasit</h2>
            <p className="text-brand-darkgray leading-relaxed mb-8">
              Brannvesenets tilsyn prioriterer bygg etter risiko, og rekker sjelden en fullstendig gjennomgang av hver enkelt bygning. Et bygg kan derfor fremstå uten anmerkninger etter et tilsyn, samtidig som det har reelle branntekniske svakheter tilsynet ikke hadde tid til å avdekke. Det er nettopp det gapet en egen branninspeksjon er laget for å dekke.
            </p>
          </ScrollReveal>

          <div className="border-t border-brand-gray my-10" />

          <ScrollReveal>
            <h2 className="text-brand-black text-2xl font-black mb-4">Slik gjennomfører vi inspeksjonen</h2>
            <div className="space-y-6 mb-8">
              {[
                { title: 'Befaring', desc: 'Vi går gjennom bygningen fysisk — rømningsveier, brannceller, slokkeutstyr og tekniske installasjoner, i fellesarealer og i den enkelte enhet der det er relevant.' },
                { title: 'Tilstandsrapport', desc: 'Skriftlig rapport der hvert avvik er beskrevet og rangert etter alvorlighetsgrad — fra det som må lukkes umiddelbart, til det som kan planlegges inn i vedlikeholdsbudsjettet.' },
                { title: 'Handlingsplan med kostnadsoverslag', desc: 'Konkrete tiltak i prioritert rekkefølge, med et realistisk kostnadsanslag — noe styret eller eieren faktisk kan ta stilling til, ikke bare en liste over mangler.' },
                { title: 'Rutiner videre', desc: 'Enkle forslag til internkontroll, slik at brannsikkerheten følges opp løpende og ikke blir en engangsøvelse.' },
              ].map((step, i) => (
                <div key={i}>
                  <h3 className="font-bold text-brand-black mb-1">{step.title}</h3>
                  <p className="text-brand-darkgray leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>

          <div className="border-t border-brand-gray my-10" />

          <ScrollReveal>
            <h2 className="text-brand-black text-2xl font-black mb-4">Eier er ansvarlig — brannrådgiver hjelper deg</h2>
            <p className="text-brand-darkgray leading-relaxed mb-6">
              Som eier, styremedlem eller driftsansvarlig sitter du med det formelle ansvaret for brannsikkerheten, uansett om det er en garasje i Bossekop eller et næringsbygg ved havna. Vår jobb er å gi deg et presist bilde av hvor bygget faktisk står, slik at beslutningen om utbedring er informert — ikke gjettverk.
            </p>
            <div className="bg-brand-lightgray rounded-[20px] p-6">
              <p className="text-brand-darkgray text-sm italic leading-relaxed">
                &ldquo;Det er avdekket mangler ved rømningsveier og manuelt slokkeutstyr. Eier pålegges å utbedre forholdene innen fastsatt frist.&rdquo;
              </p>
              <p className="text-brand-darkgray text-xs mt-2">— Typisk ordlyd fra brannvesenet ved pålegg</p>
            </div>
          </ScrollReveal>
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
              Usikker på hvor bygget ditt faktisk står?
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
