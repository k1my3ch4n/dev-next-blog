import type { EducationEntry } from "@shared/data";

const EducationCard = ({ school, major, period }: EducationEntry) => (
  <article className="flex gap-3 items-center p-3.5 bg-[var(--surface-raised)] border border-[var(--border)] rounded-xl">
    <div className="w-10 h-10 rounded-lg flex items-center justify-center text-base shrink-0 bg-[var(--accent-soft)]">
      🎓
    </div>
    <div>
      <div className="font-semibold text-sm">{school}</div>
      <div className="text-xs text-[var(--ink-muted)]">
        {major} · {period}
      </div>
    </div>
  </article>
);

export default EducationCard;
