import type { MDXComponents } from "mdx/types";
import "highlight.js/styles/1c-light.css";

const MdxComponents = (components: MDXComponents): MDXComponents => {
  return {
    p: ({ children }) => <p className="font-normal">{children}</p>,
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
    ul: ({ children }) => <ul className="m-[10px]">{children}</ul>,
    ol: ({ children }) => <ol className="m-[10px]">{children}</ol>,
    li: ({ children }) => <li> - {children}</li>,
    code: ({ children, className }) => {
      const isCodeBlock = className?.startsWith("hljs language-");

      if (isCodeBlock) {
        const preLanguage = className.replace("hljs language-", "");

        return (
          <>
            <p className="font-normal text-[12px] absolute top-[2px] right-[5px] bg-transparent">
              {preLanguage}
            </p>
            <code className="text-[16px] p-[4px] font-normal font-[Paperlogy]">
              {children}
            </code>
          </>
        );
      } else {
        return (
          <code className="text-[16px] p-[2px] text-[#eb5757] bg-[#87837826] rounded-[4px] font-semibold font-[Paperlogy]">
            {children}
          </code>
        );
      }
    },
    ...components,
  };
};

export default MdxComponents;
