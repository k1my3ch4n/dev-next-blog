import { TwinnyLogo, MainLogo, HRAHLogo } from "@images";

export const LINKS = {
  RESUME: "https://k1my3ch4ns.notion.site/1cac98c1db05805bb6e8c4c02a55c72c",
  GITHUB: "https://github.com/k1my3ch4n",
  BLOG: "https://blog.k1my3ch4n.xyz/",
  HRAH_NOTION:
    "https://k1my3ch4ns.notion.site/HackerRank-AI-Helper-27ec98c1db058072b298db1e19ccc742?pvs=74",
  TWINNY: "https://twinny.ai/",
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
      "Vite",
      "Recoil",
      "Sass",
      "Apollo Client",
      "Storybook",
      "Next JS",
      "Tailwindcss",
    ],
    learning: ["Redux", "Zustand"],
  },
  {
    category: "Backend",
    confident: [
      "Apollo Server",
      "GraphQL",
      "Rest API",
      "Google Cloud Platform",
    ],
    learning: ["AWS", "Docker"],
  },
  {
    category: "Testing",
    confident: [
      "Jest",
      "React Testing Library",
      "MSW (Mock Service Worker)",
      "Vitest",
    ],
    learning: [],
  },
  {
    category: "Others",
    confident: [
      "Git",
      "Github Actions",
      "Yarn PnP",
      "yarn workspaces",
      "monorepo",
      "Notion",
      "Figma",
    ],
    learning: [],
  },
];

export type ProjectType = "career" | "personal";

export interface Project {
  id: string;
  title: string;
  thumbnail: typeof TwinnyLogo | typeof MainLogo | typeof HRAHLogo;
  type: ProjectType;
  route?: string;
  externalLink?: string;
}

export const PROJECTS: Project[] = [
  {
    id: "userRobot",
    title: "🤖 유저용 작업 관제 웹 프로젝트 ( 오더피킹 )",
    thumbnail: TwinnyLogo,
    type: "career",
    route: "/project/userRobot",
  },
  {
    id: "managerRobot",
    title: "🤖 관리자용 로봇 관제 웹 프로젝트",
    thumbnail: TwinnyLogo,
    type: "career",
    route: "/project/managerRobot",
  },
  {
    id: "hackerRankAiHelper",
    title: "📚 Hackerrank AI Helper 프로젝트",
    thumbnail: HRAHLogo,
    type: "personal",
    externalLink: LINKS.HRAH_NOTION,
  },
  {
    id: "nextMonorepo",
    title: "📖 Monorepo 마이그레이션 (Vite -> Nextjs)",
    thumbnail: MainLogo,
    type: "personal",
    route: "/project/nextMonorepo",
  },
  {
    id: "monorepo",
    title: "📖 Monorepo로 블로그 및 포트폴리오 페이지 생성",
    thumbnail: MainLogo,
    type: "personal",
    route: "/project/monorepo",
  },
];

export const getProjectsByType = (type: ProjectType): Project[] =>
  PROJECTS.filter((project) => project.type === type);
