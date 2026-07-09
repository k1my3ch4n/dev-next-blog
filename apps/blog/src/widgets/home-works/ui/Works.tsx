import Link from "next/link";
import { WORKS_DATA } from "@entities/work";
import { WorkCard } from "@shared/ui/WorkCard";

const Works = () => {
  return (
    <section className="w-full mb-16">
      <div className="flex items-baseline justify-between mb-8">
        <div>
          <p className="section-label">Works</p>
          <h2 className="section-title">프로젝트 & 해커톤</h2>
        </div>
        <Link
          href="/showcase"
          className="text-sm font-medium text-[var(--accent)] no-underline hover:underline"
        >
          전체보기 →
        </Link>
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        {WORKS_DATA.slice(0, 4).map(({ id, ...work }) => (
          <WorkCard key={id} {...work} />
        ))}
      </div>
    </section>
  );
};

export default Works;
