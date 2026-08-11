export default function PartnerCard({ title, description }) {
  return (
    <article className="border border-white/15 bg-white/5 p-6 backdrop-blur-sm transition-colors duration-300 hover:border-bronze/50 hover:bg-white/8">
      <h3 className="text-[12px] font-semibold uppercase tracking-[0.18em] text-bronze">{title}</h3>
      <p className="mt-4 text-sm leading-relaxed text-white/75">{description}</p>
    </article>
  )
}
