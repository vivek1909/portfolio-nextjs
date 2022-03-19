import { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import React from "react";
import { Blogs } from "../../lib/containers/Blogs/Blogs";
import { BaseLayout } from "../../lib/layouts/BaseLayout";
import { IBlogMetaData } from "../../types/blog";
import { MenuItems } from "../../types/menu";
import { getAllDocs } from "../../utils/docs";

interface Props {
  blogsMetaData: IBlogMetaData[];
}

const BlogsPage: NextPage<Props> = (context) => {
  return (
    <BaseLayout activeMenu={MenuItems.BLOGS}>
      <Head>
        <meta charSet="utf-8" />
        <meta content="IE=edge" httpEquiv="X-UA-Compatible" />
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <meta name="robots" content="follow, index" />
        <link href="/favicon.ico" rel="shortcut icon" />
        <title>Vivek Mittal | Blogs</title>
        <meta
          content={"All the blog posts written by Vivek Mittal"}
          name="description"
        />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content={"All Blogs"} />
        <meta
          property="og:description"
          content={"All the blog posts written by Vivek Mittal"}
        />
        <meta property="og:title" content={"Vivek Mittal | Blogs"} />
        <meta property="og:image" content={`/images/vivek.jpeg`} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={"Vivek Mittal | Blogs"} />
        <meta
          name="twitter:description"
          content={"All the blog posts written by Vivek Mittal"}
        />
      </Head>
      <Blogs blogsMetaData={context.blogsMetaData} />
    </BaseLayout>
  );
};

export default BlogsPage;

export const getStaticProps: GetStaticProps = async () => {
  const docs = getAllDocs();

  return {
    props: {
      blogsMetaData: docs.map((doc) => doc.meta),
    },
  };
};
