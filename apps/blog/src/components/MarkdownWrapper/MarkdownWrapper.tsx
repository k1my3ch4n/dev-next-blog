import styles from './MarkdownWrapper.module.scss';
import MarkdownToJSX from 'markdown-to-jsx';
import hljs from 'highlight.js';
import 'highlight.js/styles/lightfair.css';

const MarkdownWrapper = ({ markdown }: { markdown: string }) => {
  const PreComponent = ({ ...props }: React.HTMLAttributes<HTMLElement>) => {
    return <pre className={styles.pre}>{props.children}</pre>;
  };

  const CodeComponent = ({ className, children }: { className?: string; children: string }) => {
    const preLanguage = className ? className.replace('lang-', '') : 'plaintext'; // 언어 감지
    const highlightedCode = hljs.highlight(children, { language: preLanguage }).value;

    return (
      <>
        {preLanguage !== 'plaintext' && <p className={styles.preLanguage}>{preLanguage}</p>}
        <code dangerouslySetInnerHTML={{ __html: highlightedCode }} />
      </>
    );
  };

  const LiComponent = ({ ...props }: React.LiHTMLAttributes<HTMLLIElement>) => {
    return <li> - {props.children}</li>;
  };

  return (
    <div className={styles.wrapper}>
      <MarkdownToJSX
        options={{
          overrides: {
            pre: PreComponent,
            code: CodeComponent,
            li: LiComponent,
          },
        }}
      >
        {markdown}
      </MarkdownToJSX>
    </div>
  );
};

export default MarkdownWrapper;
