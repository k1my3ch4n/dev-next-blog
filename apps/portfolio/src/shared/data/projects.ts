import {
  TwinnyLogo,
  MainLogo,
  HRAHLogo,
  AIGithubActions,
} from "@shared/assets/images";
import { LINKS } from "./links";

export type ProjectType = "career" | "personal" | "openSource";

export type SvgComponent = React.FC<React.SVGProps<SVGSVGElement>>;

export interface ProjectLink {
  label: string;
  url: string;
}

export interface StoryPoint {
  title: string;
  problem: string;
  solution: string;
  extension: string;
}

export interface ProjectDetail {
  id: string;
  title: string;
  description: string;
  shortDescription: string;
  thumbnail: SvgComponent;
  type: ProjectType;
  period: string;
  techStack: string[];
  stories: StoryPoint[];
  gradient: string;
  relatedLinks: ProjectLink[];
  externalUrl?: string;
  featured?: boolean;
}

export const PROJECT_DETAILS: Record<string, ProjectDetail> = {
  syngrid: {
    id: "syngrid",
    title: "Syngrid — 실시간 멀티 뷰포트 반응형 디자인 뷰어",
    description:
      "실시간으로 여러 디바이스 뷰포트를 한 캔버스에서 동시에 확인하는 반응형 디자인 협업 도구.",
    shortDescription:
      "실시간 멀티 뷰포트 반응형 디자인 뷰어. AI 페어프로그래밍으로 개발.",
    thumbnail: MainLogo,
    type: "personal",
    period: "2026.02 — 2026.03",
    techStack: [
      "React",
      "WebSocket",
      "Proxy Server",
      "Claude Code",
      "GCP Cloud Run",
    ],
    gradient: "linear-gradient(135deg, #0f172a, #1e3a5f)",
    featured: true,
    stories: [
      {
        title: "외부 사이트 iframe 로드 불가 → HTTP 프록시 서버 설계",
        problem:
          "CORS/CSP 보안 정책으로 외부 웹사이트를 iframe에 로드할 수 없음",
        solution:
          "URL 리라이팅 + 브릿지 스크립트 주입 방식의 프록시 서버를 설계 및 AI와의 페어 프로그래밍으로 구현",
        extension:
          "프록시된 사이트의 정적 리소스 404 문제를 직접 디버깅하여 수정",
      },
      {
        title: "실시간 멀티 유저 협업 → WebSocket 도입",
        problem:
          "HTTP 요청 기반으로는 커서 위치, 뷰포트 변경, URL/스크롤 상태를 실시간으로 공유할 수 없음",
        solution:
          "웹소켓을 도입해 양방향 실시간 통신 구축 → 커서 공유, 뷰포트/URL/스크롤 동기화",
        extension:
          "OWNER/EDITOR/VIEWER 3단계 권한 체계 설계, Rate Limiting 적용으로 서버 부하 제어",
      },
    ],
    relatedLinks: [{ label: "Notion", url: LINKS.SYNGRID_NOTION }],
    externalUrl: LINKS.SYNGRID_NOTION,
  },
  userRobot: {
    id: "userRobot",
    title: "유저용 로봇 관제 웹 프로덕트 (오더피킹)",
    description:
      "사용자를 위한 실시간 로봇 관제 대시보드 및 엑셀 기반 WMS 작업 관리 시스템.",
    shortDescription: "실시간 대시보드 · MSW · 빌드 72%↓ · 테스트 87%",
    thumbnail: TwinnyLogo,
    type: "career",
    period: "2023.01 — 2024.04",
    techStack: [
      "React",
      "TypeScript",
      "Vite",
      "MSW",
      "Jest",
      "Storybook",
      "GitHub Actions",
    ],
    gradient: "linear-gradient(135deg, #1a1a2e, #312e81)",
    stories: [
      {
        title: "실시간 대시보드 & WMS 개발",
        problem:
          "현장에서 로봇의 위치, 상태, 작업 현황을 실시간으로 확인하기 힘듦",
        solution:
          "실시간 대시보드를 개발해 로봇 및 작업 상태를 실시간으로 확인 가능",
        extension:
          "엑셀 기반 WMS 작업 생성 및 지시 기능으로 현장에서 쉽게 작업 시작/확인 가능",
      },
      {
        title: "MSW 기반 프론트엔드 주도 개발 체계 구축",
        problem:
          "서버 API 개발 지연 시 프론트 작업이 블로킹, 디자인팀은 실제 데이터 없이 UI 검증 불가",
        solution:
          "MSW 도입으로 API 명세서 기반 프론트 선행 개발 → 프론트 주도 프로세스 정립",
        extension:
          "MSW 활용 Storybook 도입 → 디자인팀이 실제 데이터 흐름 반영된 UI 직접 확인 가능",
      },
      {
        title: "빌드 시간 72% 단축 (CRA → Vite + Monorepo)",
        problem: "CRA 기반 빌드가 2분 이상 소요, 비슷한 레포 간 공통 코드 중복",
        solution:
          "CRA → Vite 마이그레이션으로 빌드 시간 72% 단축 (2:20 → 0:40)",
        extension:
          "Yarn Workspace Monorepo 적용, 공통 hook/component 모듈화, CI/CD 자동화",
      },
      {
        title: "테스트 커버리지 20% → 87% 달성",
        problem: "낮은 테스트 커버리지로 리팩토링 시 사이드 이펙트 검증 불가",
        solution:
          "Jest + React Testing Library + MSW 조합한 테스트 전략 수립 및 실행",
        extension: "커버리지 87% 달성, CI 파이프라인에 테스트 게이트 추가",
      },
    ],
    relatedLinks: [{ label: "TWINNY 홈페이지", url: LINKS.TWINNY }],
  },
  managerRobot: {
    id: "managerRobot",
    title: "관리자용 로봇 관제 웹 프로덕트",
    description: "관리자를 위한 로봇 및 인프라 관제 웹 프로덕트 개발.",
    shortDescription: "TS 전환 95%+ · 유효성 검사 30+ 모듈화",
    thumbnail: TwinnyLogo,
    type: "career",
    period: "2022.04 — 2023.01",
    techStack: ["React", "TypeScript", "Storybook"],
    gradient: "linear-gradient(135deg, #1e1a2e, #3b1a5c)",
    stories: [
      {
        title: "TypeScript 전환 및 모듈화",
        problem: "JavaScript 기반으로 타입 안전성 부족, 유효성 검사 코드 중복",
        solution:
          "JavaScript → TypeScript 전환 (95% 이상), 30개 이상 유효성 검사 모듈화",
        extension: "코드 재사용성 향상, 타입 안전성 확보로 런타임 에러 감소",
      },
    ],
    relatedLinks: [{ label: "TWINNY 홈페이지", url: LINKS.TWINNY }],
  },
  hackerRankAiHelper: {
    id: "hackerRankAiHelper",
    title: "HackerRank AI Helper",
    description: "영어 코딩 문제 AI 자동 번역, 요약, 단계별 힌트 제공 서비스.",
    shortDescription: "AI 번역 · 요약 · 힌트",
    thumbnail: HRAHLogo,
    type: "personal",
    period: "2025.08 — 2025.09",
    techStack: [
      "Next.js",
      "Gemini API",
      "Zustand",
      "Tailwind CSS",
      "GCP Cloud Run",
    ],
    gradient: "linear-gradient(135deg, #1a2e1a, #2d5c2d)",
    stories: [
      {
        title: "영어 문제 이해 시간 → AI 자동 번역/요약으로 해소",
        problem: "HackerRank 문제가 영어 전용이라 문제 이해에 시간 소요",
        solution:
          "Gemini API 사용해 문제 자동 번역, 요약, 단계별 힌트 제공 기능 구현",
        extension:
          "Zustand 전역 상태 관리 및 모바일 반응형 서비스 추가, GCP Cloud Run 배포",
      },
    ],
    relatedLinks: [
      { label: "Notion", url: LINKS.HRAH_NOTION },
      {
        label: "GitHub",
        url: "https://github.com/k1my3ch4n/HackerRankAIHelper",
      },
    ],
  },
  monorepo: {
    id: "monorepo",
    title: "Monorepo로 Blog & Portfolio 생성",
    description: "CSR → ISR 전환, PostgreSQL + GraphQL 백엔드 직접 구축.",
    shortDescription: "Next.js · GraphQL · Docker",
    thumbnail: MainLogo,
    type: "personal",
    period: "2025.05 — 2025.06",
    techStack: [
      "Next.js",
      "GraphQL",
      "Apollo Server",
      "PostgreSQL",
      "Docker",
      "GitHub Actions",
    ],
    gradient: "linear-gradient(135deg, #2e1a24, #5c2d44)",
    stories: [
      {
        title: "CSR 한계 → ISR 기반 렌더링 전략 재설계",
        problem: "CSR 기반이라 검색 엔진에 콘텐츠가 노출되지 않음",
        solution:
          "Vite → Next.js 마이그레이션, generateStaticParams + revalidate ISR 적용",
        extension: "Sass → Tailwind CSS 적용",
      },
      {
        title: "프론트엔드만으로는 한계 → 백엔드 직접 구축",
        problem: "블로그 포스트 관리를 위한 서버가 필요함",
        solution:
          "PostgreSQL + Apollo Server + GraphQL로 데이터 레이어 직접 설계 및 구축",
        extension: "GitHub Actions + GCP Cloud Run + Docker로 CI/CD 자동화",
      },
    ],
    relatedLinks: [
      { label: "Blog", url: LINKS.BLOG },
      { label: "Portfolio", url: "https://portfolio.k1my3ch4n.xyz/" },
      { label: "GitHub", url: "https://github.com/k1my3ch4n/dev-next-blog" },
    ],
  },
  aiGithubActions: {
    id: "aiGithubActions",
    title: "AI GitHub Actions (오픈소스)",
    description:
      "Claude/Gemini 기반 AI 코드 리뷰 Action & 테스트 헬퍼 Action. GitHub Marketplace 공개.",
    shortDescription: "AI 코드 리뷰 & 테스트 헬퍼, Marketplace 공개",
    thumbnail: AIGithubActions,
    type: "openSource",
    period: "2026.01",
    techStack: ["Claude", "Gemini", "GitHub Actions", "TypeScript"],
    gradient: "linear-gradient(135deg, #0c0c2e, #3d1a5c)",
    stories: [
      {
        title: "1인 개발 코드 리뷰 공백 → AI 자동화",
        problem: "1인 개발 시 코드 리뷰나 테스트 코드 피드백을 받기 어려움",
        solution:
          "Claude/Gemini 사용해 코드 리뷰 Action과 테스트 헬퍼 Action 개발",
        extension: "GitHub Marketplace에 공개 후 개인 프로젝트에 적용",
      },
    ],
    relatedLinks: [
      {
        label: "AI-Code-Reviewer",
        url: "https://github.com/marketplace/actions/ai-code-reviewer-by-k1my3ch4n",
      },
      {
        label: "AI-Test-Helper",
        url: "https://github.com/marketplace/actions/ai-test-helper",
      },
    ],
    externalUrl: LINKS.AI_GITHUB_ACTIONS_NOTION,
  },
};

const parseStartDate = (period: string): Date => {
  const start = period.split("—")[0]?.trim() ?? "";
  const [year, month] = start.split(".");
  return new Date(Number(year), Number(month) - 1);
};

export const PROJECTS = Object.values(PROJECT_DETAILS).sort(
  (a, b) =>
    parseStartDate(b.period).getTime() - parseStartDate(a.period).getTime(),
);

export const getProjectsByType = (type: ProjectType): ProjectDetail[] =>
  PROJECTS.filter((project) => project.type === type);

export const getFeaturedProject = (): ProjectDetail | undefined =>
  PROJECTS.find((project) => project.featured);

export const getProjectById = (id: string): ProjectDetail | undefined =>
  PROJECT_DETAILS[id];
