import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { company } from '../data/content'

const links = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/membership', label: 'Membership' },
  { to: '/investments', label: 'Investments' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    setOpen(false)
  }, [location.pathname])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  const linkClass = ({ isActive }) =>
    `text-[13px] tracking-[0.14em] uppercase transition-colors duration-300 ${
      isActive ? 'text-bronze' : 'text-navy/80 hover:text-navy'
    }`

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || open
          ? 'border-b border-stone-dark/80 bg-white/95 shadow-[0_1px_0_rgba(11,31,58,0.04)] backdrop-blur'
          : 'border-b border-transparent bg-white/80 backdrop-blur-sm'
      }`}
    >
      <div className="mx-auto flex h-[4.5rem] max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-10">
        <Link
          to="/"
          className="group flex items-center gap-3"
          aria-label={`${company.name} home`}
        >
          <span className="flex h-9 w-9 items-center justify-center border border-navy/20 bg-navy text-bronze transition-colors group-hover:bg-navy-soft">
            <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden>
              <path d="M4 19V7l8-4 8 4v12h-5v-7H9v7H4z" />
            </svg>
          </span>
          <span className="font-display text-[1.35rem] font-semibold tracking-wide text-navy">
            {company.shortName}
            <span className="ml-1.5 hidden font-sans text-[10px] font-medium uppercase tracking-[0.22em] text-warm-gray sm:inline">
              Partners
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-9 lg:flex" aria-label="Primary">
          {links.map((link) => (
            <NavLink key={link.to} to={link.to} end={link.to === '/'} className={linkClass}>
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            to="/join"
            className="hidden border border-navy bg-navy px-5 py-2.5 text-[12px] font-semibold uppercase tracking-[0.16em] text-white transition-all duration-300 hover:border-navy-soft hover:bg-navy-soft sm:inline-flex"
          >
            Join Now
          </Link>
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center border border-navy/15 text-navy transition-colors hover:border-navy/30 lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      <div
        id="mobile-menu"
        className={`border-t border-stone-dark bg-white transition-all duration-300 lg:hidden ${
          open ? 'max-h-[28rem] opacity-100' : 'pointer-events-none max-h-0 overflow-hidden opacity-0'
        }`}
      >
        <nav className="flex flex-col gap-1 px-5 py-4 sm:px-8" aria-label="Mobile">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === '/'}
              className={({ isActive }) =>
                `border-b border-stone-dark/70 py-3.5 text-sm uppercase tracking-[0.14em] ${
                  isActive ? 'text-bronze' : 'text-navy'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
          <Link
            to="/join"
            className="mt-3 inline-flex justify-center border border-navy bg-navy px-5 py-3 text-[12px] font-semibold uppercase tracking-[0.16em] text-white"
          >
            Join Now
          </Link>
        </nav>
      </div>
    </header>
  )
}
