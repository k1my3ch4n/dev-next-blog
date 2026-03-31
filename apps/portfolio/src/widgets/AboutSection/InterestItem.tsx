const InterestItem = ({ text }: { text: string }) => (
  <li className="text-sm leading-relaxed flex gap-2 text-[var(--ink-secondary)]">
    <span className="text-[var(--accent)] shrink-0">→</span>
    {text}
  </li>
);

export default InterestItem;
