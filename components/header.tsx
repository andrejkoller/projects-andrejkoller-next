"use client";

import Link from "next/link";
import { headerLinksConfig } from "@/configs/header-links-config";
import { ThemeSwitcher } from "./theme/theme-switcher";

export const Header = () => {
  return (
    <header className="flex items-center justify-between h-(--header-height) max-w-3xl w-full mx-auto sticky top-0 px-4">
      <div>{/* Logo or site title coming soon */}</div>
      <div className="flex items-center gap-6">
        <ul className="flex items-center gap-6">
          {headerLinksConfig.map(({ key, label, href }) => (
            <li key={key} className="inline-block text-sm font-normal">
              <Link
                href={href}
                className="hover:text-hover-foreground transition-colors duration-200"
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
        <ThemeSwitcher />
      </div>
    </header>
  );
};
