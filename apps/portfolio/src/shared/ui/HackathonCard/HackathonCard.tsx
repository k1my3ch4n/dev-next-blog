import type { WorkItem } from "@repo/components";
import { WORK_TYPE_LABELS, WORK_TYPE_STYLES } from "@repo/components";
import { CardFigure } from "../CardFigure";

type HackathonCardProps = Omit<WorkItem, "id">;

const HackathonCard = ({
  cardTypo,
  title,
  description,
  period,
  type,
  techStack,
  gradient,
  href,
}: HackathonCardProps) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group bg-[var(--surface-raised)] border border-[var(--border)] rounded-[14px] overflow-hidden shadow-[var(--card-shadow)] transition-all duration-300 hover:shadow-[var(--card-shadow-hover)] hover:-translate-y-[3px] flex flex-col no-underline text-inherit"
    >
      <CardFigure
        gradient={gradient}
        cardTypo={cardTypo}
        actionLabel="README 보기"
        titleSize="md"
      />
      <div className="p-4 flex-1 flex flex-col">
        <div className="flex items-center gap-2 mb-2">
          <span
            className={`text-[0.5625rem] font-bold tracking-wider uppercase px-2 py-0.5 rounded border ${WORK_TYPE_STYLES[type]}`}
          >
            {WORK_TYPE_LABELS[type]}
          </span>
          <span className="text-[0.7rem] text-[var(--ink-muted)]">{period}</span>
        </div>
        <h3 className="font-bold text-sm mb-2 text-[var(--ink)] leading-snug">
          {title}
        </h3>
        <p className="text-xs text-[var(--ink-secondary)] flex-1 leading-relaxed mb-3">
          {description}
        </p>
        <ul className="flex flex-wrap gap-1 list-none">
          {techStack.slice(0, 3).map((tech) => (
            <li key={tech}>
              <span className="tag-pill text-[0.6rem]">{tech}</span>
            </li>
          ))}
        </ul>
      </div>
    </a>
  );
};

export default HackathonCard;
