export interface ExperienceEntry {
  company: string;
  role: string;
  period: string;
  description: string;
}

export interface EducationEntry {
  school: string;
  major: string;
  period: string;
}

export const EXPERIENCE_DATA: ExperienceEntry[] = [
  {
    company: "TWINNY",
    role: "Front-end Developer",
    period: "2022.04 — 2024.04",
    description:
      "자율주행 로봇 스타트업. 관리자 및 유저용 로봇 관제 웹 프로덕트 개발. 실제 물류 센터 납품.",
  },
];

export const EDUCATION_DATA: EducationEntry[] = [
  {
    school: "홍익대학교",
    major: "컴퓨터공학과 졸업",
    period: "2015.03 — 2022.02",
  },
];

export const INTERESTS = [
  "팀의 병목을 찾아 개선하는 일 (빌드, 테스트, 배포 자동화)",
  "프론트엔드 주도 개발 프로세스 (MSW, Storybook)",
  "AI를 활용한 개발 생산성 향상 (Claude Code, Gemini)",
  "기획부터 배포까지 직접 경험하며 기술 역량 확장",
];

export interface HeroStat {
  value: string;
  label: string;
}

export const HERO_STATS: HeroStat[] = [
  { value: "2yr", label: "실무 경력" },
  { value: "72%", label: "빌드 시간 단축" },
  { value: "87%", label: "테스트 커버리지" },
  { value: "6+", label: "프로젝트" },
];
