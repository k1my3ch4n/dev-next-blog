import { remark } from "remark";
import { visit } from "unist-util-visit";
import { toString } from "mdast-util-to-string";
import GithubSlugger from "github-slugger";

export interface TocHeading {
  id: string;
  text: string;
  depth: 2 | 3;
}

const extractHeadings = (markdown: string): TocHeading[] => {
  const tree = remark().parse(markdown);
  const slugger = new GithubSlugger();
  const headings: TocHeading[] = [];

  visit(tree, "heading", (node) => {
    if (node.depth !== 2 && node.depth !== 3) {
      return;
    }

    const text = toString(node);
    const id = slugger.slug(text);

    headings.push({ id, text, depth: node.depth });
  });

  return headings;
};

export default extractHeadings;
