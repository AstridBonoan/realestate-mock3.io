import { useState } from 'react'

const initial = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  city: '',
  state: '',
  occupation: '',
  experience: '',
  interest: '',
  why: '',
  heard: '',
  additional: '',
  consent: false,
}

export default function MembershipForm() {
  const [form, setForm] = useState(initial)
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)

  const update = (key, value) => {
    setForm((prev) => ({ ...prev, [key]: value }))
    setErrors((prev) => ({ ...prev, [key]: undefined }))
  }

  const validate = () => {
    const next = {}
    if (!form.firstName.trim()) next.firstName = 'First name is required.'
    if (!form.lastName.trim()) next.lastName = 'Last name is required.'
    if (!form.email.trim()) next.email = 'Email is required.'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) next.email = 'Enter a valid email.'
    if (!form.phone.trim()) next.phone = 'Phone is required.'
    if (!form.city.trim()) next.city = 'City is required.'
    if (!form.state.trim()) next.state = 'State is required.'
    if (!form.occupation.trim()) next.occupation = 'Occupation is required.'
    if (!form.experience.trim()) next.experience = 'Please share your experience.'
    if (!form.interest.trim()) next.interest = 'Select a primary interest.'
    if (!form.why.trim()) next.why = 'Please tell us why you are interested.'
    if (!form.consent) next.consent = 'Consent is required to submit.'
    setErrors(next)
    return Object.keys(next).length === 0
  }

  const onSubmit = (e) => {
    e.preventDefault()
    if (!validate()) return
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="border border-bronze/30 bg-stone p-8 sm:p-10" role="status">
        <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-bronze">
          Application Received
        </p>
        <h3 className="mt-3 font-display text-3xl text-navy">Thank you for your interest.</h3>
        <p className="mt-4 text-base leading-relaxed text-warm-gray">
          Our team will review your information and contact you regarding the next steps.
        </p>
      </div>
    )
  }

  const field = (id, label, props = {}) => (
    <div>
      <label htmlFor={id} className="block text-[11px] font-semibold uppercase tracking-[0.14em] text-navy">
        {label}
      </label>
      <input
        id={id}
        value={form[id]}
        onChange={(e) => update(id, e.target.value)}
        className="mt-2 w-full border border-stone-dark bg-white px-4 py-3 text-sm text-navy outline-none transition-colors focus:border-navy"
        {...props}
      />
      {errors[id] && <p className="mt-1.5 text-xs text-red-700">{errors[id]}</p>}
    </div>
  )

  return (
    <form onSubmit={onSubmit} noValidate className="border border-stone-dark bg-white p-6 sm:p-8">
      <div className="grid gap-5 sm:grid-cols-2">
        {field('firstName', 'First Name', { autoComplete: 'given-name' })}
        {field('lastName', 'Last Name', { autoComplete: 'family-name' })}
        {field('email', 'Email', { type: 'email', autoComplete: 'email' })}
        {field('phone', 'Phone', { type: 'tel', autoComplete: 'tel' })}
        {field('city', 'City', { autoComplete: 'address-level2' })}
        {field('state', 'State', { autoComplete: 'address-level1' })}
        {field('occupation', 'Occupation')}
        <div>
          <label htmlFor="experience" className="block text-[11px] font-semibold uppercase tracking-[0.14em] text-navy">
            Real Estate Experience
          </label>
          <select
            id="experience"
            value={form.experience}
            onChange={(e) => update('experience', e.target.value)}
            className="mt-2 w-full border border-stone-dark bg-white px-4 py-3 text-sm text-navy outline-none focus:border-navy"
          >
            <option value="">Select</option>
            <option>Exploring</option>
            <option>Some Experience</option>
            <option>Active Professional</option>
            <option>Investor</option>
            <option>Property Owner</option>
          </select>
          {errors.experience && <p className="mt-1.5 text-xs text-red-700">{errors.experience}</p>}
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="interest" className="block text-[11px] font-semibold uppercase tracking-[0.14em] text-navy">
            Primary Interest
          </label>
          <select
            id="interest"
            value={form.interest}
            onChange={(e) => update('interest', e.target.value)}
            className="mt-2 w-full border border-stone-dark bg-white px-4 py-3 text-sm text-navy outline-none focus:border-navy"
          >
            <option value="">Select</option>
            <option>Membership Network</option>
            <option>Investments</option>
            <option>Rentals</option>
            <option>Partnerships</option>
            <option>General Collaboration</option>
          </select>
          {errors.interest && <p className="mt-1.5 text-xs text-red-700">{errors.interest}</p>}
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="why" className="block text-[11px] font-semibold uppercase tracking-[0.14em] text-navy">
            Why are you interested in membership?
          </label>
          <textarea
            id="why"
            rows={4}
            value={form.why}
            onChange={(e) => update('why', e.target.value)}
            className="mt-2 w-full resize-y border border-stone-dark bg-white px-4 py-3 text-sm text-navy outline-none focus:border-navy"
          />
          {errors.why && <p className="mt-1.5 text-xs text-red-700">{errors.why}</p>}
        </div>
        {field('heard', 'How did you hear about us?')}
        <div className="sm:col-span-2">
          <label htmlFor="additional" className="block text-[11px] font-semibold uppercase tracking-[0.14em] text-navy">
            Additional Information
          </label>
          <textarea
            id="additional"
            rows={3}
            value={form.additional}
            onChange={(e) => update('additional', e.target.value)}
            className="mt-2 w-full resize-y border border-stone-dark bg-white px-4 py-3 text-sm text-navy outline-none focus:border-navy"
          />
        </div>
      </div>

      <label className="mt-6 flex items-start gap-3 text-sm text-warm-gray">
        <input
          type="checkbox"
          checked={form.consent}
          onChange={(e) => update('consent', e.target.checked)}
          className="mt-1 h-4 w-4 accent-navy"
        />
        <span>
          I understand this is a mockup application and consent to being contacted regarding membership
          discussions.
        </span>
      </label>
      {errors.consent && <p className="mt-1.5 text-xs text-red-700">{errors.consent}</p>}

      <button
        type="submit"
        className="mt-8 inline-flex w-full items-center justify-center border border-navy bg-navy px-6 py-3.5 text-[12px] font-semibold uppercase tracking-[0.16em] text-white transition-colors hover:bg-navy-soft sm:w-auto"
      >
        Submit Application
      </button>
    </form>
  )
}
