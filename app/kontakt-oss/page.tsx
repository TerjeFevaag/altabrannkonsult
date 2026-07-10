import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Phone, Mail, MapPin, Clock } from 'lucide-react'
import ContactForm from '@/components/ContactForm'
import ScrollReveal from '@/components/ScrollReveal'
import AuroraRibbon from '@/components/AuroraRibbon'
import WaveDivider from '@/components/WaveDivider'

export const metadata: Metadata = {
  title: 'Kontakt Brannkonsult AS | Få uforpliktende tilbud',
  description:
    'Kontakt Brannkonsult AS for uforpliktende tilbud på brannkonsept og brannprosjektering i Alta. Sentralt godkjent. Vi svarer innen 24 timer. Ring +47 400 51 437.',
  alternates: { canonical: 'https://www.altabrannkonsult.no/kontakt-oss' },
}

export default function KontaktOssPage() {
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
            <span>Kontakt oss</span>
          </div>
          <h1 className="hero-2 text-brand-white text-4xl lg:text-5xl font-black max-w-2xl">
            Kontakt Brannkonsult AS
          </h1>
          <p className="hero-3 text-brand-white/70 text-lg mt-4 max-w-xl leading-relaxed">
            Ta kontakt for et uforpliktende tilbud. Vi svarer innen 24 timer.
          </p>
        </div>
        <WaveDivider fill="var(--color-brand-white)" />
      </section>

      <section className="py-16 lg:py-24 bg-brand-white">
        <div className="max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-16">
            {/* Form */}
            <ScrollReveal className="lg:w-[60%]">
              <h2 className="text-brand-black text-2xl font-black mb-6">Send oss en forespørsel</h2>
              <ContactForm />
            </ScrollReveal>

            {/* Contact info */}
            <ScrollReveal delay={150} className="lg:w-[40%]">
              <div className="bg-brand-lightgray rounded-[30px] p-8 mb-6">
                <h3 className="font-bold text-brand-black text-lg mb-6">Kontaktinformasjon</h3>
                <div className="space-y-5">
                  {[
                    { icon: Phone, label: 'Telefon', value: '+47 400 51 437', href: 'tel:+4740051437' },
                    { icon: Mail, label: 'E-post', value: 'post@altabrannkonsult.no', href: 'mailto:post@altabrannkonsult.no' },
                    {
                      icon: MapPin,
                      label: 'Postadresse',
                      value: 'Tromsø Brannkonsult AS\nGrønnegate 78/88\n9008 Tromsø',
                      href: null,
                      note: 'Post administreres av vårt datterselskap Tromsø Brannkonsult AS. Vår lokale tilhørighet er i Alta, og vi satser i hele Nord-Norge.',
                    },
                    { icon: Clock, label: 'Åpningstider', value: 'Man–Fre 08:00–16:00', href: null },
                  ].map(({ icon: Icon, label, value, href, note }, i) => (
                    <div key={i} className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-brand-orange/10 rounded-xl flex items-center justify-center shrink-0">
                        <Icon size={18} className="text-brand-orange" />
                      </div>
                      <div>
                        <p className="text-brand-darkgray text-xs mb-1">{label}</p>
                        {href ? (
                          <a href={href} className="font-bold text-brand-black hover:text-brand-orange transition-colors text-sm">
                            {value}
                          </a>
                        ) : (
                          <p className="font-bold text-brand-black text-sm whitespace-pre-line">{value}</p>
                        )}
                        {note && (
                          <p className="text-brand-darkgray text-xs leading-relaxed mt-2">{note}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-brand-gray rounded-[30px] h-52 flex items-center justify-center">
                <p className="text-brand-darkgray text-sm">Kart kommer snart</p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </>
  )
}
