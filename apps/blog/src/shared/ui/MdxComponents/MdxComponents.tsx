import type { MDXComponents } from "mdx/types";
import "highlight.js/styles/atom-one-light.css";

const P = ({ children }: { children?: React.ReactNode }) => (
  <p className="text-[17px] leading-[1.9] mb-[1.4em] font-normal">{children}</p>
);

const H2 = ({ children, id }: { children?: React.ReactNode; id?: string }) => (
  <h2
    id={id}
    className="text-[26px] font-bold mt-[2.5em] mb-[0.75em] pb-[0.5em] border-b border-[var(--border)] leading-[1.4] scroll-mt-[96px]"
  >
    {children}
  </h2>
);

const H3 = ({ children, id }: { children?: React.ReactNode; id?: string }) => (
  <h3 id={id} className="text-[21px] font-bold mt-[2em] mb-[0.5em] leading-[1.4] scroll-mt-[96px]">
    {children}
  </h3>
);

const H4 = ({ children }: { children?: React.ReactNode }) => (
  <h4 className="text-[18px] font-semibold mt-[1.5em] mb-[0.4em] leading-[1.4]">{children}</h4>
);

const Strong = ({ children }: { children?: React.ReactNode }) => (
  <strong className="font-bold">{children}</strong>
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

const Table = ({ children }: { children?: React.ReactNode }) => (
  <div className="overflow-x-auto my-[1.75em]">
    <table className="w-full border-collapse">{children}</table>
  </div>
);

const Thead = ({ children }: { children?: React.ReactNode }) => (
  <thead>{children}</thead>
);

const Tbody = ({ children }: { children?: React.ReactNode }) => (
  <tbody>{children}</tbody>
);

const Tr = ({ children }: { children?: React.ReactNode }) => <tr>{children}</tr>;

const Th = ({ children }: { children?: React.ReactNode }) => (
  <th className="border border-[var(--border)] bg-[var(--surface-raised)] px-[12px] py-[10px] text-left font-semibold text-[15px]">
    {children}
  </th>
);

const Td = ({ children }: { children?: React.ReactNode }) => (
  <td className="border border-[var(--border)] px-[12px] py-[10px] text-[15px] align-middle">
    {children}
  </td>
);

const Img = ({ src, alt }: { src?: string; alt?: string }) => (
  // 마크다운의 원격 이미지는 크기를 미리 알 수 없어 next/image를 적용할 수 없다.
  // eslint-disable-next-line @next/next/no-img-element
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
  strong: Strong,
  table: Table,
  thead: Thead,
  tbody: Tbody,
  tr: Tr,
  th: Th,
  td: Td,
};

export default MdxComponents;
