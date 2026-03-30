interface StoryCardProps {
  title: string;
  problem: string;
  solution: string;
  extension: string;
}

const StoryCard = ({ title, problem, solution, extension }: StoryCardProps) => {
  return (
    <article className="border border-[var(--border)] rounded-xl overflow-hidden bg-[var(--surface)] mb-2.5">
      <h4 className="px-3.5 py-2.5 font-semibold text-body-sm border-b border-[var(--border)] text-[var(--ink)]">
        {title}
      </h4>
      <Phase
        tag="문제"
        tagClass="bg-[#fef2f2] text-[#b91c1c] border border-[#fecaca] dark:bg-[#2a1a1a] dark:text-[#fca5a5] dark:border-[#3a2020]"
        text={problem}
      />
      <div className="h-px bg-[var(--border)] mx-3.5" />
      <Phase
        tag="해결"
        tagClass="bg-[#f0fdf4] text-[#15803d] border border-[#bbf7d0] dark:bg-[#1a2a1a] dark:text-[#86efac] dark:border-[#203a20]"
        text={solution}
      />
      <div className="h-px bg-[var(--border)] mx-3.5" />
      <Phase
        tag="확장"
        tagClass="bg-[#eff6ff] text-[#1d4ed8] border border-[#bfdbfe] dark:bg-[#1a1a2a] dark:text-[#93c5fd] dark:border-[#20203a]"
        text={extension}
      />
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
      className={`font-mono text-caption font-semibold px-2 py-0.5 rounded whitespace-nowrap shrink-0 mt-px ${tagClass}`}
    >
      {tag}
    </span>
    <span>{text}</span>
  </div>
);

export default StoryCard;
