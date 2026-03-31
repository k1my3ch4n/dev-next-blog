import { ContactCard, GithubIcon, BookIcon } from "@repo/components";
import { EXTRA_DATA } from "@shared/config";

const ICON_MAP = {
  github: <GithubIcon size={18} />,
  portfolio: <BookIcon size={18} />,
} as const;

const Extra = () => {
  return (
    <section className="w-full mb-16">
      <p className="section-label">ETC</p>
      <h2 className="section-title mb-8">외부 링크</h2>

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
