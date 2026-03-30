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
  className = "hero-link",
}: QuickLinkProps) => (
  <a
    href={href}
    target={href.startsWith("mailto:") ? undefined : "_blank"}
    rel="noopener noreferrer"
    className={className}
  >
    {icon}
    {label}
  </a>
);

export default QuickLink;
