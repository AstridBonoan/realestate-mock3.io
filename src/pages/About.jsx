import Hero from '../components/Hero'
import SectionHeading from '../components/SectionHeading'
import MissionSection from '../components/MissionSection'
import VisionSection from '../components/VisionSection'
import ScrollReveal from '../components/ScrollReveal'
import CTASection from '../components/CTASection'
import { aboutValues, company, images, milestones } from '../data/content'

export default function About() {
  return (
    <>
      <Hero
        compact
        image={images.about}
        title="Who We Are"
        subtitle="Everstead Partners is a professional real estate organization built around relationships, opportunity presentation, and long-term collaboration."
      />

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10 lg:py-24">
          <div className="grid gap-10 lg:grid-cols-12">
            <ScrollReveal className="lg:col-span-5">
              <SectionHeading
                eyebrow="Organization"
                title="An Institutional Approach To Real Estate Relationships."
              />
            </ScrollReveal>
            <ScrollReveal delayClass="reveal-delay-2" className="lg:col-span-7">
              <p className="text-base leading-relaxed text-warm-gray sm:text-lg">
                We exist to connect members, partners, property owners, investors, and real estate
                professionals within a structured, credible environment. Our work centers on
                clarity, trust, and the patient development of opportunity over time.
              </p>
              <p className="mt-5 text-base leading-relaxed text-warm-gray sm:text-lg">
                This page is designed as a customizable institutional narrative — ready to be
                adapted with the organization&apos;s authentic history, leadership, and milestones.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <MissionSection mission={company.mission} image={images.interior} />
      <VisionSection vision={company.vision} image={images.lobby} />

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10 lg:py-24">
          <SectionHeading
            eyebrow="Approach"
            title="Our Approach"
            description="We prioritize thoughtful evaluation, transparent communication, and relationships that compound in value."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              {
                title: 'Listen First',
                copy: 'Understand goals, constraints, and intent before introducing opportunities or partners.',
              },
              {
                title: 'Present Clearly',
                copy: 'Share property and partnership information in an organized, professional format.',
              },
              {
                title: 'Build Over Time',
                copy: 'Favor durable relationships and measured growth over short-term spectacle.',
              },
            ].map((item, index) => (
              <ScrollReveal key={item.title} delayClass={`reveal-delay-${index + 1}`}>
                <article className="border border-stone-dark p-7">
                  <h3 className="font-display text-2xl text-navy">{item.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-warm-gray">{item.copy}</p>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-stone-dark bg-stone">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10 lg:py-24">
          <SectionHeading eyebrow="Principles" title="Our Values" />
          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {aboutValues.map((value, index) => (
              <ScrollReveal key={value.title} delayClass={`reveal-delay-${(index % 4) + 1}`}>
                <article className="border border-stone-dark bg-white p-7">
                  <h3 className="font-display text-2xl text-navy">{value.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-warm-gray">{value.description}</p>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10 lg:py-24">
          <SectionHeading
            eyebrow="Partnerships"
            title="Partnership Philosophy"
            description="We welcome property owners, investors, developers, businesses, and professionals who value mutual benefit, professionalism, and long-term collaboration."
          />
        </div>
      </section>

      <section className="bg-navy text-white">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10 lg:py-24">
          <SectionHeading
            light
            eyebrow="Journey"
            title="Organizational Timeline"
            description="Placeholder milestones — replace with the organization’s authentic growth story."
          />
          <ol className="mt-14 space-y-0">
            {milestones.map((item, index) => (
              <ScrollReveal
                key={item.year}
                as="li"
                delayClass={`reveal-delay-${(index % 4) + 1}`}
                className="grid gap-4 border-t border-white/10 py-8 md:grid-cols-12"
              >
                <p className="font-display text-3xl text-bronze md:col-span-2">{item.year}</p>
                <div className="md:col-span-10">
                  <h3 className="font-display text-2xl">{item.title}</h3>
                  <p className="mt-2 max-w-3xl text-sm leading-relaxed text-white/70">
                    {item.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </ol>
        </div>
      </section>

      <CTASection
        title="Would You Like To Connect?"
        description="Whether through membership, partnership, or opportunity discussion, we welcome a professional conversation."
        primary={{ label: 'Join Now', to: '/join' }}
        secondary={{ label: 'Contact Us', to: '/contact' }}
        image={images.contact}
      />
    </>
  )
}
