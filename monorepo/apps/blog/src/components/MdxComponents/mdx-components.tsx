import type { MDXComponents } from "mdx/types";

const useMDXComponents = (components: MDXComponents): MDXComponents => {
  return {
    h1: ({ children }) => (
      <h1 style={{ color: "red", fontSize: "48px" }}>{children}</h1>
    ),
    pre: ({ children }) => <pre>{children}</pre>,
    li: ({ children }) => <li> - {children}</li>,
    ...components,
  };
};

export default useMDXComponents;
