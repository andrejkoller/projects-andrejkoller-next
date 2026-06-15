"use client";

import Link from "next/link";
import { headerLinksConfig } from "@/configs/header-links-config";
import { ThemeSwitcher } from "./theme/theme-switcher";
import { usePathname } from "next/navigation";

export const Header = () => {
  const pathname = usePathname();

  return (
    <header className="screen-line-bottom flex items-center justify-between h-(--header-height) max-w-3xl w-full mx-auto bg-(--color-background) sticky top-0 z-10 px-4">
      <div>{/* Logo or site title coming soon */}</div>
      <div className="flex items-center">
        <ul className="flex items-center gap-6">
          {headerLinksConfig.map((link) => (
            <li key={link.key} className="inline-block text-sm font-normal">
              <Link
                href={link.href}
                className={`text-(--color-text-muted) hover:text-(--color-text-primary) transition-all duration-200 ${pathname === link.href ? "text-(--color-text-primary)" : ""}`}
              >
                {link.label}
                <span className="sr-only">{link.screenReaderLabel}</span>
              </Link>
            </li>
          ))}
        </ul>
        <div className="w-px h-4 bg-border self-center mx-4 shrink-0"></div>
        <ThemeSwitcher />
      </div>
    </header>
  );
};
