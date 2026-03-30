import { Section } from "@shared/ui/Section";
import {
  EXPERIENCE_DATA,
  EDUCATION_DATA,
  INTERESTS,
  HERO_STATS,
} from "@shared/data";
import { StatCard } from "@shared/ui/StatCard";

const AboutSection = () => {
  return (
    <Section id="about">
      <p className="section-label">About</p>
      <h2 className="section-title mb-2">이런 개발자입니다</h2>
      <hr className="accent-line mb-8" />

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-10">
        {HERO_STATS.map((stat) => (
          <StatCard key={stat.label} value={stat.value} label={stat.label} />
        ))}
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Left: Career + Education */}
        <section>
          <h3 className="font-semibold text-sm mb-3 text-[var(--ink)]">경력</h3>
          {EXPERIENCE_DATA.map((exp) => (
            <article
              key={exp.company}
              className="flex gap-3 items-start mb-6 p-3.5 bg-[var(--surface-raised)] border border-[var(--border)] rounded-xl"
            >
              <div className="w-10 h-10 rounded-lg flex items-center justify-center text-base font-bold shrink-0 bg-[var(--accent-soft)] text-[var(--accent)]">
                {exp.company[0]}
              </div>
              <div>
                <div className="font-semibold text-sm">{exp.company}</div>
                <div className="text-xs text-[var(--ink-muted)]">
                  {exp.role} · {exp.period}
                </div>
                <p className="text-xs mt-1.5 leading-relaxed text-[var(--ink-secondary)]">
                  {exp.description}
                </p>
              </div>
            </article>
          ))}

          <h3 className="font-semibold text-sm mb-3 text-[var(--ink)]">학력</h3>
          {EDUCATION_DATA.map((edu) => (
            <article
              key={edu.school}
              className="flex gap-3 items-center p-3.5 bg-[var(--surface-raised)] border border-[var(--border)] rounded-xl"
            >
              <div className="w-10 h-10 rounded-lg flex items-center justify-center text-base shrink-0 bg-[var(--accent-soft)]">
                🎓
              </div>
              <div>
                <div className="font-semibold text-sm">{edu.school}</div>
                <div className="text-xs text-[var(--ink-muted)]">
                  {edu.major} · {edu.period}
                </div>
              </div>
            </article>
          ))}
        </section>

        {/* Right: Interests */}
        <section>
          <h3 className="font-semibold text-sm mb-3 text-[var(--ink)]">
            이런 것에 관심이 많습니다
          </h3>
          <ul className="flex flex-col gap-2.5">
            {INTERESTS.map((interest) => (
              <li
                key={interest}
                className="text-sm leading-relaxed flex gap-2 text-[var(--ink-secondary)]"
              >
                <span className="text-[var(--accent)] shrink-0">→</span>
                {interest}
              </li>
            ))}
          </ul>
        </section>
      </div>
    </Section>
  );
};

export default AboutSection;
