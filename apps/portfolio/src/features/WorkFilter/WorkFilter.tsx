"use client";

import { FilterTabs } from "@repo/components";
import { useWorkFilter } from "./useWorkFilter";
import type { WorkDetail } from "@shared/data";

interface WorkFilterProps {
  works: WorkDetail[];
  children: (filteredWorks: WorkDetail[]) => React.ReactNode;
}

const WorkFilter = ({ works, children }: WorkFilterProps) => {
  const { activeFilter, setActiveFilter, filteredWorks, filterOptions } =
    useWorkFilter(works);

  return (
    <>
      <FilterTabs
        options={filterOptions}
        value={activeFilter}
        onChange={setActiveFilter}
        ariaLabel="작업 필터"
        mode="tabs"
      />
      {children(filteredWorks)}
    </>
  );
};

export default WorkFilter;
