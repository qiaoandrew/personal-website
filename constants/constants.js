import pethsapp1Light from "../public/img/mockups/pethsapp-1-light.png";
import pethsapp1Dark from "../public/img/mockups/pethsapp-1-dark.png";
import pethsapp2Light from "../public/img/mockups/pethsapp-2-light.png";
import pethsapp2Dark from "../public/img/mockups/pethsapp-2-dark.png";
import pethsapp3Light from "../public/img/mockups/pethsapp-3-light.png";
import pethsapp3Dark from "../public/img/mockups/pethsapp-3-dark.png";
import tsac1Light from "../public/img/mockups/tsac-1-light.png";
import tsac1Dark from "../public/img/mockups/tsac-1-dark.png";
import tsac2Light from "../public/img/mockups/tsac-2-light.png";
import tsac2Dark from "../public/img/mockups/tsac-2-dark.png";
import tsac3Light from "../public/img/mockups/tsac-3-light.png";
import tsac3Dark from "../public/img/mockups/tsac-3-dark.png";
import create1 from "../public/img/mockups/create-1.png";
import create2 from "../public/img/mockups/create-2.png";
import create3 from "../public/img/mockups/create-3.png";
import aview1 from "../public/img/mockups/aview-1.png";
import aview2 from "../public/img/mockups/aview-2.png";
import aview3 from "../public/img/mockups/aview-3.png";

export const PROJECTS = [
  {
    route: "/projects/pethsapp",
    title: "Pethsapp",
    type: "Mobile App",
    mockups: [
      pethsapp1Light,
      pethsapp1Dark,
      pethsapp2Light,
      pethsapp2Dark,
      pethsapp3Light,
      pethsapp3Dark,
    ],
    pageDescription:
      "Pethsapp is my former high school's official mobile application. I led a team of developers and designers in revamping it using Flutter and Firebase.",
    descriptions: [
      {
        id: "description-1",
        text: "Pethsapp is the official mobile application of Pierre Elliott Trudeau High School and is used by over 1200 members of the school community.",
      },
      {
        id: "description-2",
        text: "At the peak of the COVID-19 pandemic, I began to notice a large population of students feeling removed from the school atmosphere.",
      },
      {
        id: "description-3",
        text: "Looking around me, I noticed a boom in technology, led by apps like Zoom. It then became obvious to me that technology was instrumental in tying the community back together.",
      },
      {
        id: "description-4",
        text: "Thus, I started working on Pethsapp, my high school's mobile application. Throughout development, I led a team of developers and designers in revamping the app's user interface and functionalities.",
      },
      {
        id: "description-5",
        text: "Available on the App Store and Google Play, the app is used by over 1200 members of the school community. Its purpose is to provide users with up-to-date announcements, resources, essential links, and more.",
      },
    ],
    infos: [
      {
        id: "info-1",
        title: "Developed For",
        text: "Pierre Elliott Trudeau High School",
      },
      { id: "info-2", title: "Project Type", text: "Mobile App" },
      {
        id: "info-3",
        title: "Technologies",
        text: "Flutter, Dart, Firebase, Figma",
      },
      {
        id: "info-4",
        title: "Roles",
        text: "Software Engineer, UI/UX Designer",
      },
    ],
    buttons: [
      {
        id: "button-1",
        text: "App Store",
        link: "https://apps.apple.com/ca/app/pethsapp/id1544635100",
      },
      {
        id: "button-2",
        text: "Google Play",
        link: "https://play.google.com/store/apps/details?id=com.trudeausac.pethsapp&hl=en_CA&gl=US",
      },
    ],
  },
  {
    route: "/projects/create-markham",
    title: "CREATE Markham",
    type: "Website",
    mockups: [create1, create2, create3],
    pageDescription:
      "As Technology Chairperson of CREATE Markham, I revamped their website using HTML, CSS, and JavaScript to enhance the organization's digital presence.",
    descriptions: [
      {
        id: "description-1",
        text: "Website for CREATE Markham, a youth-led non-profit organization based in Markham, Ontario.",
      },
      {
        id: "description-2",
        text: "CREATE stands for Cultivating Realistic and Effective Actions Towards Everyone. They host an annual wintertime conference, followed by a summertime outdoors retreat centered around personal growth within the Markham youth.",
      },
      {
        id: "description-3",
        text: "Throughout the conference, delegates learn essential leadership, collaboration, and communication skills, preparing them for their future endeavors.",
      },
      {
        id: "description-4",
        text: "As Technology Chairperson from 2021-2022, I revamped their website, helping the organization to expand and solidify their digital presence.",
      },
    ],
    infos: [
      { id: "info-1", title: "Developed For", text: "CREATE Markham" },
      { id: "info-2", title: "Project Type", text: "Website" },
      {
        id: "info-3",
        title: "Technologies",
        text: "React.js, Next.js, TypeScript, Tailwind CSS, Firebase, Figma",
      },
      { id: "info-4", title: "Roles", text: "Developer, UI/UX Designer" },
    ],
    buttons: [
      { id: "button-1", text: "Website", link: "https://createmarkham.ca/" },
      {
        id: "button-2",
        text: "GitHub Repository",
        link: "https://github.com/CREATE-Conference/create-website",
      },
    ],
  },
  {
    route: "/projects/aview",
    title: "AVIEW",
    type: "Website",
    mockups: [aview1, aview2, aview3],
    pageDescription:
      "As a Software Engineer at AVIEW International, I led a team in developing their website using Next.js, streamlining the startup's digital growth.",
    descriptions: [
      {
        id: "description-1",
        text: "Website for AVIEW International, a startup centered around providing translation services for content creators.",
      },
      {
        id: "description-2",
        text: "AVIEW is a multimedia translation company designed to help content creators expand their fanbase through social media platforms. They focus on content creators who have developed a local fanbase and are seeking international expansion.",
      },
      {
        id: "description-3",
        text: "As a Software Engineer at the company, I am working with a group of other engineers and UI/UX designers in developing the website from both an aesthetic and functional standpoint.",
      },
      {
        id: "description-4",
        text: "Since the implementation of the company's new website, its client base has increased by 300%, generating more than $200k in new revenue.",
      },
    ],
    infos: [
      { id: "info-1", title: "Developed For", text: "AVIEW International" },
      { id: "info-2", title: "Project Type", text: "Website" },
      {
        id: "info-3",
        title: "Technologies",
        text: "React.js, Next.js, JavaScript, Tailwind CSS, Figma",
      },
      { id: "info-4", title: "Role", text: "Software Engineer" },
    ],
    buttons: [
      { id: "button-1", text: "Website", link: "https://www.aviewint.com/" },
      {
        id: "button-2",
        text: "GitHub Repository",
        link: "https://github.com/Aview-International/aviewint-website",
      },
    ],
  },
  {
    route: "/projects/tsac",
    title: "TSAC",
    type: "Website",
    mockups: [
      tsac1Light,
      tsac1Dark,
      tsac2Light,
      tsac2Dark,
      tsac3Light,
      tsac3Dark,
    ],
    pageDescription:
      "As Technology Chairperson on my high school's student council during my senior year of high school, I revamped the council's website using Next.js and Firebase.",
    descriptions: [
      {
        id: "description-1",
        text: "Website developed for Pierre Elliott Trudeau High School's Student Activities Council (TSAC).",
      },
      {
        id: "description-2",
        text: "TSAC is Pierre Elliott Trudeau High School's student council and represents the student body and makes decisions on its behalf.",
      },
      {
        id: "description-3",
        text: "Using TSAC's website, students are able to learn about the council and the school, including its clubs, external opportunities, and more.",
      },
      {
        id: "description-4",
        text: "As Technology Chairperson during my senior year in high school, my role was the enhance the school's technologies including our school app and student council website.",
      },
    ],
    infos: [
      { id: "info-1", title: "Developed For", text: "TSAC" },
      { id: "info-2", title: "Project Type", text: "Website" },
      {
        id: "info-3",
        title: "Technologies",
        text: "React.js, Next.js, JavaScript, Firebase, Figma",
      },
      { id: "info-4", title: "Roles", text: "Developer, UI/UX Designer" },
    ],
    buttons: [{ id: "button-1", text: "Website", link: "https://tsac.ca/" }],
  },
];

export const EXPERIENCES = [
  {
    role: "Research Intern",
    company: "University of Toronto",
    chips: ["Oct 2022 — Present", "Toronto, ON"],
    description: [
      "Studying the role of AI in the workplace alongside Dr. Meena Andiappan's team of researchers",
      "Developing and designing applications embedded with AI models such as GPT-3 for research projects",
      "<span class='font-medium'>Technologies Used</span>: GPT-3, OpenAI API, React.js, Next.js, Firebase, JavaScript, Tailwind CSS",
    ],
  },
  {
    role: "Software Engineer",
    company: "AVIEW International",
    chips: ["May 2022 — Present", "Toronto, ON"],
    description: [
      "Leading development on the startup's corporate website and user-oriented portal",
      "Streamlining the company's growth, increasing its client base by 400%, generating 115%+ MoM growth",
      "<span class='font-medium'>Technologies Used</span>: React.js, Next.js, Amazon Web Services (AWS), JavaScript, Tailwind CSS",
    ],
  },
  {
    role: "Technology Chairperson",
    company: "PETHS Student Council",
    chips: ["Sept 2021 — Jun 2022", "Markham, ON"],
    description: [
      "Developed the high school's mobile application, Pethsapp, cementing the school's digital presence",
      "Programmed activities for school events such as a themed Wordle and match-making algorithm",
      "<span class='font-medium'>Technologies Used</span>: React.js, Next.js, Flutter, Dart, Firebase, JavaScript, Figma",
    ],
  },
  {
    role: "Tennis Professional",
    company: "Unionville Tennis Club",
    chips: ["Jun 2020 — Aug 2022", "Markham, ON"],
    description: [
      "Taught over 700 hours of tennis professionally to dozens of students of various ages and skill levels",
      "Shared my passion for tennis with community members while helping students reach their athletic goals",
      "<span class='font-medium'>Relevant Skills</span>: Leadership, teaching, communication, collaboration, critical thinking",
    ],
  },
];

export const ABOUT = [
  "Hi! I'm Andrew, a first year CS student at the University of Waterloo.",
  "Currently, I'm a Software Engineer at AVIEW International, leading development on the startup's website and using portal using React.js and AWS.",
  "Additionally, I'm a Research Intern at the University of Toronto, studying the impact of AI in the workplace by building applications allowing users to interact with AI models such as GPT-3.",
  "Some of the things I like to do in my free time include playing tennis, searching for design inspiration, and solving Leetcode problems.",
  "That said, I'd love to get to know you! Feel free to message me about new opportunities or to have a conversation!",
];
