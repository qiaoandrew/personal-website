import pethsappLight from "../../public/img/mockups/pethsapp-light.png";
import pethsappDark from "../../public/img/mockups/pethsapp-dark.png";
import snowflakeNotebooks from "../../public/img/mockups/snowflake-notebooks.png";
import quadraticUILight from "../../public/img/mockups/quadratic-ui-1-light.png";
import quadraticUIDark from "../../public/img/mockups/quadratic-ui-1-dark.png";
import slope from "../../public/img/mockups/slope.png";
import type { Project } from "~/types/projects";

export const PROJECTS: Project[] = [
  {
    id: "pethsapp",
    title: "Pethsapp",
    href: "https://www.tsac.ca/pethsapp",
    type: "Mobile App",
    imageLight: pethsappLight,
    imageDark: pethsappDark,
  },
  {
    id: "snowflake-notebooks",
    title: "Snowflake Notebooks",
    href: "https://www.snowflake.com/en/blog/introducing-snowflake-notebooks/",
    type: "Internship",
    imageLight: snowflakeNotebooks,
    imageDark: snowflakeNotebooks,
  },
  {
    id: "quadratic-ui",
    title: "quadratic/ui",
    href: "https://www.quadratic-ui.com",
    type: "UI Library",
    imageLight: quadraticUILight,
    imageDark: quadraticUIDark,
  },
  {
    id: "slope",
    title: "Slope",
    href: "",
    type: "Coming Soon",
    imageLight: slope,
    imageDark: slope,
  },
];
