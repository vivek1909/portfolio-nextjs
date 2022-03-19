import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import Head from "next/head";
import { BaseLayout } from "../../lib/layouts/BaseLayout";
import { BlogPost } from "../../lib/components/BlogPost/BlogPost";
import { getAllDocs, getDocBySlug } from "../../utils/docs";
import { markdownToHtml } from "../../utils/markdown";
import { IBlogMetaData } from "../../types/blog";
import { MenuItems } from "../../types/menu";

interface Props {
  meta: IBlogMetaData;
  content: string;
}

const BlogPostPage: NextPage<Props> = ({ content, meta }) => {
  return (
    <BaseLayout activeMenu={MenuItems.BLOGS}>
      <Head>
        <meta charSet="utf-8" />
        <link
          rel="stylesheet"
          href="https://unpkg.com/prismjs@0.0.1/themes/prism-tomorrow.css"
        />
      </Head>
      <BlogPost content={content} meta={meta} />
    </BaseLayout>
  );
};

export default BlogPostPage;

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const doc = getDocBySlug(params?.slug as string);
  const content = await markdownToHtml(doc.content || "");

  return {
    props: {
      ...doc,
      content,
    },
  };
};

export const getStaticPaths: GetStaticPaths = () => {
  const docs = getAllDocs();

  return {
    paths: docs.map((doc) => {
      return {
        params: {
          slug: doc.slug,
        },
      };
    }),
    fallback: false,
  };
};
