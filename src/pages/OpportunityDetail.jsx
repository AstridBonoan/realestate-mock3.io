import { Link, useParams } from 'react-router-dom'
import PropertyDetail from '../components/PropertyDetail'
import { getPropertyById } from '../data/properties'

export default function OpportunityDetailPage() {
  const { id } = useParams()
  const property = getPropertyById(id)

  if (!property) {
    return (
      <section className="mx-auto max-w-3xl px-5 py-32 text-center sm:px-8">
        <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-bronze">
          Not Found
        </p>
        <h1 className="mt-3 font-display text-4xl text-navy">Opportunity Unavailable</h1>
        <p className="mt-4 text-warm-gray">
          The requested property could not be found in this mockup.
        </p>
        <Link
          to="/investments"
          className="mt-8 inline-flex border border-navy bg-navy px-6 py-3 text-[12px] font-semibold uppercase tracking-[0.16em] text-white"
        >
          Back To Opportunities
        </Link>
      </section>
    )
  }

  return <PropertyDetail property={property} />
}
