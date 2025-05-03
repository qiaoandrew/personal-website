import pethsappLight from "../../public/img/mockups/pethsapp-light.png";
import pethsappDark from "../../public/img/mockups/pethsapp-dark.png";
import snowflakeNotebooks from "../../public/img/mockups/snowflake-notebooks.png";
import quadraticUILight from "../../public/img/mockups/quadratic-ui-light.png";
import quadraticUIDark from "../../public/img/mockups/quadratic-ui-dark.png";
import slope from "../../public/img/mockups/slope.png";
import type { Project } from "~/types/projects";

export const PROJECTS: Project[] = [
  {
    id: "pethsapp",
    title: "Pethsapp",
    href: "https://www.tsac.ca/pethsapp",
    type: "Mobile App",
    mockupLight: pethsappLight,
    mockupDark: pethsappDark,
  },
  {
    id: "snowflake-notebooks",
    title: "Snowflake Notebooks",
    href: "https://www.snowflake.com/en/blog/introducing-snowflake-notebooks/",
    type: "Internship",
    mockupLight: snowflakeNotebooks,
    mockupDark: snowflakeNotebooks,
  },
  {
    id: "quadratic-ui",
    title: "quadratic/ui",
    href: "https://www.quadratic-ui.com",
    type: "UI Library",
    mockupLight: quadraticUILight,
    mockupDark: quadraticUIDark,
  },
  {
    id: "slope",
    title: "Slope",
    href: "#",
    type: "Coming Soon",
    mockupLight: slope,
    mockupDark: slope,
  },
];
