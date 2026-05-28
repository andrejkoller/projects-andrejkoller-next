"use client";

import { useTheme } from "@/components/theme/use-theme";
import { MoonIcon, SunIcon } from "lucide-react";

export const ThemeSwitcher = () => {
  const { theme, toggleTheme, mounted } = useTheme();

  const isLight = theme === "light";
  const isDark = theme === "dark";

  if (!mounted) return null;

  return (
    <button
      onClick={toggleTheme}
      className="bg-transparent text-(--color-text-primary) font-medium uppercase cursor-pointer hover:text-(--color-text-hover) transition-all duration-200 scale-95 rounded border-0 inline-block select-none tracking-wider"
    >
      {isDark && <MoonIcon className="size-5" />}
      {isLight && <SunIcon className="size-5" />}
    </button>
  );
};
