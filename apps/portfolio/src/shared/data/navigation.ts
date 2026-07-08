export interface NavSection {
  id: string;
  label: string;
}

export const NAV_SECTIONS: NavSection[] = [
  { id: "hero", label: "메인" },
  { id: "accomplishments", label: "핵심 성과" },
  { id: "skills", label: "기술" },
  { id: "works", label: "작업" },
  { id: "about", label: "소개" },
  { id: "contact", label: "연락처" },
];
