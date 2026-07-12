import { NextResponse } from 'next/server'

const PROSJEKTTYPE_LABELS: Record<string, string> = {
  brannkonsept: 'Brannkonsept',
  brannprosjektering: 'Brannprosjektering',
  branninspeksjon: 'Branninspeksjon',
  'uavhengig-kontroll': 'Uavhengig kontroll',
  annet: 'Annet',
}

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

function escapeHtml(value: string) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;')
}

function field(value: unknown) {
  return typeof value === 'string' ? value.trim() : ''
}

export async function POST(request: Request) {
  let body: Record<string, unknown>
  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ error: 'Ugyldig forespørsel.' }, { status: 400 })
  }

  const navn = field(body.navn)
  const epost = field(body.epost)
  const telefon = field(body.telefon)
  const prosjekttype = field(body.prosjekttype)
  const melding = field(body.melding)

  if (!navn || !epost || !melding) {
    return NextResponse.json({ error: 'Navn, e-post og melding er påkrevd.' }, { status: 400 })
  }

  if (!EMAIL_PATTERN.test(epost)) {
    return NextResponse.json({ error: 'Oppgi en gyldig e-postadresse.' }, { status: 400 })
  }

  const apiKey = process.env.MAILERSEND_API_KEY
  if (!apiKey) {
    console.error('MAILERSEND_API_KEY er ikke satt i miljøvariablene.')
    return NextResponse.json(
      { error: 'Skjemaet er midlertidig utilgjengelig. Ring oss gjerne i mellomtiden.' },
      { status: 500 }
    )
  }

  const prosjekttypeLabel = PROSJEKTTYPE_LABELS[prosjekttype] ?? 'Ikke oppgitt'

  const textBody = [
    `Navn: ${navn}`,
    `E-post: ${epost}`,
    `Telefon: ${telefon || 'Ikke oppgitt'}`,
    `Prosjekttype: ${prosjekttypeLabel}`,
    '',
    'Melding:',
    melding,
  ].join('\n')

  const htmlBody = `
    <p><strong>Navn:</strong> ${escapeHtml(navn)}</p>
    <p><strong>E-post:</strong> ${escapeHtml(epost)}</p>
    <p><strong>Telefon:</strong> ${escapeHtml(telefon || 'Ikke oppgitt')}</p>
    <p><strong>Prosjekttype:</strong> ${escapeHtml(prosjekttypeLabel)}</p>
    <p><strong>Melding:</strong><br />${escapeHtml(melding).replace(/\n/g, '<br />')}</p>
  `.trim()

  try {
    const mailerSendRes = await fetch('https://api.mailersend.com/v1/email', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: { email: 'post@altabrannkonsult.no', name: 'Brannkonsult AS – Kontaktskjema' },
        to: [{ email: 'post@altabrannkonsult.no' }],
        reply_to: { email: epost, name: navn },
        subject: `Ny henvendelse fra ${navn}`,
        text: textBody,
        html: htmlBody,
      }),
    })

    if (!mailerSendRes.ok) {
      const errorBody = await mailerSendRes.text()
      console.error('MailerSend avviste forespørselen:', mailerSendRes.status, errorBody)
      return NextResponse.json(
        { error: 'Kunne ikke sende meldingen akkurat nå. Prøv igjen, eller ring oss direkte.' },
        { status: 502 }
      )
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Uventet feil ved sending via MailerSend:', error)
    return NextResponse.json(
      { error: 'Kunne ikke sende meldingen akkurat nå. Prøv igjen, eller ring oss direkte.' },
      { status: 500 }
    )
  }
}
