import type { MDXComponents } from "mdx/types";
import "highlight.js/styles/1c-light.css";

const MdxComponents = (components: MDXComponents): MDXComponents => {
  return {
    p: ({ children }) => (
      <p className="text-[20px] font-normal leading-normal">{children}</p>
    ),
    h2: ({ children }) => (
      <h2 className="text-[32px] font-bold my-[16px]">{children}</h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-[24px] font-bold my-[16px]">{children}</h3>
    ),
    a: ({ href, children }) => (
      <a
        className="text-[20px] font-semibold text-blue-600 underline"
        href={href}
        target="_blank"
      >
        {children}
      </a>
    ),
    pre: ({ children }) => (
      <pre className="m-[10px] p-[10px] bg-[#87837826] relative overflow-auto rounded-[8px]">
        {children}
      </pre>
    ),
    li: ({ children }) => <li> - {children}</li>,
    code: ({ children, className }) => {
      const isCodeBlock = className?.startsWith("hljs language-");

      if (isCodeBlock) {
        const preLanguage = className.replace("hljs language-", "");

        return (
          <>
            <p className="font-normal text-[12px] absolute right-[10px] bg-transparent">
              {preLanguage}
            </p>
            <code className="p-[4px] font-normal">{children}</code>
          </>
        );
      } else {
        return (
          <code className="p-[4px] text-[#eb5757] bg-[#87837826] rounded-[4px] font-semibold">
            {children}
          </code>
        );
      }
    },
    ...components,
  };
};

export default MdxComponents;
