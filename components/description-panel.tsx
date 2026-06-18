import Link from "next/link";
import { descriptionLinksConfig } from "@/configs/description-links-config";

export const DescriptionPanel = () => {
  return (
    <section>
      <div className="screen-line-bottom relative px-4">
        <h2 className="text-3xl font-semibold">About</h2>
      </div>
      <div className="screen-line-bottom relative py-6 px-4 w-full">
        <ul className="flex flex-col list-disc list-outside pl-6.5 text-sm leading-relaxed">
          <li className="pl-1.5 my-2">
            I&apos;m Andrej Koller — a software engineer passionate about
            creating intuitive, visually refined digital experiences with a
            strong focus on usability, consistency, and attention to detail.
          </li>
          <li className="pl-1.5 my-2">
            Constantly exploring new technologies, frameworks, and creative
            tools, I&apos;m driven by a passion for continuous learning and
            building meaningful projects.
          </li>
          <li className="pl-1.5 my-2">
            Founder of{" "}
            {descriptionLinksConfig.map((link, index) => (
              <span key={link.key}>
                <Link
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-(--color-primary) hover:underline"
                >
                  {link.name}
                  <span className="sr-only">{link.screenReaderLabel}</span>
                </Link>
                {index < descriptionLinksConfig.length - 1 && ", "}
              </span>
            ))}
            .
          </li>
        </ul>
      </div>
    </section>
  );
};
