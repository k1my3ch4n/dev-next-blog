import type { CardTypo } from "@repo/components";
import type { PostData } from "@shared/types";

export const BLOG_GRADIENTS = [
  "linear-gradient(135deg, #0f172a, #1e3a5f)", // Deep Ocean
  "linear-gradient(135deg, #1a2e1a, #2d5c2d)", // Forest
  "linear-gradient(135deg, #2e1a24, #5c2d44)", // Berry
  "linear-gradient(135deg, #1e1b4b, #3730a3)", // Indigo
  "linear-gradient(135deg, #451a03, #92400e)", // Amber
  "linear-gradient(135deg, #0f2a2a, #115e59)", // Teal
  "linear-gradient(135deg, #1e293b, #475569)", // Slate
  "linear-gradient(135deg, #4c0519, #9f1239)", // Rose
];

export const BLOG_CARD_TYPO: Record<string, CardTypo> = {
  "march-memoir": { main: "3월 회고", sub: "March Memoir" },
  "woowa-course": { main: "우아한테크코스", sub: "Woowa Course" },
  "msw-1": { main: "MSW", sub: "Mock Service Worker #1" },
  "msw-2": { main: "MSW", sub: "Mock Service Worker #2" },
  "msw-3": { main: "MSW", sub: "Mock Service Worker #3" },
  "yarn-workspace-monorepo-1": { main: "Monorepo", sub: "Yarn Workspace #1" },
  "yarn-workspace-monorepo-2": { main: "Monorepo", sub: "Yarn Workspace #2" },
  "yarn-workspace-monorepo-3": { main: "Monorepo", sub: "Yarn Workspace #3" },
  "yarn-workspace-monorepo-4": { main: "Monorepo", sub: "Yarn Workspace #4" },
  "yarn-workspace-monorepo-5": { main: "Monorepo", sub: "Yarn Workspace #5" },
  "github-actions-1": { main: "GitHub Actions", sub: "CI/CD Pipeline #1" },
  "github-actions-2": { main: "GitHub Actions", sub: "CI/CD Pipeline #2" },
  "github-actions-3": { main: "GitHub Actions", sub: "CI/CD Pipeline #3" },
  "yarn-berry-pnp-1": { main: "Yarn Berry", sub: "Plug'n'Play" },
  "fastest-vite": { main: "Vite", sub: "Fastest Build Tool" },
  "next-migration-1": { main: "Next.js", sub: "Migration Guide #1" },
  "next-migration-2": { main: "Next.js", sub: "Migration Guide #2" },
  "next-migration-3": { main: "Next.js", sub: "Migration Guide #3" },
  "next-migration-4": { main: "Next.js", sub: "Migration Guide #4" },
  AIGithubActions: { main: "AI Actions", sub: "AI + GitHub Actions" },
  "toss-exam": { main: "Toss", sub: "Frontend Exam" },
  syngrid: { main: "Syngrid", sub: "Real-time Multi Viewport" },
  "syngrid-1": { main: "HTTP Proxy", sub: "Real-time Sync" },
  "claude-md": { main: "Claude Setting", sub: "claude.md & skills" },
};

export const isPostVisible = (post: PostData): boolean => {
  const typoKey = post.thumbnailKey || post.postKey;
  return typoKey !== null && typoKey in BLOG_CARD_TYPO;
};
