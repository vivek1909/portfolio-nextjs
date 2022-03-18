import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { getAllDocs, getDocBySlug } from "../../utils/docs";
import { markdownToHtml } from "../../utils/markdown";

interface Props {
  meta: Record<string, unknown>;
  content: string;
}

const BlogPostPage: NextPage<Props> = () => {
  return <div>hello from post page</div>;
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
