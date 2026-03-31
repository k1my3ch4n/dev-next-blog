import { Section } from "@shared/ui/Section";
import { SKILL_DATA } from "@shared/data";
import SkillCategoryCard from "./SkillCategoryCard";

const SkillSection = () => {
  return (
    <Section id="skills">
      <p className="section-label">Skills</p>
      <h2 className="section-title mb-8">기술 스택</h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {SKILL_DATA.map((category) => (
          <SkillCategoryCard key={category.category} {...category} />
        ))}
      </div>
    </Section>
  );
};

export default SkillSection;
