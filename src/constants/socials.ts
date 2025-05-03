import {
  GithubIcon,
  InstagramIcon,
  LinkedinIcon,
  TwitterIcon,
} from "lucide-react";

import type { Social } from "~/types/socials";

export const SOCIALS: Social[] = [
  {
    id: "linkedin",
    href: "https://www.linkedin.com/in/andrewqiao/",
    label: "LinkedIn",
    Icon: LinkedinIcon,
  },
  {
    id: "github",
    href: "https://github.com/qiaoandrew",
    label: "GitHub",
    Icon: GithubIcon,
  },
  {
    id: "instagram",
    href: "https://www.instagram.com/andrew.qiao/",
    label: "Instagram",
    Icon: InstagramIcon,
  },
  {
    id: "twitter",
    href: "https://twitter.com/andrewwqiao",
    label: "Twitter",
    Icon: TwitterIcon,
  },
];
