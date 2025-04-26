import type { HeaderMenuItem } from "~/types/navigation";

export const HEADER_MENU: HeaderMenuItem[] = [
  { id: "home", label: "Home", href: "/", subItems: [] },
  {
    id: "projects",
    label: "Projects",
    href: "/#projects",
    subItems: [
      {
        id: "pethsapp",
        href: "/projects/pethsapp",
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
  },
  { id: "experience", label: "Experience", href: "/#experience", subItems: [] },
  { id: "about", label: "About", href: "/#about", subItems: [] },
  { id: "contact", label: "Contact", href: "/#contact", subItems: [] },
  { id: "resume", label: "Resume", href: "/resume.pdf", subItems: [] },
];
