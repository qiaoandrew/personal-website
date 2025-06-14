import snowflakeLogo from "../../public/img/logos/snowflake-logo.png";
import rampLogo from "../../public/img/logos/ramp-logo.png";
import eightvcLogo from "../../public/img/logos/8vc-logo.png";
import ibmLogo from "../../public/img/logos/ibm-logo.png";
import tdLogo from "../../public/img/logos/td-logo.png";
import uoftLogo from "../../public/img/logos/uoft-logo.png";
import type { Experience } from "~/types/experiences";

export const EXPERIENCES: Experience[] = [
  {
    id: "ramp",
    company: "Ramp",
    position: "Incoming Software Engineer Intern",
    date: "Sept 2025 - Dec 2025",
    location: "New York, NY",
    icon: rampLogo,
    team: "Procurement",
    emoji: "🛒",
  },
  {
    id: "8vc",
    company: "8VC",
    position: "Engineering Fellow",
    date: "Jun 2025 - Aug 2025",
    location: "San Francisco, CA",
    icon: eightvcLogo,
    team: "Startups",
    emoji: "😍",
  },
  {
    id: "snowflake-3",
    company: "Snowflake",
    position: "Software Engineer Intern",
    date: "Apr 2025 - Aug 2025",
    location: "Menlo Park, CA",
    icon: snowflakeLogo,
    team: "UI Platform",
    emoji: "🖥️",
  },
  {
    id: "snowflake-2",
    company: "Snowflake",
    position: "Software Engineer (Contract)",
    date: "Feb 2025 - Apr 2025",
    location: "Canada (Remote)",
    icon: snowflakeLogo,
    team: "Notebooks",
    emoji: "📕",
  },
  {
    id: "snowflake-1",
    company: "Snowflake",
    position: "Software Engineer Intern",
    date: "Apr 2024 - Present",
    location: "Bellevue, WA",
    icon: snowflakeLogo,
    team: "Streamlit in Snowflake",
    emoji: "📊",
  },
  {
    id: "ibm",
    company: "IBM",
    position: "Software Developer Intern",
    date: "Jan 2024 - Apr 2024",
    location: "Toronto, ON",
    icon: ibmLogo,
    team: "Generative AI",
    emoji: "💬",
  },
  {
    id: "td",
    company: "TD Bank",
    position: "Software Developer Intern",
    date: "May 2023 - Aug 2023",
    location: "Toronto, ON",
    icon: tdLogo,
    team: "Portfolio Analytics",
    emoji: "📈",
  },
  {
    id: "uoft",
    company: "University of Toronto",
    position: "Research Developer Intern",
    date: "Oct 2022 - Apr 2023",
    location: "Toronto, ON",
    icon: uoftLogo,
    team: "AI Alignment",
    emoji: "🤖",
  },
];
