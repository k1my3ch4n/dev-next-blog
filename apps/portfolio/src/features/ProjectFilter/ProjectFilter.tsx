"use client";

import { FilterBar } from "@shared/ui/FilterBar";
import { useProjectFilter } from "./useProjectFilter";
import type { ProjectDetail } from "@shared/data";

interface ProjectFilterProps {
  projects: ProjectDetail[];
  children: (filteredProjects: ProjectDetail[]) => React.ReactNode;
}

const ProjectFilter = ({ projects, children }: ProjectFilterProps) => {
  const { activeFilter, setActiveFilter, filteredProjects, filterOptions } =
    useProjectFilter(projects);

  return (
    <>
      <FilterBar
        options={filterOptions}
        activeValue={activeFilter}
        onChange={setActiveFilter}
      />
      {children(filteredProjects)}
    </>
  );
};

export default ProjectFilter;
