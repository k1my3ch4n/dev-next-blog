import type { SkillCategory } from "@shared/data";

const SkillCategoryCard = ({ category, skills }: SkillCategory) => (
  <section className="bg-[var(--surface-raised)] border border-[var(--border)] rounded-xl overflow-hidden shadow-[var(--card-shadow)]">
    <h3 className="bg-[var(--accent)] text-white px-3.5 py-2 text-body-sm font-semibold tracking-wide">
      {category}
    </h3>
    <ul className="p-3 flex flex-wrap gap-1 list-none">
      {skills.map((skill) => (
        <li
          key={skill}
          className="text-xs px-2.5 py-1 rounded-lg bg-[var(--surface)] border border-[var(--border)] text-[var(--ink)] transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)]"
        >
          {skill}
        </li>
      ))}
    </ul>
  </section>
);

export default SkillCategoryCard;
