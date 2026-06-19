import type { WorkItem } from "@repo/components";
import { HACKATHONS_DATA } from "@repo/components";
import { LINKS } from "@shared/config";

const PROJECTS_DATA: WorkItem[] = [
  {
    id: "ginini",
    title: "Ginini — 기니피그 프로필 생성기",
    description: "AI 얼굴 분석으로 동물상이 반영된 기니피그 프로필 캐릭터 생성",
    cardTypo: { main: "Ginini", sub: "AI Guinea Pig Generator" },
    type: "personal",
    period: "2026.05 — 2026.06",
    techStack: ["Next.js", "Gemini", "Replicate", "Upstash Redis"],
    gradient: "linear-gradient(135deg, #451a03, #92400e)",
    href: LINKS.GININI,
  },
  {
    id: "syngrid",
    title: "Syngrid — 실시간 멀티 뷰포트 반응형 디자인 뷰어",
    description: "실시간 멀티 뷰포트 반응형 디자인 뷰어. AI 페어프로그래밍으로 개발.",
    cardTypo: { main: "Syngrid", sub: "Real-time Multi Viewport" },
    type: "personal",
    period: "2026.02 — 2026.03",
    techStack: ["React", "WebSocket", "Proxy Server", "Claude Code"],
    gradient: "linear-gradient(135deg, #0f172a, #1e3a5f)",
    href: LINKS.SYNGRID_NOTION,
  },
  {
    id: "ai-github-actions",
    title: "AI GitHub Actions (오픈소스)",
    description: "AI 코드 리뷰 & 테스트 헬퍼, Marketplace 공개",
    cardTypo: { main: "AI Actions", sub: "Code Review & Test Helper" },
    type: "openSource",
    period: "2026.01 — 2026.01",
    techStack: ["Claude", "Gemini", "GitHub Actions", "TypeScript"],
    gradient: "linear-gradient(135deg, #0c0c2e, #3d1a5c)",
    href: "https://github.com/marketplace/actions/ai-code-reviewer-by-k1my3ch4n",
  },
  {
    id: "hrah",
    title: "HackerRank AI Helper",
    description: "AI 번역 · 요약 · 단계별 힌트",
    cardTypo: { main: "HRAH", sub: "AI Translation & Hints" },
    type: "personal",
    period: "2025.08 — 2025.09",
    techStack: ["Next.js", "Gemini API", "Zustand", "GCP Cloud Run"],
    gradient: "linear-gradient(135deg, #1a2e1a, #2d5c2d)",
    href: LINKS.HRAH_NOTION,
  },
  {
    id: "monorepo-blog",
    title: "Monorepo로 Blog & Portfolio 생성",
    description: "CSR → ISR 전환 · GraphQL 백엔드 구축",
    cardTypo: { main: "Blog & Portfolio", sub: "CSR → ISR · GraphQL" },
    type: "personal",
    period: "2025.05 — 2025.06",
    techStack: ["Next.js", "GraphQL", "Apollo Server", "Docker"],
    gradient: "linear-gradient(135deg, #2e1a24, #5c2d44)",
    href: LINKS.GITHUB_NEXT_REPO,
  },
];

export const WORKS_DATA: WorkItem[] = [
  HACKATHONS_DATA[0],
  PROJECTS_DATA[0],
  HACKATHONS_DATA[1],
  PROJECTS_DATA[1],
  PROJECTS_DATA[2],
  HACKATHONS_DATA[2],
  HACKATHONS_DATA[3],
  PROJECTS_DATA[3],
  PROJECTS_DATA[4],
];
