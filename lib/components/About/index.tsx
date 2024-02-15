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
          I'm Vivek Mittal, a frontend engineer based in New Delhi, IN, and I'm
          currently a key contributor at Artisan AI. With a strong focus on
          frontend development, I've dedicated years to mastering the craft,
          always staying on the cutting edge of web technologies. My journey in
          web development has been marked by continuous self-improvement and a
          relentless pursuit of knowledge. I'm deeply passionate about creating
          exceptional user experiences and utilizing technology to forge
          meaningful connections. My role at Artisan AI allows me to apply this
          passion daily, ensuring our users have the best online matchmaking
          experience possible.
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
            <div
              key={skill.name}
              aria-label={skill.name}
              className={classes.skillWrapper}
            >
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
