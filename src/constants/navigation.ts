import type { HeaderMenuItem } from "~/types/navigation";

export const HEADER_MENU: HeaderMenuItem[] = [
  { id: "home", label: "Home", href: "/" },
  { id: "projects", label: "Projects", href: "/#projects" },
  { id: "experience", label: "Experience", href: "/#experience" },
  { id: "about", label: "About", href: "/#about" },
  { id: "contact", label: "Contact", href: "/#contact" },
  { id: "resume", label: "Resume", href: "/resume.pdf" },
];
