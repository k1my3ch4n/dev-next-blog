import { Section } from "@shared/ui/Section";
import { SectionHeader } from "@shared/ui/SectionHeader";
import { HackathonCard } from "@shared/ui/HackathonCard";
import { HACKATHONS_DATA } from "@shared/data";

// setup-package는 Project 섹션에 별도 상세 카드(모달)로 이미 노출되므로 중복 표시를 막는다.
const DUPLICATED_IN_PROJECTS = ["setup-package"];

const HackathonSection = () => {
  const hackathons = HACKATHONS_DATA.filter(
    (hackathon) => !DUPLICATED_IN_PROJECTS.includes(hackathon.id),
  );

  return (
    <Section id="hackathon">
      <SectionHeader
        label="Hackathon"
        title="주간 해커톤"
        description="프론트엔드를 넘어, AI를 활용한 사이드 프로젝트를 작업하고 있습니다."
        className="mb-8"
      />

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {hackathons.map(({ id, ...hackathon }) => (
          <HackathonCard key={id} {...hackathon} />
        ))}
      </div>
    </Section>
  );
};

export default HackathonSection;
