"use client";

import { FilterBar } from "@shared/ui/FilterBar";
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
      <FilterBar
        options={filterOptions}
        activeValue={activeFilter}
        onChange={setActiveFilter}
      />
      {children(filteredWorks)}
    </>
  );
};

export default WorkFilter;
