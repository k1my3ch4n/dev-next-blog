"use client";

import { WORK_TYPE_LABELS } from "@repo/content";
import type { WorkType } from "@repo/content";
import type { CardTypo } from "./types";
import { WORK_TYPE_STYLES } from "./config";
import CardFigure from "./CardFigure";
import Tag from "./Tag";

export interface WorkCardProps {
  cardTypo: CardTypo;
  title: string;
  description: string;
  period: string;
  type: WorkType;
  techStack: string[];
  gradient: string;
  onClick?: () => void;
  href?: string;
}

const CARD_CLASS =
  "group bg-[var(--surface-raised)] border border-[var(--border)] rounded-[14px] overflow-hidden shadow-[var(--card-shadow)] transition-all duration-300 cursor-pointer hover:shadow-[var(--card-shadow-hover)] hover:-translate-y-[3px] flex flex-col";

const CardBody = ({
  type,
  period,
  title,
  description,
  techStack,
}: Pick<
  WorkCardProps,
  "type" | "period" | "title" | "description" | "techStack"
>) => (
  <div className="p-5 flex-1 flex flex-col">
    <div className="flex items-center gap-2 mb-2">
      <span
        className={`text-[0.5625rem] font-bold tracking-wider uppercase px-2 py-0.5 rounded border ${WORK_TYPE_STYLES[type]}`}
      >
        {WORK_TYPE_LABELS[type]}
      </span>
      <time className="text-[0.7rem] text-[var(--ink-muted)]">{period}</time>
    </div>
    <h3 className="font-bold text-base mb-2 text-[var(--ink)] leading-snug">
      {title}
    </h3>
    <p className="text-sm text-[var(--ink-secondary)] flex-1 leading-relaxed mb-4">
      {description}
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

const WorkCard = ({
  cardTypo,
  title,
  description,
  period,
  type,
  techStack,
  gradient,
  onClick,
  href,
}: WorkCardProps) => {
  const actionLabel = href ? "README 보기" : "자세히 보기";

  const content = (
    <>
      <CardFigure
        gradient={gradient}
        cardTypo={cardTypo}
        actionLabel={actionLabel}
        titleSize="lg"
      />
      <CardBody
        type={type}
        period={period}
        title={title}
        description={description}
        techStack={techStack}
      />
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={`${CARD_CLASS} no-underline text-inherit`}
      >
        {content}
      </a>
    );
  }

  return (
    <div
      className={CARD_CLASS}
      role="button"
      tabIndex={0}
      onClick={onClick}
      onKeyDown={(event) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          onClick?.();
        }
      }}
    >
      {content}
    </div>
  );
};

export default WorkCard;
