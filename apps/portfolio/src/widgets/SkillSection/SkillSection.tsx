import { Section } from "@shared/ui/Section";
import { SKILL_DATA } from "@shared/data";

const SkillSection = () => {
  return (
    <Section id="skills">
      <div className="section-label">Skills</div>
      <h2 className="section-title mb-2">기술 스택</h2>
      <div className="accent-line mb-8" />

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {SKILL_DATA.map((category) => (
          <div
            key={category.category}
            className="bg-[var(--surface-raised)] border border-[var(--border)] rounded-xl overflow-hidden shadow-[var(--card-shadow)]"
          >
            <div className="bg-[var(--accent)] text-white px-3.5 py-2 text-[0.8125rem] font-semibold tracking-wide">
              {category.category}
            </div>
            <div className="p-3 flex flex-wrap gap-1">
              {category.skills.map((skill) => (
                <span
                  key={skill}
                  className="text-xs px-2.5 py-1 rounded-lg bg-[var(--surface)] border border-[var(--border)] text-[var(--ink)] transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)]"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default SkillSection;
