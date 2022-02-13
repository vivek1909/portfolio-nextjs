import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import { MenuItems } from "../../../types/menu";
import classes from "./Navbar.module.css";

interface Props {
  activeMenu?: MenuItems;
}

export const Navbar: FC<Props> = ({ activeMenu }) => {
  return (
    <div className={classes.root}>
      <div>
        <Link href={"/"}>
          <a>
            <div className={classes.logoWrapper}>
              <Image
                src={"/logo.svg"}
                alt={"Vivek Mittal"}
                height={30}
                width={30}
              />
            </div>
          </a>
        </Link>
      </div>
      <div className={classes.navbarLinks}>
        <Link href={"/about"}>
          <a>
            <p
              className={clsx({
                [classes.isActive]: activeMenu === MenuItems.ABOUT,
              })}
            >
              About
            </p>
          </a>
        </Link>
        <Link href={"/posts"}>
          <a>
            <p
              className={clsx({
                [classes.isActive]: activeMenu === MenuItems.BLOGS,
              })}
            >
              Blogs
            </p>
          </a>
        </Link>
        <Link href={"/projects"}>
          <a>
            <p
              className={clsx({
                [classes.isActive]: activeMenu === MenuItems.PROJECTS,
              })}
            >
              Projects
            </p>
          </a>
        </Link>
      </div>
    </div>
  );
};
