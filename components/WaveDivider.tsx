interface Props {
  fill?: string
  className?: string
}

export default function WaveDivider({ fill = 'var(--color-brand-white)', className = '' }: Props) {
  return (
    <div className={`absolute bottom-0 left-0 w-full leading-[0] ${className}`} aria-hidden="true">
      <svg
        viewBox="0 0 1440 110"
        preserveAspectRatio="none"
        className="w-full h-[70px] lg:h-[110px]"
      >
        <path
          d="M0,50 C 240,110 480,0 720,40 C 960,80 1200,20 1440,60 L1440,110 L0,110 Z"
          fill={fill}
        />
      </svg>
    </div>
  )
}
