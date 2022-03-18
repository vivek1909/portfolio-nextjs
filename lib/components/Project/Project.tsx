import React, { FC } from "react";
import classes from "./Project.module.css";
import Image from "next/image";
import { FaExternalLinkAlt, FaLink } from "react-icons/fa";
import { IProjectDetails } from "../../../types/projects";

interface Props {
  projectDetails: IProjectDetails;
}

export const Project: FC<Props> = ({ projectDetails }) => {
  const { title, description, techStack, projectURL } = projectDetails;

  return (
    <div className={classes.root}>
      <div className={classes.innerWrapper}>
        <p className={classes.title}>{title}</p>
        <a href={projectURL} target={"_blank"} rel={"noreferrer"}>
          <FaExternalLinkAlt />
        </a>
      </div>
      <p className={classes.description}>{description}</p>
      <p className={classes.techStack}>{techStack}</p>
    </div>
  );
};
