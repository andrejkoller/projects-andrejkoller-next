import { socialsConfig } from "@/configs/socials-config";
import Link from "next/link";

export const SocialsPanel = () => {
  return (
    <div className="p-4 w-full">
      <ul className="flex flex-wrap gap-2">
        {socialsConfig.map((social) => {
          const Icon = social.icon;

          return (
            <li key={social.key}>
              <Link
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex size-8 items-center justify-center rounded-md border border-border hover:bg-muted dark:border-input dark:hover:bg-input/50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg]:text-foreground [&_svg:not([class*='size-'])]:size-5"
                aria-label={social.screenReaderLabel}
              >
                <Icon />
                <span className="sr-only">{social.screenReaderLabel}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
