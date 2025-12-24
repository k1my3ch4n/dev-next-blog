"use client";

import useTheme from "@hooks/useTheme";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      className="fixed top-[20px] right-[20px] w-[48px] h-[48px] rounded-full cursor-pointer transition-all duration-300 bg-[var(--theme-card-title-bg)] text-[var(--theme-card-title-text)] shadow-lg hover:scale-110 z-50 flex items-center justify-center text-[24px]"
      onClick={toggleTheme}
      aria-label={theme === "light" ? "다크 모드로 전환" : "라이트 모드로 전환"}
    >
      {theme === "light" ? "🌙" : "☀️"}
    </button>
  );
};

export default ThemeToggle;
