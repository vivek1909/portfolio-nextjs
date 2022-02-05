import { FC } from "react";
import classes from "./Navbar.module.css";

export const Navbar: FC = () => {
  return (
    <div className={classes.root}>
      <div>
        <h1>Vivek Mittal</h1>
      </div>
      <div className={classes.navbarLinks}>
        <p>About</p>
        <p>Contact</p>
        <p>Blogs</p>
        <p>Projects</p>
      </div>
    </div>
  );
};
