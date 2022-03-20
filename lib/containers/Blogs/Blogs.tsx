import { motion } from "framer-motion";
import Link from "next/link";
import React, { FC, useMemo } from "react";
import {
  animateFromLeftVariant,
  animateFromRightVariant,
  hiddenToBlockAnimationVariant,
  scaleAnElementVariants,
  scaleAnimation,
} from "../../../constants/Animations";
import { IBlogMetaData } from "../../../types/blog";
import classes from "./Blogs.module.css";

interface Props {
  blogsMetaData: IBlogMetaData[];
}

export const Blogs: FC<Props> = ({ blogsMetaData }) => {
  const sortedBlogsInDescOrder = useMemo(() => {
    return blogsMetaData.sort((a, b) =>
      new Date(b.date) > new Date(a.date) ? 1 : -1
    );
  }, [blogsMetaData]);

  return (
    <div className={classes.root}>
      <motion.h1
        initial={"hidden"}
        whileInView={"visible"}
        variants={scaleAnElementVariants()}
      >
        /blogs
      </motion.h1>
      <br />
      {sortedBlogsInDescOrder.map(
        ({ slug, title, excerpt, readTime, date }) => (
          <Link key={slug} href={`posts/${slug}`}>
            <a>
              <motion.div
                initial={"hidden"}
                whileInView={"visible"}
                variants={hiddenToBlockAnimationVariant}
                className={classes.blogCard}
                whileHover={scaleAnimation}
                whileTap={scaleAnimation}
              >
                <div className={classes.dateReadTimeWrapper}>
                  <p className={classes.date}>
                    {new Date(date).toDateString()}
                  </p>
                  <p className={classes.readTime}>{readTime}</p>
                </div>
                <p className={classes.title}>{title}</p>
                <p className={classes.excerpt}>{excerpt}</p>
              </motion.div>
            </a>
          </Link>
        )
      )}
    </div>
  );
};
