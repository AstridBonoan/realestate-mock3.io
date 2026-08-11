import { Link } from 'react-router-dom'

export default function Hero({
  image,
  title,
  subtitle,
  primaryCta,
  secondaryCta,
  metaLine,
  compact = false,
  align = 'left',
}) {
  return (
    <section
      className={`relative flex items-end overflow-hidden bg-navy ${
        compact ? 'min-h-[58vh]' : 'min-h-[88vh]'
      }`}
    >
      <img
        src={image}
        alt=""
        className="absolute inset-0 h-full w-full object-cover animate-image-reveal"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-navy-deep/90 via-navy/75 to-navy/45" />
      <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/70 via-transparent to-navy/20" />

      <div
        className={`relative z-10 mx-auto w-full max-w-7xl px-5 pb-16 pt-32 sm:px-8 sm:pb-20 lg:px-10 ${
          compact ? 'lg:pb-20' : 'lg:pb-28'
        } ${align === 'center' ? 'text-center' : ''}`}
      >
        <div className={`${align === 'center' ? 'mx-auto' : ''} max-w-3xl`}>
          <h1 className="font-display text-4xl font-medium leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-6xl xl:text-[4.1rem] animate-fade-up">
            {title}
          </h1>
          {subtitle && (
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/80 sm:text-lg animate-fade-up [animation-delay:120ms]">
              {subtitle}
            </p>
          )}
          {(primaryCta || secondaryCta) && (
            <div
              className={`mt-10 flex flex-wrap gap-4 animate-fade-up [animation-delay:220ms] ${
                align === 'center' ? 'justify-center' : ''
              }`}
            >
              {primaryCta && (
                <Link
                  to={primaryCta.to}
                  className="inline-flex items-center justify-center border border-bronze bg-bronze px-7 py-3.5 text-[12px] font-semibold uppercase tracking-[0.16em] text-navy-deep transition-all duration-300 hover:bg-bronze-light"
                >
                  {primaryCta.label}
                </Link>
              )}
              {secondaryCta && (
                <Link
                  to={secondaryCta.to}
                  className="inline-flex items-center justify-center border border-white/40 px-7 py-3.5 text-[12px] font-semibold uppercase tracking-[0.16em] text-white transition-all duration-300 hover:border-white hover:bg-white/10"
                >
                  {secondaryCta.label}
                </Link>
              )}
            </div>
          )}
          {metaLine && (
            <p className="mt-8 text-[11px] uppercase tracking-[0.22em] text-white/55 animate-fade-up [animation-delay:320ms]">
              {metaLine}
            </p>
          )}
        </div>
      </div>
    </section>
  )
}
