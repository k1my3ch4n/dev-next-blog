"use client";

import { useState } from "react";
import { WORKS_DATA } from "@entities/work";
import {
  FilterTabs,
  SectionHeader,
  WorkCard,
  type FilterOption,
} from "@repo/components";

type FilterValue = "all" | "project" | "hackathon";

const FILTER_OPTIONS: FilterOption<FilterValue>[] = [
  { value: "all", label: "전체 작업물" },
  { value: "project", label: "프로젝트" },
  { value: "hackathon", label: "해커톤" },
];

const ShowcaseWorks = () => {
  const [filter, setFilter] = useState<FilterValue>("all");

  const works = WORKS_DATA.filter((work) => {
    if (filter === "all") {
      return true;
    }
    if (filter === "hackathon") {
      return work.type === "hackathon";
    }
    return work.type !== "hackathon";
  });

  return (
    <section className="w-full mb-16">
      <SectionHeader
        label="Works"
        title="전체 작업물"
        description="직접 기획하고 개발한 프로젝트, 오픈소스, 주간 해커톤입니다."
        className="mb-4"
      />

      <div className="mb-6">
        <FilterTabs
          options={FILTER_OPTIONS}
          value={filter}
          onChange={setFilter}
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
