"use client";

import { Modal } from "@shared/ui/Modal";
import { StoryCard } from "@shared/ui/StoryCard";
import { Tag } from "@shared/ui/Tag";
import type { ProjectDetail } from "@shared/data";

interface ProjectModalProps {
  project: ProjectDetail | null;
  isOpen: boolean;
  onClose: () => void;
}

const ProjectModal = ({ project, isOpen, onClose }: ProjectModalProps) => {
  if (!project) {
    return null;
  }

  const emoji = project.title.match(/^[\p{Emoji}]/u)?.[0] ?? "📁";

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <figure
        className="flex items-center justify-center text-[4rem]"
        style={{
          background: project.gradient,
          aspectRatio: "21/9",
        }}
      >
        {emoji}
      </figure>
      <div className="p-6">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-caption text-[var(--ink-muted)]">
            {project.type === "career"
              ? "Career · TWINNY"
              : project.type === "personal"
                ? "Personal"
                : "Open Source"}
          </span>
          <span className="text-caption text-[var(--ink-muted)]">
            {project.period}
          </span>
        </div>
        <h2 className="text-xl font-bold mb-2 text-[var(--ink)]">
          {project.title}
        </h2>
        <p className="text-sm leading-[1.7] text-[var(--ink-secondary)] mb-4">
          {project.description}
        </p>
        <ul className="flex flex-wrap gap-1.5 mb-4 list-none">
          {project.techStack.map((tech) => (
            <li key={tech}>
              <Tag>{tech}</Tag>
            </li>
          ))}
        </ul>

        {project.relatedLinks.length > 0 && (
          <nav className="flex flex-wrap gap-2 mb-6" aria-label="관련 링크">
            {project.relatedLinks.map((link) => (
              <a
                key={link.url}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-body-sm text-[var(--accent)] no-underline px-3 py-1 border border-[color-mix(in_srgb,var(--accent)_30%,transparent)] rounded-full hover:bg-[var(--accent-soft)]"
              >
                {link.label} ↗
              </a>
            ))}
          </nav>
        )}

        {project.stories.length > 0 && (
          <>
            <h3 className="font-bold text-sm mb-3 text-[var(--ink)]">
              문제 해결 과정
            </h3>
            {project.stories.map((story) => (
              <StoryCard
                key={story.title}
                title={story.title}
                problem={story.problem}
                solution={story.solution}
                extension={story.extension}
              />
            ))}
          </>
        )}
      </div>
    </Modal>
  );
};

export default ProjectModal;
