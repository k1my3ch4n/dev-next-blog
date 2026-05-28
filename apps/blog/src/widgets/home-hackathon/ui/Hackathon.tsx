import { HACKATHONS_DATA } from "@entities/hackathon";
import { HackathonCard } from "@shared/ui/HackathonCard";

const Hackathon = () => {
  return (
    <section className="w-full mb-16">
      <p className="section-label">Hackathon</p>
      <h2 className="section-title mb-3">주간 해커톤</h2>
      <p className="text-[var(--ink-muted)] text-sm mb-8">
        프론트엔드를 넘어, AI를 활용한 사이드 프로젝트를 작업하고 있습니다.
      </p>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {HACKATHONS_DATA.map(({ id, ...hackathon }) => (
          <HackathonCard key={id} {...hackathon} />
        ))}
      </div>
    </section>
  );
};

export default Hackathon;
