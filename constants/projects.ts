import { Project } from '@/types/types';

import investrack1 from '@/public/img/mockups/investrack-1.png';
import investrack2 from '@/public/img/mockups/investrack-2.png';
import investrack3 from '@/public/img/mockups/investrack-3.png';
import remax1 from '@/public/img/mockups/remax-1.png';
import remax2 from '@/public/img/mockups/remax-2.png';
import remax3 from '@/public/img/mockups/remax-3.png';
import pethsapp1 from '@/public/img/mockups/pethsapp-1.png';
import pethsapp2 from '@/public/img/mockups/pethsapp-2.png';
import pethsapp3 from '@/public/img/mockups/pethsapp-3.png';
import pethsapp4 from '@/public/img/mockups/pethsapp-4.png';
import pethsapp5 from '@/public/img/mockups/pethsapp-5.png';
import pethsapp6 from '@/public/img/mockups/pethsapp-6.png';
import uwdsc1 from '@/public/img/mockups/uwdsc-1.png';
import uwdsc2 from '@/public/img/mockups/uwdsc-2.png';
import uwdsc3 from '@/public/img/mockups/uwdsc-3.png';
import uwdsc4 from '@/public/img/mockups/uwdsc-4.png';
import uwdsc5 from '@/public/img/mockups/uwdsc-5.png';
import uwdsc6 from '@/public/img/mockups/uwdsc-6.png';

export const PROJECTS: Project[] = [
  {
    id: 'investrack',
    title: 'Investrack',
    description:
      'Investrack is an equity analysis platform providing comprehensive analytics into market activity, alongside personalized watchlist and portfolio making.',
    summary: [
      'Investrack is an equity analysis platform providing comprehensive analytics into market activity, alongside personalized watchlist and portfolio making.',
      'A web application in the form of an interactive dashboard, its frontend is engineered using React.js, Next.js, and Tailwind CSS, delivering a performant and responsive experience.',
      "It's backend takes shape in a REST API powered by Node.js and MongoDB. Additionally, Google's Firebase Auth is used for authentication.",
      'A financial data REST API was also architected to deliver in-depth equity analytics, including historical price data, key financial metrics, and company news. This wealth of information was aggregated from a variety of sources, including Yahoo Finance and Finnhub, using Flask and Python.',
      'To ensure UI consistency and an intuitive UX, a cohesive, modern design system along with product mockups were crafted using Figma.',
      'Explore the web app, or check out the GitHub repository and Figma designs through the links below.',
    ],
    projectType: 'Web App',
    techStack: [
      'React.js',
      'Next.js',
      'Node.js',
      'MongoDB',
      'Firebase',
      'Flask',
      'Python',
      'Tailwind CSS',
      'Vercel',
      'Heroku',
      'Figma',
    ],
    developedFor: 'Personal Project',
    roles: ['Developer', 'Designer'],
    links: [
      {
        label: 'Explore Investrack',
        url: 'https://investrack.app/',
      },
      {
        label: 'GitHub Repository',
        url: 'https://github.com/qiaoandrew/investrack',
      },
      {
        label: 'Flask API Repository',
        url: 'https://github.com/qiaoandrew/finance-api',
      },
      {
        label: 'Figma Designs',
        url: 'https://www.figma.com/community/file/1259885133609624464',
      },
    ],
    mockups: [investrack1, investrack2, investrack3],
  },
  {
    id: 'remax',
    title: 'REMAX - Real Estate',
    description:
      'A real estate application to streamline the buy and sell operations for 240+ REMAX Metropolis agents and hundreds of their clients.',
    summary: [
      'A real estate application designed to streamline the buy and sell operations for REMAX Metropolis agents and their clients.',
      'This web app delivers a responsive user experience through its frontend engineered using React.js, Next.js, and Tailwind CSS. Additionally, backend processes including its database and authentication are provided through a variety of Firebase services, including Firestore, Firebase Auth, and Realtime Database.',
      'Using such technologies, REMAX agents and clients are able to seamlessly research pre-construction, sale, and lease markets in the GTA. Additionally, they are able to quickly absorb relevant information, including floor plans, pricing, and availability for $1B+ worth of listings.',
      'To ensure UI consistency and an intuitive UX, a cohesive, modern design system along with product mockups were crafted using Figma.',
      'Explore the web app, or check out the GitHub repository and Figma designs through the links below.',
    ],
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
    roles: ['Developer', 'Designer'],
    links: [
      {
        label: 'Explore the App',
        url: 'https://preconstruction.app/',
      },
      {
        label: 'GitHub Repository',
        url: 'https://github.com/qiaoandrew/preconstruction-web',
      },
      {
        label: 'Figma Designs',
        url: 'https://www.figma.com/community/file/1259895905479911330',
      },
    ],
    mockups: [remax1, remax2, remax3],
  },
  {
    id: 'pethsapp',
    title: 'Pethsapp',
    description:
      "A scholastic hub providing essential information to students and parents, built for my former high school's community.",
    summary: [
      'Pethsapp serves as the official digital gateway for Pierre Elliott Trudeau High School, connecting a diverse community of over 1200 students, parents, and teachers.',
      'During the peak of the COVID-19 pandemic, I recognized a growing disconnect amongst students as traditional schooling was replaced by remote learning.',
      "Yet, amidst this separation, I noticed a surge in technology use, with platforms like Zoom facilitating new forms of interaction. Thus, I started working on Pethsapp, my high school's mobile application.",
      "Throughout its development, I spearheaded a team of developers and designers, using Flutter and Firebase in revamping the app's user interface and functionalities.",
      'Available on the App Store and Google Play, Pethsapp serves as a comprehensive hub for our school community, providing up-to-the-minute announcements, vital resources, essential links, and more.',
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
    summary: [
      "As VP of Web Development for the University of Waterloo's Data Science Club, I am leading a team of developers and designers in developing the club's website.",
      'Our club is committed to inspiring future data science leaders. We aim to build an inclusive, supportive student community that bridges the gap between academics and the industry.',
      "The club's website serves as a central hub for students to learn about the club, get updates on upcoming events, and find a repository of data science resources.",
      "The website's tech stack includes React.js, Next.js, and Tailwind CSS for its frontend, as well as Firebase for its backend. Additionally, Figma was used to create an intuitive and user-friendly UI.",
    ],
    roles: ['Lead Developer', 'UI/UX Designer'],
    links: [
      {
        label: 'Explore the Website',
        url: 'https://uwdatascience.ca',
      },
      {
        label: 'GitHub Repository',
        url: 'https://github.com/uw-datasci/uwdatasci-website',
      },
    ],
    mockups: [uwdsc1, uwdsc2, uwdsc3, uwdsc4, uwdsc5, uwdsc6],
  },
];
