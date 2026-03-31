import { ImageBox } from "@repo/components";
import { MainPhoto } from "@shared/assets";
import { PROFILE_INFO, INTRODUCE_TEXTS, LINKS } from "@shared/config";
import { MailIcon, GithubIcon, BookIcon, QuickLink } from "@shared/ui";

const Introduce = () => {
  return (
    <section className="w-full mb-16">
      <p className="section-label">Introduce</p>
      <h2 className="section-title mb-8">소개</h2>

      <div className="grid grid-cols-1 md:grid-cols-[auto_1fr] gap-10 items-start">
        <div className="flex flex-col items-center gap-3">
          <div className="w-[120px] h-[120px] rounded-[20px] overflow-hidden shadow-[0_4px_20px_color-mix(in_srgb,var(--accent)_20%,transparent)]">
            <ImageBox
              Image={MainPhoto}
              width="120px"
              height="120px"
              imageClassName="rounded-[20px]"
            />
          </div>
          <p className="font-semibold text-sm">{PROFILE_INFO.name}</p>
        </div>

        <div className="flex flex-col gap-5">
          <div>
            {INTRODUCE_TEXTS.headers.map((header, index) => (
              <h3
                key={index}
                className="text-xl md:text-2xl font-bold leading-relaxed"
              >
                {header}
              </h3>
            ))}
          </div>

          <nav className="flex flex-wrap gap-2.5" aria-label="외부 링크">
            <QuickLink
              href={`mailto:${PROFILE_INFO.email}`}
              icon={<MailIcon size={15} />}
              label="Email"
            />
            <QuickLink
              href={LINKS.GITHUB}
              icon={<GithubIcon size={15} />}
              label="GitHub"
            />
            <QuickLink
              href={LINKS.PORTFOLIO}
              icon={<BookIcon size={15} />}
              label="Portfolio"
            />
          </nav>
        </div>
      </div>
    </section>
  );
};

export default Introduce;
