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
                className="mb-5 bg-[var(--surface-raised)] border border-[var(--border)] rounded-2xl overflow-hidden shadow-[var(--card-shadow)] transition-all duration-300 cursor-pointer hover:shadow-[var(--card-shadow-hover)] hover:-translate-y-1"
                onClick={() => handleClick(featuredProject)}
              >
                <div
                  className="w-full aspect-video flex items-center justify-center relative text-white"
                  style={{ background: featuredProject.gradient }}
                >
                  <span className="text-[4rem] z-[1]">
                    {featuredProject.title.match(/^[\p{Emoji}]/u)?.[0] ?? "🌐"}
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <span className="absolute top-4 left-4 font-mono text-[0.6875rem] font-semibold py-1 px-2.5 rounded-md bg-[var(--accent)] text-white tracking-wide">
                    Featured
                  </span>
                  <div className="absolute bottom-5 left-5 right-5 text-white text-xl font-bold">
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
