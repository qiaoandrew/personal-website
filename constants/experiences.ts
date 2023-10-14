import { Experience } from '@/types/types';

import tdLogo from '@/public/img/logos/td.png';
import uoftLogo from '@/public/img/logos/uoft.png';
import uwdscLogo from '@/public/img/logos/uwdsc.png';
import uhnLogo from '@/public/img/logos/uhn.png';

export const EXPERIENCES: Experience[] = [
  {
    id: 'uhn',
    title: 'Software Developer Intern',
    company: 'University Health Network',
    location: 'Toronto, ON',
    date: 'Oct 2023 - Present',
    logo: uhnLogo,
    description: [
      {
        lg: 'Evaluating AI effectiveness in diagnosing 100+ health conditions through a platform integrated with GPT-4V',
        sm: 'Evaluating AI effectiveness in diagnosing 100+ health conditions',
      },
      {
        lg: "Assisting 8 clinicians at Canada's largest research hospital in generating actionable insights by analyzing model outputs",
        sm: 'Assisting 8 clinicians in generating actionable insights through model outputs',
      },
      {
        lg: '<span class="font-medium">Technologies Used:</span> React.js, Next.js, Google Cloud, Firebase, TypeScript, Python, Tailwind CSS',
        sm: '<span class="font-medium">Technologies Used:</span> React.js, Next.js, Google Cloud, Firebase, TypeScript, Python',
      },
    ],
  },
  {
    id: 'uwdsc',
    title: 'VP of Development',
    company: 'UWaterloo Data Science Club',
    location: 'Waterloo, ON',
    date: 'Oct 2022 - Present',
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
    id: 'td',
    title: 'Software Developer Intern',
    company: 'TD Bank',
    location: 'Toronto, ON',
    date: 'May 2023 - Aug 2023',
    logo: tdLogo,
    description: [
      {
        lg: 'Developed a distributed system to defer portfolio model recalculations using Celery and Python, saving 10+ hours a week',
        sm: 'Developed a system to defer portfolio model recalculations, saving 10+ hours a week',
      },
      {
        lg: 'Automated trade report generation using Django and SQL, removing 5+ hours a week of repetitive data entry',
        sm: 'Automated trade report generation, removing 5+ hours a week of data entry',
      },
      {
        lg: '<span class="font-medium">Technologies Used:</span> React.js, Microsoft Azure, Django, Python, NumPy, Pandas, SQL, Celery, JavaScript, JIRA',
        sm: '<span class="font-medium">Technologies Used:</span> React.js, Microsoft Azure, Django, Python, SQL, JavaScript',
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
        lg: "Supervised by Dr. M. Andiappan and Dr. G. Hadfield in investigating AI's impact on the workforce",
        sm: "Supervised by Dr. M. Andiappan in investigating AI's impact on the workforce",
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
