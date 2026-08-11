import { Link } from 'react-router-dom'

function LegalPage({ title, children }) {
  return (
    <section className="bg-white pt-28">
      <div className="mx-auto max-w-3xl px-5 pb-20 sm:px-8 lg:px-10">
        <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-bronze">Legal</p>
        <h1 className="mt-3 font-display text-4xl text-navy">{title}</h1>
        <div className="prose-everstead mt-8 space-y-4 text-sm leading-relaxed text-warm-gray">
          {children}
        </div>
        <Link to="/" className="mt-10 inline-flex text-[12px] font-semibold uppercase tracking-[0.16em] text-navy hover:text-bronze">
          Return Home
        </Link>
      </div>
    </section>
  )
}

export function Privacy() {
  return (
    <LegalPage title="Privacy Policy">
      <p>
        This privacy policy is a placeholder for the Everstead Partners website mockup. In a
        production environment, it would describe how personal information is collected, used, and
        protected.
      </p>
      <p>
        Forms on this mockup do not transmit data to a server. No personal information is stored by
        this demonstration site.
      </p>
    </LegalPage>
  )
}

export function Terms() {
  return (
    <LegalPage title="Terms of Use">
      <p>
        These terms are placeholders for Mockup Design #3. The site is a conceptual presentation of
        an institutional real estate organization and should not be interpreted as a live offering
        platform.
      </p>
      <p>
        Content, imagery, and figures are illustrative and may be replaced with authentic
        organizational information.
      </p>
    </LegalPage>
  )
}

export function Disclaimer() {
  return (
    <LegalPage title="Disclaimer">
      <p>
        Property information, membership figures, team biographies, and opportunity details shown
        throughout this website are illustrative mockup content. Actual availability, terms,
        pricing, and opportunities may vary.
      </p>
      <p>
        Nothing on this website constitutes investment advice, an offer to sell securities, or a
        promise of returns. Independent professional advice should be sought for any real
        transaction.
      </p>
    </LegalPage>
  )
}
