import { NAV_SECTIONS } from "@shared/data";
import { NAV_LINK_BASE, NAV_LINK_ACTIVE, NAV_LINK_INACTIVE } from "./constants";

interface NavLinksProps {
  activeId: string;
}

const NavLinks = ({ activeId }: NavLinksProps) => (
  <>
    {NAV_SECTIONS.map((section) => (
      <a
        key={section.id}
        href={`#${section.id}`}
        className={`${NAV_LINK_BASE} ${activeId === section.id ? NAV_LINK_ACTIVE : NAV_LINK_INACTIVE}`}
      >
        {section.label}
      </a>
    ))}
  </>
);

export default NavLinks;
