import { NextResponse } from 'next/server'

const PROSJEKTTYPE_LABELS: Record<string, string> = {
  brannkonsept: 'Brannkonsept',
  brannprosjektering: 'Brannprosjektering',
  branninspeksjon: 'Branninspeksjon',
  'uavhengig-kontroll': 'Uavhengig kontroll',
  annet: 'Annet',
}

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

const MAX_FILES = 5
const MAX_TOTAL_ATTACHMENT_BYTES = 10 * 1024 * 1024 // 10 MB
const ALLOWED_ATTACHMENT_TYPES = new Set([
  'application/pdf',
  'image/jpeg',
  'image/png',
  'image/webp',
])

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
  let formData: FormData
  try {
    formData = await request.formData()
  } catch {
    return NextResponse.json({ error: 'Ugyldig forespørsel.' }, { status: 400 })
  }

  const navn = field(formData.get('navn'))
  const epost = field(formData.get('epost'))
  const telefon = field(formData.get('telefon'))
  const prosjekttype = field(formData.get('prosjekttype'))
  const melding = field(formData.get('melding'))

  if (!navn || !epost || !melding) {
    return NextResponse.json({ error: 'Navn, e-post og melding er påkrevd.' }, { status: 400 })
  }

  if (!EMAIL_PATTERN.test(epost)) {
    return NextResponse.json({ error: 'Oppgi en gyldig e-postadresse.' }, { status: 400 })
  }

  const files = formData.getAll('vedlegg').filter((entry): entry is File => entry instanceof File && entry.size > 0)

  if (files.length > MAX_FILES) {
    return NextResponse.json({ error: `Du kan laste opp maks ${MAX_FILES} filer.` }, { status: 400 })
  }

  const totalAttachmentBytes = files.reduce((sum, file) => sum + file.size, 0)
  if (totalAttachmentBytes > MAX_TOTAL_ATTACHMENT_BYTES) {
    return NextResponse.json(
      { error: 'Vedleggene er for store til sammen (maks 10 MB). Reduser antall eller størrelse på filene.' },
      { status: 400 }
    )
  }

  for (const file of files) {
    if (!ALLOWED_ATTACHMENT_TYPES.has(file.type)) {
      return NextResponse.json(
        { error: `Filtypen til «${file.name}» støttes ikke. Last opp PDF, JPG, PNG eller WEBP.` },
        { status: 400 }
      )
    }
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
  const attachmentNames = files.map((file) => file.name)

  const textBody = [
    `Navn: ${navn}`,
    `E-post: ${epost}`,
    `Telefon: ${telefon || 'Ikke oppgitt'}`,
    `Prosjekttype: ${prosjekttypeLabel}`,
    `Vedlegg: ${attachmentNames.length > 0 ? attachmentNames.join(', ') : 'Ingen'}`,
    '',
    'Melding:',
    melding,
  ].join('\n')

  const htmlBody = `
    <p><strong>Navn:</strong> ${escapeHtml(navn)}</p>
    <p><strong>E-post:</strong> ${escapeHtml(epost)}</p>
    <p><strong>Telefon:</strong> ${escapeHtml(telefon || 'Ikke oppgitt')}</p>
    <p><strong>Prosjekttype:</strong> ${escapeHtml(prosjekttypeLabel)}</p>
    <p><strong>Vedlegg:</strong> ${attachmentNames.length > 0 ? escapeHtml(attachmentNames.join(', ')) : 'Ingen'}</p>
    <p><strong>Melding:</strong><br />${escapeHtml(melding).replace(/\n/g, '<br />')}</p>
  `.trim()

  let attachments: { filename: string; content: string; disposition: string }[] = []
  try {
    attachments = await Promise.all(
      files.map(async (file) => ({
        filename: file.name,
        content: Buffer.from(await file.arrayBuffer()).toString('base64'),
        disposition: 'attachment',
      }))
    )
  } catch (error) {
    console.error('Kunne ikke lese opplastede filer:', error)
    return NextResponse.json(
      { error: 'Kunne ikke lese ett eller flere vedlegg. Prøv igjen med andre filer.' },
      { status: 400 }
    )
  }

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
        ...(attachments.length > 0 ? { attachments } : {}),
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
