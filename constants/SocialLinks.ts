import { FaGithub, FaLinkedin, FaTwitter, FaDev } from "react-icons/fa";
import {
  SiTailwindcss,
  SiNextdotjs,
  SiFramer,
  SiTypescript,
} from "react-icons/si";

export const SOCIAL_LINKS = [
  {
    link: "https://github.com/vivek1909",
    component: FaGithub,
    name: "Github",
  },
  {
    link: "https://www.linkedin.com/in/vivek-mittal/",
    component: FaLinkedin,
    name: "Linkedin",
  },
  {
    link: "https://twitter.com/vivek96_",
    component: FaTwitter,
    name: "Twitter",
  },
  {
    link: "https://dev.to/vivek96_",
    component: FaDev,
    name: "Dev.to",
  },
];

export const LIBRARIES_USED_LINKS = [
  {
    link: "https://nextjs.org/",
    component: SiNextdotjs,
    name: "Next.js",
  },
  {
    link: "https://tailwindcss.com/",
    component: SiTailwindcss,
    name: "TailwindCSS",
  },
  {
    link: "https://www.framer.com/motion/",
    component: SiFramer,
    name: "Framer Motion",
  },
  {
    link: "https://www.typescriptlang.org/",
    component: SiTypescript,
    name: "Typescript",
  },
];
