import { TwinnyLogo, MainLogo, HRAHLogo, AIGithubActions } from "@images";

export const LINKS = {
  RESUME: "https://k1my3ch4ns.notion.site/1cac98c1db05805bb6e8c4c02a55c72c",
  GITHUB: "https://github.com/k1my3ch4n",
  BLOG: "https://blog.k1my3ch4n.xyz/",
  HRAH_NOTION:
    "https://k1my3ch4ns.notion.site/HackerRank-AI-Helper-27ec98c1db058072b298db1e19ccc742?pvs=74",
  TWINNY: "https://twinny.ai/",
  AI_GITHUB_ACTIONS_NOTION:
    "https://k1my3ch4ns.notion.site/AI-GitHub-Actions-2fdc98c1db058027be98e36eb972fb23",
} as const;

export interface SkillCategory {
  category: string;
  confident: string[];
  learning: string[];
}

export const SKILL_HEADER = [
  "Category",
  "기능 구현에 자신이 있어요.",
  "지식은 있지만 , 경험은 부족해요.",
] as const;

export const SKILL_DATA: SkillCategory[] = [
  {
    category: "Frontend",
    confident: [
      "Typescript",
      "React",
      "Next JS",
      "Tailwindcss",
      "Recoil",
      "Apollo Client",
      "Storybook",
      "Vite",
      "Sass",
    ],
    learning: ["Redux", "Zustand"],
  },
  {
    category: "Backend",
    confident: [
      "Rest API",
      "Google Cloud Platform",
      "GraphQL",
      "Apollo Server",
    ],
    learning: ["AWS", "Docker"],
  },
  {
    category: "AI",
    confident: ["Gemini", "Claude"],
    learning: ["Cursor"],
  },
  {
    category: "Testing",
    confident: ["Jest", "React Testing Library", "MSW (Mock Service Worker)"],
    learning: ["Vitest"],
  },
  {
    category: "Others",
    confident: ["Git", "Github Actions", "monorepo", "Notion", "Figma"],
    learning: [],
  },
];

export type ProjectType = "career" | "personal" | "openSource";

export interface ProjectLink {
  label: string;
  url: string;
}

export interface ProjectDetail {
  id: string;
  title: string;
  description: string;
  thumbnail:
    | typeof TwinnyLogo
    | typeof MainLogo
    | typeof HRAHLogo
    | typeof AIGithubActions;
  thumbnailWidth?: string;
  type: ProjectType;
  period: string;
  relatedLinks: ProjectLink[];
  externalUrl?: string;
}

export const PROJECT_DETAILS: Record<string, ProjectDetail> = {
  userRobot: {
    id: "userRobot",
    title: "🤖 유저용 작업 관제 웹 프로젝트 ( 오더피킹 )",
    description:
      "🤖 유저용 작업 관제 웹 프로젝트 ( 오더피킹 )에 대한 상세 정보입니다.",
    thumbnail: TwinnyLogo,
    type: "career",
    period: "2023.01 ~ 2024.04",
    relatedLinks: [{ label: "관련 홈페이지", url: LINKS.TWINNY }],
  },
  managerRobot: {
    id: "managerRobot",
    title: "🤖 관리자용 로봇 관제 웹 프로젝트",
    description: "🤖 관리자용 로봇 관제 웹 프로젝트에 대한 상세 정보입니다.",
    thumbnail: TwinnyLogo,
    type: "career",
    period: "2022.04 ~ 2023.01",
    relatedLinks: [{ label: "관련 홈페이지", url: LINKS.TWINNY }],
  },
  hackerRankAiHelper: {
    id: "hackerRankAiHelper",
    title: "📚 Hackerrank AI Helper 프로젝트",
    description: "📚 Hackerrank AI Helper 프로젝트에 대한 상세 정보입니다.",
    thumbnail: HRAHLogo,
    thumbnailWidth: "50%",
    type: "personal",
    period: "2025.08 ~ 2025.09",
    relatedLinks: [
      { label: "Notion Link", url: LINKS.HRAH_NOTION },
      {
        label: "Github Repository",
        url: "https://github.com/k1my3ch4n/HackerRankAIHelper",
      },
    ],
  },
  nextMonorepo: {
    id: "nextMonorepo",
    title: "📖 Monorepo 마이그레이션 (Vite -> Nextjs)",
    description:
      "📖 Monorepo 마이그레이션 (Vite -> Nextjs)에 대한 상세 정보입니다.",
    thumbnail: MainLogo,
    type: "personal",
    period: "2025.05 ~ 2025.06",
    relatedLinks: [
      {
        label: "Github Repository",
        url: "https://github.com/k1my3ch4n/dev-next-blog",
      },
    ],
  },
  monorepo: {
    id: "monorepo",
    title: "📖 Monorepo로 블로그 및 포트폴리오 페이지 생성",
    description:
      "📖 Monorepo로 블로그 및 포트폴리오 페이지 생성에 대한 상세 정보입니다.",
    thumbnail: MainLogo,
    type: "personal",
    period: "2024.12 ~ 2025.02",
    relatedLinks: [
      { label: "블로그 페이지", url: LINKS.BLOG },
      { label: "포트폴리오 페이지", url: "https://portfolio.k1my3ch4n.xyz/" },
      {
        label: "Github Repository",
        url: "https://github.com/k1my3ch4n/dev-blog/blob/main/README.md",
      },
    ],
  },
  aiGithubActions: {
    id: "aiGithubActions",
    title: "🤖 AI GitHub Actions",
    description: "🤖 AI GitHub Actions에 대한 상세 정보입니다.",
    thumbnail: AIGithubActions,
    thumbnailWidth: "50%",
    type: "openSource",
    period: "2025.12 ~ 2026.01",
    relatedLinks: [],
    externalUrl: LINKS.AI_GITHUB_ACTIONS_NOTION,
  },
};

export const PROJECTS = Object.values(PROJECT_DETAILS);

export const getProjectsByType = (type: ProjectType): ProjectDetail[] =>
  PROJECTS.filter((project) => project.type === type);

export const getProjectById = (id: string): ProjectDetail | undefined =>
  PROJECT_DETAILS[id];
