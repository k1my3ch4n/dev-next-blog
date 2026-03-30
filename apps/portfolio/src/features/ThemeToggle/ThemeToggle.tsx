"use client";

import { useTheme } from "@repo/components";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="fixed top-3 right-3 z-50 w-9 h-9 rounded-[10px] border border-[var(--border)] bg-[var(--surface-raised)] text-[var(--ink)] flex items-center justify-center text-base transition-all duration-200 hover:border-[var(--accent)] hover:text-[var(--accent)] md:w-10 md:h-10"
      aria-label="테마 전환"
    >
      {theme === "dark" ? "☀️" : "🌙"}
    </button>
  );
};

export default ThemeToggle;
