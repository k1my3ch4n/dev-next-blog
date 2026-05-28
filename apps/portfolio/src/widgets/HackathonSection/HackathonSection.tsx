import { Section } from "@shared/ui/Section";
import { HackathonCard } from "@shared/ui/HackathonCard";
import { HACKATHONS_DATA } from "@shared/data";

const HackathonSection = () => {
  return (
    <Section id="hackathon">
      <header className="mb-8">
        <p className="section-label">Hackathon</p>
        <h2 className="section-title mb-3">주간 해커톤</h2>
        <p className="text-[var(--ink-muted)] text-sm">
          프론트엔드를 넘어, AI를 활용한 사이드 프로젝트를 작업하고 있습니다.
        </p>
      </header>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {HACKATHONS_DATA.map(({ id, ...hackathon }) => (
          <HackathonCard key={id} {...hackathon} />
        ))}
      </div>
    </Section>
  );
};

export default HackathonSection;
