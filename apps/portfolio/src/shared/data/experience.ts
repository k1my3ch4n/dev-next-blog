import type { ExperienceEntry, EducationEntry, HeroStat, KeyAccomplishment } from "@shared/types/experience";

export type { ExperienceEntry, EducationEntry, HeroStat, KeyAccomplishment } from "@shared/types/experience";

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

export const KEY_ACCOMPLISHMENTS: KeyAccomplishment[] = [
  {
    title: "빌드 시간 72% 단축",
    description:
      "Vite 마이그레이션 및 모노레포 도입으로 빌드 2:20 → 0:40, 공통 모듈화로 유지보수성 극대화",
  },
  {
    title: "MSW 기반 프론트 주도 개발 체계 구축",
    description:
      "백엔드 의존성을 제거하여 개발 병목 해소, 디자인팀과의 UI 검증 프로세스 최적화",
  },
  {
    title: "테스트 커버리지 20% → 87%",
    description:
      "Jest + RTL + MSW 테스트 전략 수립으로 안정적인 리팩토링 환경 확보",
  },
  {
    title: "AI 및 오픈소스 활용 극대화",
    description:
      "Claude Code, Gemini API 결합으로 기술적 한계 돌파 및 Actions 마켓플레이스 릴리즈",
  },
];

export const HERO_STATS: HeroStat[] = [
  { value: "2yr", label: "실무 경력" },
  { value: "72%", label: "빌드 시간 단축" },
  { value: "87%", label: "테스트 커버리지" },
  { value: "6+", label: "프로젝트" },
];
