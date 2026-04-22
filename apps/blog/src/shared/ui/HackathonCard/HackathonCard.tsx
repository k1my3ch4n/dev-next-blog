import { HACKATHON_CATEGORY_STYLES } from "@entities/hackathon";
import type { CardTypo } from "@repo/components";

interface HackathonCardProps {
  cardTypo: CardTypo;
  title: string;
  description: string;
  week: string;
  category: string;
  categoryLabel: string;
  techStack: string[];
  gradient: string;
  href: string;
}

const HackathonCard = ({
  cardTypo,
  title,
  description,
  week,
  category,
  categoryLabel,
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
        className="aspect-[16/8] flex flex-col items-center justify-center relative overflow-hidden px-4"
        style={{ background: gradient }}
      >
        <span className="z-[1] text-white font-black text-xl md:text-2xl tracking-tight text-center leading-tight">
          {cardTypo.main}
        </span>
        <span className="z-[1] text-white/60 text-[0.65rem] md:text-xs font-medium tracking-wide mt-1">
          {cardTypo.sub}
        </span>
        <div className="absolute bottom-0 left-0 right-0 px-3 py-2.5 bg-gradient-to-t from-black/70 to-transparent text-white text-xs font-semibold opacity-0 translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
          README 보기 →
        </div>
      </figure>

      <div className="p-3 flex-1 flex flex-col">
        <div className="flex items-center gap-1.5 mb-1.5">
          <span
            className={`text-[0.5rem] font-bold tracking-wider uppercase px-1.5 py-0.5 rounded border ${HACKATHON_CATEGORY_STYLES[category] ?? ""}`}
          >
            {categoryLabel}
          </span>
          <span className="text-[0.65rem] text-[var(--ink-muted)]">{week}</span>
        </div>
        <h3 className="font-semibold text-sm mb-1 text-[var(--ink)] leading-snug">
          {title}
        </h3>
        <p className="text-xs text-[var(--ink-secondary)] mb-2.5 flex-1 leading-relaxed">
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
