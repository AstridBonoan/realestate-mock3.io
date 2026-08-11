import { Link } from 'react-router-dom'
import { company } from '../data/content'

const nav = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/membership', label: 'Membership' },
  { to: '/investments', label: 'Investments' },
  { to: '/investments?tab=rentals', label: 'Rentals' },
  { to: '/contact', label: 'Partnerships' },
  { to: '/contact', label: 'Contact' },
]

const social = [
  {
    label: 'LinkedIn',
    path: 'M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.24 8.25h4.52V24H.24V8.25zM8.34 8.25h4.33v2.14h.06c.6-1.14 2.08-2.34 4.28-2.34 4.58 0 5.42 3.01 5.42 6.93V24h-4.52v-7.79c0-1.86-.03-4.25-2.59-4.25-2.59 0-2.99 2.02-2.99 4.11V24H8.34V8.25z',
  },
  {
    label: 'Instagram',
    path: 'M12 2.16c3.2 0 3.58.01 4.85.07 3.25.15 4.77 1.69 4.92 4.92.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.15 3.23-1.66 4.77-4.92 4.92-1.27.06-1.64.07-4.85.07s-3.58-.01-4.85-.07c-3.26-.15-4.77-1.7-4.92-4.92-.06-1.27-.07-1.64-.07-4.85s.01-3.58.07-4.85C2.38 3.92 3.9 2.38 7.15 2.23 8.42 2.17 8.8 2.16 12 2.16zm0 1.8c-3.15 0-3.52.01-4.76.07-2.24.1-3.28 1.16-3.38 3.38-.06 1.24-.07 1.61-.07 4.76s.01 3.52.07 4.76c.1 2.21 1.14 3.28 3.38 3.38 1.24.06 1.61.07 4.76.07s3.52-.01 4.76-.07c2.23-.1 3.28-1.16 3.38-3.38.06-1.24.07-1.61.07-4.76s-.01-3.52-.07-4.76c-.1-2.22-1.15-3.28-3.38-3.38-1.24-.06-1.61-.07-4.76-.07zm0 3.06a5.15 5.15 0 1 1 0 10.3 5.15 5.15 0 0 1 0-10.3zm0 8.5a3.35 3.35 0 1 0 0-6.7 3.35 3.35 0 0 0 0 6.7zm6.54-8.72a1.2 1.2 0 1 1-2.4 0 1.2 1.2 0 0 1 2.4 0z',
  },
  {
    label: 'Facebook',
    path: 'M24 12.07C24 5.41 18.63 0 12 0S0 5.41 0 12.07C0 18.1 4.39 23.09 10.13 24v-8.44H7.08v-3.49h3.04V9.41c0-3.02 1.79-4.7 4.54-4.7 1.31 0 2.68.24 2.68.24v2.97h-1.51c-1.49 0-1.95.93-1.95 1.89v2.26h3.32l-.53 3.49h-2.79V24C19.61 23.09 24 18.1 24 12.07z',
  },
]

export default function Footer() {
  return (
    <footer className="border-t border-navy/10 bg-navy text-white">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 sm:px-8 lg:grid-cols-12 lg:gap-10 lg:px-10 lg:py-20">
        <div className="lg:col-span-5">
          <div className="flex items-center gap-3">
            <span className="flex h-9 w-9 items-center justify-center border border-bronze/40 bg-navy-deep text-bronze">
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden>
                <path d="M4 19V7l8-4 8 4v12h-5v-7H9v7H4z" />
              </svg>
            </span>
            <span className="font-display text-2xl font-semibold tracking-wide">
              {company.name}
            </span>
          </div>
          <p className="mt-6 max-w-md text-[15px] leading-relaxed text-white/70">
            {company.mission}
          </p>
          <div className="mt-8 flex gap-3">
            {social.map(({ label, path }) => (
              <a
                key={label}
                href="#"
                aria-label={label}
                className="inline-flex h-10 w-10 items-center justify-center border border-white/15 text-white/70 transition-colors hover:border-bronze hover:text-bronze"
              >
                <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden>
                  <path d={path} />
                </svg>
              </a>
            ))}
          </div>
        </div>

        <div className="lg:col-span-3">
          <h2 className="text-[11px] font-semibold uppercase tracking-[0.2em] text-bronze">
            Navigation
          </h2>
          <ul className="mt-5 space-y-3">
            {nav.map((item) => (
              <li key={`${item.label}-${item.to}`}>
                <Link
                  to={item.to}
                  className="text-sm text-white/70 transition-colors hover:text-white"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-4">
          <h2 className="text-[11px] font-semibold uppercase tracking-[0.2em] text-bronze">
            Contact
          </h2>
          <ul className="mt-5 space-y-3 text-sm text-white/70">
            <li>
              <a href={`mailto:${company.email}`} className="hover:text-white">
                {company.email}
              </a>
            </li>
            <li>
              <a href={`tel:${company.phone.replace(/[^\d+]/g, '')}`} className="hover:text-white">
                {company.phone}
              </a>
            </li>
            <li>{company.location}</li>
            <li>{company.hours}</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-5 py-6 text-xs text-white/50 sm:px-8 lg:px-10">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <p>
              © {new Date().getFullYear()} {company.name}. All rights reserved. Mockup design #3.
            </p>
            <div className="flex flex-wrap gap-5">
              <Link to="/privacy" className="hover:text-white">
                Privacy Policy
              </Link>
              <Link to="/terms" className="hover:text-white">
                Terms
              </Link>
              <Link to="/disclaimer" className="hover:text-white">
                Disclaimer
              </Link>
            </div>
          </div>
          <p className="text-[11px] tracking-wide text-white/45">
            Design &amp; development by{' '}
            <span className="text-[#5B8DEF]">B&amp;C Software &amp; Web</span>.
          </p>
        </div>
      </div>
    </footer>
  )
}
