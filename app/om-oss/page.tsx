import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { CheckCircle, Phone, Mail, MapPin } from 'lucide-react'
import ScrollReveal from '@/components/ScrollReveal'
import AuroraRibbon from '@/components/AuroraRibbon'
import WaveDivider from '@/components/WaveDivider'
import JsonLd from '@/components/JsonLd'
import { breadcrumbJsonLd } from '@/lib/schema'

const title = 'Om Brannkonsult AS | Sentralt godkjent brannrådgiver'
const description =
  'Brannkonsult AS er et sentralt godkjent brannrådgiverfirma med over 1200 prosjekter siden 2013, og satser lokalt i Alta og Nord-Norge.'

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: 'https://www.altabrannkonsult.no/om-oss' },
  openGraph: {
    title,
    description,
    url: 'https://www.altabrannkonsult.no/om-oss',
    images: [{ url: '/images/om-oss.jpg', width: 1200, height: 630, alt: 'Brannkonsult AS' }],
  },
}

const breadcrumb = breadcrumbJsonLd([
  { name: 'Hjem', path: '/' },
  { name: 'Om oss', path: '/om-oss' },
])

const process = [
  { step: '1', title: 'Kontakt oss', desc: 'Send forespørsel med informasjon om prosjektet.' },
  { step: '2', title: 'Vi sender tilbud', desc: 'Du mottar fastpristilbud innen 24 timer.' },
  { step: '3', title: 'Du aksepterer', desc: 'Bekreft oppdraget — vi starter arbeidet.' },
  { step: '4', title: 'Vi prosjekterer', desc: 'Erfarne brannrådgivere utarbeider dokumentasjonen.' },
  { step: '5', title: 'Dokumentasjon levert', desc: 'Komplett leveranse klar for kommunen.' },
]

export default function OmOssPage() {
  return (
    <>
      <JsonLd data={breadcrumb} />

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
            <span>Om oss</span>
          </div>
          <h1 className="hero-2 text-brand-white text-4xl lg:text-5xl font-black max-w-2xl">
            Om Brannkonsult AS
          </h1>
          <p className="hero-3 text-brand-white/70 text-lg mt-4 max-w-xl leading-relaxed">
            Sentralt godkjent brannrådgiverfirma med over 1200 prosjekter siden 2013.
          </p>
        </div>
        <WaveDivider fill="var(--color-brand-white)" />
      </section>

      {/* Main content */}
      <section className="py-16 lg:py-24 bg-brand-white">
        <div className="max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-16 items-start">
            <ScrollReveal className="lg:w-1/2">
              <h2 className="text-brand-black text-3xl font-black mb-6">Vår bakgrunn</h2>
              <p className="text-brand-darkgray leading-relaxed mb-5">
                Vi er et spesialisert brannprosjekteringsfirma representert i Alta, og vi tar oppdrag over hele landet. Vår virksomhet har sentral godkjenning for brannprosjektering i tiltaksklasse 1 og 2.
              </p>
              <p className="text-brand-darkgray leading-relaxed mb-5">
                Siden oppstart i 2013 har vi vært involvert i over 1200 forskjellige brannprosjekter — fra små garasjer og enkle tilbygg til store leilighetsbygg og næringseiendommer.
              </p>
              <p className="text-brand-darkgray leading-relaxed mb-8">
                Alta er kjent for sine eldgamle helleristninger i Hjemmeluft — oppført på UNESCOs verdensarvliste — og for nordlyset som lyser opp himmelen store deler av året. Byen har vokst raskt de siste tiårene, med en blanding av moderne boligfelt, næringsbygg og spredt bebyggelse tilpasset et arktisk klima med lange, mørke vintre og lyse sommernetter. Vi leverer brannkonsept og brannprosjektering til private, arkitekter og utbyggere i hele Alta og Finnmark.
              </p>

              <div className="grid grid-cols-2 gap-4">
                {[
                  { number: '2013', label: 'Etablert' },
                  { number: '1200+', label: 'Prosjekter' },
                  { number: 'TKL 1+2', label: 'Godkjenning' },
                  { number: '5', label: 'Brannrådgivere' },
                ].map((stat, i) => (
                  <div key={i} className="bg-brand-lightgray rounded-[20px] p-5 text-center">
                    <div className="text-brand-orange font-black text-2xl mb-1">{stat.number}</div>
                    <div className="text-brand-darkgray text-sm">{stat.label}</div>
                  </div>
                ))}
              </div>
            </ScrollReveal>

            <ScrollReveal delay={150} className="lg:w-1/2">
              <div className="relative rounded-[30px] overflow-hidden h-80 lg:h-96">
                <Image
                  src="/images/om-oss.jpg"
                  alt="Brannkonsult AS team"
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Sentralt godkjent */}
      <section className="py-16 lg:py-24 bg-brand-lightgray">
        <div className="max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <ScrollReveal className="lg:w-1/2">
              <h2 className="text-brand-black text-3xl font-black mb-5">Sentralt godkjent foretak</h2>
              <p className="text-brand-darkgray leading-relaxed mb-5">
                Sentral godkjenning fra Direktoratet for byggkvalitet (DiBK) er en frivillig, nasjonal godkjenningsordning som dokumenterer at foretaket har tilstrekkelig kompetanse og kvalitetssystem for å utøve sine oppgaver i byggesaker.
              </p>
              <ul className="space-y-3">
                {[
                  'Dokumentert faglig kompetanse innen brannprosjektering',
                  'Ansvarsforsikring som gir deg trygghet',
                  'Godkjent kvalitetssystem',
                  'Referanseprosjekter evaluert av DiBK',
                  'Kan erklære ansvarsrett overfor kommunen',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-brand-darkgray">
                    <CheckCircle size={18} className="text-brand-orange shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </ScrollReveal>
            <ScrollReveal delay={150} variant="scale" className="lg:w-1/2 flex justify-center">
              <Image
                src="/images/sentralt-godkjent.png"
                alt="Sentralt godkjent"
                width={250}
                height={100}
                className="object-contain"
              />
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Nøytral rådgiver */}
      <section className="py-16 lg:py-24 bg-brand-white">
        <div className="max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="max-w-3xl">
            <h2 className="text-brand-black text-3xl font-black mb-5">Nøytral rådgiver</h2>
            <p className="text-brand-darkgray leading-relaxed mb-4">
              Brannkonsult AS selger ingen produkter og tilbyr ingen håndverkertjenester. Vi er utelukkende en rådgivende part — det sikrer at rådet vi gir alltid er i ditt beste interesse, og ikke påvirket av salgsinteresser.
            </p>
            <p className="text-brand-darkgray leading-relaxed">
              Mange av kundene våre er arkitekter og entreprenører som setter pris på at vi er lett tilgjengelige og raskt kan svare på spørsmål underveis i prosjektet — uten ekstra kostnad.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 lg:py-24 bg-brand-lightgray">
        <div className="max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="text-center mb-12">
            <h2 className="text-brand-black text-3xl font-black">Vår prosess</h2>
          </ScrollReveal>
          <div className="flex flex-col lg:flex-row gap-0">
            {process.map((p, i) => (
              <ScrollReveal key={i} delay={i * 100} className="flex-1 flex flex-col items-center text-center relative">
                <div className="w-12 h-12 rounded-full bg-brand-orange text-brand-white font-black text-lg flex items-center justify-center mb-4 z-10 shadow-lg shadow-brand-orange/30">
                  {p.step}
                </div>
                {i < process.length - 1 && (
                  <div className="hidden lg:block absolute top-6 left-[calc(50%+24px)] right-[-24px] h-0.5 bg-brand-gray" />
                )}
                <h3 className="font-bold text-brand-black mb-2">{p.title}</h3>
                <p className="text-brand-darkgray text-sm leading-relaxed px-4">{p.desc}</p>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Dekningsområde */}
      <section className="py-16 lg:py-24 bg-brand-white">
        <div className="max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="max-w-3xl">
            <h2 className="text-brand-black text-3xl font-black mb-5">Dekningsområde</h2>
            <p className="text-brand-darkgray leading-relaxed">
              Brannkonsult AS har en egen satsing i Alta, og dekker herfra hele Finnmark, inkludert Kautokeino, Hammerfest og Nordkapp-området. Vi tar også oppdrag i resten av Nord-Norge og over hele landet.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Contact box */}
      <section className="py-16 lg:py-24 bg-brand-lightgray">
        <div className="max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="relative bg-brand-dark rounded-[30px] p-10 lg:p-16 overflow-hidden">
              <div className="opacity-30">
                <AuroraRibbon />
              </div>
              <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
                <div>
                  <h2 className="text-brand-white text-2xl lg:text-3xl font-black mb-3">
                    Ta kontakt med oss
                  </h2>
                  <div className="space-y-2 text-brand-white/60 text-sm">
                    <div className="flex items-center gap-2">
                      <Phone size={14} />
                      <a href="tel:+4740051437" className="hover:text-brand-orange transition-colors">+47 400 51 437</a>
                    </div>
                    <div className="flex items-center gap-2">
                      <Mail size={14} />
                      <a href="mailto:post@altabrannkonsult.no" className="hover:text-brand-orange transition-colors">post@altabrannkonsult.no</a>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin size={14} />
                      <span>Alta, Finnmark</span>
                    </div>
                  </div>
                </div>
                <Link
                  href="/kontakt-oss"
                  className="bg-brand-orange text-brand-white font-bold px-8 py-4 rounded-[10px] hover:opacity-90 hover:scale-[1.03] transition-all duration-200 whitespace-nowrap"
                >
                  Send forespørsel
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}
