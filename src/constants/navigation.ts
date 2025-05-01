import {
  BriefcaseIcon,
  FileText,
  HomeIcon,
  MonitorIcon,
  PhoneIcon,
  UserRoundIcon,
} from "lucide-react";

import type { FooterMenuItem, HeaderMenuItem } from "~/types/navigation";

export const HEADER_MENU: HeaderMenuItem[] = [
  { id: "home", label: "Home", href: "/", subItems: [], Icon: HomeIcon },
  {
    id: "projects",
    label: "Projects",
    href: "/#projects",
    subItems: [
      {
        id: "pethsapp",
        href: "https://www.tsac.ca/pethsapp",
        label: "Pethsapp",
        description:
          "Built my high school's mobile app, loved by 1200+ students.",
      },
      {
        id: "snowflake-notebooks",
        href: "https://www.snowflake.com/en/blog/introducing-snowflake-notebooks/",
        label: "Snowflake Notebooks",
        description:
          "An end-to-end interactive environment for daata & AI teams.",
      },
      {
        id: "quadratic-ui",
        href: "https://quadratic-ui.com/",
        label: "quadratic/ui",
        description:
          "Beautiful components to build your next side project faster.",
      },
      {
        id: "coming-soon",
        href: "#",
        label: "Coming soon...",
        description: "Working on something new and fun!",
      },
    ],
    Icon: MonitorIcon,
  },
  {
    id: "experience",
    label: "Experience",
    href: "/#experience",
    subItems: [],
    Icon: BriefcaseIcon,
  },
  {
    id: "about",
    label: "About",
    href: "/#about",
    subItems: [],
    Icon: UserRoundIcon,
  },
  {
    id: "contact",
    label: "Contact",
    href: "/#contact",
    subItems: [],
    Icon: PhoneIcon,
  },
  {
    id: "resume",
    label: "Resume",
    href: "/resume.pdf",
    subItems: [],
    Icon: FileText,
  },
];

export const FOOTER_MENU: FooterMenuItem[] = [
  {
    id: "landing",
    label: "Landing",
    subItems: [
      { id: "home", label: "Home", href: "/" },
      { id: "projects", label: "Projects", href: "/#projects" },
      { id: "experiences", label: "Experiences", href: "/#experiences" },
      { id: "about", label: "About", href: "/#about" },
      { id: "contact", label: "Contact", href: "/#contact" },
    ],
  },
  {
    id: "projects",
    label: "Projects",
    subItems: [
      {
        id: "pethsapp",
        label: "Pethsapp",
        href: "https://www.tsac.ca/pethsapp",
      },
      {
        id: "snowflake-notebooks",
        href: "https://www.snowflake.com/en/blog/introducing-snowflake-notebooks/",
        label: "Snowflake Notebooks",
      },
      {
        id: "quadratic-ui",
        href: "https://quadratic-ui.com/",
        label: "quadratic/ui",
      },
    ],
  },
];
