"use client";

import { useState } from "react";
import { WORKS_DATA } from "@entities/work";
import { FilterTabs, type FilterOption } from "@shared/ui";
import { WorkCard } from "@shared/ui/WorkCard";

type FilterValue = "all" | "project" | "hackathon";

const FILTER_OPTIONS: FilterOption[] = [
  { value: "all", label: "전체 작업물" },
  { value: "project", label: "프로젝트" },
  { value: "hackathon", label: "해커톤" },
];

const ShowcaseWorks = () => {
  const [filter, setFilter] = useState<FilterValue>("all");

  const works =
    filter === "all"
      ? WORKS_DATA
      : filter === "hackathon"
        ? WORKS_DATA.filter((work) => work.type === "hackathon")
        : WORKS_DATA.filter((work) => work.type !== "hackathon");

  return (
    <section className="w-full mb-16">
      <p className="section-label">Works</p>
      <h2 className="section-title mb-3">전체 작업물</h2>
      <p className="text-[var(--ink-muted)] text-sm mb-4">
        직접 기획하고 개발한 프로젝트, 오픈소스, 주간 해커톤입니다.
      </p>

      <div className="mb-6">
        <FilterTabs
          options={FILTER_OPTIONS}
          selected={filter}
          onSelect={(value) => setFilter(value as FilterValue)}
          ariaLabel="작업물 필터"
        />
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {works.map(({ id, ...work }) => (
          <WorkCard key={id} {...work} />
        ))}
      </div>
    </section>
  );
};

export default ShowcaseWorks;
