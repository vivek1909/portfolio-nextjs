import { GetStaticProps, NextPage } from "next";
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
