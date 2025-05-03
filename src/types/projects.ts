import type { StaticImageData } from "next/image";

export type Project = {
  id: string;
  title: string;
  href: string;
  type: string;
  imageLight: StaticImageData;
  imageDark: StaticImageData;
};
