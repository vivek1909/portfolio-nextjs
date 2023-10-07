import { FC } from "react";
import Image from "next/image";
import classes from "./NotFound.module.css";
import Link from "next/link";
import Head from "next/head";
import { motion } from "framer-motion";
import { scaleAnElementVariants } from "../../../constants/Animations";

export const NotFound: FC = () => {
  return (
    <motion.div
      initial={"hidden"}
      whileInView={"visible"}
      variants={scaleAnElementVariants()}
      className={classes.root}
    >
      <Head>
        <link
          rel="preload"
          href="/fonts/Montserrat/Montserrat-Regular.ttf"
          as="font"
          crossOrigin=""
        />
        <link
          rel="preload"
          href="/fonts/Montserrat/Montserrat-Italic.ttf"
          as="font"
          crossOrigin=""
        />
        <link
          rel="preload"
          href="/fonts/Montserrat/Montserrat-SemiBold.ttf"
          as="font"
          crossOrigin=""
        />
        <link
          rel="preload"
          href="/fonts/Montserrat/Montserrat-SemiBoldItalic.ttf"
          as="font"
          crossOrigin=""
        />
        <link
          rel="preload"
          href="/fonts/Montserrat/Montserrat-Bold.ttf"
          as="font"
          crossOrigin=""
        />
        <link
          rel="preload"
          href="/fonts/Montserrat/Montserrat-BoldItalic.ttf"
          as="font"
          crossOrigin=""
        />
      </Head>
      <h2>Oops! Page not found.</h2>
      <p>You seem lost! Maybe go to homepage and search again.</p>
      <Image
        src={"/not-found.svg"}
        alt={"not-found"}
        height={300}
        width={300}
      />
      <div className={classes.goHomeBtnWrapper}>
        <Link legacyBehavior href={"/"}>
          <a>
            <button>Go Home</button>
          </a>
        </Link>
      </div>
    </motion.div>
  );
};
