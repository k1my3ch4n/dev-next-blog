import { Section } from "@shared/ui/Section";
import { SectionHeader } from "@shared/ui/SectionHeader";
import { SKILL_DATA } from "@shared/data";
import SkillCategoryCard from "./SkillCategoryCard";

const SkillSection = () => {
  return (
    <Section id="skills">
      <SectionHeader label="Skills" title="기술 스택" className="mb-8" />

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {SKILL_DATA.map((category) => (
          <SkillCategoryCard key={category.category} {...category} />
        ))}
      </div>
    </Section>
  );
};

export default SkillSection;
