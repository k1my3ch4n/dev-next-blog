import { STORY_PHASES } from "./constants";
import Phase from "./Phase";

interface StoryCardProps {
  title: string;
  problem: string;
  solution: string;
  extension: string;
}

const StoryCard = ({ title, ...phases }: StoryCardProps) => {
  return (
    <article className="border border-[var(--border)] rounded-xl overflow-hidden bg-[var(--surface)] mb-2.5">
      <h4 className="px-3.5 py-2.5 font-semibold text-body-sm border-b border-[var(--border)] text-[var(--ink)]">
        {title}
      </h4>
      {STORY_PHASES.map((phase, idx) => (
        <div key={phase.key}>
          {idx > 0 && <div className="h-px bg-[var(--border)] mx-3.5" />}
          <Phase
            tag={phase.tag}
            tagClass={phase.className}
            text={phases[phase.key]}
          />
        </div>
      ))}
    </article>
  );
};

export default StoryCard;
