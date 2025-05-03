import type { StaticImageData } from "next/image";
import type { LucideIcon } from "lucide-react";

export type HeaderMenuItem = {
  id: string;
  href: string;
  label: string;
  subItems: HeaderMenuSubItem[];
  Icon: LucideIcon;
};

export type FooterMenuItem = {
  id: string;
  label: string;
  subItems: SubItem[];
};

export type SubItem = {
  id: string;
  href: string;
  label: string;
  imageLight?: StaticImageData;
  imageDark?: StaticImageData;
};

export type HeaderMenuSubItem = SubItem & {
  description: string;
};
