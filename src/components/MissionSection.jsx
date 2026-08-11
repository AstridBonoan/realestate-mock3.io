import ScrollReveal from './ScrollReveal'

export default function MissionSection({ mission, image }) {
  return (
    <section className="bg-navy text-white">
      <div className="mx-auto grid max-w-7xl lg:grid-cols-2">
        <ScrollReveal className="flex flex-col justify-center px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-bronze-light">
            Mission
          </p>
          <h2 className="mt-4 font-display text-3xl font-medium leading-tight sm:text-4xl lg:text-5xl">
            {mission}
          </h2>
        </ScrollReveal>
        <div className="relative min-h-[280px] overflow-hidden lg:min-h-full">
          <img src={image} alt="Architectural detail representing organizational mission" className="absolute inset-0 h-full w-full object-cover" />
          <div className="absolute inset-0 bg-navy/25" />
        </div>
      </div>
    </section>
  )
}
