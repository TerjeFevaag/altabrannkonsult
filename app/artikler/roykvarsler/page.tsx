import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import ScrollReveal from '@/components/ScrollReveal'
import AuroraRibbon from '@/components/AuroraRibbon'
import WaveDivider from '@/components/WaveDivider'

export const metadata: Metadata = {
  title: 'Riktig røykvarsler redder liv | Alta Brannkonsult',
  description:
    'Er du godt nok sikret hvis det oppstår brann om natten? Vi forklarer krav til røykvarslere i Alta, forskjellen på ionisasjons- og optiske varslere, og riktig plassering.',
  alternates: { canonical: 'https://www.altabrannkonsult.no/artikler/roykvarsler' },
}

export default function RoykvarslerPage() {
  return (
    <>
      <section className="relative bg-brand-dark py-16 lg:py-20 min-h-[30vh] flex items-end overflow-hidden">
        <div className="opacity-20">
          <AuroraRibbon />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-brand-black/90 via-brand-black/60 to-brand-black/30" />
        <div className="relative z-10 max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="hero-1 flex items-center gap-2 text-brand-orange text-sm mb-4">
            <Link href="/" className="hover:underline">Hjem</Link>
            <span>/</span>
            <Link href="/" className="hover:underline">Artikler</Link>
            <span>/</span>
            <span>Riktig røykvarsler</span>
          </div>
          <h1 className="hero-2 text-brand-white text-4xl lg:text-5xl font-black max-w-2xl">
            Riktig røykvarsler redder liv
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
                  src="/images/article-roykvarsler.jpg"
                  alt="Riktig røykvarsler"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 800px"
                />
              </div>
            </ScrollReveal>

            <div className="prose prose-lg max-w-none text-brand-darkgray">
              <ScrollReveal>
                <p className="text-lg leading-relaxed mb-6">
                  Er du godt nok sikret hvis det oppstår en brann om natten? De fleste dødsbranner i Norge skjer om natten mens beboerne sover, og en fungerende røykvarsler er ofte forskjellen på liv og død. I denne artikkelen forklarer vi kravene til røykvarslere i norske boliger, forskjellen mellom ulike typer, og hvor de bør plasseres.
                </p>
              </ScrollReveal>

              <ScrollReveal>
                <h2 className="text-brand-black text-2xl font-black mb-4 mt-10">Hva krever loven?</h2>
                <p className="leading-relaxed mb-6">
                  Alle boliger i Norge skal ha minst én røykvarsler i hver etasje, plassert slik at den høres tydelig på soverom når dører er lukket. I større boliger eller boliger med flere soverom bør det være flere varslere, gjerne sammenkoblet slik at alle utløses samtidig.
                </p>
              </ScrollReveal>

              <ScrollReveal>
                <h2 className="text-brand-black text-2xl font-black mb-4 mt-10">Ionisasjons- eller optisk røykvarsler?</h2>
                <ul className="space-y-3 mb-6 list-none pl-0">
                  {[
                    'Optisk røykvarsler: reagerer raskt på synlig røyk fra ulmebranner, som er den vanligste brannårsaken i hjemmet. Anbefales av de fleste brannmyndigheter i Norge.',
                    'Ionisasjonsvarsler: reagerer raskere på flammebranner med lite synlig røyk, men er mindre følsom for ulmebranner og kan gi flere falske alarmer.',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-brand-darkgray">
                      <span className="text-brand-orange mt-1">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="leading-relaxed mb-6">
                  For de fleste boliger anbefales optiske røykvarslere, eventuelt kombinert med komfyrvakt på kjøkkenet.
                </p>
              </ScrollReveal>

              <ScrollReveal>
                <h2 className="text-brand-black text-2xl font-black mb-4 mt-10">Anbefalt plassering</h2>
                <ul className="space-y-3 mb-8 list-none pl-0">
                  {[
                    'Minst én varsler i hver etasje, inkludert kjeller og loft med opphold',
                    'Utenfor eller inne på hvert soverom',
                    'I taket, minst 50 cm fra vegger og hjørner',
                    'Unngå plassering rett ved ventiler, vinduer eller kjøkken hvor matos kan gi falske alarmer',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-brand-darkgray">
                      <span className="text-brand-orange mt-1">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </ScrollReveal>

              <ScrollReveal>
                <h2 className="text-brand-black text-2xl font-black mb-4 mt-10">Test og vedlikehold</h2>
                <p className="leading-relaxed mb-8">
                  Test røykvarslerne minst én gang i måneden ved å trykke på testknappen, og bytt batteri én gang i året — for eksempel når klokken stilles om til vintertid. Røykvarslere bør byttes ut hvert 8.–10. år, da følsomheten svekkes med alderen.
                </p>
              </ScrollReveal>

              <ScrollReveal>
                <div className="bg-brand-lightgray rounded-[20px] p-6 mb-8">
                  <h3 className="font-bold text-brand-black text-lg mb-2">Tips: velg sammenkoblede varslere</h3>
                  <p className="text-brand-darkgray text-sm leading-relaxed">
                    I større boliger bør røykvarslerne kobles sammen, enten trådløst eller med kabel, slik at alle utløses samtidig uansett hvor brannen starter. Dette gir flere sekunder ekstra til å komme seg trygt ut.
                  </p>
                </div>
              </ScrollReveal>

              <ScrollReveal>
                <p className="leading-relaxed">
                  Har du spørsmål om brannsikkerhet i din bolig eller ditt bygg? Alta Brannkonsult er sentralt godkjente brannrådgivere og hjelper deg gjerne med brannkonsept, brannprosjektering og branntilsyn.{' '}
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
