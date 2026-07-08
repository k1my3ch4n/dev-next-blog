"use client";

import { useState, useMemo } from "react";
import type { WorkDetail } from "@shared/data";
import type { FilterValue } from "./types";
import { FILTER_OPTIONS } from "./constants";

export const useWorkFilter = (works: WorkDetail[]) => {
  const [activeFilter, setActiveFilter] = useState<FilterValue>("all");

  const filteredWorks = useMemo(
    () =>
      activeFilter === "all"
        ? works
        : works.filter((work) => work.type === activeFilter),
    [works, activeFilter],
  );

  const filterOptionsWithCount = useMemo(
    () =>
      FILTER_OPTIONS.map((option) => ({
        ...option,
        count:
          option.value === "all"
            ? works.length
            : works.filter((work) => work.type === option.value).length,
      })),
    [works],
  );

  return {
    activeFilter,
    setActiveFilter,
    filteredWorks,
    filterOptions: filterOptionsWithCount,
  };
};
