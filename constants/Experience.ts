import { FaCalendar } from "react-icons/fa";
import { IProfessionalExperience } from "../types/experience";

export const ProfessionalExperience: IProfessionalExperience[] = [
  {
    icon: FaCalendar,
    company: "Shaadi.com",
    duration: "March-2022 - Present",
    description: "I enhanced engagement, boosting user interaction by ~20%. Introduced Astro compatibility feature, upgraded legacy PHP to React/Next.js for better UX. Successfully executed bug-free Astro project. Timely, bug-minimal project delivery lauded by Product Manager. Achieved ~90% type safety with TypeScript, led code improvements. Revamped Daily Recommendation page, optimizing performance.",
    designation: "Software Engineer I",
  },
  {
    icon: FaCalendar,
    company: "Affordmedical Technologies Pvt Ltd.",
    duration: "December-2020 - March-2022",
    description:
      "Led NextJS app development, established Storybook for UI, integrated APIs, extended Material UI for improved interface. Mentored a frontend team, conducted code reviews. Addressed pipeline issues, optimized code delivery. Implemented Cypress test parallelization, enhancing efficiency by 45%. Emphasis on testing and design insights improved aesthetics and performance.",
    designation: "Full Stack Developer",
  },
];
