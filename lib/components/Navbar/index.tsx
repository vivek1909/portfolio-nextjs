import clsx from "clsx";
import { motion } from "framer-motion";
import Link from "next/link";
import { FC } from "react";
import {
  scaleAnElementVariants,
  svgLogoPathVariants,
  svgVariants,
  whileHoverButton,
  scaleAnimation,
} from "../../../constants/Animations";
import { MenuItems } from "../../../types/menu";
import classes from "./Navbar.module.css";

interface Props {
  activeMenu?: MenuItems;
}

export const Navbar: FC<Props> = ({ activeMenu }) => {
  return (
    <motion.div
      initial={"hidden"}
      whileInView={"visible"}
      variants={{
        hidden: {
          opacity: 0,
        },
        visible: {
          opacity: 1,
        },
      }}
      className={classes.root}
    >
      <motion.div>
        <Link href={"/"}>
          <a>
            <div className={classes.logoWrapper}>
              <motion.svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                initial={"hidden"}
                whileInView={"visible"}
                variants={svgVariants}
                whileHover={whileHoverButton}
              >
                <motion.path
                  variants={svgLogoPathVariants}
                  d="M15.562 10C16.2653 10 16.7515 10.6453 16.5031 11.2491L12.3261 21.4029C12.1783 21.7622 11.8035 22 11.385 22H10.17C9.7511 22 9.37605 21.7618 9.22853 21.402L5.06529 11.2481C4.8178 10.6445 5.30397 10 6.00678 10H6.66796C7.10656 10 7.4946 10.2608 7.62697 10.6445L9.71444 16.6955C10.0024 17.5302 11.2767 17.5624 11.6143 16.7434L14.148 10.5965C14.296 10.2375 14.6706 10 15.0889 10H15.562Z"
                  fill="url(#paint0_angular_48_5)"
                />
                <motion.path
                  variants={svgLogoPathVariants}
                  d="M25.532 22C24.9764 22 24.5261 21.5867 24.5261 21.0769V18.3137C24.5261 17.3297 23.0721 17.0287 22.6117 17.9174L21.4079 20.2407C21.2526 20.5405 20.9232 20.7314 20.5615 20.7314C20.1972 20.7314 19.8659 20.5377 19.7121 20.2347L18.5422 17.9306C18.0874 17.0351 16.6244 17.3326 16.6244 18.3205V21.0769C16.6244 21.5867 16.1741 22 15.6185 22H15.154C14.5984 22 14.148 21.5867 14.148 21.0769V10.9231C14.148 10.4133 14.5984 10 15.154 10H15.7233C16.0971 10 16.44 10.1902 16.6138 10.4938L19.7023 15.8894C20.0805 16.5501 21.1126 16.5472 21.4863 15.8842L24.5218 10.499C24.6945 10.1925 25.0392 10 25.4152 10H25.9664C26.521 10 26.971 10.4119 26.9724 10.9208L26.9999 21.0746C27.0013 21.5853 26.5505 22 25.994 22H25.532Z"
                  fill="url(#paint1_angular_48_5)"
                />
                <motion.circle
                  variants={svgLogoPathVariants}
                  cx="16"
                  cy="16"
                  r="15.2344"
                  stroke="url(#paint2_angular_48_5)"
                  strokeWidth="0.46875"
                />
                <defs>
                  <radialGradient
                    id="paint0_angular_48_5"
                    cx="0"
                    cy="0"
                    r="1"
                    gradientUnits="userSpaceOnUse"
                    gradientTransform="translate(15.1855 15.8286) rotate(90) scale(17.1429 16.292)"
                  >
                    <stop offset="0.324005" stopColor="#1B77CC" />
                    <stop offset="0.771372" stopColor="#2D7BC2" />
                  </radialGradient>
                  <radialGradient
                    id="paint1_angular_48_5"
                    cx="0"
                    cy="0"
                    r="1"
                    gradientUnits="userSpaceOnUse"
                    gradientTransform="translate(15.1855 15.8286) rotate(90) scale(17.1429 16.292)"
                  >
                    <stop offset="0.324005" stopColor="#1B77CC" />
                    <stop offset="0.771372" stopColor="#2D7BC2" />
                  </radialGradient>
                  <radialGradient
                    id="paint2_angular_48_5"
                    cx="0"
                    cy="0"
                    r="1"
                    gradientUnits="userSpaceOnUse"
                    gradientTransform="translate(16 16) rotate(90) scale(15)"
                  >
                    <stop
                      offset="0.418101"
                      stopColor="#003D99"
                      stopOpacity="0.8"
                    />
                    <stop
                      offset="0.885371"
                      stopColor="#0884CA"
                      stopOpacity="0.5"
                    />
                  </radialGradient>
                </defs>
              </motion.svg>
            </div>
          </a>
        </Link>
      </motion.div>
      <div className={classes.navbarLinks}>
        <Link href={"/posts"}>
          <a>
            <motion.p
              initial={"hidden"}
              whileInView={"visible"}
              variants={scaleAnElementVariants()}
              className={clsx({
                [classes.isActive]: activeMenu === MenuItems.BLOGS,
              })}
              whileHover={scaleAnimation}
              whileTap={scaleAnimation}
            >
              Blogs
            </motion.p>
          </a>
        </Link>
        <Link href={"/projects"}>
          <a>
            <motion.p
              initial={"hidden"}
              whileInView={"visible"}
              variants={scaleAnElementVariants()}
              className={clsx({
                [classes.isActive]: activeMenu === MenuItems.PROJECTS,
              })}
              whileHover={scaleAnimation}
              whileTap={scaleAnimation}
            >
              Projects
            </motion.p>
          </a>
        </Link>
      </div>
    </motion.div>
  );
};
