import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { company } from '../data/content'

const links = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/membership', label: 'Membership' },
  { to: '/investments', label: 'Investments' },
  { to: '/contact', label: 'Contact' },
]

function scrollToTop() {
  window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
  document.documentElement.scrollTop = 0
  document.body.scrollTop = 0
}

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()

  const closeMenu = () => setOpen(false)

  const goHome = (event) => {
    event.preventDefault()
    setOpen(false)
    if (location.pathname === '/') {
      scrollToTop()
      return
    }
    navigate('/')
  }

  useEffect(() => {
    setOpen(false)
  }, [location.pathname, location.search])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!open) return undefined

    const onKeyDown = (event) => {
      if (event.key === 'Escape') setOpen(false)
    }

    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [open])

  const linkClass = ({ isActive }) =>
    `text-[13px] tracking-[0.14em] uppercase transition-colors duration-300 ${
      isActive ? 'text-bronze' : 'text-navy/80 hover:text-navy'
    }`

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 border-b transition-colors duration-300 ${
          scrolled || open
            ? 'border-stone-dark/80 bg-white/95 shadow-[0_1px_0_rgba(11,31,58,0.04)]'
            : 'border-transparent bg-white/90'
        }`}
      >
        <div className="mx-auto flex h-[4.5rem] max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-10">
          <Link
            to="/"
            onClick={goHome}
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
            {links.map((link) =>
              link.to === '/' ? (
                <a
                  key={link.to}
                  href={`${import.meta.env.BASE_URL}`}
                  onClick={goHome}
                  className={linkClass({ isActive: location.pathname === '/' })}
                >
                  {link.label}
                </a>
              ) : (
                <NavLink key={link.to} to={link.to} className={linkClass}>
                  {link.label}
                </NavLink>
              ),
            )}
          </nav>

          <div className="flex items-center gap-3">
            <Link
              to="/join"
              onClick={closeMenu}
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
              onClick={() => setOpen((value) => !value)}
            >
              {open ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </header>

      {/* Outside header so fixed positioning is viewport-relative */}
      {open && (
        <div
          id="mobile-menu"
          className="fixed inset-0 z-40 flex flex-col bg-white lg:hidden"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation"
        >
          <div className="flex h-[4.5rem] shrink-0 items-center justify-between border-b border-stone-dark px-5 sm:px-8">
            <span className="font-display text-[1.35rem] font-semibold tracking-wide text-navy">
              {company.shortName}
            </span>
            <button
              type="button"
              className="inline-flex h-10 w-10 items-center justify-center border border-navy/15 text-navy"
              aria-label="Close menu"
              onClick={closeMenu}
            >
              <X size={18} />
            </button>
          </div>

          <nav className="flex flex-1 flex-col overflow-y-auto px-5 py-6 sm:px-8" aria-label="Mobile">
            {links.map((link) =>
              link.to === '/' ? (
                <a
                  key={link.to}
                  href={`${import.meta.env.BASE_URL}`}
                  onClick={goHome}
                  className={`border-b border-stone-dark/70 py-4 text-sm uppercase tracking-[0.14em] ${
                    location.pathname === '/' ? 'text-bronze' : 'text-navy'
                  }`}
                >
                  {link.label}
                </a>
              ) : (
                <NavLink
                  key={link.to}
                  to={link.to}
                  onClick={closeMenu}
                  className={({ isActive }) =>
                    `border-b border-stone-dark/70 py-4 text-sm uppercase tracking-[0.14em] ${
                      isActive ? 'text-bronze' : 'text-navy'
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              ),
            )}
            <Link
              to="/join"
              onClick={closeMenu}
              className="mt-8 inline-flex justify-center border border-navy bg-navy px-5 py-3.5 text-[12px] font-semibold uppercase tracking-[0.16em] text-white"
            >
              Join Now
            </Link>
          </nav>
        </div>
      )}
    </>
  )
}
