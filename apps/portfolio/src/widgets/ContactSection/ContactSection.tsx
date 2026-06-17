import {
  ContactCard,
  GithubIcon,
  BookIcon,
  FileIcon,
  MailIcon,
} from "@repo/components";
import { Section } from "@shared/ui/Section";
import { SectionHeader } from "@shared/ui/SectionHeader";
import { LINKS } from "@shared/data";

const ContactSection = () => {
  return (
    <Section id="contact">
      <SectionHeader
        label="Contact"
        title="연락처"
        description="함께 성장할 수 있는 팀을 찾고 있습니다."
        descriptionClassName="text-sm text-[var(--ink-secondary)] mt-3"
        className="mb-8"
      />

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
