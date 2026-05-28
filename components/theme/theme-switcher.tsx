"use client";

import { useTheme } from "@/components/theme/use-theme";
import { MoonIcon } from "../ui/moon-icon";
import { SunIcon } from "../ui/sun-icon";

export const ThemeSwitcher = () => {
  const { theme, toggleTheme, mounted } = useTheme();

  const isLight = theme === "light";
  const isDark = theme === "dark";

  if (!mounted) return null;

  return (
    <button
      onClick={toggleTheme}
      className="bg-transparent text-foreground font-medium uppercase cursor-pointer rounded border-0 inline-block select-none"
    >
      {isDark && <MoonIcon />}
      {isLight && <SunIcon />}
    </button>
  );
};
