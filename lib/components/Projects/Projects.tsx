import React, { FC } from "react";
import classes from "./Projects.module.css";
import { Project } from "../Project/Project";
import { ProjectsDetails } from "../../../constants/Projects";

export const Projects: FC = () => {
  return (
    <div className={classes.root}>
      <h1>/projects</h1>
      {ProjectsDetails.map((project) => (
        <Project key={project.title} projectDetails={project} />
      ))}
    </div>
  );
};
