const GITHUB_LINK =
  "https://github.com/k1my3ch4n/dev-next-blog/blob/main/README.md";
const EMAIL = "k1my3ch4n@gmail.com";

const LINK_CLASS =
  "inline-flex items-center justify-center gap-2 px-4 py-2 bg-[var(--surface-raised)] hover:bg-[var(--accent-soft)] rounded-lg transition-colors border border-[var(--border)]";

const Maintenance = () => {
  return (
    <section className="flex flex-col items-center justify-center min-h-[80vh] px-4">
      <article className="text-center max-w-md">
        <div className="text-6xl mb-6" aria-hidden="true">
          🔧
        </div>
        <h1 className="text-3xl font-bold mb-4">블로그 점검 중</h1>
        <p className="text-lg text-[var(--ink-secondary)] mb-6">
          더 나은 서비스를 위해 블로그를 점검하고 있습니다.
          <br />
          빠른 시일 내에 돌아오겠습니다.
        </p>
        <footer className="border-t border-[var(--border)] pt-6">
          <p className="text-sm text-[var(--ink-muted)] mb-4">
            문의사항이 있으시면 연락해주세요
          </p>
          <address className="flex flex-col gap-3 not-italic">
            <a href={`mailto:${EMAIL}`} className={LINK_CLASS}>
              <span aria-hidden="true">📧</span>
              <span>{EMAIL}</span>
            </a>
            <a
              href={GITHUB_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className={LINK_CLASS}
            >
              <span aria-hidden="true">💻</span>
              <span>GitHub</span>
            </a>
          </address>
        </footer>
      </article>
    </section>
  );
};

export default Maintenance;
