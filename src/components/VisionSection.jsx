import ScrollReveal from './ScrollReveal'

export default function VisionSection({ vision, image }) {
  return (
    <section className="bg-stone">
      <div className="mx-auto grid max-w-7xl lg:grid-cols-2">
        <div className="relative order-2 min-h-[280px] overflow-hidden lg:order-1 lg:min-h-full">
          <img src={image} alt="City architecture representing long-term vision" className="absolute inset-0 h-full w-full object-cover" />
        </div>
        <ScrollReveal className="order-1 flex flex-col justify-center px-5 py-16 sm:px-8 lg:order-2 lg:px-12 lg:py-24">
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-bronze">Vision</p>
          <h2 className="mt-4 font-display text-3xl font-medium leading-tight text-navy sm:text-4xl lg:text-5xl">
            {vision}
          </h2>
        </ScrollReveal>
      </div>
    </section>
  )
}
