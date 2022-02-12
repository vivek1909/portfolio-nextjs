import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import classes from "./Navbar.module.css";

export const Navbar: FC = () => {
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
            <p>About</p>
          </a>
        </Link>
        <Link href={"/posts"}>
          <a>
            <p>Blogs</p>
          </a>
        </Link>
        <Link href={"/projects"}>
          <a>
            <p>Projects</p>
          </a>
        </Link>
      </div>
    </div>
  );
};
