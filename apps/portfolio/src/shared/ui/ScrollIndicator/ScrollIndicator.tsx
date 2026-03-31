"use client";

import { useEffect, useState, useCallback } from "react";

const ScrollIndicator = () => {
  const [show, setShow] = useState(true);

  const checkScroll = useCallback(() => {
    const isAtBottom =
      window.innerHeight + window.scrollY >=
      document.documentElement.scrollHeight - 100;

    setShow(!isAtBottom);
  }, []);

  useEffect(() => {
    checkScroll();

    window.addEventListener("scroll", checkScroll, { passive: true });

    return () => window.removeEventListener("scroll", checkScroll);
  }, [checkScroll]);

  if (!show) {
    return null;
  }

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 flex items-center gap-1 px-3 py-1.5 rounded-full bg-[var(--surface-raised)] border border-[var(--border)] text-caption text-[var(--ink)] shadow-sm animate-bounce pointer-events-none">
      <span>↓</span>
      <span>스크롤</span>
    </div>
  );
};

export default ScrollIndicator;
