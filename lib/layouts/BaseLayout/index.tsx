import { motion } from "framer-motion";
import Head from "next/head";
import { FC, useEffect, useState } from "react";
import { FaArrowCircleUp } from "react-icons/fa";
import { whileHoverButton } from "../../../constants/Animations";
import { MenuItems } from "../../../types/menu";
import { Footer } from "../../components/Footer";
import { Navbar } from "../../components/Navbar";
import classes from "./BaseLayout.module.css";

interface Props {
  activeMenu?: MenuItems;
  isHomePage?: boolean;
}

export const BaseLayout: FC<Props> = ({
  children,
  activeMenu,
  isHomePage = false,
}) => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const onScroll = () => {
    if (window.pageYOffset > 600) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className={classes.root}>
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
      <Navbar activeMenu={activeMenu} />
      <div className={classes.mainContent}>{children}</div>
      {showButton && (
        <motion.button
          onClick={scrollToTop}
          aria-label={"scroll-to-top"}
          className={classes.scrollToTopButton}
          whileHover={whileHoverButton}
        >
          <FaArrowCircleUp />
        </motion.button>
      )}
      <Footer isHomePage={isHomePage} />
    </div>
  );
};
