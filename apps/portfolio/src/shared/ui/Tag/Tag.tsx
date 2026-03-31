interface TagProps {
  children: React.ReactNode;
  className?: string;
}

const Tag = ({ children, className = "" }: TagProps) => {
  return (
    <span
      className={`inline-block text-[0.7rem] font-medium tracking-wide px-1.5 py-px rounded bg-[var(--accent-soft)] text-[var(--accent)] border border-[color-mix(in_srgb,var(--accent)_15%,transparent)] ${className}`}
    >
      {children}
    </span>
  );
};

export default Tag;
