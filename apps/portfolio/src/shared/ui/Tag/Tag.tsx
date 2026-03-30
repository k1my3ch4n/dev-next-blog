interface TagProps {
  children: React.ReactNode;
  className?: string;
}

const Tag = ({ children, className = "" }: TagProps) => {
  return (
    <span
      className={`inline-block text-caption font-medium tracking-wide px-2 py-0.5 rounded bg-[var(--accent-soft)] text-[var(--accent)] border border-[color-mix(in_srgb,var(--accent)_15%,transparent)] ${className}`}
    >
      {children}
    </span>
  );
};

export default Tag;
