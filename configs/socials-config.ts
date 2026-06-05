import {
  RiTwitterXLine,
  RiGithubFill,
  RiLinkedinBoxFill,
  RiInstagramLine,
  RiDiscordFill,
  RiYoutubeFill,
} from "@remixicon/react";

export const socialsConfig = [
  {
    key: "x",
    name: "X",
    href: "https://x.com/andrejkoller",
    screenReaderLabel: "X (formerly Twitter)",
    icon: RiTwitterXLine,
  },
  {
    key: "github",
    name: "GitHub",
    href: "https://github.com/andrejkoller",
    screenReaderLabel: "GitHub",
    icon: RiGithubFill,
  },
  {
    key: "linkedin",
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/andrejkoller",
    screenReaderLabel: "LinkedIn",
    icon: RiLinkedinBoxFill,
  },
  {
    key: "instagram",
    name: "Instagram",
    href: "https://www.instagram.com/andrejkollerofficial",
    screenReaderLabel: "Instagram",
    icon: RiInstagramLine,
  },
  {
    key: "discord",
    name: "Discord",
    href: "https://discord.com/invite/andrejkoller",
    screenReaderLabel: "Discord",
    icon: RiDiscordFill,
  },
  {
    key: "youtube",
    name: "YouTube",
    href: "https://www.youtube.com/@andrejkoller",
    screenReaderLabel: "YouTube",
    icon: RiYoutubeFill,
  },
];
