interface StatCardProps {
  value: string;
  label: string;
}

const StatCard = ({ value, label }: StatCardProps) => {
  return (
    <div className="stat-card rounded-xl p-5">
      <div className="font-mono font-semibold text-[1.75rem] leading-none text-[var(--accent)]">
        {value}
      </div>
      <div className="text-xs font-medium text-[var(--ink-secondary)] mt-1.5">
        {label}
      </div>
    </div>
  );
};

export default StatCard;
