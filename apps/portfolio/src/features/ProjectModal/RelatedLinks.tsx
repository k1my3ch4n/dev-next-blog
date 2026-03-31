import type { ProjectLink } from "@shared/data";
import { getExternalLinkProps } from "@shared/utils/link";

interface RelatedLinksProps {
  links: ProjectLink[];
}

const RelatedLinks = ({ links }: RelatedLinksProps) => {
  if (links.length === 0) {
    return null;
  }

  return (
    <nav className="flex flex-wrap gap-2 mb-6" aria-label="관련 링크">
      {links.map((link) => (
        <a
          key={link.url}
          href={link.url}
          {...getExternalLinkProps(link.url)}
          className="inline-flex items-center gap-1 text-xs text-[var(--accent)] no-underline px-2.5 py-0.5 border border-[color-mix(in_srgb,var(--accent)_30%,transparent)] rounded-full hover:bg-[var(--accent-soft)]"
        >
          {link.label} ↗
        </a>
      ))}
    </nav>
  );
};

export default RelatedLinks;
