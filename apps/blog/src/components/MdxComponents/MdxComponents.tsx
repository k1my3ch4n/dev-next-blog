import type { MDXComponents } from "mdx/types";
import "highlight.js/styles/1c-light.css";

const P = ({ children }: { children?: React.ReactNode }) => (
  <p className="font-normal">{children}</p>
);

const H2 = ({ children }: { children?: React.ReactNode }) => (
  <h2 className="text-[32px] font-bold my-[16px]">{children}</h2>
);

const H3 = ({ children }: { children?: React.ReactNode }) => (
  <h3 className="text-[24px] font-bold my-[16px]">{children}</h3>
);

const A = ({ href, children }: { href?: string; children?: React.ReactNode }) => (
  <a
    className="text-[20px] font-semibold text-blue-600 underline"
    href={href}
    target="_blank"
  >
    {children}
  </a>
);

const Pre = ({ children }: { children?: React.ReactNode }) => (
  <pre className="m-[10px] p-[10px] bg-[#87837826] relative overflow-auto rounded-[8px]">
    {children}
  </pre>
);

const Ul = ({ children }: { children?: React.ReactNode }) => (
  <ul className="m-[10px]">{children}</ul>
);

const Ol = ({ children }: { children?: React.ReactNode }) => (
  <ol className="m-[10px]">{children}</ol>
);

const Li = ({ children }: { children?: React.ReactNode }) => (
  <li> - {children}</li>
);

const Code = ({
  children,
  className,
}: {
  children?: React.ReactNode;
  className?: string;
}) => {
  const isCodeBlock = className?.startsWith("hljs language-");

  if (isCodeBlock && className) {
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
  }

  return (
    <code className="text-[16px] p-[2px] text-[#eb5757] bg-[#87837826] rounded-[4px] font-semibold font-[Paperlogy]">
      {children}
    </code>
  );
};

const MdxComponents: MDXComponents = {
  p: P,
  h2: H2,
  h3: H3,
  a: A,
  pre: Pre,
  ul: Ul,
  ol: Ol,
  li: Li,
  code: Code,
};

export default MdxComponents;
