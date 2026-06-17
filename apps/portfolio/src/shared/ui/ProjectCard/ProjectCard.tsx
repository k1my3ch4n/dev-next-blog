"use client";

import Tag from "../Tag/Tag";
import { PROJECT_TYPE_STYLES } from "@repo/components";
import type { CardTypo } from "@repo/components";

interface ProjectCardProps {
  cardTypo: CardTypo;
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
  cardTypo,
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
        className="aspect-[16/9] flex flex-col items-center justify-center relative overflow-hidden px-6"
        style={{ background: gradient }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
        <span className="z-[1] text-white font-black text-3xl md:text-4xl tracking-tight text-center leading-tight drop-shadow-md">
          {cardTypo.main}
        </span>
        <span className="z-[1] text-white/75 text-xs md:text-sm font-medium tracking-wide mt-2">
          {cardTypo.sub}
        </span>
        <div className="absolute bottom-0 left-0 right-0 px-4 py-3 bg-gradient-to-t from-black/70 to-transparent text-white text-xs font-semibold opacity-0 translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
          자세히 보기 →
        </div>
      </figure>
      <div className="p-5 flex-1 flex flex-col">
        <div className="flex items-center gap-2 mb-2">
          <span
            className={`text-[0.5625rem] font-bold tracking-wider uppercase px-2 py-0.5 rounded border ${PROJECT_TYPE_STYLES[type as keyof typeof PROJECT_TYPE_STYLES] ?? ""}`}
          >
            {typeLabel}
          </span>
          <time className="text-[0.7rem] text-[var(--ink-muted)]">
            {period}
          </time>
        </div>
        <h3 className="font-bold text-base mb-2 text-[var(--ink)] leading-snug">
          {title}
        </h3>
        <p className="text-sm text-[var(--ink-secondary)] flex-1 leading-relaxed mb-4">
          {shortDescription}
        </p>
        <ul className="flex flex-wrap gap-1.5 list-none">
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
