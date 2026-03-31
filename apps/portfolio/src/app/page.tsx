import { Hero } from "@widgets/Hero";
import { ProjectSection } from "@widgets/ProjectSection";
import { AboutSection } from "@widgets/AboutSection";
import { SkillSection } from "@widgets/SkillSection";
import { ContactSection } from "@widgets/ContactSection";
import {
  generatePersonJsonLd,
  generateWebSiteJsonLd,
} from "@shared/lib/jsonLd";

export default function Home() {
  const personJsonLd = generatePersonJsonLd();
  const webSiteJsonLd = generateWebSiteJsonLd();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webSiteJsonLd) }}
      />
      <Hero />
      <ProjectSection />
      <AboutSection />
      <SkillSection />
      <ContactSection />
    </>
  );
}
