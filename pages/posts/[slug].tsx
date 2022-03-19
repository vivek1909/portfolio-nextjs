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
        <meta content="IE=edge" httpEquiv="X-UA-Compatible" />
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <meta name="robots" content="follow, index" />
        <link href="/favicon.ico" rel="shortcut icon" />
        <title>Vivek Mittal | {meta.title}</title>
        <meta content={meta.excerpt} name="description" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content={meta.title} />
        <meta property="og:description" content={meta.excerpt} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:image" content={`/images/${meta.featureImage}`} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.excerpt} />
        <meta
          property="twitter:image"
          content={`/images/${meta.featureImage}`}
        />
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
