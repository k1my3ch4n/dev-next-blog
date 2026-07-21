export interface SectionHeaderProps {
  label: string;
  title: string;
  description?: string;
  action?: React.ReactNode;
  className?: string;
  descriptionClassName?: string;
}

const SectionHeader = ({
  label,
  title,
  description,
  action,
  className = "",
  descriptionClassName = "text-[var(--ink-muted)] text-sm mt-3",
}: SectionHeaderProps) => (
  <header className={className}>
    <div className={action ? "flex items-baseline justify-between" : undefined}>
      <div>
        <p className="section-label">{label}</p>
        <h2 className="section-title">{title}</h2>
      </div>
      {action}
    </div>
    {description && <p className={descriptionClassName}>{description}</p>}
  </header>
);

export default SectionHeader;
