import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import ScrollReveal from '@/components/ScrollReveal'
import AuroraRibbon from '@/components/AuroraRibbon'
import WaveDivider from '@/components/WaveDivider'
import JsonLd from '@/components/JsonLd'
import { breadcrumbJsonLd } from '@/lib/schema'

const title = 'Har du riktig brannslokkeapparat i boligen? | Brannkonsult AS'
const description =
  'Vet du hvilken type brannslokker du trenger i hjemmet? Vi gjennomgår krav til brannslokking i boliger i Alta og forskjellen på pulver- og skumapparater.'

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: 'https://www.altabrannkonsult.no/artikler/brannslokker' },
  openGraph: {
    title,
    description,
    url: 'https://www.altabrannkonsult.no/artikler/brannslokker',
    images: [{ url: '/images/article-brannslukker.jpg', width: 1200, height: 630, alt: 'Riktig brannslokker' }],
  },
}

const breadcrumb = breadcrumbJsonLd([
  { name: 'Hjem', path: '/' },
  { name: 'Riktig brannslokker', path: '/artikler/brannslokker' },
])

export default function BrannslokkerPage() {
  return (
    <>
      <JsonLd data={breadcrumb} />

      <section className="relative bg-brand-dark py-16 lg:py-20 min-h-[30vh] flex items-end overflow-hidden">
        <div className="opacity-20">
          <AuroraRibbon />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-brand-black/90 via-brand-black/60 to-brand-black/30" />
        <div className="relative z-10 max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="hero-1 flex items-center gap-2 text-brand-orange text-sm mb-4">
            <Link href="/" className="hover:underline">Hjem</Link>
            <span>/</span>
            <span>Riktig brannslokker</span>
          </div>
          <h1 className="hero-2 text-brand-white text-4xl lg:text-5xl font-black max-w-2xl">
            Har du riktig brannslokkeapparat i boligen?
          </h1>
        </div>
        <WaveDivider fill="var(--color-brand-white)" />
      </section>

      <article className="py-16 bg-brand-white">
        <div className="max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <ScrollReveal variant="scale">
              <div className="relative rounded-[30px] overflow-hidden h-72 lg:h-96 mb-10">
                <Image
                  src="/images/article-brannslukker.jpg"
                  alt="Riktig brannslokkeapparat"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 800px"
                />
              </div>
            </ScrollReveal>

            <div className="prose prose-lg max-w-none text-brand-darkgray">
              <ScrollReveal>
                <p className="text-lg leading-relaxed mb-6">
                  Vet du hvilken type brannslokker du trenger i hjemmet? Mange boliger har enten feil type slokkeutstyr, for gammelt utstyr, eller ikke noe i det hele tatt. I denne artikkelen gjennomgår vi kravene til brannslokking i norske boliger og forklarer forskjellen mellom de vanligste typene slokkeapparater.
                </p>
              </ScrollReveal>

              <ScrollReveal>
                <h2 className="text-brand-black text-2xl font-black mb-4 mt-10">Hva krever loven?</h2>
                <p className="leading-relaxed mb-6">
                  Forskrift om brannforebygging krever at alle boliger skal ha manuelt slokkeutstyr som kan benyttes i alle deler av boligen. Dette kan være husbrannslange eller pulverapparat på minst 6 kg med effektivitetsklasse 43A 233B C, eller tilsvarende.
                </p>
              </ScrollReveal>

              <ScrollReveal>
                <h2 className="text-brand-black text-2xl font-black mb-4 mt-10">Pulverapparat eller skumapparat?</h2>
                <p className="leading-relaxed mb-4">De to vanligste typene for boliger er:</p>
                <ul className="space-y-3 mb-6 list-none pl-0">
                  {[
                    'Pulverapparat: slokker de fleste brannklasser (trevirke, væsker, gass og elektrisk utstyr), men gir mye forurensning og krever grundig rengjøring etter bruk.',
                    'Skumapparat: godt egnet for brann i trevirke og væsker, gir mindre forurensning og er lettere å rengjøre etter bruk, men ikke egnet på elektriske anlegg under spenning.',
                    'Husbrannslange: kan brukes ubegrenset så lenge vanntilførselen varer, og krever ikke vedlikehold på samme måte som et apparat.',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-brand-darkgray">
                      <span className="text-brand-orange mt-1">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </ScrollReveal>

              <ScrollReveal>
                <h2 className="text-brand-black text-2xl font-black mb-4 mt-10">Riktig plassering</h2>
                <p className="leading-relaxed mb-6">
                  Slokkeutstyret bør plasseres lett tilgjengelig, gjerne i nærheten av kjøkken eller hovedinngang, og på en slik måte at det kan nås uansett hvor i boligen brannen oppstår. Unngå å plassere det inne i et rom som lett kan bli avskåret av røyk eller flammer.
                </p>
              </ScrollReveal>

              <ScrollReveal>
                <h2 className="text-brand-black text-2xl font-black mb-4 mt-10">Vedlikehold</h2>
                <p className="leading-relaxed mb-8">
                  Kontroller trykket på apparatet jevnlig — de fleste har en trykkmåler som viser om det er klart til bruk. Pulverapparater bør snus opp ned et par ganger i året for å hindre at pulveret klumper seg. Skift ut eller få kontrollert apparatet av fagperson ved behov, og følg produsentens anbefalte levetid.
                </p>
              </ScrollReveal>

              <ScrollReveal>
                <div className="bg-brand-lightgray rounded-[20px] p-6 mb-8">
                  <h3 className="font-bold text-brand-black text-lg mb-2">Tips: kombiner flere typer</h3>
                  <p className="text-brand-darkgray text-sm leading-relaxed">
                    Mange velger å kombinere en husbrannslange på kjøkkenet med et pulverapparat i garasjen eller kjelleren. Det gir god dekning uansett hvor en brann oppstår.
                  </p>
                </div>
              </ScrollReveal>

              <ScrollReveal>
                <p className="leading-relaxed">
                  Er du usikker på hva som gjelder for din bolig eller ditt bygg? Brannkonsult AS er sentralt godkjente brannrådgivere og hjelper deg gjerne med brannkonsept, brannprosjektering og branntilsyn.{' '}
                  <Link href="/kontakt-oss" className="text-brand-orange font-bold hover:underline">
                    Ta kontakt med oss her.
                  </Link>
                </p>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </article>

      <ScrollReveal variant="fade">
        <section className="bg-brand-orange py-14">
          <div className="max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-brand-white text-2xl font-black mb-4">
              Trenger du hjelp med brannsikkerheten?
            </h2>
            <Link href="/kontakt-oss" className="inline-block bg-brand-white text-brand-black font-bold px-8 py-3.5 rounded-[10px] hover:opacity-90 transition-opacity">
              Kontakt oss
            </Link>
          </div>
        </section>
      </ScrollReveal>
    </>
  )
}
