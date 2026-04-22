import { HACKATHONS_DATA } from "@entities/hackathon";
import { HackathonCard } from "@shared/ui/HackathonCard";

const Hackathon = () => {
  return (
    <section className="w-full mb-16">
      <p className="section-label">Hackathon</p>
      <h2 className="section-title mb-8">주간 해커톤</h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {HACKATHONS_DATA.map((hackathon) => (
          <HackathonCard key={hackathon.title} {...hackathon} />
        ))}
      </div>
    </section>
  );
};

export default Hackathon;
