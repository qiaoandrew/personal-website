import pethsapp1Light from '../public/img/mockups/pethsapp-1-light.png';
import pethsapp1Dark from '../public/img/mockups/pethsapp-1-dark.png';
import pethsapp2Light from '../public/img/mockups/pethsapp-2-light.png';
import pethsapp2Dark from '../public/img/mockups/pethsapp-2-dark.png';
import pethsapp3Light from '../public/img/mockups/pethsapp-3-light.png';
import pethsapp3Dark from '../public/img/mockups/pethsapp-3-dark.png';
import tsac1Light from '../public/img/mockups/tsac-1-light.png';
import tsac1Dark from '../public/img/mockups/tsac-1-dark.png';
import tsac2Light from '../public/img/mockups/tsac-2-light.png';
import tsac2Dark from '../public/img/mockups/tsac-2-dark.png';
import tsac3Light from '../public/img/mockups/tsac-3-light.png';
import tsac3Dark from '../public/img/mockups/tsac-3-dark.png';
import create1 from '../public/img/mockups/create-1.png';
import create2 from '../public/img/mockups/create-2.png';
import create3 from '../public/img/mockups/create-3.png';
import aview1 from '../public/img/mockups/aview-1.png';
import aview2 from '../public/img/mockups/aview-2.png';
import aview3 from '../public/img/mockups/aview-3.png';

import uoft from '../public/img/logos/u-of-t.png';
import aview from '../public/img/logos/aview.png';
import uwdsc from '../public/img/logos/uwdsc.png';
import tsac from '../public/img/logos/tsac.png';
import create from '../public/img/logos/create.png';
import utc from '../public/img/logos/utc.png';

export const PROJECTS = [
  {
    route: '/projects/pethsapp',
    title: 'Pethsapp',
    mockups: [
      pethsapp1Light,
      pethsapp1Dark,
      pethsapp2Light,
      pethsapp2Dark,
      pethsapp3Light,
      pethsapp3Dark,
    ],
    description:
      "Pethsapp is my former high school's official mobile application. I led a team of developers and designers in revamping it using Flutter and Firebase.",
    summary: [
      'Pethsapp is the official mobile application of Pierre Elliott Trudeau High School and is used by over 1200 members of the school community.',
      'At the peak of the COVID-19 pandemic, I began to notice a large population of students feeling removed from the school atmosphere.',
      'Looking around me, I noticed a boom in technology, led by apps like Zoom. It then became obvious to me that technology was instrumental in tying the community back together.',
      "Thus, I started working on Pethsapp, my high school's mobile application. Throughout development, I led a team of developers and designers in revamping the app's user interface and functionalities.",
      'Available on the App Store and Google Play, the app is used by over 1200 members of the school community. Its purpose is to provide users with up-to-date announcements, resources, essential links, and more.',
    ],
    points: [
      {
        title: 'Developed For',
        text: 'Pierre Elliott Trudeau High School',
      },
      { title: 'Project Type', text: 'Mobile App' },
      {
        title: 'Technologies',
        text: 'Flutter, Dart, Firebase, Figma',
      },
      {
        title: 'Roles',
        text: 'Software Engineer, UI/UX Designer',
      },
    ],
    buttons: [
      {
        text: 'App Store',
        link: 'https://apps.apple.com/ca/app/pethsapp/id1544635100',
      },
      {
        text: 'Google Play',
        link: 'https://play.google.com/store/apps/details?id=com.trudeausac.pethsapp&hl=en_CA&gl=US',
      },
    ],
  },
  {
    route: '/projects/create-markham',
    title: 'CREATE Markham',
    type: 'Website',
    mockups: [create1, create2, create3],
    description:
      "As Technology Chairperson of CREATE Markham, I revamped their website using HTML, CSS, and JavaScript to enhance the organization's digital presence.",
    summary: [
      'Website for CREATE Markham, a youth-led non-profit organization based in Markham, Ontario.',
      'CREATE stands for Cultivating Realistic and Effective Actions Towards Everyone. They host an annual wintertime conference, followed by a summertime outdoors retreat centered around personal growth within the Markham youth.',
      'Throughout the conference, delegates learn essential leadership, collaboration, and communication skills, preparing them for their future endeavors.',
      'As Technology Chairperson from 2021-2022, I revamped their website, helping the organization to expand and solidify their digital presence.',
    ],
    points: [
      { title: 'Developed For', text: 'CREATE Markham' },
      { title: 'Project Type', text: 'Website' },
      {
        title: 'Technologies',
        text: 'React.js, Next.js, TypeScript, Tailwind CSS, Firebase, Figma',
      },
      { title: 'Roles', text: 'Developer, UI/UX Designer' },
    ],
    buttons: [
      { text: 'Website', link: 'https://createmarkham.ca/' },
      {
        text: 'GitHub Repository',
        link: 'https://github.com/CREATE-Conference/create-website',
      },
    ],
  },
  {
    route: '/projects/aview',
    title: 'AVIEW',
    type: 'Website',
    mockups: [aview1, aview2, aview3],
    description:
      "As a Software Engineer at AVIEW International, I led a team in developing their website using Next.js, streamlining the startup's digital growth.",
    summary: [
      'Website for AVIEW International, a startup centered around providing translation services for content creators.',
      'AVIEW is a multimedia translation company designed to help content creators expand their fanbase through social media platforms. They focus on content creators who have developed a local fanbase and are seeking international expansion.',
      "As a Software Engineer at the company, I am leading full stack development on the startup's website and user portal. Furthermore, I continuously communicate with UI/UX Designers and marketing professionals to improve the website's utility and aesthetics.",
      "Since the implementation of the company's new website, its client base has increased by 400%, in addition to 115%+ MoM growth.",
    ],
    points: [
      { title: 'Developed For', text: 'AVIEW International' },
      { title: 'Project Type', text: 'Website' },
      {
        title: 'Technologies',
        text: 'React.js, Next.js, JavaScript, Tailwind CSS, Figma',
      },
      { title: 'Role', text: 'Software Engineer' },
    ],
    buttons: [
      { text: 'Website', link: 'https://www.aviewint.com/' },
      {
        text: 'GitHub Repository',
        link: 'https://github.com/Aview-International/aviewint-website',
      },
    ],
  },
  {
    route: '/projects/tsac',
    title: 'TSAC',
    type: 'Website',
    mockups: [
      tsac1Light,
      tsac1Dark,
      tsac2Light,
      tsac2Dark,
      tsac3Light,
      tsac3Dark,
    ],
    description:
      "As Technology Chairperson on my high school's student council during my senior year of high school, I revamped the council's website using Next.js and Firebase.",
    summary: [
      "Website developed for Pierre Elliott Trudeau High School's Student Activities Council (TSAC).",
      "TSAC is Pierre Elliott Trudeau High School's student council and represents the student body and makes decisions on its behalf.",
      "Using TSAC's website, students are able to learn about the council and the school, including its clubs, external opportunities, and more.",
      "As Technology Chairperson during my senior year in high school, my role was the enhance the school's technologies including our school app and student council website.",
    ],
    points: [
      { title: 'Developed For', text: 'TSAC' },
      { title: 'Project Type', text: 'Website' },
      {
        title: 'Technologies',
        text: 'React.js, Next.js, JavaScript, Firebase, Figma',
      },
      { title: 'Roles', text: 'Developer, UI/UX Designer' },
    ],
    buttons: [{ text: 'Website', link: 'https://tsac.ca/' }],
  },
];

export const EXPERIENCES = [
  {
    role: 'Research Assistant',
    company: 'University of Toronto',
    logo: uoft,
    duration: 'Oct 2022 — Present',
    location: 'Toronto, ON',
    description: [
      {
        lg: 'Developing and designing applications embedded with AI models such as GPT-3 for research projects with 900+ participants',
        sm: 'Developing and designing applications embedded with AI models such as GPT-3',
      },
      {
        lg: "Studying the impact of AI in the workforce alongside Dr. Meena Andiappan's team of researchers",
        sm: "Studying AI's workplace impact alongside Dr. Meena Andiappan's research team",
      },
      {
        lg: '<span class="font-medium">Technologies Used:</span> OpenAI API, React.js, Next.js, Firebase, Tailwind CSS, Figma',
        sm: '<span class="font-medium">Technologies Used:</span> OpenAI API, React.js, Next.js, Firebase, Tailwind CSS, Figma',
      },
    ],
  },
  {
    role: 'VP of Web Development',
    company: 'UWaterloo Data Science Club',
    logo: uwdsc,
    duration: 'Dec 2022 — Present',
    location: 'Waterloo, ON',
    description: [
      {
        lg: "Leading a team of 6 developers and designers in revamping the club's website",
        sm: "Leading a team of 6 developers and designers in revamping the club's website",
      },
      {
        lg: 'Collaborating with fellow council members in organizing events for 400+ club members to increase interest in Data Science',
        sm: 'Collaborating with fellow council members in organizing events for 400+ club members',
      },
      {
        lg: '<span class="font-medium">Technologies Used:</span> React.js, Next.js, Firebase, Google Apps Script, Tailwind CSS',
        sm: '<span class="font-medium">Technologies Used:</span> React.js, Next.js, Firebase, Google Apps Script, Tailwind CSS',
      },
    ],
  },
  {
    role: 'Software Engineer',
    company: 'AVIEW International',
    logo: aview,
    duration: 'May 2022 — Present',
    location: 'Toronto, ON',
    description: [
      {
        lg: "Leading full stack development on the startup's corporate website and user portal",
        sm: "Leading development on the startup's corporate website and user portal",
      },
      {
        lg: "Strengthening the company's growth, averaging 115%+ MoM growth throughout 2022 while approaching $100,000 in monthly revenue",
        sm: 'Amplifying company growth, achieving 115%+ MoM growth while approaching $100,000 monthly revenue',
      },
      {
        lg: '<span class="font-medium">Technologies Used:</span> React.js, Next.js, Amazon Web Services (AWS), Tailwind CSS',
        sm: '<span class="font-medium">Technologies Used:</span> React.js, Next.js, Amazon Web Services (AWS), Tailwind CSS',
      },
    ],
  },
  {
    role: 'Technology Chair',
    company: 'PETHS Student Council',
    logo: tsac,
    duration: 'Sept 2021 — Jun 2022',
    location: 'Markham, ON',
    description: [
      {
        lg: "Developed the school's mobile app, <Link href='/projects/pethsapp'>Pethsapp</Link>, used by 1,200+ members of the school community",
        sm: "Developed the school's mobile app, <Link href='/projects/pethsapp'>Pethsapp</Link>, with 1,200+ users",
      },
      {
        lg: 'Revamped the student council website, generating 21,000+ search impressions and improving site loading speed by 77%',
        sm: "Revamped the council's website, generating 21,000+ search impressions and improving site speed by 77%",
      },
      {
        lg: '<span class="font-medium">Technologies Used:</span> React.js, Next.js, Flutter, Dart, Firebase, JavaScript, Figma',
        sm: '<span class="font-medium">Technologies Used:</span> React.js, Next.js, Flutter, Dart, Firebase, JavaScript, Figma',
      },
    ],
  },
  // {
  //   role: 'Technology Chairperson',
  //   company: 'CREATE Markham',
  //   duration: 'Aug 2021 — Aug 2022',
  //   location: 'Markham, ON',
  //   description: [
  //     'Promoted student leadership and wellness throughout the annual conference and its following events',
  //     'Worked alongside council members in planning and carrying out events for the enjoyment of participants',
  //     "Revamped the organization's website using Next.js and Tailwind CSS to enhance their online presence",
  //   ],
  // },
  // {
  //   role: 'Tennis Coach',
  //   company: 'Unionville Tennis Club',
  //   logo: utc,
  //   duration: 'Jun 2020 — Aug 2022',
  //   location: 'Markham, ON',
  //   description: [
  //     {
  //       lg: 'Taught 700+ hours of tennis professionally to dozens of students of various ages and skill levels',
  //       sm: 'Taught 700+ hours of tennis to students of all ages and skill levels',
  //     },
  //     {
  //       lg: 'Obtained quintessential professional workplace experience in addition to vital leadership capabilities',
  //       sm: 'Obtained professional workplace experience and vital leadership capabilities',
  //     },
  //     {
  //       lg: '<span class="font-medium">Relevant Skills:</span> Leadership, teaching, communication, collaboration, critical thinking',
  //       sm: '<span class="font-medium">Relevant Skills:</span> Leadership, teaching, communication, critical thinking',
  //     },
  //   ],
  // },
];

export const ABOUT = [
  "Hi! I'm Andrew, a CS student at the University of Waterloo.",
  "Currently, I'm a Software Engineer at AVIEW International, leading development on the startup's website and using portal using React.js and AWS.",
  "Additionally, I'm a Research Assistant at the University of Toronto, studying the utility and perception of AI in the workplace through building applications embedded with AI models such as GPT-3.",
  'Some of the things I like to do in my free time include playing tennis, searching for design inspiration, and solving Leetcode problems.',
  "That said, I'd love to get to know you! Feel free to message me about new opportunities or to have a conversation!",
];
