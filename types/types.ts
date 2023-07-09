import { StaticImageData } from 'next/image';

export type Project = {
  id: string;
  title: string;
  description: string;
  summary: string[];
  developedFor: string;
  projectType: string;
  techStack: string[];
  roles: string[];
  links: {
    label: string;
    url: string;
  }[];
  mockups: StaticImageData[];
};

export type Experience = {
  id: string;
  title: string;
  company: string;
  location: string;
  date: string;
  logo: StaticImageData;
  description: {
    lg: string;
    sm: string;
  }[];
};
