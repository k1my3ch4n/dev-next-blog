"use client";

import Tag from "../Tag/Tag";
import { CardFigure } from "../CardFigure";
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
  href?: string;
}

const CARD_CLASS =
  "group bg-[var(--surface-raised)] border border-[var(--border)] rounded-[14px] overflow-hidden shadow-[var(--card-shadow)] transition-all duration-300 cursor-pointer hover:shadow-[var(--card-shadow-hover)] hover:-translate-y-[3px] flex flex-col";

const CardBody = ({
  type,
  typeLabel,
  period,
  title,
  shortDescription,
  techStack,
}: Pick<ProjectCardProps, "type" | "typeLabel" | "period" | "title" | "shortDescription" | "techStack">) => (
  <div className="p-5 flex-1 flex flex-col">
    <div className="flex items-center gap-2 mb-2">
      <span
        className={`text-[0.5625rem] font-bold tracking-wider uppercase px-2 py-0.5 rounded border ${PROJECT_TYPE_STYLES[type as keyof typeof PROJECT_TYPE_STYLES] ?? ""}`}
      >
        {typeLabel}
      </span>
      <time className="text-[0.7rem] text-[var(--ink-muted)]">{period}</time>
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
);

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
  href,
}: ProjectCardProps) => {
  const actionLabel = href ? "README 보기" : "자세히 보기";

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={`${CARD_CLASS} no-underline text-inherit`}
      >
        <CardFigure gradient={gradient} cardTypo={cardTypo} actionLabel={actionLabel} titleSize="lg" />
        <CardBody
          type={type}
          typeLabel={typeLabel}
          period={period}
          title={title}
          shortDescription={shortDescription}
          techStack={techStack}
        />
      </a>
    );
  }

  return (
    <article className={CARD_CLASS} onClick={onClick}>
      <CardFigure gradient={gradient} cardTypo={cardTypo} actionLabel={actionLabel} titleSize="lg" />
      <CardBody
        type={type}
        typeLabel={typeLabel}
        period={period}
        title={title}
        shortDescription={shortDescription}
        techStack={techStack}
      />
    </article>
  );
};

export default ProjectCard;
