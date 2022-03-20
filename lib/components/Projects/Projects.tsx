import React, { FC } from "react";
import classes from "./Projects.module.css";
import { Project } from "../Project/Project";
import { ProjectsDetails } from "../../../constants/Projects";
import { motion } from "framer-motion";
import { scaleAnElementVariants } from "../../../constants/Animations";

export const Projects: FC = () => {
  return (
    <div className={classes.root}>
      <motion.h1
        initial={"hidden"}
        whileInView={"visible"}
        variants={scaleAnElementVariants()}
      >
        /projects
      </motion.h1>
      {ProjectsDetails.map((project) => (
        <Project key={project.title} projectDetails={project} />
      ))}
    </div>
  );
};
