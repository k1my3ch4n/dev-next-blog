import type { MDXComponents } from "mdx/types";
import "highlight.js/styles/atom-one-light.css";

const P = ({ children }: { children?: React.ReactNode }) => (
  <p className="text-[17px] leading-[1.9] mb-[1.4em] font-normal">{children}</p>
);

const H2 = ({ children }: { children?: React.ReactNode }) => (
  <h2 className="text-[26px] font-bold mt-[2.5em] mb-[0.75em] pb-[0.5em] border-b border-[var(--border)] leading-[1.4]">
    {children}
  </h2>
);

const H3 = ({ children }: { children?: React.ReactNode }) => (
  <h3 className="text-[21px] font-bold mt-[2em] mb-[0.5em] leading-[1.4]">{children}</h3>
);

const H4 = ({ children }: { children?: React.ReactNode }) => (
  <h4 className="text-[18px] font-bold mt-[1.5em] mb-[0.4em] leading-[1.4]">{children}</h4>
);

const A = ({
  href,
  children,
}: {
  href?: string;
  children?: React.ReactNode;
}) => (
  <a
    className="text-blue-500 underline underline-offset-2 hover:opacity-75 transition-opacity"
    href={href}
    target="_blank"
    rel="noopener noreferrer"
  >
    {children}
  </a>
);

const Blockquote = ({ children }: { children?: React.ReactNode }) => (
  <blockquote className="my-[1.75em] pl-[1.25em] border-l-[4px] border-[var(--accent)] bg-[var(--accent-soft)] dark:bg-[var(--surface-raised)] py-[0.75em] pr-[1.25em] rounded-r-[6px] text-[var(--ink-secondary)]">
    {children}
  </blockquote>
);

const Pre = ({ children }: { children?: React.ReactNode }) => (
  <pre className="my-[1.75em] p-[1.25em] rounded-[8px] overflow-auto relative bg-[#f4f1ed] dark:bg-[#282c34]">
    {children}
  </pre>
);

const Ul = ({ children }: { children?: React.ReactNode }) => (
  <ul className="my-[1em]">{children}</ul>
);

const Ol = ({ children }: { children?: React.ReactNode }) => (
  <ol className="my-[1em]">{children}</ol>
);

const Li = ({ children }: { children?: React.ReactNode }) => (
  <li className="text-[17px] leading-[1.9]">{children}</li>
);

const Hr = () => (
  <hr className="my-[2.5em] border-none h-[1px] bg-[var(--border)]" />
);

const Img = ({ src, alt }: { src?: string; alt?: string }) => (
  <img
    src={src}
    alt={alt ?? ""}
    className="max-w-full rounded-[8px] my-[1.75em] mx-auto block"
  />
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
        <p className="font-normal text-[11px] absolute top-[8px] right-[12px] bg-transparent text-[#888]">
          {preLanguage}
        </p>
        <code className="text-[15px] font-normal font-[Paperlogy] leading-[1.7]">
          {children}
        </code>
      </>
    );
  }

  return (
    <code className="text-[14px] px-[5px] py-[2px] text-[#eb5757] dark:text-[var(--accent)] bg-[#f1efef] dark:bg-[#2a2a35] rounded-[4px] font-semibold font-[Paperlogy]">
      {children}
    </code>
  );
};

const MdxComponents: MDXComponents = {
  p: P,
  h2: H2,
  h3: H3,
  h4: H4,
  a: A,
  blockquote: Blockquote,
  pre: Pre,
  ul: Ul,
  ol: Ol,
  li: Li,
  hr: Hr,
  img: Img,
  code: Code,
};

export default MdxComponents;
