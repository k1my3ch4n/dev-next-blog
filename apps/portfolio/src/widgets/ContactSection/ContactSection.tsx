import { Section } from "@shared/ui/Section";
import { ContactCard } from "@shared/ui/ContactCard";
import { LINKS } from "@shared/data";

const ContactSection = () => {
  return (
    <Section id="contact">
      <p className="section-label">Contact</p>
      <h2 className="section-title mb-2">연락처</h2>
      <hr className="accent-line mb-3" />
      <p className="text-sm text-[var(--ink-secondary)] mb-8">
        함께 성장할 수 있는 팀을 찾고 있습니다.
      </p>

      <address className="grid sm:grid-cols-2 gap-3 not-italic">
        <ContactCard
          icon={<MailIcon />}
          label="Email"
          value="k1my3ch4n@gmail.com"
          href={LINKS.EMAIL}
        />
        <ContactCard
          icon={<GithubIcon />}
          label="GitHub"
          value="github.com/k1my3ch4n"
          href={LINKS.GITHUB}
        />
        <ContactCard
          icon={<BookIcon />}
          label="Blog"
          value="blog.k1my3ch4n.xyz"
          href={LINKS.BLOG}
        />
        <ContactCard
          icon={<FileIcon />}
          label="Resume"
          value="이력서 (Notion)"
          href={LINKS.RESUME}
        />
      </address>
    </Section>
  );
};

const MailIcon = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
    <polyline points="22,6 12,13 2,6" />
  </svg>
);

const GithubIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
  </svg>
);

const BookIcon = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
    <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
  </svg>
);

const FileIcon = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
    <polyline points="14 2 14 8 20 8" />
  </svg>
);

export default ContactSection;
