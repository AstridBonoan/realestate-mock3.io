import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'

export default function PropertyCard({ property }) {
  const isRental = property.category === 'rental'

  return (
    <article className="group flex h-full flex-col border border-stone-dark bg-white transition-shadow duration-300 hover:shadow-[0_12px_40px_rgba(11,31,58,0.08)]">
      <Link to={`/opportunities/${property.id}`} className="relative block overflow-hidden">
        <img
          src={property.images[0]}
          alt={property.name}
          className="aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
        />
        <span className="absolute left-4 top-4 border border-white/20 bg-navy/85 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-white backdrop-blur-sm">
          {property.type}
        </span>
      </Link>
      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-start justify-between gap-3">
          <div>
            <h3 className="font-display text-2xl font-medium text-navy">{property.name}</h3>
            <p className="mt-1 text-sm text-warm-gray">{property.location}</p>
          </div>
          <span className="shrink-0 text-[10px] uppercase tracking-[0.14em] text-bronze">
            {property.status}
          </span>
        </div>
        <p className="mt-4 flex-1 text-sm leading-relaxed text-warm-gray">{property.description}</p>
        <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2 border-t border-stone-dark pt-5 text-xs uppercase tracking-[0.12em] text-navy/70">
          {isRental ? (
            <>
              <span>{property.priceLabel}</span>
              <span>{property.beds} Beds</span>
              <span>{property.baths} Baths</span>
              <span>{property.sqft} sq ft</span>
            </>
          ) : (
            <>
              <span>{property.sqft}</span>
              <span>{property.availability}</span>
            </>
          )}
        </div>
        <Link
          to={`/opportunities/${property.id}`}
          className="mt-6 inline-flex items-center gap-2 text-[12px] font-semibold uppercase tracking-[0.16em] text-navy transition-colors hover:text-bronze"
        >
          {isRental ? 'View Property' : 'View Opportunity'}
          <ArrowUpRight size={14} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </Link>
      </div>
    </article>
  )
}
