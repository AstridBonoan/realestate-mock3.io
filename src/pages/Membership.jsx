import Hero from '../components/Hero'
import SectionHeading from '../components/SectionHeading'
import MembershipBenefit from '../components/MembershipBenefit'
import MembershipTimeline from '../components/MembershipTimeline'
import TeamMember from '../components/TeamMember'
import CTASection from '../components/CTASection'
import ScrollReveal from '../components/ScrollReveal'
import { images, membershipBenefits, membershipSteps } from '../data/content'
import { teamMembers } from '../data/team'

export default function Membership() {
  return (
    <>
      <Hero
        compact
        image={images.membership}
        title="Membership Built Around Opportunity."
        subtitle="Join a growing network of individuals interested in real estate, relationships, collaboration, and long-term opportunities."
        primaryCta={{ label: 'Apply For Membership', to: '/join' }}
      />

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10 lg:py-24">
          <SectionHeading
            eyebrow="Value"
            title="Why Become A Member?"
            description="Membership is designed to support connection, collaboration, and access within a professional real estate network."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {membershipBenefits.map((benefit, index) => (
              <ScrollReveal key={benefit.title} delayClass={`reveal-delay-${index + 1}`}>
                <MembershipBenefit {...benefit} index={index} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-stone-dark bg-stone">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10 lg:py-24">
          <SectionHeading
            eyebrow="Process"
            title="Membership Process"
            description="A clear four-step path from application to participation."
          />
          <div className="mt-12">
            <MembershipTimeline steps={membershipSteps} />
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10 lg:py-24">
          <SectionHeading
            eyebrow="People"
            title="Leadership & Team"
            description="Executive-style placeholder profiles. Substitute real names, titles, biographies, and portraits when ready."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {teamMembers.map((member, index) => (
              <ScrollReveal key={member.id} delayClass={`reveal-delay-${(index % 4) + 1}`}>
                <TeamMember member={member} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Would You Like To Become A Member?"
        description="Take the first step toward becoming part of our growing real estate network."
        primary={{ label: 'Join Now', to: '/join' }}
        image={images.partnership}
      />
    </>
  )
}
