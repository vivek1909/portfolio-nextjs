import { remark } from "remark";
import html from "remark-html";
import prism from "remark-prism";

export const markdownToHtml = async (markdown: any) => {
  const result = await remark()
    // https://github.com/sergioramos/remark-prism/issues/265
    .use(html, { sanitize: false })
    // @ts-ignore
    .use(prism)
    .process(markdown);

  return result.toString();
};
