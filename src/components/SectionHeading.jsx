export default function SectionHeading({
  eyebrow,
  title,
  description,
  light = false,
  align = 'left',
  className = '',
}) {
  return (
    <div
      className={`${align === 'center' ? 'mx-auto text-center' : ''} max-w-3xl ${className}`}
    >
      {eyebrow && (
        <p
          className={`text-[11px] font-semibold uppercase tracking-[0.22em] ${
            light ? 'text-bronze-light' : 'text-bronze'
          }`}
        >
          {eyebrow}
        </p>
      )}
      <h2
        className={`font-display text-3xl font-medium tracking-tight sm:text-4xl lg:text-[2.75rem] ${
          eyebrow ? 'mt-3' : ''
        } ${light ? 'text-white' : 'text-navy'}`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mt-4 text-base leading-relaxed sm:text-lg ${
            light ? 'text-white/70' : 'text-warm-gray'
          }`}
        >
          {description}
        </p>
      )}
    </div>
  )
}
