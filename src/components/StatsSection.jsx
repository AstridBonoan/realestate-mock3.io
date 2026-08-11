import ScrollReveal from './ScrollReveal'

export default function StatsSection({ stats }) {
  return (
    <section className="border-y border-stone-dark bg-stone">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-px bg-stone-dark sm:grid-cols-4">
        {stats.map((stat, index) => (
          <ScrollReveal
            key={stat.label}
            delayClass={`reveal-delay-${index + 1}`}
            className="bg-stone px-5 py-10 text-center sm:px-6 sm:py-12"
          >
            <p className="font-display text-4xl font-medium text-navy sm:text-5xl">{stat.value}</p>
            <p className="mt-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-warm-gray">
              {stat.label}
            </p>
            {stat.note && (
              <p className="mt-2 text-[10px] uppercase tracking-[0.12em] text-warm-gray-light">
                {stat.note} figure
              </p>
            )}
          </ScrollReveal>
        ))}
      </div>
      <p className="mx-auto max-w-7xl px-5 py-3 text-center text-[11px] text-warm-gray-light sm:px-8 lg:px-10">
        Figures shown are illustrative for this website mockup and do not represent verified company
        statistics.
      </p>
    </section>
  )
}
