'use client'

import { useState, useRef, type FormEvent, type ChangeEvent } from 'react'
import { CheckCircle2, AlertCircle, Loader2, Paperclip, FileText, X } from 'lucide-react'

type Status = 'idle' | 'submitting' | 'success' | 'error'

const MAX_FILES = 5
const MAX_TOTAL_BYTES = 10 * 1024 * 1024
const ALLOWED_TYPES = ['application/pdf', 'image/jpeg', 'image/png', 'image/webp']

function formatBytes(bytes: number) {
  if (bytes < 1024 * 1024) return `${Math.max(1, Math.round(bytes / 1024))} KB`
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`
}

export default function ContactForm() {
  const [status, setStatus] = useState<Status>('idle')
  const [errorMessage, setErrorMessage] = useState('')
  const [files, setFiles] = useState<File[]>([])
  const fileInputRef = useRef<HTMLInputElement>(null)

  function handleFileSelect(event: ChangeEvent<HTMLInputElement>) {
    const picked = Array.from(event.target.files ?? [])
    event.target.value = ''
    if (picked.length === 0) return

    const invalid = picked.find((file) => !ALLOWED_TYPES.includes(file.type))
    if (invalid) {
      setStatus('error')
      setErrorMessage(`Filtypen til «${invalid.name}» støttes ikke. Last opp PDF, JPG, PNG eller WEBP.`)
      return
    }

    const combined = [...files, ...picked]
    if (combined.length > MAX_FILES) {
      setStatus('error')
      setErrorMessage(`Du kan laste opp maks ${MAX_FILES} filer.`)
      return
    }

    const totalBytes = combined.reduce((sum, file) => sum + file.size, 0)
    if (totalBytes > MAX_TOTAL_BYTES) {
      setStatus('error')
      setErrorMessage('Vedleggene er for store til sammen (maks 10 MB). Reduser antall eller størrelse på filene.')
      return
    }

    setStatus('idle')
    setErrorMessage('')
    setFiles(combined)
  }

  function removeFile(index: number) {
    setFiles((prev) => prev.filter((_, i) => i !== index))
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setStatus('submitting')
    setErrorMessage('')

    const form = event.currentTarget
    const formData = new FormData(form)
    files.forEach((file) => formData.append('vedlegg', file))

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        body: formData,
      })
      const data = await res.json().catch(() => ({}))

      if (!res.ok) {
        setStatus('error')
        setErrorMessage(data.error || 'Noe gikk galt. Prøv igjen, eller ring oss direkte.')
        return
      }

      setStatus('success')
      form.reset()
      setFiles([])
    } catch {
      setStatus('error')
      setErrorMessage('Noe gikk galt. Sjekk internettforbindelsen og prøv igjen.')
    }
  }

  if (status === 'success') {
    return (
      <div className="bg-brand-lightgray rounded-[20px] p-8 text-center">
        <CheckCircle2 size={40} className="text-brand-orange mx-auto mb-4" />
        <h3 className="font-bold text-brand-black text-lg mb-2">Takk for din henvendelse!</h3>
        <p className="text-brand-darkgray">Vi har mottatt meldingen din og svarer innen 24 timer.</p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label htmlFor="navn" className="block text-sm font-bold text-brand-black mb-1.5">
          Navn *
        </label>
        <input
          type="text"
          id="navn"
          name="navn"
          required
          className="w-full px-4 py-3 border border-brand-gray rounded-[10px] text-brand-black placeholder:text-brand-darkgray focus:outline-none focus:border-brand-orange transition-colors"
          placeholder="Ditt fulle navn"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="epost" className="block text-sm font-bold text-brand-black mb-1.5">
            E-post *
          </label>
          <input
            type="email"
            id="epost"
            name="epost"
            required
            className="w-full px-4 py-3 border border-brand-gray rounded-[10px] text-brand-black placeholder:text-brand-darkgray focus:outline-none focus:border-brand-orange transition-colors"
            placeholder="din@epost.no"
          />
        </div>
        <div>
          <label htmlFor="telefon" className="block text-sm font-bold text-brand-black mb-1.5">
            Telefon
          </label>
          <input
            type="tel"
            id="telefon"
            name="telefon"
            className="w-full px-4 py-3 border border-brand-gray rounded-[10px] text-brand-black placeholder:text-brand-darkgray focus:outline-none focus:border-brand-orange transition-colors"
            placeholder="+47 400 51 437"
          />
        </div>
      </div>

      <div>
        <label htmlFor="prosjekttype" className="block text-sm font-bold text-brand-black mb-1.5">
          Prosjekttype
        </label>
        <select
          id="prosjekttype"
          name="prosjekttype"
          className="w-full px-4 py-3 border border-brand-gray rounded-[10px] text-brand-black focus:outline-none focus:border-brand-orange transition-colors bg-brand-white"
        >
          <option value="">Velg type</option>
          <option value="brannkonsept">Brannkonsept</option>
          <option value="brannprosjektering">Brannprosjektering</option>
          <option value="branninspeksjon">Branninspeksjon</option>
          <option value="uavhengig-kontroll">Uavhengig kontroll</option>
          <option value="annet">Annet</option>
        </select>
      </div>

      <div>
        <label htmlFor="melding" className="block text-sm font-bold text-brand-black mb-1.5">
          Melding *
        </label>
        <textarea
          id="melding"
          name="melding"
          required
          rows={5}
          className="w-full px-4 py-3 border border-brand-gray rounded-[10px] text-brand-black placeholder:text-brand-darkgray focus:outline-none focus:border-brand-orange transition-colors resize-none"
          placeholder="Beskriv prosjektet ditt kort..."
        />
      </div>

      <div>
        <label className="block text-sm font-bold text-brand-black mb-1.5">
          Vedlegg (tegninger, bilder, PDF)
        </label>
        <input
          ref={fileInputRef}
          type="file"
          accept=".pdf,.jpg,.jpeg,.png,.webp,application/pdf,image/jpeg,image/png,image/webp"
          multiple
          onChange={handleFileSelect}
          className="hidden"
        />
        <button
          type="button"
          onClick={() => fileInputRef.current?.click()}
          className="w-full flex items-center justify-center gap-2 px-4 py-3 border border-dashed border-brand-gray rounded-[10px] text-brand-darkgray hover:border-brand-orange hover:text-brand-orange transition-colors text-sm font-medium"
        >
          <Paperclip size={16} />
          Legg ved fil
        </button>
        <p className="text-brand-darkgray text-xs mt-1.5">
          Maks 5 filer, totalt 10 MB. PDF, JPG, PNG eller WEBP.
        </p>

        {files.length > 0 && (
          <ul className="mt-3 space-y-2">
            {files.map((file, i) => (
              <li
                key={`${file.name}-${file.lastModified}-${i}`}
                className="flex items-center justify-between gap-3 bg-brand-lightgray rounded-[10px] px-3 py-2"
              >
                <div className="flex items-center gap-2 min-w-0">
                  <FileText size={16} className="text-brand-orange shrink-0" />
                  <span className="text-sm text-brand-black truncate">{file.name}</span>
                  <span className="text-xs text-brand-darkgray shrink-0">{formatBytes(file.size)}</span>
                </div>
                <button
                  type="button"
                  onClick={() => removeFile(i)}
                  aria-label={`Fjern ${file.name}`}
                  className="text-brand-darkgray hover:text-brand-red transition-colors shrink-0"
                >
                  <X size={16} />
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>

      {status === 'error' && (
        <div className="flex items-start gap-2 text-sm text-brand-red bg-brand-red/10 rounded-[10px] p-3">
          <AlertCircle size={16} className="shrink-0 mt-0.5" />
          <span>{errorMessage}</span>
        </div>
      )}

      <button
        type="submit"
        disabled={status === 'submitting'}
        className="w-full bg-brand-orange text-brand-white font-bold px-8 py-4 rounded-[10px] hover:opacity-90 transition-opacity text-base disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
      >
        {status === 'submitting' && <Loader2 size={18} className="animate-spin" />}
        {status === 'submitting' ? 'Sender...' : 'Send forespørsel'}
      </button>
    </form>
  )
}
