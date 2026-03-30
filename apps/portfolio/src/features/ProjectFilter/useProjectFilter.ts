"use client";

import { useState, useMemo } from "react";
import type { ProjectDetail, ProjectType } from "@shared/data";

type FilterValue = "all" | ProjectType;

interface FilterOption {
  value: FilterValue;
  label: string;
}

const FILTER_OPTIONS: FilterOption[] = [
  { value: "all", label: "전체" },
  { value: "career", label: "Career" },
  { value: "personal", label: "Personal" },
  { value: "openSource", label: "Open Source" },
];

export const useProjectFilter = (projects: ProjectDetail[]) => {
  const [activeFilter, setActiveFilter] = useState<FilterValue>("all");

  const filteredProjects = useMemo(
    () =>
      activeFilter === "all"
        ? projects
        : projects.filter((p) => p.type === activeFilter),
    [projects, activeFilter],
  );

  const filterOptionsWithCount = useMemo(
    () =>
      FILTER_OPTIONS.map((option) => ({
        ...option,
        count:
          option.value === "all"
            ? projects.length
            : projects.filter((p) => p.type === option.value).length,
      })),
    [projects],
  );

  return {
    activeFilter,
    setActiveFilter,
    filteredProjects,
    filterOptions: filterOptionsWithCount,
  };
};
