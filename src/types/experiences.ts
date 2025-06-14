import type { StaticImageData } from "next/image";
import type { LucideIcon } from "lucide-react";

export type Experience = {
  id: string;
  company: string;
  position: string;
  date: string;
  location: string;
  icon: StaticImageData;
  team: string;
  emoji: string;
};

export type ExperienceButton = {
  id: string;
  href: string;
  label: string;
  Icon: LucideIcon;
};
