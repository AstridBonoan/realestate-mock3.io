import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'

export default function OpportunityCard({ property }) {
  return (
    <article className="group grid overflow-hidden border border-stone-dark bg-white md:grid-cols-12 md:items-stretch">
      <Link
        to={`/opportunities/${property.id}`}
        className="relative block overflow-hidden md:col-span-5 md:min-h-[20rem]"
      >
        <img
          src={property.images[0]}
          alt={property.name}
          className="aspect-[4/3] h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03] md:absolute md:inset-0 md:aspect-auto"
        />
      </Link>
      <div className="flex flex-col justify-between gap-8 p-6 sm:p-8 md:col-span-7 md:min-h-[20rem]">
        <div>
          <div className="flex flex-wrap items-center gap-3">
            <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-bronze">
              {property.type}
            </span>
            <span className="text-stone-dark">|</span>
            <span className="text-[10px] uppercase tracking-[0.14em] text-warm-gray">
              {property.status}
            </span>
          </div>
          <h3 className="mt-3 font-display text-3xl font-medium text-navy">{property.name}</h3>
          <p className="mt-1 text-sm text-warm-gray">{property.location}</p>
          <p className="mt-4 max-w-xl text-sm leading-relaxed text-warm-gray">
            {property.description}
          </p>
          <dl className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3">
            <div>
              <dt className="text-[10px] uppercase tracking-[0.14em] text-warm-gray-light">Size</dt>
              <dd className="mt-1 text-sm text-navy">{property.sqft}</dd>
            </div>
            <div>
              <dt className="text-[10px] uppercase tracking-[0.14em] text-warm-gray-light">
                Availability
              </dt>
              <dd className="mt-1 text-sm text-navy">{property.availability}</dd>
            </div>
            <div>
              <dt className="text-[10px] uppercase tracking-[0.14em] text-warm-gray-light">
                Engagement
              </dt>
              <dd className="mt-1 text-sm text-navy">{property.priceLabel}</dd>
            </div>
          </dl>
        </div>
        <Link
          to={`/opportunities/${property.id}`}
          className="inline-flex w-fit items-center gap-2 border-b border-navy pb-1 text-[12px] font-semibold uppercase tracking-[0.16em] text-navy transition-colors hover:border-bronze hover:text-bronze"
        >
          View Opportunity
          <ArrowUpRight size={14} />
        </Link>
      </div>
    </article>
  )
}
