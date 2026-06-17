interface SectionHeaderProps {
  label: string;
  title: string;
  description?: string;
  className?: string;
  descriptionClassName?: string;
}

const SectionHeader = ({
  label,
  title,
  description,
  className = "",
  descriptionClassName = "text-[var(--ink-muted)] text-sm mt-3",
}: SectionHeaderProps) => {
  return (
    <header className={className}>
      <p className="section-label">{label}</p>
      <h2 className="section-title">{title}</h2>
      {description && (
        <p className={descriptionClassName}>{description}</p>
      )}
    </header>
  );
};

export default SectionHeader;
