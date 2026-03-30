"use client";

import Tag from "../Tag/Tag";

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

const TYPE_STYLES: Record<string, string> = {
  career:
    "bg-[#fef2f2] text-[#dc2626] border-[#fecaca] dark:bg-[#2a1a1a] dark:text-[#fca5a5] dark:border-[#3a2020]",
  personal:
    "bg-[#fff7ed] text-[#c2410c] border-[#fed7aa] dark:bg-[#2a2218] dark:text-[#fdba74] dark:border-[#3a3020]",
  openSource:
    "bg-[#f0fdf4] text-[#16a34a] border-[#bbf7d0] dark:bg-[#1f1a2e] dark:text-[#c4b5fd] dark:border-[#2a2040]",
};

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
            className={`text-[0.5625rem] font-bold tracking-wider uppercase px-2 py-0.5 rounded border ${TYPE_STYLES[type] ?? ""}`}
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
