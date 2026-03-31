"use client";

import { useState, useMemo } from "react";
import type { ProjectDetail } from "@shared/data";
import type { FilterValue } from "./types";
import { FILTER_OPTIONS } from "./constants";

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
