import { FC } from "react";
import { SKILLS } from "../../../constants/Skills";
import { ContactForm } from "../../containers/ContactForm";
import classes from "./About.module.css";

export const About: FC = () => {
  return (
    <div className={classes.root}>
      <div>
        <h1 className={classes.heading}>Who Am I?</h1>
        <p>
          I&apos;m Vivek Mittal, currently based out of New Delhi, IN. I&apos;m
          a Software Enginner at Shaadi.com. I work with various frontend tools.
          All the skills and tools I use are self-taught over many years of
          practice and expanding my horizons. I&apos;m also a part time Bank
          Nifty options trader.
        </p>
      </div>
      <br />
      <div className={classes.skills}>
        <h1 className={classes.heading}>What I work with?</h1>
        <div className={classes.skillsList}>
          {SKILLS.map((skill) => (
            <div key={skill.name} className={classes.skillWrapper}>
              <skill.component />
              <p>{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
      <br />
      <div>
        <h1 className={classes.heading}>Want to contact me?</h1>
        <p>
          Want to talk about stock market or frontend or both? You can find
          me&nbsp;
          <a href={"mailto:vivekmittal199@gmail.com"} className={classes.link}>
            here
          </a>
          &nbsp;
        </p>
        <br />
        <p className={classes.orText}>OR</p>
        <br />
        <ContactForm />
      </div>
    </div>
  );
};
