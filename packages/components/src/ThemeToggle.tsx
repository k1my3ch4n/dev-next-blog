"use client";

import useTheme from "./useTheme";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      className="w-9 h-9 md:w-10 md:h-10 rounded-[10px] border border-[var(--theme-border)] bg-[var(--theme-card-bg)] text-[var(--theme-text)] flex items-center justify-center text-base cursor-pointer transition-all duration-200 hover:border-[var(--theme-highlight-text)] hover:text-[var(--theme-highlight-text)]"
      onClick={toggleTheme}
      aria-label={
        theme === "light" ? "Switch to dark mode" : "Switch to light mode"
      }
    >
      {theme === "light" ? "🌙" : "☀️"}
    </button>
  );
};

export default ThemeToggle;
