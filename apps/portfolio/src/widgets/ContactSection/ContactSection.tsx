import { Section } from "@shared/ui/Section";
import { ContactCard } from "@shared/ui/ContactCard";
import { GithubIcon, BookIcon, FileIcon, MailIcon } from "@shared/ui/Icons";
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
          icon={<MailIcon size={18} />}
          label="Email"
          value="k1my3ch4n@gmail.com"
          href={LINKS.EMAIL}
        />
        <ContactCard
          icon={<GithubIcon size={18} />}
          label="GitHub"
          value="github.com/k1my3ch4n"
          href={LINKS.GITHUB}
        />
        <ContactCard
          icon={<BookIcon size={18} />}
          label="Blog"
          value="blog.k1my3ch4n.xyz"
          href={LINKS.BLOG}
        />
        <ContactCard
          icon={<FileIcon size={18} />}
          label="Resume"
          value="이력서 (Notion)"
          href={LINKS.RESUME}
        />
      </address>
    </Section>
  );
};

export default ContactSection;
