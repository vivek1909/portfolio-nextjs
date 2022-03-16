import React, { FC } from "react";
import classes from "./Hero.module.css";
import Image from "next/image";
import Link from "next/link";
import { SOCIAL_LINKS } from "../../../constants/SocialLinks";

export const Hero: FC = () => {
  return (
    <div className={classes.root}>
      <div>
        <div>
          <p className={classes.greetingMultiLingual}>,</p>
          <p>I&apos;m Vivek Mittal</p>
        </div>
        <div className={classes.professionText}>
          <p>A passionate Software Engineer</p>
        </div>
        <div className={classes.socialLinks}>
          {SOCIAL_LINKS.map((socialLink) => (
            <button key={socialLink.link}>
              <a href={socialLink.link} target={"_blank"} rel={"noreferrer"}>
                {<socialLink.component />}
              </a>
            </button>
          ))}
        </div>
        <div className={classes.resumeBtnWrapper}>
          <Link href={"/docs/Vivek_Mittal_Class_of_2021.pdf"}>
            <a>
              <button>Resume</button>
            </a>
          </Link>
        </div>
      </div>
      <div className={classes.imageWrapper}>
        <Image
          src={"/images/vivek.jpeg"}
          alt={"Vivek"}
          layout={"fill"}
          objectFit={"cover"}
        />
      </div>
    </div>
  );
};
