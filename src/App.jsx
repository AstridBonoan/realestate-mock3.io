import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import About from './pages/About'
import Membership from './pages/Membership'
import Join from './pages/Join'
import Investments from './pages/Investments'
import OpportunityDetailPage from './pages/OpportunityDetail'
import Contact from './pages/Contact'
import { Privacy, Terms, Disclaimer } from './pages/Legal'

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="membership" element={<Membership />} />
        <Route path="join" element={<Join />} />
        <Route path="investments" element={<Investments />} />
        <Route path="opportunities/:id" element={<OpportunityDetailPage />} />
        <Route path="contact" element={<Contact />} />
        <Route path="privacy" element={<Privacy />} />
        <Route path="terms" element={<Terms />} />
        <Route path="disclaimer" element={<Disclaimer />} />
        <Route
          path="*"
          element={
            <section className="mx-auto max-w-3xl px-5 py-32 text-center">
              <h1 className="font-display text-4xl text-navy">Page Not Found</h1>
              <p className="mt-4 text-warm-gray">The page you requested does not exist.</p>
            </section>
          }
        />
      </Route>
    </Routes>
  )
}
