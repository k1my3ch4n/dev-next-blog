"use client";

import { Modal } from "@shared/ui/Modal";
import { Tag } from "@shared/ui/Tag";
import type { ProjectDetail } from "@shared/data";
import {
  PROJECT_TYPE_LABELS,
  PROJECT_TYPE_STYLES,
} from "@shared/config/projectTypes";
import { extractEmoji } from "@shared/utils/emoji";
import RelatedLinks from "./RelatedLinks";
import ProjectStories from "./ProjectStories";

interface ProjectModalProps {
  project: ProjectDetail | null;
  isOpen: boolean;
  onClose: () => void;
}

const ProjectModal = ({ project, isOpen, onClose }: ProjectModalProps) => {
  if (!project) {
    return null;
  }

  const emoji = extractEmoji(project.title);

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <figure
        className="flex items-center justify-center text-[4rem] aspect-[21/9]"
        style={{ background: project.gradient }}
      >
        {emoji}
      </figure>
      <div className="p-6">
        <div className="flex items-center gap-2 mb-2">
          <span
            className={`text-[0.6rem] font-bold tracking-wider uppercase px-2 py-0.5 rounded border ${PROJECT_TYPE_STYLES[project.type]}`}
          >
            {PROJECT_TYPE_LABELS[project.type]}
          </span>
          <span className="text-[0.7rem] text-[var(--ink-muted)]">
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

        <RelatedLinks links={project.relatedLinks} />
        <ProjectStories stories={project.stories} />
      </div>
    </Modal>
  );
};

export default ProjectModal;
