interface StatCardProps {
  value: string;
  label: string;
}

const StatCard = ({ value, label }: StatCardProps) => {
  return (
    <figure className="stat-card rounded-xl p-5">
      <p className="font-mono font-semibold text-[1.75rem] leading-none text-[var(--accent)]">
        {value}
      </p>
      <figcaption className="text-xs font-medium text-[var(--ink-secondary)] mt-1.5">
        {label}
      </figcaption>
    </figure>
  );
};

export default StatCard;
