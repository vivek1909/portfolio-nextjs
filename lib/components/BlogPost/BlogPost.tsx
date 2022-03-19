import Link from "next/link";
import React, { FC } from "react";
import { FaArrowCircleLeft } from "react-icons/fa";
import { IBlogMetaData } from "../../../types/blog";
import classes from "./BlogPost.module.css";

interface Props {
  meta: IBlogMetaData;
  content: string;
}

export const BlogPost: FC<Props> = ({ meta, content }) => {
  return (
    <div>
      <Link href={"/posts"}>
        <a className={classes.goBackLink}>
          <FaArrowCircleLeft className={classes.backButton} /> All posts
        </a>
      </Link>
      <div className={classes.meta}>
        <p className={classes.title}>{meta.title}</p>
        <div className={classes.innerWrapper}>
          <p className={classes.date}>{new Date(meta.date).toDateString()}</p>
          <p className={classes.readTime}>{meta.readTime}</p>
        </div>
      </div>
      <br />
      <article
        className={classes.article}
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </div>
  );
};
