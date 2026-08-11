export default function MembershipBenefit({ title, description, index }) {
  return (
    <article className="border border-stone-dark bg-white p-7 transition-colors duration-300 hover:border-navy/30">
      <p className="font-display text-3xl text-bronze/70">{String(index + 1).padStart(2, '0')}</p>
      <h3 className="mt-4 font-display text-2xl text-navy">{title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-warm-gray">{description}</p>
    </article>
  )
}
