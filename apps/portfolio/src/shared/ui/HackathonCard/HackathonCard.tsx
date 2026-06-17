import type { WorkItem } from "@repo/components";
import { WORK_TYPE_LABELS, WORK_TYPE_STYLES } from "@repo/components";

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
      <figure
        className="aspect-[16/9] flex flex-col items-center justify-center relative overflow-hidden px-6"
        style={{ background: gradient }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
        <span className="z-[1] text-white font-black text-2xl md:text-3xl tracking-tight text-center leading-tight drop-shadow-md">
          {cardTypo.main}
        </span>
        <span className="z-[1] text-white/75 text-xs font-medium tracking-wide mt-2">
          {cardTypo.sub}
        </span>
        <div className="absolute bottom-0 left-0 right-0 px-4 py-3 bg-gradient-to-t from-black/70 to-transparent text-white text-xs font-semibold opacity-0 translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
          README 보기 →
        </div>
      </figure>
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
