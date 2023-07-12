import { Experience } from '@/types/types';

import tdLogo from '@/public/img/logos/td.png';
import uoftLogo from '@/public/img/logos/uoft.png';
import stealthLogo from '@/public/img/logos/stealth.png';
import uwdscLogo from '@/public/img/logos/uwdsc.png';

export const EXPERIENCES: Experience[] = [
  {
    id: 'td',
    title: 'Portfolio Analytics Developer',
    company: 'TD Bank',
    location: 'Toronto, ON',
    date: 'May 2023 - Present',
    logo: tdLogo,
    description: [
      {
        lg: "Implementing responsive and intuitive financial analytics software using React.js and Redux to help the firm's Portfolio Managers manage $421B+ in client assets",
        sm: 'Implementing financial analytics software using React.js and Redux in aiding Portfolio Managers',
      },
      {
        lg: 'Leveraging Django, Python, Pandas, and SQL to build financial data pipelines in automating client reports',
        sm: 'Building data pipelines and automating client reports using Django, Python, Pandas, and SQL',
      },
      {
        lg: '<span class="font-medium">Technologies Used:</span> React.js, Django, Python, Pandas, SQL, Redux, Celery, JavaScript, JIRA',
        sm: '<span class="font-medium">Technologies Used:</span> React.js, Django, Python, Pandas, SQL, Redux, Celery, JavaScript, JIRA',
      },
    ],
  },
  {
    id: 'stealth',
    title: 'Co-Founder',
    company: 'Stealth Startup',
    location: 'Toronto, ON',
    date: 'May 2023 - Present',
    logo: stealthLogo,
    description: [
      {
        lg: 'Reimagining the way healthcare providers interact with their patients through an innovative data-driven application',
        sm: 'Reimaging doctor and patient interactions through an innovative data-driven application',
      },
      {
        lg: 'Preparing pitches to investors and healthcare professionals in raising seed funding and expanding our product',
        sm: 'Preparing investor pitches and raising seed funding to expand our product',
      },
      {
        lg: '<span class="font-medium">Technologies Used:</span> React.js, Next.js, Firestore, Firebase Auth, Cloud Storage, Tailwind CSS, Python, Stripe, Figma',
        sm: '<span class="font-medium">Technologies Used:</span> React.js, Next.js, Firebase, Tailwind CSS, Python, Stripe, Figma',
      },
    ],
  },
  {
    id: 'uwdsc',
    title: 'VP of Development',
    company: 'UWaterloo Data Science Club',
    location: 'Waterloo, ON',
    date: 'Dec 2022 - Present',
    logo: uwdscLogo,
    description: [
      {
        lg: "Leading 4 developers and 2 designers in a comprehensive revamping of the club's website, resulting in 10K+ impressions.",
        sm: 'Leading a team in revamping the club website, resulting in 10K+ impressions',
      },
      {
        lg: 'Networking with organizations like Solana University and Waterloo Blockchain to deliver a hackthon and events to 1000+ students',
        sm: 'Networking with organizations in delivering a hackathon and events to 1000+ students',
      },
      {
        lg: '<span class="font-medium">Technologies Used:</span> React.js, Next.js, Node.js, Firebase Auth, Realtime Database, Tailwind CSS, Figma',
        sm: '<span class="font-medium">Technologies Used:</span> React.js, Next.js, Node.js, Firebase Auth, Realtime Database, Tailwind CSS, Figma',
      },
    ],
  },
  {
    id: 'uoft',
    title: 'AI Research Assistant',
    company: 'University of Toronto',
    location: 'Toronto, ON',
    date: 'Oct 2022 - Present',
    logo: uoftLogo,
    description: [
      {
        lg: 'Spearheaded development of a full stack application to integrate AI models into a research study with 500+ participants',
        sm: 'Developed a full stack application integrating AI models into a study with 500+ participants',
      },
      {
        lg: "Part of a university-partnered collaboration with OpenAI, study's first manuscript accepted into the European Group of Organizational Studies (EGOS)",
        sm: 'Part of a university-partnered collaboration with OpenAI',
      },
      {
        lg: '<span class="font-medium">Technologies Used:</span> OpenAI API, React.js, Next.js, Firebase, Tailwind CSS, Figma',
        sm: '<span class="font-medium">Technologies Used:</span> OpenAI API, React.js, Next.js, Firebase, Tailwind CSS, Figma',
      },
    ],
  },
];
