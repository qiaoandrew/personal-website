import { Experience } from '@/types/types';

import tdLogo from '@/public/img/logos/td.png';
import uoftLogo from '@/public/img/logos/uoft.png';
import stealthLogo from '@/public/img/logos/stealth.png';
import uwdscLogo from '@/public/img/logos/uwdsc.png';

export const EXPERIENCES: Experience[] = [
  {
    id: 'td',
    title: 'Software Developer Intern',
    company: 'TD Bank',
    location: 'Toronto, ON',
    date: 'May 2023 - Present',
    logo: tdLogo,
    description: [
      {
        lg: 'Engineered scalable financial data pipelines and distributed systems, saving 5+ hours a week and increasing tool speed by 67%',
        sm: 'Engineered scalable financial data pipelines and distributed systems',
      },
      {
        lg: 'Developed performant web applications and microservices for the risk management of $421B+ in client assets',
        sm: 'Developed performant web applications for the risk management of $421B+ in assets',
      },
      {
        lg: '<span class="font-medium">Technologies Used:</span> React.js, Microsoft Azure, Django, Python, NumPy, Pandas, SQL, Celery, JavaScript, JIRA',
        sm: '<span class="font-medium">Technologies Used:</span> React.js, Microsoft Azure, Django, Python, SQL, JavaScript',
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
        lg: 'Reimagining the way healthcare providers interact with their patients through an innovative data-driven platform',
        sm: 'Reimaging doctor-patient interaction through an innovative data-driven platform',
      },
      {
        lg: 'Preparing pitches to investors and healthcare professionals in raising seed funding and expanding our product',
        sm: 'Preparing investor pitches and raising seed funding to expand our product',
      },
      {
        lg: '<span class="font-medium">Technologies Used:</span> React.js, Next.js, Google Cloud, Firebase, TypeScript, Stripe, Tailwind CSS, Figma',
        sm: '<span class="font-medium">Technologies Used:</span> React.js, Next.js, Googld Cloud, TypeScript, Stripe',
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
        lg: "Leading a team of 4 developers in revamping the club's website, resulting in 15K+ Google search impressions.",
        sm: 'Leading a team in revamping the club website, resulting in 15K+ impressions',
      },
      {
        lg: 'Integrating an automated sponsorship flow, resulting in connections with 5+ potential sponsors',
        sm: 'Integrating an automated sponsorship flow, connecting with 5+ potential sponsors',
      },
      {
        lg: '<span class="font-medium">Technologies Used:</span> React.js, Next.js, Node.js, TypeScript, Google Cloud, Firebase, Tailwind CSS, Figma',
        sm: '<span class="font-medium">Technologies Used:</span> React.js, Next.js, Node.js, TypeScript, Google Cloud, Firebase',
      },
    ],
  },
  {
    id: 'uoft',
    title: 'Research Engineer Intern',
    company: 'University of Toronto',
    location: 'Toronto, ON',
    date: 'Oct 2022 - Present',
    logo: uoftLogo,
    description: [
      {
        lg: 'Supervised by Dr. Meena Andiappan and Dr. Gillian Hadfield in investigating the impact of AI in the workplace',
        sm: 'Supervised by Dr. Meena Andiappan in studying the impact of AI in the workplace',
      },
      {
        lg: 'Deployed an AI-powered survey platform for 500+ participants as part of a university-partnered collaboration with OpenAI',
        sm: 'Deployed an AI platform for 500+ users as part of a partnered study with OpenAI',
      },
      {
        lg: '<span class="font-medium">Technologies Used:</span> OpenAI API, React.js, Next.js, Google Cloud, Firebase, Tailwind CSS, Figma',
        sm: '<span class="font-medium">Technologies Used:</span> OpenAI API, React.js, Next.js, Google Cloud, Firebase',
      },
    ],
  },
];
