import { Section } from "@shared/ui/Section";
import { GithubIcon, BookIcon, FileIcon, MailIcon } from "@shared/ui/Icons";
import { QuickLink } from "@shared/ui/QuickLink";
import { LINKS } from "@shared/data";

const Hero = () => {
  return (
    <Section id="hero" className="py-16 md:py-24">
      <h1 className="text-[clamp(2rem,5vw,3rem)] font-black leading-[1.15] -tracking-wide text-[var(--ink)] mb-5">
        문제를 정의하고
        <br />
        기술로 해결하는
        <span className="text-[var(--accent)]"> 프론트 엔드 </span>
        개발자,
        <br />
        <span className="text-[var(--accent)]">김예찬</span>입니다.
      </h1>
      <p className="text-[1.0625rem] leading-[1.7] text-[var(--ink-secondary)] max-w-[540px] mb-8">
        2년간 자율주행 로봇 스타트업에서 실제 물류 센터에 납품되는 프로덕트를
        만들며, 현장의 문제를 기술로 해결하는 경험을 쌓았습니다. 아래에서 제가
        만든 것들을 직접 확인해 보세요.
      </p>
      <nav className="flex flex-wrap gap-2.5" aria-label="외부 링크">
        <QuickLink
          href={LINKS.GITHUB}
          icon={<GithubIcon size={15} />}
          label="GitHub"
        />
        <QuickLink
          href={LINKS.BLOG}
          icon={<BookIcon size={15} />}
          label="Blog"
        />
        <QuickLink
          href={LINKS.RESUME}
          icon={<FileIcon size={15} />}
          label="Resume"
        />
        <QuickLink
          href={LINKS.EMAIL}
          icon={<MailIcon size={15} />}
          label="Email"
        />
      </nav>
    </Section>
  );
};

export default Hero;
