export const DescriptionPanel = () => {
  return (
    <section>
      <div className="screen-line-bottom relative px-4">
        <h2 className="text-3xl font-semibold">About</h2>
      </div>
      <div className="screen-line-bottom relative py-6 px-4 w-full">
        <ul className="flex flex-col list-disc list-outside pl-6.5 text-sm leading-relaxed">
          <li className="pl-1.5 my-2">
            I&apos;m Andrej Koller — a Frontend Engineer and Designer passionate
            about creating intuitive, visually refined digital experiences with
            a strong focus on usability, consistency, and attention to detail.
          </li>
          <li className="pl-1.5 my-2">
            Constantly exploring new technologies, frameworks, and creative
            tools, I&apos;m driven by a passion for continuous learning and
            building meaningful projects.
          </li>
          <li className="pl-1.5 my-2">
            Founder of{" "}
            <a
              href="https://athanasa.com"
              target="_blank"
              rel="noopener noreferrer"
              className="link"
            >
              athanasa.com
            </a>{" "}
            and{" "}
            <a
              href="https://fadinghell.com"
              target="_blank"
              rel="noopener noreferrer"
              className="link"
            >
              fadinghell.com
            </a>
            .
          </li>
        </ul>
      </div>
    </section>
  );
};
