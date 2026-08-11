import Hero from '../components/Hero'
import ContactForm from '../components/ContactForm'
import ScrollReveal from '../components/ScrollReveal'
import { company, images } from '../data/content'

const inquiryChannels = [
  'Membership Inquiries',
  'Investment Inquiries',
  'Rental Inquiries',
  'Partnership Inquiries',
]

export default function Contact() {
  return (
    <>
      <Hero
        compact
        image={images.contact}
        title="Let's Discuss What's Next."
        subtitle="Whether you're interested in membership, an investment opportunity, a rental property, or a partnership, our team is ready to connect."
      />

      <section className="bg-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 sm:px-8 lg:grid-cols-12 lg:gap-14 lg:px-10 lg:py-20">
          <ScrollReveal className="lg:col-span-5">
            <h2 className="font-display text-3xl text-navy sm:text-4xl">Contact Information</h2>
            <dl className="mt-8 space-y-5">
              {[
                ['Email', company.email, `mailto:${company.email}`],
                ['Phone', company.phone, `tel:${company.phone.replace(/[^\d+]/g, '')}`],
                ['Location', company.location, null],
                ['Business Hours', company.hours, null],
              ].map(([label, value, href]) => (
                <div key={label} className="border-b border-stone-dark pb-4">
                  <dt className="text-[11px] font-semibold uppercase tracking-[0.16em] text-bronze">
                    {label}
                  </dt>
                  <dd className="mt-2 text-sm text-navy">
                    {href ? (
                      <a href={href} className="hover:text-bronze">
                        {value}
                      </a>
                    ) : (
                      value
                    )}
                  </dd>
                </div>
              ))}
            </dl>

            <h3 className="mt-10 text-[11px] font-semibold uppercase tracking-[0.18em] text-navy">
              Inquiry Channels
            </h3>
            <ul className="mt-4 space-y-3">
              {inquiryChannels.map((item) => (
                <li
                  key={item}
                  className="border-l-2 border-bronze/50 pl-4 text-sm text-warm-gray"
                >
                  {item}
                </li>
              ))}
            </ul>
          </ScrollReveal>

          <ScrollReveal delayClass="reveal-delay-2" className="lg:col-span-7">
            <ContactForm />
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}
