import { ScrollToTopButton } from "@repo/components";
import { WORKS_DATA } from "@entities/work";
import { ShowcaseWorks } from "@widgets/showcase-works";
import { HomeButtonWrapper } from "@shared/ui";

export default function ShowcasePage() {
  return (
    <>
      <HomeButtonWrapper />

      <div className="text-center mb-8 mt-4">
        <h1 className="text-2xl md:text-3xl font-black">🛠️ Showcase</h1>
        <p className="text-[var(--ink-muted)] text-sm mt-2">
          지금까지 만든 프로젝트와 사이드 프로젝트를 한 곳에 모아봤습니다.
        </p>
      </div>

      <hr
        className="border-none mb-6"
        style={{ height: "1px", background: "var(--border)" }}
      />

      <div className="stat-strip mb-8">
        <div className="stat-cell">
          <div className="stat-val">{WORKS_DATA.length}</div>
          <div className="stat-label">전체 작업물</div>
        </div>
      </div>

      <ShowcaseWorks />
      <ScrollToTopButton />
    </>
  );
}
