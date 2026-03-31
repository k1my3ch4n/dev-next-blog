interface PhaseProps {
  tag: string;
  tagClass: string;
  text: string;
}

const Phase = ({ tag, tagClass, text }: PhaseProps) => (
  <div className="flex gap-2.5 items-baseline px-3.5 py-2.5 text-body-sm leading-relaxed text-[var(--ink-secondary)]">
    <span
      className={`text-caption font-semibold px-2 py-0.5 rounded whitespace-nowrap shrink-0 ${tagClass}`}
    >
      {tag}
    </span>
    <span>{text}</span>
  </div>
);

export default Phase;
