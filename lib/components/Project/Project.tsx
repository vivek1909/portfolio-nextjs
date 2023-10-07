import React, { FC } from "react";
import classes from "./Project.module.css";
import { FaExternalLinkAlt } from "react-icons/fa";
import { IProjectDetails } from "../../../types/projects";
import { motion } from "framer-motion";
import { hiddenToBlockAnimationVariant } from "../../../constants/Animations";

interface Props {
  projectDetails: IProjectDetails;
}

export const Project: FC<Props> = ({ projectDetails }) => {
  const { title, description, techStack, projectURL } = projectDetails;

  return (
    <motion.div
      initial={"hidden"}
      whileInView={"visible"}
      variants={hiddenToBlockAnimationVariant}
      className={classes.root}
    >
      <div className={classes.innerWrapper}>
        <p className={classes.title}>{title}</p>
        {projectDetails.projectURL !== "#" && (
          <a href={projectURL} target={"_blank"} rel={"noreferrer"}>
            <FaExternalLinkAlt />
          </a>
        )}
      </div>
      <p className={classes.description}>{description}</p>
      <p className={classes.techStack}>{techStack}</p>
    </motion.div>
  );
};
