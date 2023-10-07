import React, { FC } from "react";
import classes from "./Hero.module.css";
import Image from "next/legacy/image";
import Link from "next/link";
import { SOCIAL_LINKS } from "../../../constants/SocialLinks";
import { motion } from "framer-motion";
import {
  animateFromLeftVariant,
  animateFromRightVariant,
} from "../../../constants/Animations";

export const Hero: FC = () => {
  return (
    <div className={classes.root}>
      <motion.div
        initial={"hidden"}
        whileInView={"visible"}
        variants={animateFromLeftVariant}
      >
        <div>
          <p className={classes.greetingMultiLingual}>,</p>
          <p>I&apos;m Vivek Mittal</p>
        </div>
        <div className={classes.professionText}>
          <p>A passionate Software Engineer</p>
        </div>
        <div className={classes.socialLinks}>
          {SOCIAL_LINKS.map((socialLink) => (
            <button key={socialLink.link} aria-label={socialLink.name}>
              <a href={socialLink.link} target={"_blank"} rel={"noreferrer"}>
                {<socialLink.component aria-label={socialLink.name} />}
              </a>
            </button>
          ))}
        </div>
        <div className={classes.resumeBtnWrapper}>
          <Link legacyBehavior href={"/docs/Vivek_Mittal_Resume.pdf"}>
            <a target="_blank">
              <button>Resume</button>
            </a>
          </Link>
        </div>
      </motion.div>
      <motion.div
        initial={"hidden"}
        whileInView={"visible"}
        variants={animateFromRightVariant}
        className={classes.imageWrapper}
      >
        <Image
          src={"/images/vivek.jpeg"}
          alt={"Vivek"}
          layout={"fill"}
          objectFit={"cover"}
        />
      </motion.div>
    </div>
  );
};
