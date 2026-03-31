import type { ExperienceEntry } from "@shared/data";

const ExperienceCard = ({
  company,
  role,
  period,
  description,
}: ExperienceEntry) => (
  <article className="flex gap-3 items-start mb-6 p-3.5 bg-[var(--surface-raised)] border border-[var(--border)] rounded-xl">
    <div className="w-10 h-10 rounded-lg flex items-center justify-center text-base font-bold shrink-0 bg-[var(--accent-soft)] text-[var(--accent)]">
      {company[0]}
    </div>
    <div>
      <div className="font-semibold text-sm">{company}</div>
      <div className="text-xs text-[var(--ink-muted)]">
        {role} · {period}
      </div>
      <p className="text-xs mt-1.5 leading-relaxed text-[var(--ink-secondary)]">
        {description}
      </p>
    </div>
  </article>
);

export default ExperienceCard;
