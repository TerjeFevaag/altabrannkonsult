import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { CheckCircle, Phone } from 'lucide-react'
import FAQAccordion from '@/components/FAQAccordion'
import ScrollReveal from '@/components/ScrollReveal'
import AuroraRibbon from '@/components/AuroraRibbon'
import WaveDivider from '@/components/WaveDivider'

export const metadata: Metadata = {
  title: 'Brannprosjektering i Alta | Alta Brannkonsult',
  description:
    'Alta Brannkonsult tilbyr brannprosjektering i Alta og Finnmark. Sentralt godkjent TKL 1+2. Fra ca. 15 000 kr, alltid fastpris. Få uforpliktende tilbud.',
  alternates: { canonical: 'https://www.altabrannkonsult.no/brannprosjektering' },
}

const faqItems = [
  {
    question: 'Hva koster brannprosjektering i Alta?',
    answer:
      'Prisen varierer med omfang og kompleksitet. Brannprosjektering i tiltaksklasse 2 starter fra ca. 15 000 kr ekskl. mva. Vi tilbyr alltid fastpris.',
  },
  {
    question: 'Trenger jeg brannprosjektering for tilbygg eller bruksendring?',
    answer:
      'Ja, de fleste tilbygg, påbygg og bruksendringer krever brannteknisk prosjektering. Ta kontakt for en gratis vurdering av ditt prosjekt.',
  },
  {
    question: 'Er befaring nødvendig?',
    answer:
      'For nybygg og enklere saker er det sjelden nødvendig. Med gode tegninger og kartdata kan vi ofte prosjektere uten fysisk befaring.',
  },
  {
    question: 'Tilbyr dere håndverkertjenester?',
    answer:
      'Nei — vi er en nøytral rådgiver og selger ingen produkter eller håndverkertjenester.',
  },
  {
    question: 'Hva trengs for å få et pristilbud?',
    answer:
      'Send oss situasjonsplan, byggesakstegninger og en kort prosjektbeskrivelse, så sender vi tilbud innen 24 timer.',
  },
]

export default function BrannprosjekteringPage() {
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
            <span>Brannprosjektering</span>
          </div>
          <h1 className="hero-2 text-brand-white text-4xl lg:text-5xl font-black max-w-2xl">
            Brannprosjektering i Alta
          </h1>
          <p className="hero-3 text-brand-white/70 text-lg mt-4 max-w-xl leading-relaxed">
            Vi sørger for at bygget ditt i Alta oppfyller alle krav i plan- og bygningsloven og brann- og eksplosjonsvernloven — til fast pris.
          </p>
        </div>
        <WaveDivider fill="var(--color-brand-white)" />
      </section>

      {/* Content */}
      <section className="py-16 lg:py-24 bg-brand-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <p className="text-brand-darkgray text-lg leading-relaxed mb-8">
              Brannprosjektering betyr skriftlig planlegging av nødvendig brannsikring i og rundt bygningen. Vi sørger for at ditt bygg i Alta oppfyller alle krav i plan- og bygningsloven og brann- og eksplosjonsvernloven — til fast pris.
            </p>
          </ScrollReveal>

          <ScrollReveal variant="scale" className="mb-10">
            <div className="relative h-64 lg:h-80 rounded-[20px] overflow-hidden">
              <Image
                src="/images/service-brannprosjektering.jpg"
                alt="Brannrådgiver i arbeid med brannprosjektering"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 800px"
              />
            </div>
          </ScrollReveal>

          <div className="border-t border-brand-gray my-10" />

          <ScrollReveal>
            <h2 className="text-brand-black text-2xl font-black mb-4">Når er det behov for brannprosjektering?</h2>
            <p className="text-brand-darkgray leading-relaxed mb-4">
              De fleste byggetiltak som endrer bygningens bruk, størrelse eller planløsning krever brannteknisk prosjektering, blant annet:
            </p>
            <ul className="space-y-3 mb-8">
              {[
                'Bytte av vinduer eller dører i rømningsvei',
                'Tilbygg og påbygg',
                'Bruksendring, f.eks. fra bod til soverom',
                'Etablering av ny boenhet (sekundærleilighet)',
                'Oppdeling av bygg i flere brannceller',
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
            <h2 className="text-brand-black text-2xl font-black mb-4">Risikoklasser, brannklasser og tiltaksklasser</h2>
            <p className="text-brand-darkgray leading-relaxed mb-4">
              Risikoklasse (RKL 1–6) bestemmes av bygningens bruksformål og konsekvensene av en eventuell brann. Brannklasse (BKL 1–4) fastsettes ut fra risikoklasse og antall etasjer. Tiltaksklasse (TKL 1–3) beskriver kompleksiteten i prosjekteringsoppgaven — vi har sentral godkjenning i TKL 1 og 2.
            </p>
          </ScrollReveal>

          <div className="border-t border-brand-gray my-10" />

          <ScrollReveal>
            <h2 className="text-brand-black text-2xl font-black mb-4">Start tidlig — spar penger</h2>
            <p className="text-brand-darkgray leading-relaxed mb-8">
              Jo tidligere vi kommer inn i prosjektet, jo enklere og rimeligere blir løsningene. Ved å avklare branntekniske krav før byggesøknad unngår du kostbare endringer underveis i byggeprosessen.
            </p>
          </ScrollReveal>

          <div className="border-t border-brand-gray my-10" />

          <ScrollReveal>
            <h2 className="text-brand-black text-2xl font-black mb-4">Hva vi tilbyr</h2>
            <ul className="space-y-3 mb-8">
              {[
                'Brannkonsept og branntekniske notater',
                'Branntegninger',
                'Ansvarsrett i tiltaksklasse 1 og 2',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-brand-darkgray">
                  <CheckCircle size={18} className="text-brand-orange shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>
            <div className="bg-brand-lightgray rounded-[20px] p-6">
              <h3 className="font-bold text-brand-black mb-2">Hva vi trenger fra deg</h3>
              <p className="text-brand-darkgray text-sm leading-relaxed">
                Situasjonsplan, byggesakstegninger og en kort prosjektbeskrivelse. Send dette til oss, så sender vi tilbud innen 24 timer.
              </p>
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
              Be om tilbud på brannprosjektering i Alta
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
