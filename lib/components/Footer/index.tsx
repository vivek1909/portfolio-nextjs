import { FC } from "react";
import classes from "./Footer.module.css";

export const Footer: FC = () => {
  return (
    <div className={classes.root}>
      <p>Copyright© {new Date().getFullYear()}</p>
      <p>Built with Love by Vivek Mittal</p>
    </div>
  );
};
