import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { CheckCircle, Phone } from 'lucide-react'
import FAQAccordion from '@/components/FAQAccordion'
import ScrollReveal from '@/components/ScrollReveal'
import AuroraRibbon from '@/components/AuroraRibbon'
import WaveDivider from '@/components/WaveDivider'
import JsonLd from '@/components/JsonLd'
import { breadcrumbJsonLd, faqPageJsonLd } from '@/lib/schema'

const title = 'Uavhengig kontroll av brannkonsept i Alta | Brannkonsult AS'
const description =
  'Brannkonsult AS utfører uavhengig kontroll av brannkonsept og brannprosjektering i Alta og Finnmark. Sentralt godkjent, nøytral part. Få tilbud i dag.'

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: 'https://www.altabrannkonsult.no/uavhengig-kontroll' },
  openGraph: {
    title,
    description,
    url: 'https://www.altabrannkonsult.no/uavhengig-kontroll',
    images: [{ url: '/images/service-uavhengig-kontroll.jpg', width: 1200, height: 630, alt: 'Uavhengig kontroll i Alta' }],
  },
}

const breadcrumb = breadcrumbJsonLd([
  { name: 'Hjem', path: '/' },
  { name: 'Uavhengig kontroll', path: '/uavhengig-kontroll' },
])

const faqItems = [
  {
    question: 'Hva er uavhengig kontroll av brann?',
    answer:
      'Uavhengig kontroll (UK) er en kvalitetssikring hvor et annet foretak enn det som prosjekterte brannkonseptet, kontrollerer at prosjekteringen er i tråd med forskriftskrav.',
  },
  {
    question: 'Når er det krav om UK brann?',
    answer:
      'Etter SAK10 kreves uavhengig kontroll når brannprosjekteringen er i tiltaksklasse 2 eller høyere.',
  },
  {
    question: 'Hva koster uavhengig kontroll?',
    answer:
      'Prisen avhenger av prosjektets omfang og kompleksitet. Send oss underlaget ditt for et nøyaktig tilbud.',
  },
  {
    question: 'Kan dere ta UK selv om dere ikke har prosjektert brannkonseptet?',
    answer:
      'Ja, vi utfører uavhengig kontroll som en nøytral tredjepart, uavhengig av hvem som har utarbeidet det opprinnelige brannkonseptet.',
  },
  {
    question: 'Tilbyr dere uavhengig kontroll utenfor Alta?',
    answer:
      'Ja. Foruten Alta bistår vi kunder i hele Finnmark, blant annet Hammerfest, Kautokeino og Nordkapp, samt i Troms og Nordland. Vi dekker med andre ord hele Nord-Norge, og tar også oppdrag i resten av landet.',
  },
]

export default function UavhengigKontrollPage() {
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
            <span>Uavhengig kontroll</span>
          </div>
          <h1 className="hero-2 text-brand-white text-4xl lg:text-5xl font-black max-w-2xl">
            Uavhengig kontroll av brannkonsept i Alta
          </h1>
          <p className="hero-3 text-brand-white/70 text-lg mt-4 max-w-xl leading-relaxed">
            Vi sikrer at brannkonseptet er i tråd med gjeldende forskrifter og at prosjekteringen holder nødvendig kvalitet.
          </p>
        </div>
        <WaveDivider fill="var(--color-brand-white)" />
      </section>

      {/* Content */}
      <section className="py-16 lg:py-24 bg-brand-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <p className="text-brand-darkgray text-lg leading-relaxed mb-8">
              I mange byggeprosjekter er det krav om uavhengig kontroll (UK) av brannsikkerheten. Kontrollen skal sikre at brannkonseptet er i tråd med gjeldende forskrifter og at prosjekteringen holder nødvendig kvalitet. Dette gir økt trygghet, reduserer risiko for feil og bidrar til en mer forutsigbar byggeprosess.
            </p>
          </ScrollReveal>

          <ScrollReveal variant="scale" className="mb-10">
            <div className="relative h-64 lg:h-80 rounded-[20px] overflow-hidden">
              <Image
                src="/images/service-uavhengig-kontroll.jpg"
                alt="Uavhengig kontroll av brannkonsept på byggeplass"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 800px"
              />
            </div>
          </ScrollReveal>

          <div className="border-t border-brand-gray my-10" />

          <ScrollReveal>
            <h2 className="text-brand-black text-2xl font-black mb-4">Når er det krav om uavhengig kontroll?</h2>
            <p className="text-brand-darkgray leading-relaxed mb-8">
              Etter SAK10 er det krav om uavhengig kontroll når prosjekteringen av brannsikkerhet er i tiltaksklasse 2 eller høyere. Kommunen kan i tillegg stille krav om UK i enkeltsaker.
            </p>
          </ScrollReveal>

          <div className="border-t border-brand-gray my-10" />

          <ScrollReveal>
            <h2 className="text-brand-black text-2xl font-black mb-4">Hva kontrolleres?</h2>
            <ul className="space-y-3 mb-8">
              {[
                'Brannkonseptet og forutsetningene det bygger på',
                'Branntekniske tegninger',
                'Løsningsvalg opp mot TEK17',
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
            <h2 className="text-brand-black text-2xl font-black mb-4">Hva vi tilbyr</h2>
            <ul className="space-y-3 mb-8">
              {[
                'Uavhengig gjennomgang av brannkonsept',
                'Skriftlig kontrollrapport',
                'Erklæring av ansvarsrett for uavhengig kontroll',
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
            <h2 className="text-brand-black text-2xl font-black mb-4">Nøytral part</h2>
            <p className="text-brand-darkgray leading-relaxed">
              Vi selger ingen produkter eller håndverkertjenester. Som uavhengig kontrollør er vår eneste rolle å vurdere om brannsikkerheten er tilstrekkelig dokumentert og prosjektert — det gir deg en trygg og objektiv vurdering.
            </p>
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
              Kontakt oss for uavhengig kontroll i Alta
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
