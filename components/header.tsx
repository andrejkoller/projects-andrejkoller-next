import Link from "next/link";
import { headerLinksConfig } from "@/configs/header-links-config";

export const Header = () => {
  return (
    <header className="flex items-center justify-between h-(--header-height-expanded) max-w-282 w-full mx-auto px-12.5">
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
