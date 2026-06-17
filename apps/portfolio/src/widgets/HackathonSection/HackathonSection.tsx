import { Section } from "@shared/ui/Section";
import { SectionHeader } from "@shared/ui/SectionHeader";
import { HackathonCard } from "@shared/ui/HackathonCard";
import { HACKATHONS_DATA } from "@shared/data";

const HackathonSection = () => {
  return (
    <Section id="hackathon">
      <SectionHeader
        label="Hackathon"
        title="주간 해커톤"
        description="프론트엔드를 넘어, AI를 활용한 사이드 프로젝트를 작업하고 있습니다."
        className="mb-8"
      />

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {HACKATHONS_DATA.map(({ id, ...hackathon }) => (
          <HackathonCard key={id} {...hackathon} />
        ))}
      </div>
    </Section>
  );
};

export default HackathonSection;
