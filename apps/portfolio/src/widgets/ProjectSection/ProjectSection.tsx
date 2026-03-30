"use client";

import { Section } from "@shared/ui/Section";
import { ProjectCard } from "@shared/ui/ProjectCard";
import { Tag } from "@shared/ui/Tag";
import { PROJECTS, getFeaturedProject } from "@shared/data";
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
  const featuredProject = getFeaturedProject();
  const nonFeaturedProjects = PROJECTS.filter((p) => !p.featured);

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
          <h2 className="section-title">만든 것들</h2>
        </div>
      </header>

      <ProjectFilter projects={nonFeaturedProjects}>
        {(filteredProjects) => (
          <>
            {/* Featured */}
            {featuredProject && (
              <article
                className="featured-card mb-5"
                onClick={() => handleClick(featuredProject)}
              >
                <div
                  className="featured-img"
                  style={{ background: featuredProject.gradient }}
                >
                  <span className="text-[4rem] z-[1]">
                    {featuredProject.title.match(/^[\p{Emoji}]/u)?.[0] ?? "🌐"}
                  </span>
                  <div className="featured-img-overlay" />
                  <span className="featured-img-badge">Featured</span>
                  <div className="featured-img-title">
                    <div className="text-xs opacity-70 mb-1">
                      {featuredProject.period} ·{" "}
                      {TYPE_LABELS[featuredProject.type]}
                    </div>
                    {featuredProject.title}
                  </div>
                </div>
                <div className="p-5">
                  <p className="text-sm leading-relaxed text-[var(--ink-secondary)] mb-4">
                    {featuredProject.description}
                  </p>
                  <ul className="flex flex-wrap gap-1.5 list-none">
                    {featuredProject.techStack.map((tech) => (
                      <li key={tech}>
                        <Tag>{tech}</Tag>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            )}

            {/* Grid */}
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
          </>
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
