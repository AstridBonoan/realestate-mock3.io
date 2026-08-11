import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import Hero from '../components/Hero'
import StatsSection from '../components/StatsSection'
import SectionHeading from '../components/SectionHeading'
import MissionSection from '../components/MissionSection'
import VisionSection from '../components/VisionSection'
import PropertyCard from '../components/PropertyCard'
import PartnerCard from '../components/PartnerCard'
import CTASection from '../components/CTASection'
import ScrollReveal from '../components/ScrollReveal'
import {
  company,
  images,
  stats,
  focusAreas,
  partnerCategories,
} from '../data/content'
import { getFeaturedProperties } from '../data/properties'

export default function Home() {
  const featured = getFeaturedProperties(4)

  return (
    <>
      <Hero
        image={images.hero}
        title="Building Long-Term Value Through Real Estate."
        subtitle="We connect people, partnerships, and real estate opportunities to build a growing organization focused on long-term relationships and growth."
        primaryCta={{ label: 'Become A Member', to: '/membership' }}
        secondaryCta={{ label: 'Explore Opportunities', to: '/investments' }}
        metaLine="Membership • Investments • Rentals • Partnerships"
      />

      <StatsSection stats={stats} />

      <section className="bg-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-20 sm:px-8 lg:grid-cols-2 lg:gap-16 lg:px-10 lg:py-28">
          <ScrollReveal>
            <h2 className="font-display text-4xl font-medium leading-tight text-navy sm:text-5xl lg:text-6xl">
              Built Around Relationships.
            </h2>
          </ScrollReveal>
          <ScrollReveal delayClass="reveal-delay-2" className="flex flex-col justify-center">
            <p className="text-base leading-relaxed text-warm-gray sm:text-lg">
              Everstead Partners is designed around connecting members, partners, property owners,
              investors, and real estate professionals. We organize relationships with clarity and
              purpose — creating space for collaboration, opportunity review, and long-term growth.
            </p>
            <Link
              to="/about"
              className="mt-8 inline-flex w-fit items-center gap-2 text-[12px] font-semibold uppercase tracking-[0.16em] text-navy transition-colors hover:text-bronze"
            >
              Learn About Our Mission
              <ArrowUpRight size={14} />
            </Link>
          </ScrollReveal>
        </div>
      </section>

      <MissionSection mission={company.mission} image={images.architecture} />
      <VisionSection vision={company.vision} image={images.skyline} />

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10 lg:py-24">
          <SectionHeading eyebrow="Core Areas" title="Our Focus" />
          <div className="mt-12 grid gap-px bg-stone-dark sm:grid-cols-2 lg:grid-cols-4">
            {focusAreas.map((area, index) => (
              <ScrollReveal key={area.number} delayClass={`reveal-delay-${index + 1}`}>
                <Link
                  to={area.to}
                  className="group flex h-full flex-col bg-white p-7 transition-colors duration-300 hover:bg-stone"
                >
                  <span className="font-display text-3xl text-bronze/70">{area.number}</span>
                  <h3 className="mt-6 font-display text-2xl text-navy">{area.title}</h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-warm-gray">
                    {area.description}
                  </p>
                  <span className="mt-8 inline-flex items-center gap-2 text-[12px] font-semibold uppercase tracking-[0.16em] text-navy transition-all group-hover:gap-3 group-hover:text-bronze">
                    Explore
                    <ArrowUpRight size={14} />
                  </span>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-stone-dark bg-stone">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10 lg:py-24">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <SectionHeading
              eyebrow="Portfolio Preview"
              title="Selected Opportunities"
              description="A curated presentation of illustrative investment and rental properties within the network."
            />
            <Link
              to="/investments"
              className="inline-flex shrink-0 items-center justify-center border border-navy px-6 py-3 text-[12px] font-semibold uppercase tracking-[0.16em] text-navy transition-colors hover:bg-navy hover:text-white"
            >
              View All Opportunities
            </Link>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {featured.map((property, index) => (
              <ScrollReveal key={property.id} delayClass={`reveal-delay-${(index % 4) + 1}`}>
                <PropertyCard property={property} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-navy">
        <img
          src={images.partnership}
          alt=""
          className="absolute inset-0 h-full w-full object-cover opacity-30"
        />
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

      <CTASection
        title="Have A Real Estate Opportunity?"
        description="We're interested in connecting with property owners, professionals, investors, and organizations with ideas worth exploring."
        primary={{ label: 'Become A Partner', to: '/contact' }}
        secondary={{ label: 'Contact Us', to: '/contact' }}
        image={images.commercial}
      />
    </>
  )
}
