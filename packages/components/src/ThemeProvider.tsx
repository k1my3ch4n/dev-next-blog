"use client";

import { useState, useEffect } from "react";
import { Theme, ThemeContext } from "./ThemeContext";

const getCookie = (name: string): string | undefined => {
  if (typeof document === "undefined") return undefined;
  const match = document.cookie.match(new RegExp(`(?:^|; )${name}=([^;]*)`));
  return match ? decodeURIComponent(match[1]) : undefined;
};

const setCookie = (name: string, value: string, days: number = 365) => {
  const expires = new Date(Date.now() + days * 864e5).toUTCString();
  document.cookie = `${name}=${value}; expires=${expires}; path=/`;
};

export const ThemeProvider = ({
  children,
  initialTheme,
  cookieName = "theme",
}: {
  children: React.ReactNode;
  initialTheme?: Theme;
  cookieName?: string;
}) => {
  const [theme, setTheme] = useState<Theme>(initialTheme ?? "light");

  useEffect(() => {
    if (!initialTheme) {
      const cookieTheme = getCookie(cookieName);
      if (cookieTheme === "dark") {
        setTheme("dark");
      }
    }
  }, [cookieName, initialTheme]);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);

    setCookie(cookieName, newTheme);

    const root = document.documentElement;
    if (newTheme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
