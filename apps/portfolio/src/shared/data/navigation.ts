export interface NavSection {
  id: string;
  label: string;
}

export const NAV_SECTIONS: NavSection[] = [
  { id: "hero", label: "메인" },
  { id: "projects", label: "프로젝트" },
  { id: "about", label: "소개" },
  { id: "skills", label: "기술" },
  { id: "contact", label: "연락처" },
];
