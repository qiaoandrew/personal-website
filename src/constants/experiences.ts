import snowflakeLogo from "../../public/img/logos/snowflake-logo.png";
import ibmLogo from "../../public/img/logos/ibm-logo.png";
import tdLogo from "../../public/img/logos/td-logo.png";
import uoftLogo from "../../public/img/logos/uoft-logo.png";
import type { Experience } from "~/types/experiences";

export const EXPERIENCES: Experience[] = [
  {
    id: "snowflake-3",
    company: "Snowflake",
    position: "Software Engineer Intern",
    date: "Apr 2025 - Present",
    location: "Menlo Park, CA",
    points: ["🖥️ UI Platform"],
    icon: snowflakeLogo,
  },
  {
    id: "snowflake-2",
    company: "Snowflake",
    position: "Software Engineer (Contract)",
    date: "Feb 2025 - Apr 2025",
    location: "Canada (Remote)",
    points: ["✨ Copilot, Notebooks"],
    icon: snowflakeLogo,
  },
  {
    id: "snowflake-1",
    company: "Snowflake",
    position: "Software Engineer Intern",
    date: "Apr 2024 - Present",
    location: "Bellevue, WA",
    points: ["📊 Streamlit in Snowflake"],
    icon: snowflakeLogo,
  },
  {
    id: "ibm",
    company: "IBM",
    position: "Software Developer Intern",
    date: "Jan 2024 - Apr 2024",
    location: "Toronto, ON",
    points: ["💬 Generative AI"],
    icon: ibmLogo,
  },
  {
    id: "td",
    company: "TD Bank",
    position: "Software Developer Intern",
    date: "May 2023 - Aug 2023",
    location: "Toronto, ON",
    points: ["📈 Portfolio Analytics"],
    icon: tdLogo,
  },
  {
    id: "uoft",
    company: "University of Toronto",
    position: "Research Developer Intern",
    date: "Oct 2022 - Apr 2023",
    location: "Toronto, ON",
    points: ["🤖 AI Alignment"],
    icon: uoftLogo,
  },
];
