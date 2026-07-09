import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { CheckCircle, Phone } from 'lucide-react'
import FAQAccordion from '@/components/FAQAccordion'
import ScrollReveal from '@/components/ScrollReveal'
import AuroraRibbon from '@/components/AuroraRibbon'
import WaveDivider from '@/components/WaveDivider'

export const metadata: Metadata = {
  title: 'Branntilsyn og branninspeksjon i Alta | Alta Brannkonsult',
  description:
    'Har du fått pålegg etter branntilsyn i Alta? Alta Brannkonsult tilbyr branninspeksjon, tilstandsrapport og handlingsplan. Sentralt godkjent. Kontakt oss i dag.',
  alternates: { canonical: 'https://www.altabrannkonsult.no/branntilsyn' },
}

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
    question: 'Hva koster en branninspeksjon?',
    answer:
      'Prisen avhenger av byggets størrelse og kompleksitet. Ta kontakt for et uforpliktende tilbud tilpasset ditt bygg.',
  },
  {
    question: 'Gjelder oppgraderingskravet for alle eldre bygninger?',
    answer:
      'Eldre bygninger skal minst oppfylle et forsvarlig sikkerhetsnivå (ofte omtalt som BF85). Vi vurderer konkret hva som gjelder for ditt bygg.',
  },
]

export default function BranntilsynPage() {
  return (
    <>
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
            <span>Branntilsyn</span>
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
              Har kommunen vært på branntilsyn, eller ønsker du å kartlegge brannsikkerheten i en eldre bygning i Alta? Vi hjelper borettslag, sameier, næringsbygg og eiendomseiere med branninspeksjon og vurdering av byggets brannsikkerhet.
            </p>
          </ScrollReveal>

          <div className="border-t border-brand-gray my-10" />

          <ScrollReveal>
            <h2 className="text-brand-black text-2xl font-black mb-4">Krav til oppgradering av eldre bygg</h2>
            <p className="text-brand-darkgray leading-relaxed mb-8">
              Eldre bygninger er ikke nødvendigvis bygget etter dagens forskriftskrav, men skal likevel oppfylle et forsvarlig minimumsnivå for brannsikkerhet. Vi vurderer hva som konkret kreves for ditt bygg og foreslår kostnadseffektive tiltak.
            </p>
          </ScrollReveal>

          <div className="border-t border-brand-gray my-10" />

          <ScrollReveal>
            <h2 className="text-brand-black text-2xl font-black mb-4">Brann- og redningsetatens oppgave</h2>
            <p className="text-brand-darkgray leading-relaxed mb-8">
              Kommunens branntilsyn er som regel en stikkprøvekontroll, ikke en fullstendig gjennomgang av byggets brannsikkerhet. En egen branninspeksjon fra oss gir et mer helhetlig bilde og avdekker branntekniske mangler tilsynet ikke nødvendigvis fanger opp.
            </p>
          </ScrollReveal>

          <div className="border-t border-brand-gray my-10" />

          <ScrollReveal>
            <h2 className="text-brand-black text-2xl font-black mb-4">Hva inngår i vår branninspeksjon</h2>
            <ul className="space-y-3 mb-8">
              {[
                'Inspeksjon av bygningen og branntekniske installasjoner',
                'Tilstandsrapport med avvik og risikovurdering',
                'Handlingsplan med prioriterte tiltak',
                'Forslag til internkontrollrutiner',
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
            <h2 className="text-brand-black text-2xl font-black mb-4">Eier er ansvarlig — brannrådgiver hjelper deg</h2>
            <p className="text-brand-darkgray leading-relaxed mb-6">
              Som eier eller styremedlem har du det formelle ansvaret for brannsikkerheten. Vi bistår med den faglige vurderingen slik at du kan ta gode, dokumenterte beslutninger.
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
              Kontakt oss for hjelp etter branntilsyn i Alta
            </h2>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/kontakt-oss" className="inline-block bg-brand-white text-brand-black font-bold px-8 py-3.5 rounded-[10px] hover:opacity-90 transition-opacity">
                Få tilbud nå
              </Link>
              <a href="tel:+4700000000" className="inline-flex items-center gap-2 border-2 border-brand-white text-brand-white font-bold px-8 py-3.5 rounded-[10px] hover:bg-brand-white hover:text-brand-black transition-all duration-200">
                <Phone size={16} /> +47 000 00 000
              </a>
            </div>
          </div>
        </section>
      </ScrollReveal>
    </>
  )
}
