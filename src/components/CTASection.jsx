import { Link } from 'react-router-dom'

export default function CTASection({
  title,
  description,
  primary,
  secondary,
  image,
  dark = true,
}) {
  return (
    <section className="relative overflow-hidden">
      {image && (
        <>
          <img src={image} alt="" className="absolute inset-0 h-full w-full object-cover" />
          <div className="absolute inset-0 bg-navy-deep/85" />
        </>
      )}
      {!image && <div className={`absolute inset-0 ${dark ? 'bg-navy' : 'bg-stone'}`} />}
      <div className="relative mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10 lg:py-24">
        <div className="max-w-3xl">
          <h2
            className={`font-display text-3xl font-medium tracking-tight sm:text-4xl lg:text-5xl ${
              dark || image ? 'text-white' : 'text-navy'
            }`}
          >
            {title}
          </h2>
          {description && (
            <p
              className={`mt-5 max-w-2xl text-base leading-relaxed sm:text-lg ${
                dark || image ? 'text-white/75' : 'text-warm-gray'
              }`}
            >
              {description}
            </p>
          )}
          <div className="mt-10 flex flex-wrap gap-4">
            {primary && (
              <Link
                to={primary.to}
                className="inline-flex items-center justify-center border border-bronze bg-bronze px-7 py-3.5 text-[12px] font-semibold uppercase tracking-[0.16em] text-navy-deep transition-colors hover:bg-bronze-light"
              >
                {primary.label}
              </Link>
            )}
            {secondary && (
              <Link
                to={secondary.to}
                className={`inline-flex items-center justify-center border px-7 py-3.5 text-[12px] font-semibold uppercase tracking-[0.16em] transition-colors ${
                  dark || image
                    ? 'border-white/40 text-white hover:border-white hover:bg-white/10'
                    : 'border-navy text-navy hover:bg-navy hover:text-white'
                }`}
              >
                {secondary.label}
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
