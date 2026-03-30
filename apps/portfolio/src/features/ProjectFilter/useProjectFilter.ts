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

  return {
    activeFilter,
    setActiveFilter,
    filteredProjects,
    filterOptions: FILTER_OPTIONS,
  };
};
