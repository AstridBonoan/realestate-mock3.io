import { useMemo, useState, useEffect } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import Hero from '../components/Hero'
import SectionHeading from '../components/SectionHeading'
import FilterBar from '../components/FilterBar'
import OpportunityCard from '../components/OpportunityCard'
import PropertyCard from '../components/PropertyCard'
import PartnerCard from '../components/PartnerCard'
import ScrollReveal from '../components/ScrollReveal'
import { images, partnerCategories } from '../data/content'
import { properties } from '../data/properties'

const rentBuckets = [
  { label: 'Under $2,000', test: (n) => n < 2000 },
  { label: '$2,000 – $3,000', test: (n) => n >= 2000 && n <= 3000 },
  { label: 'Over $3,000', test: (n) => n > 3000 },
]

export default function Investments() {
  const [params, setParams] = useSearchParams()
  const tabParam = params.get('tab') === 'rentals' ? 'rentals' : 'investments'
  const [tab, setTab] = useState(tabParam)
  const [filters, setFilters] = useState({
    location: '',
    type: '',
    opportunity: '',
    price: '',
    availability: '',
  })

  useEffect(() => {
    setTab(tabParam)
  }, [tabParam])

  const switchTab = (next) => {
    setTab(next)
    setFilters({
      location: '',
      type: '',
      opportunity: '',
      price: '',
      availability: '',
    })
    setParams(next === 'rentals' ? { tab: 'rentals' } : {})
  }

  const source = useMemo(
    () => properties.filter((p) => (tab === 'rentals' ? p.category === 'rental' : p.category === 'investment')),
    [tab],
  )

  const filterConfig = useMemo(() => {
    const locations = [...new Set(source.map((p) => p.location))].sort()
    const types = [...new Set(source.map((p) => p.type))].sort()
    const opportunities = [...new Set(source.map((p) => p.status))].sort()
    const availability = [...new Set(source.map((p) => p.availability))].sort()
    return [
      { key: 'location', label: 'Location', options: locations },
      { key: 'type', label: 'Property Type', options: types },
      { key: 'opportunity', label: 'Opportunity Type', options: opportunities },
      {
        key: 'price',
        label: tab === 'rentals' ? 'Rent' : 'Price / Engagement',
        options:
          tab === 'rentals'
            ? rentBuckets.map((b) => b.label)
            : [...new Set(source.map((p) => p.priceLabel))],
      },
      { key: 'availability', label: 'Availability', options: availability },
    ]
  }, [source, tab])

  const filtered = source.filter((property) => {
    if (filters.location && property.location !== filters.location) return false
    if (filters.type && property.type !== filters.type) return false
    if (filters.opportunity && property.status !== filters.opportunity) return false
    if (filters.availability && property.availability !== filters.availability) return false
    if (filters.price) {
      if (tab === 'rentals') {
        const bucket = rentBuckets.find((b) => b.label === filters.price)
        if (!bucket || property.rent == null || !bucket.test(property.rent)) return false
      } else if (property.priceLabel !== filters.price) {
        return false
      }
    }
    return true
  })

  return (
    <>
      <Hero
        compact
        image={images.commercial}
        title="Real Estate Opportunities."
        subtitle="Explore selected investment and rental opportunities presented through our network."
      />

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 lg:px-10 lg:py-16">
          <div
            role="tablist"
            aria-label="Opportunity categories"
            className="flex border-b border-stone-dark"
          >
            {[
              { id: 'investments', label: 'Investments' },
              { id: 'rentals', label: 'Rentals' },
            ].map((item) => (
              <button
                key={item.id}
                type="button"
                role="tab"
                aria-selected={tab === item.id}
                onClick={() => switchTab(item.id)}
                className={`relative px-5 py-4 text-[12px] font-semibold uppercase tracking-[0.18em] transition-colors ${
                  tab === item.id ? 'text-navy' : 'text-warm-gray hover:text-navy'
                }`}
              >
                {item.label}
                {tab === item.id && (
                  <span className="absolute inset-x-0 -bottom-px h-0.5 bg-bronze" />
                )}
              </button>
            ))}
          </div>

          <div className="mt-8">
            <FilterBar
              filters={filterConfig}
              values={filters}
              onChange={(key, value) => setFilters((prev) => ({ ...prev, [key]: value }))}
            />
          </div>

          <p className="mt-6 text-sm text-warm-gray">
            Showing {filtered.length} {tab === 'rentals' ? 'rental' : 'investment'} opportunit
            {filtered.length === 1 ? 'y' : 'ies'}. All listings are illustrative mockup data.
          </p>

          <div
            role="tabpanel"
            className={`mt-8 ${tab === 'investments' ? 'space-y-6' : 'grid gap-6 md:grid-cols-2 xl:grid-cols-3'}`}
          >
            {filtered.length === 0 && (
              <div className="border border-stone-dark bg-stone p-10 text-center md:col-span-2 xl:col-span-3">
                <p className="font-display text-2xl text-navy">No matching opportunities</p>
                <p className="mt-2 text-sm text-warm-gray">
                  Adjust filters to view additional properties in this mockup.
                </p>
              </div>
            )}
            {filtered.map((property, index) =>
              tab === 'investments' ? (
                <ScrollReveal key={property.id} delayClass={`reveal-delay-${(index % 4) + 1}`}>
                  <OpportunityCard property={property} />
                </ScrollReveal>
              ) : (
                <ScrollReveal key={property.id} delayClass={`reveal-delay-${(index % 4) + 1}`}>
                  <PropertyCard property={property} />
                </ScrollReveal>
              ),
            )}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-navy">
        <img src={images.partnership} alt="" className="absolute inset-0 h-full w-full object-cover opacity-25" />
        <div className="absolute inset-0 bg-navy/80" />
        <div className="relative mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10 lg:py-24">
          <SectionHeading
            light
            title="Strong Real Estate Relationships Start With The Right Partners."
            description="We welcome conversations with property owners, investors, developers, businesses, professionals, and organizations interested in building mutually beneficial relationships."
          />
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {partnerCategories.map((partner) => (
              <PartnerCard key={partner.title} {...partner} />
            ))}
          </div>
          <Link
            to="/contact"
            className="mt-10 inline-flex items-center justify-center border border-bronze bg-bronze px-7 py-3.5 text-[12px] font-semibold uppercase tracking-[0.16em] text-navy-deep transition-colors hover:bg-bronze-light"
          >
            Become A Partner
          </Link>
        </div>
      </section>
    </>
  )
}
