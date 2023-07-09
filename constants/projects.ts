import { Project } from '@/types/types';

import investrack1 from '@/public/img/mockups/investrack-1.png';
import remax1 from '@/public/img/mockups/remax-1.png';
import pethsapp1 from '@/public/img/mockups/pethsapp-1.png';
import pethsapp2 from '@/public/img/mockups/pethsapp-2.png';
import pethsapp3 from '@/public/img/mockups/pethsapp-3.png';
import pethsapp4 from '@/public/img/mockups/pethsapp-4.png';
import pethsapp5 from '@/public/img/mockups/pethsapp-5.png';
import pethsapp6 from '@/public/img/mockups/pethsapp-6.png';
import uwdsc1 from '@/public/img/mockups/uwdsc-1.png';
import uwdsc2 from '@/public/img/mockups/uwdsc-2.png';

export const PROJECTS: Project[] = [
  {
    id: 'investrack',
    title: 'Investrack',
    description:
      'A web application that allows users to track their investments and net worth.',
    summary: [],
    projectType: 'Web App',
    techStack: [
      'React.js',
      'Next.js',
      'Node.js',
      'MongoDB',
      'Firebase',
      'Tailwind CSS',
      'Figma',
    ],
    roles: [],
    links: [],
    mockups: [investrack1, investrack1, investrack1],
  },
  {
    id: 'remax',
    title: 'REMAX - Real Estate',
    description: '',
    summary: [],
    developedFor: 'REMAX Metropolis',
    projectType: 'Web App',
    techStack: [
      'React.js',
      'Next.js',
      'Node.js',
      'Firebase',
      'Tailwind CSS',
      'Figma',
    ],
    roles: [],
    links: [],
    mockups: [remax1, remax1, remax1],
  },
  {
    id: 'pethsapp',
    title: 'Pethsapp',
    description:
      "My former high school's official mobile application, providing essential information to students and parents. Built using Flutter and Firebase.",
    summary: [
      'Pethsapp is the official mobile application of Pierre Elliott Trudeau High School and is used by over 1200 members of the school community.',
      'At the peak of the COVID-19 pandemic, I began to notice a large population of students feeling removed from the school atmosphere.',
      'Looking around me, I noticed a boom in technology, led by apps like Zoom. It then became obvious to me that technology was instrumental in tying the community back together.',
      "Thus, I started working on Pethsapp, my high school's mobile application. Throughout development, I led a team of developers and designers in revamping the app's user interface and functionalities.",
      'Available on the App Store and Google Play, the app is used by over 1200 members of the school community. Its purpose is to provide users with up-to-date announcements, resources, essential links, and more.',
    ],
    developedFor: 'Pierre Elliott Trudeau High School',
    projectType: 'Mobile App',
    techStack: [
      'Flutter',
      'Dart',
      'Firebase',
      'Google Sheets',
      'Google Apps Script',
      'Figma',
    ],
    roles: ['Lead Developer', 'UI/UX Designer'],
    links: [
      {
        label: 'App Store',
        url: 'https://apps.apple.com/ca/app/pethsapp/id1544635100',
      },
      {
        label: 'Google Play',
        url: 'https://play.google.com/store/apps/details?id=com.trudeausac.pethsapp&hl=en_CA&gl=US',
      },
    ],
    mockups: [pethsapp1, pethsapp2, pethsapp3, pethsapp4, pethsapp5, pethsapp6],
  },
  {
    id: 'uwdsc',
    title: 'UW Data Science',
    description:
      "Website for the University of Waterloo's Data Science Club with the goal of sharing club events and data science resources to students.",
    techStack: [
      'Next.js',
      'React.js',
      'Node.js',
      'Firebase',
      'Tailwind CSS',
      'Figma',
    ],
    developedFor: 'UWaterloo Data Science Club',
    projectType: 'Web App',
    summary: [],
    roles: [],
    links: [],
    mockups: [uwdsc1, uwdsc2, uwdsc1, uwdsc1, uwdsc1, uwdsc1],
  },
];
