import { useEffect, type ReactNode } from "react";
import type { Decorator } from "@storybook/react-vite";
import { ThemeProvider, type Theme } from "@repo/components";

interface StorybookThemeProps {
  children: ReactNode;
  theme: Theme;
}

const StorybookTheme = ({ children, theme }: StorybookThemeProps) => {
  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);

  return (
    <ThemeProvider
      key={theme}
      initialTheme={theme}
      cookieName="storybook-theme"
    >
      <div className="storybook-preview">{children}</div>
    </ThemeProvider>
  );
};

export const withTheme: Decorator = (Story, context) => {
  const theme: Theme = context.globals.theme === "dark" ? "dark" : "light";

  return (
    <StorybookTheme theme={theme}>
      <Story />
    </StorybookTheme>
  );
};
