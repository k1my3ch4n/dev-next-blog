import {
  ImageBox,
  GithubIcon,
  BookIcon,
  FileIcon,
  MailIcon,
  QuickLink,
} from "@repo/components";
import { MainPhoto } from "@shared/assets/images";
import { Section } from "@shared/ui/Section";
import { LINKS } from "@shared/data";

const Hero = () => {
  return (
    <Section id="hero" className="py-16 md:py-24">
      <div className="flex items-center gap-4 mb-6">
        <div className="w-[80px] h-[80px] rounded-full overflow-hidden shadow-[0_4px_20px_color-mix(in_srgb,var(--accent)_20%,transparent)] shrink-0">
          <ImageBox
            Image={MainPhoto}
            width="80px"
            height="80px"
            imageClassName="rounded-full"
          />
        </div>
        <div>
          <p className="font-bold text-lg">김예찬</p>
          <p className="text-xs text-[var(--ink-muted)]">경기 성남시 분당구</p>
          <p className="text-xs text-[var(--ink-muted)]">010-2695-7092</p>
        </div>
      </div>
      <h1 className="text-[clamp(2rem,5vw,3rem)] font-black leading-[1.15] -tracking-wide text-[var(--ink)] mb-5">
        기술로
        <span className="text-[var(--accent)]"> 팀의 병목을 뚫고,</span>
        <br />
        제품의 가치를 빠르게
        <br />
        전달하는 개발자,{" "}
        <span className="text-[var(--accent)]">김예찬</span>입니다.
      </h1>
      <p className="text-[1.0625rem] leading-[1.7] text-[var(--ink-secondary)] max-w-[540px] mb-8 break-keep">
        2년간 자율주행 로봇 스타트업에서 빌드 72% 단축, MSW 기반 프론트 주도
        개발 체계 구축, 테스트 커버리지 87% 달성 등 팀의 병목을 직접 찾아
        해결했습니다. 아래에서 제가 만든 것들을 확인해 보세요.
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
