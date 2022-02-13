import { FC } from "react";
import { MenuItems } from "../../../types/menu";
import { Footer } from "../../components/Footer";
import { Navbar } from "../../components/Navbar";
import classes from "./BaseLayout.module.css";

interface Props {
  activeMenu?: MenuItems;
}

export const BaseLayout: FC<Props> = ({ children, activeMenu }) => {
  return (
    <div className={classes.root}>
      <Navbar activeMenu={activeMenu} />
      <div className={classes.mainContent}>{children}</div>
      <Footer />
    </div>
  );
};
