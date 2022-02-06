import { FC } from "react";
import { SKILLS } from "../../../constants/skills";
import classes from "./About.module.css";

export const About: FC = () => {
  return (
    <div className={classes.root}>
      <div>
        <h1 className={classes.heading}>Who Am I?</h1>
        <p>
          I&apos;m Vivek Mittal, currently based in Delhi, IN. I&apos;m a
          Software Enginner at People&apos;s group. I work with various frontend
          tools. All the skills and tools I use are self-taught over many years
          of practice and expanding my horizons.
        </p>
      </div>
      <br />
      <div className={classes.skills}>
        <h1 className={classes.heading}>What I work with?</h1>
        <div className={classes.skillsList}>
          {SKILLS.map((skill) => (
            <p key={skill}>{skill}</p>
          ))}
        </div>
      </div>
    </div>
  );
};
