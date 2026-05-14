import { Section } from "@shared/ui/Section";
import { HackathonCard } from "@shared/ui/HackathonCard";
import { HACKATHONS_DATA } from "@shared/data";

const HackathonSection = () => {
  return (
    <Section id="hackathon">
      <header className="mb-8">
        <p className="section-label">Hackathon</p>
        <h2 className="section-title">주간 해커톤</h2>
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
