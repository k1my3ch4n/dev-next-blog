"use client";

import { Section } from "@shared/ui/Section";
import { ProjectCard } from "@shared/ui/ProjectCard";
import { PROJECTS } from "@shared/data";
import type { ProjectDetail } from "@shared/data";
import { ProjectFilter } from "@features/ProjectFilter";
import { ProjectModal, useProjectModal } from "@features/ProjectModal";

const TYPE_LABELS: Record<string, string> = {
  career: "Career",
  personal: "Personal",
  openSource: "Open Source",
};

const ProjectSection = () => {
  const { selectedProject, isOpen, openModal, closeModal } = useProjectModal();

  const handleClick = (project: ProjectDetail) => {
    if (project.externalUrl) {
      window.open(project.externalUrl, "_blank", "noopener,noreferrer");
      return;
    }

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
                emoji={project.title.match(/^[\p{Emoji}]/u)?.[0] ?? "📁"}
                title={project.title.replace(/^[\p{Emoji}]\s*/u, "")}
                shortDescription={project.shortDescription}
                period={project.period}
                type={project.type}
                typeLabel={TYPE_LABELS[project.type] ?? project.type}
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
