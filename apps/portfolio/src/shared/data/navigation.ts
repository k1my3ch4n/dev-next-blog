export interface NavSection {
  id: string;
  label: string;
}

export const NAV_SECTIONS: NavSection[] = [
  { id: "hero", label: "메인" },
  { id: "accomplishments", label: "핵심 성과" },
  { id: "projects", label: "프로젝트" },
  { id: "hackathon", label: "해커톤" },
  { id: "about", label: "소개" },
  { id: "skills", label: "기술" },
  { id: "contact", label: "연락처" },
];
