import MembershipForm from '../components/MembershipForm'
import ScrollReveal from '../components/ScrollReveal'
import { images } from '../data/content'

const checklist = [
  'Tell us about yourself',
  'Share your interests',
  'Tell us what you’re looking for',
  'Submit your application',
]

export default function Join() {
  return (
    <section className="bg-stone pt-24">
      <div className="relative overflow-hidden border-b border-stone-dark">
        <img src={images.lobby} alt="" className="absolute inset-0 h-full w-full object-cover opacity-20" />
        <div className="relative mx-auto max-w-7xl px-5 py-14 sm:px-8 lg:px-10 lg:py-16">
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-bronze">
            Membership Application
          </p>
          <h1 className="mt-3 max-w-2xl font-display text-4xl font-medium text-navy sm:text-5xl">
            Start Your Application.
          </h1>
        </div>
      </div>

      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 sm:px-8 lg:grid-cols-12 lg:gap-14 lg:px-10 lg:py-20">
        <ScrollReveal className="lg:col-span-5">
          <p className="text-base leading-relaxed text-warm-gray sm:text-lg">
            Completing this application helps our team understand your background, interests, and
            how you may engage with the Everstead network. All submissions in this mockup remain
            frontend-only.
          </p>
          <ul className="mt-10 space-y-4">
            {checklist.map((item, index) => (
              <li key={item} className="flex items-start gap-4 border-b border-stone-dark pb-4">
                <span className="font-display text-xl text-bronze">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <span className="pt-1 text-sm text-navy">{item}</span>
              </li>
            ))}
          </ul>
        </ScrollReveal>
        <ScrollReveal delayClass="reveal-delay-2" className="lg:col-span-7">
          <MembershipForm />
        </ScrollReveal>
      </div>
    </section>
  )
}
