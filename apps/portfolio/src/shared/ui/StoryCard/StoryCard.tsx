interface StoryCardProps {
  title: string;
  problem: string;
  solution: string;
  extension: string;
}

const StoryCard = ({ title, problem, solution, extension }: StoryCardProps) => {
  return (
    <article className="border border-[var(--border)] rounded-xl overflow-hidden bg-[var(--surface)] mb-2.5">
      <h4 className="px-3.5 py-2.5 font-semibold text-[0.8125rem] border-b border-[var(--border)] text-[var(--ink)]">
        {title}
      </h4>
      <Phase tag="문제" tagClass="story-tag-problem" text={problem} />
      <div className="h-px bg-[var(--border)] mx-3.5" />
      <Phase tag="해결" tagClass="story-tag-solution" text={solution} />
      <div className="h-px bg-[var(--border)] mx-3.5" />
      <Phase tag="확장" tagClass="story-tag-extension" text={extension} />
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
  <div className="flex gap-2.5 items-start px-3.5 py-2.5 text-[0.8125rem] leading-relaxed text-[var(--ink-secondary)]">
    <span
      className={`font-mono text-[0.6875rem] font-semibold px-2 py-0.5 rounded whitespace-nowrap shrink-0 mt-px ${tagClass}`}
    >
      {tag}
    </span>
    <span>{text}</span>
  </div>
);

export default StoryCard;
