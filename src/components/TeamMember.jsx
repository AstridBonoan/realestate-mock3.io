import { Mail } from 'lucide-react'

export default function TeamMember({ member }) {
  return (
    <article className="group border border-stone-dark bg-white">
      <div className="overflow-hidden">
        <img
          src={member.image}
          alt={`Portrait of ${member.name}`}
          className="aspect-[4/5] w-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.02]"
        />
      </div>
      <div className="p-6">
        <h3 className="font-display text-2xl font-medium text-navy">{member.name}</h3>
        <p className="mt-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-bronze">
          {member.position}
        </p>
        <p className="mt-4 text-sm leading-relaxed text-warm-gray">{member.bio}</p>
        <div className="mt-5 flex gap-3">
          <a
            href={member.linkedin}
            aria-label={`${member.name} on LinkedIn`}
            className="inline-flex h-9 w-9 items-center justify-center border border-navy/15 text-navy transition-colors hover:border-bronze hover:text-bronze"
          >
            <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="currentColor" aria-hidden>
              <path d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.24 8.25h4.52V24H.24V8.25zM8.34 8.25h4.33v2.14h.06c.6-1.14 2.08-2.34 4.28-2.34 4.58 0 5.42 3.01 5.42 6.93V24h-4.52v-7.79c0-1.86-.03-4.25-2.59-4.25-2.59 0-2.99 2.02-2.99 4.11V24H8.34V8.25z" />
            </svg>
          </a>
          {member.email && (
            <a
              href={`mailto:${member.email}`}
              aria-label={`Email ${member.name}`}
              className="inline-flex h-9 w-9 items-center justify-center border border-navy/15 text-navy transition-colors hover:border-bronze hover:text-bronze"
            >
              <Mail size={15} />
            </a>
          )}
        </div>
      </div>
    </article>
  )
}
