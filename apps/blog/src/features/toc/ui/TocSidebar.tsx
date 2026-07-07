"use client";

import { useEffect, useState } from "react";
import type { TocHeading } from "../lib/extractHeadings";

interface TocSidebarProps {
  headings: TocHeading[];
}

const TocSidebar = ({ headings }: TocSidebarProps) => {
  const [activeId, setActiveId] = useState<string | null>(null);

  useEffect(() => {
    const headingElements = headings
      .map((heading) => document.getElementById(heading.id))
      .filter((element): element is HTMLElement => element !== null);

    if (headingElements.length === 0) {
      return;
    }

    const ACTIVE_LINE_OFFSET = 96;
    // scroll-mt로 앵커 이동한 heading의 top이 서브픽셀 오차로 임계값을 살짝 넘는 경우를 위한 여유값
    const THRESHOLD_TOLERANCE = 4;

    const updateActiveHeading = () => {
      const isAtBottom =
        window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2;

      if (isAtBottom) {
        setActiveId(headingElements[headingElements.length - 1].id);
        return;
      }

      let currentId = headingElements[0].id;

      for (const element of headingElements) {
        if (element.getBoundingClientRect().top > ACTIVE_LINE_OFFSET + THRESHOLD_TOLERANCE) {
          break;
        }

        currentId = element.id;
      }

      setActiveId(currentId);
    };

    updateActiveHeading();

    window.addEventListener("scroll", updateActiveHeading, { passive: true });
    window.addEventListener("resize", updateActiveHeading);

    return () => {
      window.removeEventListener("scroll", updateActiveHeading);
      window.removeEventListener("resize", updateActiveHeading);
    };
  }, [headings]);

  if (headings.length === 0) {
    return null;
  }

  return (
    <nav aria-label="목차" className="text-[13px]">
      <p className="font-semibold text-[var(--ink)] mb-3">목차</p>
      <ul className="flex flex-col gap-2">
        {headings.map((heading) => {
          const isActive = heading.id === activeId;

          return (
            <li key={heading.id} className={heading.depth === 3 ? "pl-[14px]" : ""}>
              <a
                href={`#${heading.id}`}
                className={`block border-l-2 pl-[14px] leading-[1.5] transition-colors ${
                  isActive
                    ? "border-[var(--accent)] text-[var(--accent)] font-medium"
                    : "border-[var(--border)] text-[var(--ink-muted)] hover:text-[var(--ink)]"
                }`}
              >
                {heading.text}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default TocSidebar;
