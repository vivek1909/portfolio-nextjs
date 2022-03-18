import fs from "fs";
import { join } from "path";
import matter from "gray-matter";

const docsDirectory = join(process.cwd(), "posts");

export const getDocBySlug = (slug: string) => {
  const realSlug = slug.replace(/\.mdx$/, "");
  const fullPath = join(docsDirectory, `${realSlug}.mdx`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  return { slug: realSlug, meta: data, content };
};

export const getAllDocs = () => {
  const slugs = fs.readdirSync(docsDirectory);
  const docs = slugs.map((slug) => getDocBySlug(slug));

  return docs;
};
