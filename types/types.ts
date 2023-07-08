import { StaticImageData } from 'next/image';

export type Project = {
  id: string;
  title: string;
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
