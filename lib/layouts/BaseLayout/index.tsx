import { FC } from "react";
import { Footer } from "../../components/Footer";
import { Navbar } from "../../components/Navbar";
import classes from "./BaseLayout.module.css";

export const BaseLayout: FC = ({ children }) => {
  return (
    <div className={classes.root}>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};
