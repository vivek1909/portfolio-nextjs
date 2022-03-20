import { motion } from "framer-motion";
import { FC } from "react";
import { scaleAnElementVariants } from "../../../constants/Animations";
import { SKILLS } from "../../../constants/Skills";
import { ContactForm } from "../../containers/ContactForm";
import { Experience } from "../Experience/Experience";
import classes from "./About.module.css";

export const About: FC = () => {
  return (
    <div className={classes.root}>
      <motion.div
        initial={"hidden"}
        whileInView={"visible"}
        variants={scaleAnElementVariants()}
      >
        <h1 className={classes.heading}># Who Am I?</h1>
        <p>
          I&apos;m Vivek Mittal, currently based out of New Delhi, IN. I&apos;m
          a Software Engineer at Shaadi.com. I work with various frontend tools.
          All the skills and tools I use are self-taught over many years of
          practice and expanding my horizons. I&apos;m also a part time Bank
          Nifty options trader.
        </p>
      </motion.div>
      <br />
      <br />
      <motion.div
        initial={"hidden"}
        whileInView={"visible"}
        variants={scaleAnElementVariants()}
        className={classes.skills}
      >
        <h1 className={classes.heading}># What I work with?</h1>
        <div className={classes.skillsList}>
          {SKILLS.map((skill) => (
            <div key={skill.name} className={classes.skillWrapper}>
              <skill.component />
              <p>{skill.name}</p>
            </div>
          ))}
        </div>
      </motion.div>
      <br />
      <br />
      <motion.div
        initial={"hidden"}
        whileInView={"visible"}
        variants={scaleAnElementVariants()}
      >
        <h1 className={classes.heading}># My professional journey so far</h1>
        <Experience />
      </motion.div>
      <br />
      <br />
      <motion.div
        initial={"hidden"}
        whileInView={"visible"}
        variants={scaleAnElementVariants()}
      >
        <h1 className={classes.heading}># Want to contact me?</h1>
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
      </motion.div>
    </div>
  );
};
