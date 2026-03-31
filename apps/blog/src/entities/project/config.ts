import { LINKS } from "@shared/config";

export const PROJECTS_DATA = [
  {
    title: "Syngrid — 실시간 멀티 뷰포트 반응형 디자인 뷰어",
    shortDescription:
      "실시간 멀티 뷰포트 반응형 디자인 뷰어. AI 페어프로그래밍으로 개발.",
    cardTypo: { main: "Syngrid", sub: "Real-time Multi Viewport" },
    type: "personal" as const,
    typeLabel: "Personal",
    period: "2026.02 — 2026.03",
    techStack: ["React", "WebSocket", "Proxy Server", "Claude Code"],
    gradient: "linear-gradient(135deg, #0f172a, #1e3a5f)",
    href: LINKS.SYNGRID_NOTION,
  },
  {
    title: "HackerRank AI Helper",
    shortDescription: "AI 번역 · 요약 · 단계별 힌트",
    cardTypo: { main: "HRAH", sub: "AI Translation & Hints" },
    type: "personal" as const,
    typeLabel: "Personal",
    period: "2025.08 — 2025.09",
    techStack: ["Next.js", "Gemini API", "Zustand", "GCP Cloud Run"],
    gradient: "linear-gradient(135deg, #1a2e1a, #2d5c2d)",
    href: LINKS.HRAH_NOTION,
  },
  {
    title: "Monorepo로 Blog & Portfolio 생성",
    shortDescription: "CSR → ISR 전환 · GraphQL 백엔드 구축",
    cardTypo: { main: "Blog & Portfolio", sub: "CSR → ISR · GraphQL" },
    type: "personal" as const,
    typeLabel: "Personal",
    period: "2025.05 — 2025.06",
    techStack: ["Next.js", "GraphQL", "Apollo Server", "Docker"],
    gradient: "linear-gradient(135deg, #2e1a24, #5c2d44)",
    href: LINKS.GITHUB_NEXT_REPO,
  },
];
