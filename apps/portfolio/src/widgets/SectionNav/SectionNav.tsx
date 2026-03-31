"use client";

import { NAV_SECTIONS } from "@shared/data";
import { useScrollSpy } from "@shared/hooks";
import { ThemeToggle } from "@repo/components";
import NavLinks from "./NavLinks";

const SectionNav = () => {
  const sectionIds = NAV_SECTIONS.map((s) => s.id);
  const activeId = useScrollSpy({ sectionIds });

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[var(--nav-bg)] backdrop-blur-[16px] backdrop-saturate-[180%] border-b border-[var(--border)]">
      <div className="max-w-content mx-auto px-5 flex items-center justify-between h-14">
        <a
          href="#hero"
          className="font-bold text-sm tracking-tight text-[var(--ink)] no-underline"
        >
          k<span className="text-[var(--accent)]">1</span>my
          <span className="text-[var(--accent)]">3</span>ch
          <span className="text-[var(--accent)]">4</span>n
        </a>
        <div className="flex items-center gap-5">
          <div className="hidden sm:flex items-center gap-5">
            <NavLinks activeId={activeId} />
          </div>
          <ThemeToggle />
        </div>
      </div>
      <div className="sm:hidden overflow-x-auto border-t border-[var(--border)]">
        <div className="flex gap-4 px-5 py-2 min-w-max">
          <NavLinks activeId={activeId} />
        </div>
      </div>
    </nav>
  );
};

export default SectionNav;
