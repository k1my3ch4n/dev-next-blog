"use client";

import Tag from "../Tag/Tag";
import { PROJECT_TYPE_STYLES } from "@shared/config/projectTypes";

interface ProjectCardProps {
  emoji: string;
  title: string;
  shortDescription: string;
  period: string;
  type: string;
  typeLabel: string;
  techStack: string[];
  gradient: string;
  onClick?: () => void;
}

const ProjectCard = ({
  emoji,
  title,
  shortDescription,
  period,
  type,
  typeLabel,
  techStack,
  gradient,
  onClick,
}: ProjectCardProps) => {
  return (
    <article
      className="group bg-[var(--surface-raised)] border border-[var(--border)] rounded-[14px] overflow-hidden shadow-[var(--card-shadow)] transition-all duration-300 cursor-pointer hover:shadow-[var(--card-shadow-hover)] hover:-translate-y-[3px] flex flex-col"
      onClick={onClick}
    >
      <figure
        className="aspect-[16/10] flex items-center justify-center text-[2.5rem] relative overflow-hidden"
        style={{ background: gradient }}
      >
        <span className="z-[1]">{emoji}</span>
        <div className="absolute bottom-0 left-0 right-0 px-4 py-3 bg-gradient-to-t from-black/70 to-transparent text-white text-xs font-semibold opacity-0 translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
          자세히 보기 →
        </div>
      </figure>
      <div className="p-4 flex-1 flex flex-col">
        <div className="flex items-center gap-2 mb-1.5">
          <span
            className={`text-[0.5625rem] font-bold tracking-wider uppercase px-2 py-0.5 rounded border ${PROJECT_TYPE_STYLES[type as keyof typeof PROJECT_TYPE_STYLES] ?? ""}`}
          >
            {typeLabel}
          </span>
          <time className="text-caption text-[var(--ink-muted)]">{period}</time>
        </div>
        <h3 className="font-semibold text-sm mb-1 text-[var(--ink)]">
          {title}
        </h3>
        <p className="text-xs text-[var(--ink-secondary)] mb-3 flex-1">
          {shortDescription}
        </p>
        <ul className="flex flex-wrap gap-1 list-none">
          {techStack.slice(0, 4).map((tech) => (
            <li key={tech}>
              <Tag>{tech}</Tag>
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
};

export default ProjectCard;
