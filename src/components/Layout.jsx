import { Outlet, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import { BrandWatermark, BrandBadge } from './BrandMark'

export default function Layout() {
  const location = useLocation()

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
    document.documentElement.scrollTop = 0
    document.body.scrollTop = 0
  }, [location.pathname, location.search])

  return (
    <div className="relative flex min-h-screen flex-col">
      <BrandWatermark />
      <Navbar />
      <main id="main-content" className="relative z-0 flex-1">
        <Outlet />
      </main>
      <Footer />
      <BrandBadge />
    </div>
  )
}
