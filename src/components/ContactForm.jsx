import { useState } from 'react'

const initial = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  inquiryType: '',
  subject: '',
  message: '',
}

export default function ContactForm() {
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
    if (!form.inquiryType) next.inquiryType = 'Select an inquiry type.'
    if (!form.subject.trim()) next.subject = 'Subject is required.'
    if (!form.message.trim()) next.message = 'Message is required.'
    else if (form.message.trim().length < 12) next.message = 'Please provide a more complete message.'
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
          Message Sent
        </p>
        <h3 className="mt-3 font-display text-3xl text-navy">Thank you for reaching out.</h3>
        <p className="mt-4 text-base leading-relaxed text-warm-gray">
          Your message has been received. A member of our team will respond regarding the next
          steps. This is a frontend mockup — no message was transmitted to a server.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={onSubmit} noValidate className="border border-stone-dark bg-white p-6 sm:p-8">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="c-firstName" className="block text-[11px] font-semibold uppercase tracking-[0.14em] text-navy">
            First Name
          </label>
          <input
            id="c-firstName"
            value={form.firstName}
            onChange={(e) => update('firstName', e.target.value)}
            autoComplete="given-name"
            className="mt-2 w-full border border-stone-dark px-4 py-3 text-sm outline-none focus:border-navy"
          />
          {errors.firstName && <p className="mt-1.5 text-xs text-red-700">{errors.firstName}</p>}
        </div>
        <div>
          <label htmlFor="c-lastName" className="block text-[11px] font-semibold uppercase tracking-[0.14em] text-navy">
            Last Name
          </label>
          <input
            id="c-lastName"
            value={form.lastName}
            onChange={(e) => update('lastName', e.target.value)}
            autoComplete="family-name"
            className="mt-2 w-full border border-stone-dark px-4 py-3 text-sm outline-none focus:border-navy"
          />
          {errors.lastName && <p className="mt-1.5 text-xs text-red-700">{errors.lastName}</p>}
        </div>
        <div>
          <label htmlFor="c-email" className="block text-[11px] font-semibold uppercase tracking-[0.14em] text-navy">
            Email
          </label>
          <input
            id="c-email"
            type="email"
            value={form.email}
            onChange={(e) => update('email', e.target.value)}
            autoComplete="email"
            className="mt-2 w-full border border-stone-dark px-4 py-3 text-sm outline-none focus:border-navy"
          />
          {errors.email && <p className="mt-1.5 text-xs text-red-700">{errors.email}</p>}
        </div>
        <div>
          <label htmlFor="c-phone" className="block text-[11px] font-semibold uppercase tracking-[0.14em] text-navy">
            Phone
          </label>
          <input
            id="c-phone"
            type="tel"
            value={form.phone}
            onChange={(e) => update('phone', e.target.value)}
            autoComplete="tel"
            className="mt-2 w-full border border-stone-dark px-4 py-3 text-sm outline-none focus:border-navy"
          />
        </div>
        <div>
          <label htmlFor="c-inquiryType" className="block text-[11px] font-semibold uppercase tracking-[0.14em] text-navy">
            Inquiry Type
          </label>
          <select
            id="c-inquiryType"
            value={form.inquiryType}
            onChange={(e) => update('inquiryType', e.target.value)}
            className="mt-2 w-full border border-stone-dark px-4 py-3 text-sm outline-none focus:border-navy"
          >
            <option value="">Select</option>
            <option>General</option>
            <option>Membership</option>
            <option>Investment</option>
            <option>Rental</option>
            <option>Partnership</option>
            <option>Property Owner</option>
            <option>Other</option>
          </select>
          {errors.inquiryType && <p className="mt-1.5 text-xs text-red-700">{errors.inquiryType}</p>}
        </div>
        <div>
          <label htmlFor="c-subject" className="block text-[11px] font-semibold uppercase tracking-[0.14em] text-navy">
            Subject
          </label>
          <input
            id="c-subject"
            value={form.subject}
            onChange={(e) => update('subject', e.target.value)}
            className="mt-2 w-full border border-stone-dark px-4 py-3 text-sm outline-none focus:border-navy"
          />
          {errors.subject && <p className="mt-1.5 text-xs text-red-700">{errors.subject}</p>}
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="c-message" className="block text-[11px] font-semibold uppercase tracking-[0.14em] text-navy">
            Message
          </label>
          <textarea
            id="c-message"
            rows={5}
            value={form.message}
            onChange={(e) => update('message', e.target.value)}
            className="mt-2 w-full resize-y border border-stone-dark px-4 py-3 text-sm outline-none focus:border-navy"
          />
          {errors.message && <p className="mt-1.5 text-xs text-red-700">{errors.message}</p>}
        </div>
      </div>
      <button
        type="submit"
        className="mt-8 inline-flex w-full items-center justify-center border border-navy bg-navy px-6 py-3.5 text-[12px] font-semibold uppercase tracking-[0.16em] text-white transition-colors hover:bg-navy-soft sm:w-auto"
      >
        Send Message
      </button>
    </form>
  )
}
