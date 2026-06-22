import { Section } from "@shared/ui/Section";
import { SectionHeader } from "@shared/ui/SectionHeader";
import { KEY_ACCOMPLISHMENTS } from "@shared/data";

const AccomplishmentsSection = () => {
  return (
    <Section id="accomplishments">
      <SectionHeader
        label="Key Accomplishments"
        title="이런 성과를 만들었습니다"
        className="mb-8"
      />

      <div className="grid sm:grid-cols-2 gap-4">
        {KEY_ACCOMPLISHMENTS.map((item) => (
          <article
            key={item.title}
            className="rounded-xl p-5 bg-[var(--surface-raised)] border border-[var(--border)] shadow-[var(--card-shadow)] transition-all duration-300 hover:shadow-[var(--card-shadow-hover)] hover:-translate-y-0.5"
          >
            <p className="font-semibold text-sm text-[var(--accent)] mb-2">
              {item.title}
            </p>
            <p className="text-sm leading-[1.7] text-[var(--ink-secondary)]">
              {item.description}
            </p>
          </article>
        ))}
      </div>
    </Section>
  );
};

export default AccomplishmentsSection;
