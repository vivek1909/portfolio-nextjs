import { FaCalendar } from "react-icons/fa";
import { IProfessionalExperience } from "../types/experience";

export const ProfessionalExperience: IProfessionalExperience[] = [
  {
    icon: FaCalendar,
    company: "Shaadi.com",
    duration: "March-2022 - Present",
    description: "Responsible for creating and testing the UI components.",
    designation: "Software Engineer I",
  },
  {
    icon: FaCalendar,
    company: "Affordmedical Technologies Pvt Ltd.",
    duration: "July-2021 - March-2022",
    description:
      "Collaborated with a teammate and bootstrapped a next.js frontend application from scratch along with storybook setup. Responsible for writing the production ready code along with proper test coverage (95% and above). Collaborated with backend team for the APIs. Responsible for leading the frontend team of 3 devs including me while doing code reviews, manual, unit and e2e testing. Responsible for fixing the pipeline bugs and implemeted parallelisation for cypress tests in pipeline and successfully reduced the pipeline run time by 45% for tests stage.",
    designation: "Full Stack Developer",
  },
  {
    icon: FaCalendar,
    company: "Affordmedical Technologies Pvt Ltd.",
    duration: "December-2020 - June-2021",
    description:
      "Bootstrapped a next.js frontend application from scratch. Responsible for writing the production ready code along with proper test coverage (95% and above). Contributed in the designing aspects of the application by creating the mockups on Figma. Collaborated with backend team for the APIs.",
    designation: "Full Stack Developer Intern",
  },
];
