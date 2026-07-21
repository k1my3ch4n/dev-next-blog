import Link from "next/link";
import { WORKS_DATA } from "@entities/work";
import { SectionHeader, WorkCard } from "@repo/components";

const Works = () => {
  return (
    <section className="w-full mb-16">
      <SectionHeader
        label="Works"
        title="프로젝트 & 해커톤"
        className="mb-8"
        action={
          <Link
            href="/showcase"
            className="text-sm font-medium text-[var(--accent)] no-underline hover:underline"
          >
            전체보기 →
          </Link>
        }
      />

      <div className="grid sm:grid-cols-2 gap-4">
        {WORKS_DATA.slice(0, 4).map(({ id, ...work }) => (
          <WorkCard key={id} {...work} />
        ))}
      </div>
    </section>
  );
};

export default Works;
