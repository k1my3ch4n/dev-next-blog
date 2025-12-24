"use client";

import { useContext } from "react";
import { Theme, ThemeContext } from "@components/ThemeProvider/ThemeContext";

const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    return {
      theme: "light" as Theme,
      toggleTheme: () => {},
    };
  }
  return context;
};

export default useTheme;
