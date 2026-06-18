import { socialsConfig } from "@/configs/socials-config";
import Link from "next/link";

export const SocialsPanel = () => {
  return (
    <section className="screen-line-bottom relative p-4 w-full">
      <ul className="flex flex-wrap gap-2">
        {socialsConfig.map((social) => {
          const Icon = social.icon;

          return (
            <li key={social.key}>
              <Link
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex size-8 items-center justify-center rounded-md border border-(--color-border) hover:bg-(--color-background-hover) [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg]:text-(--color-foreground) [&_svg:not([class*='size-'])]:size-5"
                aria-label={social.screenReaderLabel}
              >
                <Icon />
                <span className="sr-only">{social.screenReaderLabel}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </section>
  );
};
