"use client";

import { useState, useCallback } from "react";
import type { WorkDetail } from "@shared/data";

export const useProjectModal = () => {
  const [selectedProject, setSelectedProject] = useState<WorkDetail | null>(
    null,
  );

  const openModal = useCallback((project: WorkDetail) => {
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
