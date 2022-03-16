import { FC } from "react";
import Image from "next/image";
import classes from "./NotFound.module.css";
import Link from "next/link";

export const NotFound: FC = () => {
  return (
    <div className={classes.root}>
      <h2>Oops! Page not found.</h2>
      <p>You seem lost! Maybe go to homepage and search again.</p>
      <Image
        src={"/not-found.svg"}
        alt={"not-found"}
        height={300}
        width={300}
      />
      <Link href={"/"}>
        <a>
          <button className={classes.goHomeBtn}>Go Home</button>
        </a>
      </Link>
    </div>
  );
};
