"use client";

import { useState, useEffect } from "react";

interface UseScrollSpyOptions {
  sectionIds: string[];
  rootMargin?: string;
}

export const useScrollSpy = ({
  sectionIds,
  rootMargin = "-20% 0px -70% 0px",
}: UseScrollSpyOptions): string => {
  const [activeId, setActiveId] = useState(sectionIds[0] ?? "");

  useEffect(() => {
    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];

    if (elements.length === 0) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin },
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [sectionIds, rootMargin]);

  return activeId;
};
