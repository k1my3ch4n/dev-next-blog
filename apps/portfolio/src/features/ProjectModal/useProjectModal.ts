"use client";

import { useState, useCallback } from "react";
import type { ProjectDetail } from "@shared/data";

export const useProjectModal = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectDetail | null>(
    null,
  );

  const openModal = useCallback((project: ProjectDetail) => {
    setSelectedProject(project);
  }, []);

  const closeModal = useCallback(() => {
    setSelectedProject(null);
  }, []);

  return {
    selectedProject,
    isOpen: selectedProject !== null,
    openModal,
    closeModal,
  };
};
