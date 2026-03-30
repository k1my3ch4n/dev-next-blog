import { EXTRA_DATA } from "@shared/config";
import { ContactCard, GithubIcon, BookIcon } from "@shared/ui";

const ICON_MAP = {
  github: <GithubIcon size={18} />,
  portfolio: <BookIcon size={18} />,
} as const;

const Extra = () => {
  return (
    <section className="w-full mb-16">
      <p className="sec-label">ETC</p>
      <h2 className="sec-title mb-1">외부 링크</h2>
      <div className="accent-line mb-8"></div>

      <div className="flex flex-col gap-3">
        {EXTRA_DATA.map(({ icon, label, value, href }) => (
          <ContactCard
            key={label}
            icon={ICON_MAP[icon]}
            label={label}
            value={value}
            href={href}
          />
        ))}
      </div>
    </section>
  );
};

export default Extra;
