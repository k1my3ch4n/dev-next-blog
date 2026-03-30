"use client";

import { NAV_SECTIONS } from "@shared/data";
import { useScrollSpy } from "@shared/hooks";

const SectionNav = () => {
  const sectionIds = NAV_SECTIONS.map((s) => s.id);
  const activeId = useScrollSpy({ sectionIds });

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[var(--nav-bg)] backdrop-blur-[16px] backdrop-saturate-[180%] border-b border-[var(--border)]">
      <div className="max-w-[1060px] mx-auto px-5 flex items-center justify-between h-14">
        <a
          href="#hero"
          className="font-bold text-sm tracking-tight text-[var(--ink)] no-underline"
        >
          <span className="text-[var(--accent)]">Y.</span>KIM
        </a>
        <div className="hidden sm:flex items-center gap-5">
          {NAV_SECTIONS.map((section) => (
            <a
              key={section.id}
              href={`#${section.id}`}
              className={`nav-link ${activeId === section.id ? "active" : ""}`}
            >
              {section.label}
            </a>
          ))}
        </div>
      </div>
      <div className="sm:hidden overflow-x-auto border-t border-[var(--border)]">
        <div className="flex gap-4 px-5 py-2 min-w-max">
          {NAV_SECTIONS.map((section) => (
            <a
              key={section.id}
              href={`#${section.id}`}
              className={`nav-link ${activeId === section.id ? "active" : ""}`}
            >
              {section.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default SectionNav;
