const Footer = () => (
  <footer className="py-8 text-center border-t border-[var(--border)]">
    <p className="text-xs text-[var(--ink-muted)]">
      © {new Date().getFullYear()} 김예찬 · Built with Next.js
    </p>
  </footer>
);

export default Footer;
