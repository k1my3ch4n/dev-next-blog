import { Section } from "@shared/ui/Section";
import { StatCard } from "@shared/ui/StatCard";
import { LINKS, HERO_STATS } from "@shared/data";

const Hero = () => {
  return (
    <Section id="hero" className="py-16 md:py-24">
      <p className="hero-tag mb-5">Front-end Developer</p>
      <h1 className="hero-title mb-5">
        문제를 정의하고
        <br />
        기술로 해결하는 개발자,
        <br />
        <span className="text-[var(--accent)]">김예찬</span>입니다.
      </h1>
      <p className="hero-sub mb-8">
        2년간 자율주행 로봇 스타트업에서 실제 물류 센터에 납품되는 프로덕트를
        만들며, 현장의 문제를 기술로 해결하는 경험을 쌓았습니다. 아래에서 제가
        만든 것들을 직접 확인해 보세요.
      </p>
      <nav className="flex flex-wrap gap-2.5" aria-label="외부 링크">
        <QuickLink href={LINKS.GITHUB} icon={<GithubIcon />} label="GitHub" />
        <QuickLink href={LINKS.BLOG} icon={<BookIcon />} label="Blog" />
        <QuickLink href={LINKS.RESUME} icon={<FileIcon />} label="Resume" />
        <QuickLink href={LINKS.EMAIL} icon={<MailIcon />} label="Email" />
      </nav>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-10">
        {HERO_STATS.map((stat) => (
          <StatCard key={stat.label} value={stat.value} label={stat.label} />
        ))}
      </div>
    </Section>
  );
};

const QuickLink = ({
  href,
  icon,
  label,
}: {
  href: string;
  icon: React.ReactNode;
  label: string;
}) => (
  <a
    href={href}
    target={href.startsWith("mailto:") ? undefined : "_blank"}
    rel="noopener noreferrer"
    className="hero-link"
  >
    {icon}
    {label}
  </a>
);

const GithubIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
  </svg>
);

const BookIcon = () => (
  <svg
    width="15"
    height="15"
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
    width="15"
    height="15"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
    <polyline points="14 2 14 8 20 8" />
  </svg>
);

const MailIcon = () => (
  <svg
    width="15"
    height="15"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
    <polyline points="22,6 12,13 2,6" />
  </svg>
);

export default Hero;
