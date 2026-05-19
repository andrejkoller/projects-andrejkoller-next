"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { headerLinksConfig } from "@/configs/header-links-config";

export const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 0);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      style={{
        height: scrolled
          ? "var(--header-height-collapsed)"
          : "var(--header-height-expanded)",
      }}
      className="flex items-center justify-between transition-[height] duration-300 ease-in-out max-w-282 w-full mx-auto sticky top-0 px-12.5"
    >
      <div>{/* Logo or site title coming soon */}</div>
      <ul className="flex items-center gap-10">
        {headerLinksConfig.map(({ key, label, href }) => (
          <li key={key} className="inline-block font-normal">
            <Link
              href={href}
              className="hover:text-hover-foreground transition-colors duration-200"
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </header>
  );
};
