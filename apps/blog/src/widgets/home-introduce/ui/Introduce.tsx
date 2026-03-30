import { ImageBox } from "@repo/components";
import { MainPhoto } from "@shared/assets";
import { PROFILE_INFO, INTRODUCE_TEXTS, LINKS } from "@shared/config";
import { ContactCard, MailIcon, GithubIcon, BookIcon } from "@shared/ui";

const Introduce = () => {
  return (
    <section className="w-full mb-16">
      <p className="sec-label">Introduce</p>
      <h2 className="sec-title mb-1">소개</h2>
      <div className="accent-line mb-8"></div>

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
          <p className="text-xs text-[var(--ink-muted)]">
            {PROFILE_INFO.address}
          </p>
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

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
            <ContactCard
              icon={<MailIcon size={18} />}
              label="Email"
              value={PROFILE_INFO.email}
              href={`mailto:${PROFILE_INFO.email}`}
            />
            <ContactCard
              icon={<GithubIcon size={18} />}
              label="GitHub"
              value="k1my3ch4n"
              href={LINKS.GITHUB}
            />
            <ContactCard
              icon={<BookIcon size={18} />}
              label="Portfolio"
              value="portfolio"
              href={LINKS.PORTFOLIO}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Introduce;
