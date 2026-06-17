import { WORKS_DATA } from "@entities/work";
import { WorkCard } from "@shared/ui/WorkCard";

const Works = () => {
  return (
    <section className="w-full mb-16">
      <p className="section-label">Works</p>
      <h2 className="section-title mb-8">프로젝트 & 해커톤</h2>

      <div className="grid sm:grid-cols-2 gap-4">
        {WORKS_DATA.slice(0, 4).map(({ id, ...work }) => (
          <WorkCard key={id} {...work} />
        ))}
      </div>

      <div className="flex justify-end mt-4">
        <a
          href="/showcase"
          className="text-sm font-medium text-[var(--accent)] no-underline hover:underline"
        >
          전체보기 →
        </a>
      </div>
    </section>
  );
};

export default Works;
