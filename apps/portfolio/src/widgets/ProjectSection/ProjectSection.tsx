"use client";

import { Section } from "@shared/ui/Section";
import { ProjectCard } from "@shared/ui/ProjectCard";
import { PROJECTS } from "@shared/data";
import type { ProjectDetail } from "@shared/data";
import { ProjectFilter } from "@features/ProjectFilter";
import { ProjectModal, useProjectModal } from "@features/ProjectModal";
import { PROJECT_TYPE_LABELS } from "@shared/config/projectTypes";

const ProjectSection = () => {
  const { selectedProject, isOpen, openModal, closeModal } = useProjectModal();

  const handleClick = (project: ProjectDetail) => {
    openModal(project);
  };

  return (
    <Section id="projects">
      <header className="flex items-end justify-between mb-6">
        <div>
          <p className="section-label">Projects</p>
          <h2 className="section-title">작업 내용</h2>
        </div>
      </header>

      <ProjectFilter projects={PROJECTS}>
        {(filteredProjects) => (
          <div className="grid sm:grid-cols-2 gap-4">
            {filteredProjects.map((project) => (
              <ProjectCard
                key={project.id}
                cardTypo={project.cardTypo}
                title={project.title}
                shortDescription={project.shortDescription}
                period={project.period}
                type={project.type}
                typeLabel={PROJECT_TYPE_LABELS[project.type]}
                techStack={project.techStack}
                gradient={project.gradient}
                onClick={() => handleClick(project)}
              />
            ))}
          </div>
        )}
      </ProjectFilter>

      <ProjectModal
        project={selectedProject}
        isOpen={isOpen}
        onClose={closeModal}
      />
    </Section>
  );
};

export default ProjectSection;
