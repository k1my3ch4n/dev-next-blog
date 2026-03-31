import { getExternalLinkProps } from "@repo/utils";

interface ContactCardProps {
  icon: React.ReactNode;
  label: string;
  value: string;
  href: string;
}

const ContactCard = ({ icon, label, value, href }: ContactCardProps) => {
  return (
    <a
      href={href}
      {...getExternalLinkProps(href)}
      className="flex items-center gap-3 px-4 py-3.5 border border-[var(--border)] rounded-xl bg-[var(--surface-raised)] text-[var(--ink)] no-underline transition-all duration-200 shadow-[var(--card-shadow)] hover:border-[var(--accent)] hover:-translate-y-0.5 hover:shadow-[var(--card-shadow-hover)]"
    >
      <div className="w-10 h-10 rounded-[10px] bg-[var(--accent-soft)] text-[var(--accent)] flex items-center justify-center text-lg shrink-0">
        {icon}
      </div>
      <div className="flex-1 min-w-0">
        <div className="text-xs text-[var(--ink-muted)]">{label}</div>
        <div className="text-sm font-medium truncate">{value}</div>
      </div>
      <span className="text-[var(--ink-muted)] text-sm">→</span>
    </a>
  );
};

export default ContactCard;
