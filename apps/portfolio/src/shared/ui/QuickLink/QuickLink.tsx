import { getExternalLinkProps } from "@shared/utils/link";

interface QuickLinkProps {
  href: string;
  icon: React.ReactNode;
  label: string;
  className?: string;
}

const QuickLink = ({
  href,
  icon,
  label,
  className = "inline-flex items-center gap-1.5 text-body-sm font-medium text-[var(--ink-secondary)] no-underline py-1.5 px-3.5 border border-[var(--border)] rounded-full bg-[var(--surface-raised)] transition-all duration-200 hover:text-[var(--accent)] hover:border-[var(--accent)]",
}: QuickLinkProps) => (
  <a href={href} {...getExternalLinkProps(href)} className={className}>
    {icon}
    {label}
  </a>
);

export default QuickLink;
