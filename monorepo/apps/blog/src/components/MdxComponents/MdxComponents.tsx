import type { MDXComponents } from "mdx/types";

const MdxComponents = (components: MDXComponents): MDXComponents => {
  return {
    h2: ({ children }) => (
      <h2 className="text-[32px] font-bold my-[16px]">{children}</h2>
    ),
    a: ({ href, children }) => (
      <a className="text-[20px] font-semibold" href={href} target="_blank">
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

      console.log(className);

      if (isCodeBlock) {
        const preLanguage = className.replace("hljs language-", "");

        return (
          <>
            <p className="font-normal text-[12px] absolute right-[10px] bg-transparent">
              {preLanguage}
            </p>
            <code className={className}>{children}</code>
          </>
        );
      } else {
        return (
          <code
            className={`p-[4px] text-[#eb5757] bg-[#87837826] rounded-[4px] font-semibold ${className}`}
          >
            {children}
          </code>
        );
      }
    },
    ...components,
  };
};

export default MdxComponents;
