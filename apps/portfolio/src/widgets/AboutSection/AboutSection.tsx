import { Section } from "@shared/ui/Section";
import { EXPERIENCE_DATA, EDUCATION_DATA, INTERESTS } from "@shared/data";
import ExperienceCard from "./ExperienceCard";
import EducationCard from "./EducationCard";
import InterestItem from "./InterestItem";

const AboutSection = () => {
  return (
    <Section id="about">
      <p className="section-label">About</p>
      <h2 className="section-title mb-8">이런 개발자입니다</h2>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Left: Career + Education */}
        <section>
          <h3 className="font-semibold text-sm mb-3 text-[var(--ink)]">경력</h3>
          {EXPERIENCE_DATA.map((exp) => (
            <ExperienceCard key={exp.company} {...exp} />
          ))}

          <h3 className="font-semibold text-sm mb-3 text-[var(--ink)]">학력</h3>
          {EDUCATION_DATA.map((edu) => (
            <EducationCard key={edu.school} {...edu} />
          ))}
        </section>

        {/* Right: Interests */}
        <section>
          <h3 className="font-semibold text-sm mb-3 text-[var(--ink)]">
            이런 것에 관심이 많습니다
          </h3>
          <ul className="flex flex-col gap-2.5">
            {INTERESTS.map((interest) => (
              <InterestItem key={interest} text={interest} />
            ))}
          </ul>
        </section>
      </div>
    </Section>
  );
};

export default AboutSection;
