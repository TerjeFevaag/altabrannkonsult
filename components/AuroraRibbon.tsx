export default function AuroraRibbon() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      <div
        className="aurora-ribbon-1 absolute -top-[10%] left-[-10%] w-[130%] h-[45%] rounded-full blur-3xl"
        style={{
          background:
            'linear-gradient(90deg, transparent 0%, var(--color-brand-orange) 35%, var(--color-brand-white) 55%, var(--color-brand-orange) 75%, transparent 100%)',
        }}
      />
      <div
        className="aurora-ribbon-2 absolute top-[20%] left-[-15%] w-[130%] h-[35%] rounded-full blur-3xl"
        style={{
          background:
            'linear-gradient(90deg, transparent 5%, var(--color-brand-white) 40%, var(--color-brand-orange) 65%, transparent 95%)',
        }}
      />
      <div
        className="aurora-ribbon-3 absolute top-[45%] left-[-10%] w-[120%] h-[30%] rounded-full blur-3xl"
        style={{
          background:
            'linear-gradient(90deg, transparent 0%, var(--color-brand-orange) 50%, transparent 100%)',
        }}
      />
    </div>
  )
}
