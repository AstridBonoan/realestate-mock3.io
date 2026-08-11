import ScrollReveal from './ScrollReveal'

export default function MembershipTimeline({ steps }) {
  return (
    <ol className="relative grid gap-6 md:grid-cols-4">
      <div className="pointer-events-none absolute left-0 right-0 top-8 hidden h-px bg-stone-dark md:block" />
      {steps.map((step, index) => (
        <ScrollReveal key={step.number} delayClass={`reveal-delay-${index + 1}`} as="li">
          <div className="relative border border-stone-dark bg-white p-6">
            <span className="inline-flex h-10 w-10 items-center justify-center border border-bronze bg-white font-display text-sm text-bronze">
              {step.number}
            </span>
            <h3 className="mt-5 font-display text-2xl text-navy">{step.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-warm-gray">{step.description}</p>
          </div>
        </ScrollReveal>
      ))}
    </ol>
  )
}
