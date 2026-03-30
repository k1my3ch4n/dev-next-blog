const STORY_PHASES = [
  {
    key: "problem" as const,
    tag: "문제",
    className:
      "bg-[#fef2f2] text-[#b91c1c] border border-[#fecaca] dark:bg-[#2a1a1a] dark:text-[#fca5a5] dark:border-[#3a2020]",
  },
  {
    key: "solution" as const,
    tag: "해결",
    className:
      "bg-[#f0fdf4] text-[#15803d] border border-[#bbf7d0] dark:bg-[#1a2a1a] dark:text-[#86efac] dark:border-[#203a20]",
  },
  {
    key: "extension" as const,
    tag: "확장",
    className:
      "bg-[#eff6ff] text-[#1d4ed8] border border-[#bfdbfe] dark:bg-[#1a1a2a] dark:text-[#93c5fd] dark:border-[#20203a]",
  },
];

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

const Phase = ({
  tag,
  tagClass,
  text,
}: {
  tag: string;
  tagClass: string;
  text: string;
}) => (
  <div className="flex gap-2.5 items-start px-3.5 py-2.5 text-body-sm leading-relaxed text-[var(--ink-secondary)]">
    <span
      className={`text-caption font-semibold px-2 py-0.5 rounded whitespace-nowrap shrink-0 mt-px ${tagClass}`}
    >
      {tag}
    </span>
    <span>{text}</span>
  </div>
);

export default StoryCard;
