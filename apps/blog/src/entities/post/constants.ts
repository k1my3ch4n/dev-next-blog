import type { CardTypo } from "@repo/components";
import type { PostData } from "@shared/types";

export const BLOG_POSTS: PostData[] = [
  { id: 1,  postKey: "march-memoir",            externalUrl: null, thumbnailKey: null, title: "3월 회고",                               tags: ["회고"] },
  { id: 2,  postKey: "woowa-course",             externalUrl: null, thumbnailKey: null, title: "우아한테크코스 지원 후기",                  tags: ["우아한테크코스", "학습"] },
  { id: 3,  postKey: "msw-1",                    externalUrl: null, thumbnailKey: null, title: "MSW: Mock Service Worker #1",            tags: ["MSW", "테스트"] },
  { id: 4,  postKey: "msw-2",                    externalUrl: null, thumbnailKey: null, title: "MSW: Mock Service Worker #2",            tags: ["MSW", "테스트"] },
  { id: 5,  postKey: "msw-3",                    externalUrl: null, thumbnailKey: null, title: "MSW: Mock Service Worker #3",            tags: ["MSW", "테스트"] },
  { id: 6,  postKey: "yarn-workspace-monorepo-1", externalUrl: null, thumbnailKey: null, title: "Yarn Workspace 모노레포 #1",             tags: ["모노레포", "Yarn"] },
  { id: 7,  postKey: "yarn-workspace-monorepo-2", externalUrl: null, thumbnailKey: null, title: "Yarn Workspace 모노레포 #2",             tags: ["모노레포", "Yarn"] },
  { id: 8,  postKey: "yarn-workspace-monorepo-3", externalUrl: null, thumbnailKey: null, title: "Yarn Workspace 모노레포 #3",             tags: ["모노레포", "Yarn"] },
  { id: 9,  postKey: "yarn-workspace-monorepo-4", externalUrl: null, thumbnailKey: null, title: "Yarn Workspace 모노레포 #4",             tags: ["모노레포", "Yarn"] },
  { id: 10, postKey: "yarn-workspace-monorepo-5", externalUrl: null, thumbnailKey: null, title: "Yarn Workspace 모노레포 #5",             tags: ["모노레포", "Yarn"] },
  { id: 11, postKey: "github-actions-1",         externalUrl: null, thumbnailKey: null, title: "GitHub Actions CI/CD Pipeline #1",      tags: ["GitHub Actions", "CI/CD"] },
  { id: 12, postKey: "github-actions-2",         externalUrl: null, thumbnailKey: null, title: "GitHub Actions CI/CD Pipeline #2",      tags: ["GitHub Actions", "CI/CD"] },
  { id: 13, postKey: "github-actions-3",         externalUrl: null, thumbnailKey: null, title: "GitHub Actions CI/CD Pipeline #3",      tags: ["GitHub Actions", "CI/CD"] },
  { id: 14, postKey: "yarn-berry-pnp-1",         externalUrl: null, thumbnailKey: null, title: "Yarn Berry Plug'n'Play",                tags: ["Yarn Berry", "모노레포"] },
  { id: 15, postKey: "fastest-vite",             externalUrl: null, thumbnailKey: null, title: "Vite: Fastest Build Tool",             tags: ["Vite", "빌드 도구"] },
  { id: 16, postKey: "next-migration-1",         externalUrl: null, thumbnailKey: null, title: "Next.js Migration Guide #1",            tags: ["Next.js", "마이그레이션"] },
  { id: 17, postKey: "next-migration-2",         externalUrl: null, thumbnailKey: null, title: "Next.js Migration Guide #2",            tags: ["Next.js", "마이그레이션"] },
  { id: 18, postKey: "next-migration-3",         externalUrl: null, thumbnailKey: null, title: "Next.js Migration Guide #3",            tags: ["Next.js", "마이그레이션"] },
  { id: 19, postKey: "next-migration-4",         externalUrl: null, thumbnailKey: null, title: "Next.js Migration Guide #4",            tags: ["Next.js", "마이그레이션"] },
  { id: 20, postKey: "AIGithubActions",          externalUrl: null, thumbnailKey: null, title: "AI + GitHub Actions",                   tags: ["AI", "GitHub Actions", "CI/CD"] },
  { id: 21, postKey: "toss-exam",                externalUrl: null, thumbnailKey: null, title: "토스 프론트엔드 챕터 과제",                 tags: ["취업", "코딩테스트"] },
  { id: 22, postKey: "syngrid",                  externalUrl: null, thumbnailKey: null, title: "Syngrid: Real-time Multi Viewport",     tags: ["프로젝트", "실시간"] },
  { id: 23, postKey: "syngrid-1",                externalUrl: null, thumbnailKey: null, title: "HTTP Proxy: Real-time Sync",            tags: ["프로젝트", "실시간"] },
  { id: 24, postKey: "claude-md",                externalUrl: null, thumbnailKey: null, title: "claude.md & Skills 설정 가이드",          tags: ["AI", "Claude", "도구"] },
  { id: 25, postKey: "ssr-ssg-ssr",              externalUrl: null, thumbnailKey: null, title: "렌더링: SSR → SSG → SSR",               tags: ["Next.js", "렌더링"] },
  { id: 26, postKey: "ginini",                   externalUrl: null, thumbnailKey: null, title: "Ginini: AI Guinea Pig Generator",       tags: ["AI", "프로젝트"] },
];

export const getPosts = async (tag: string, orderBy = "DESC"): Promise<PostData[]> => {
  const filtered = tag ? BLOG_POSTS.filter((post) => post.tags.includes(tag)) : [...BLOG_POSTS];
  return orderBy.toUpperCase() === "DESC" ? filtered.reverse() : filtered;
};

export const getPost = async (postKey: string): Promise<PostData | null> => {
  return BLOG_POSTS.find((post) => post.postKey === postKey) ?? null;
};

export const getAllTags = async (): Promise<string[]> => {
  const tags = new Set<string>();
  BLOG_POSTS.forEach((post) => post.tags.forEach((tag) => tags.add(tag)));
  return Array.from(tags).sort();
};

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
  "ssr-ssg-ssr": { main: "Rendering", sub: "SSR → SSG → SSR" },
  ginini: { main: "Ginini", sub: "AI Guinea Pig Generator" },
};

export const isPostVisible = (post: PostData): boolean => {
  const typoKey = post.thumbnailKey || post.postKey;
  return typoKey !== null && typoKey in BLOG_CARD_TYPO;
};
