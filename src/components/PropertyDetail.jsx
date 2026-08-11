import { useState } from 'react'
import { Link } from 'react-router-dom'
import CTASection from './CTASection'

export default function PropertyDetail({ property }) {
  const [active, setActive] = useState(0)
  const isRental = property.category === 'rental'

  return (
    <article>
      <section className="border-b border-stone-dark bg-stone">
        <div className="mx-auto max-w-7xl px-5 py-10 sm:px-8 lg:px-10 lg:py-14">
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-bronze">
            {isRental ? 'Rental Property' : 'Investment Opportunity'}
          </p>
          <h1 className="mt-3 font-display text-4xl font-medium text-navy sm:text-5xl">
            {property.name}
          </h1>
          <p className="mt-3 text-warm-gray">
            {property.location} · {property.type} · {property.status}
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-10 sm:px-8 lg:px-10 lg:py-14">
        <div className="grid gap-6 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <div className="overflow-hidden border border-stone-dark">
              <img
                src={property.images[active]}
                alt={`${property.name} gallery image ${active + 1}`}
                className="aspect-[16/10] w-full object-cover"
              />
            </div>
            <div className="mt-3 grid grid-cols-3 gap-3">
              {property.images.map((img, idx) => (
                <button
                  key={img}
                  type="button"
                  onClick={() => setActive(idx)}
                  className={`overflow-hidden border transition-all ${
                    active === idx ? 'border-bronze' : 'border-stone-dark opacity-80 hover:opacity-100'
                  }`}
                  aria-label={`View image ${idx + 1}`}
                >
                  <img src={img} alt="" className="aspect-[4/3] w-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          <aside className="border border-stone-dark bg-white p-6 lg:col-span-4 lg:p-8">
            <h2 className="font-display text-2xl text-navy">Property Details</h2>
            <dl className="mt-6 space-y-4">
              {Object.entries(property.details).map(([key, value]) => (
                <div key={key} className="flex items-start justify-between gap-4 border-b border-stone-dark pb-3">
                  <dt className="text-xs uppercase tracking-[0.12em] text-warm-gray">{key}</dt>
                  <dd className="text-right text-sm text-navy">{value}</dd>
                </div>
              ))}
            </dl>
            {isRental && (
              <p className="mt-6 font-display text-3xl text-navy">{property.priceLabel}</p>
            )}
            <Link
              to="/contact"
              className="mt-8 inline-flex w-full items-center justify-center border border-navy bg-navy px-5 py-3.5 text-[12px] font-semibold uppercase tracking-[0.16em] text-white transition-colors hover:bg-navy-soft"
            >
              Contact Us
            </Link>
          </aside>
        </div>

        <div className="mt-12 grid gap-10 lg:grid-cols-2">
          <div>
            <h2 className="font-display text-3xl text-navy">Overview</h2>
            <p className="mt-4 text-base leading-relaxed text-warm-gray">{property.overview}</p>
          </div>
          <div>
            <h2 className="font-display text-3xl text-navy">Features</h2>
            <ul className="mt-4 space-y-3">
              {property.features.map((feature) => (
                <li
                  key={feature}
                  className="border-l-2 border-bronze/60 pl-4 text-sm leading-relaxed text-warm-gray"
                >
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 border border-stone-dark bg-stone p-6 sm:p-8">
          <h2 className="font-display text-2xl text-navy">Opportunity Information</h2>
          <p className="mt-3 text-sm leading-relaxed text-warm-gray">
            This property page is part of an institutional website mockup. Information shown is
            illustrative. Actual availability, terms, pricing, and opportunities may vary and should
            be independently verified. No investment returns are promised or projected.
          </p>
        </div>
      </section>

      <CTASection
        title="Interested In This Opportunity?"
        description="Contact our team to learn more about this property or discuss available opportunities."
        primary={{ label: 'Contact Us', to: '/contact' }}
        image="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1600&q=80"
      />
    </article>
  )
}
