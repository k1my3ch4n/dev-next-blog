export type HackathonCategory =
  | "cli"
  | "backend"
  | "fullstack"
  | "ai"
  | "frontend";

export interface HackathonData {
  id: string;
  title: string;
  description: string;
  cardTypo: { main: string; sub: string };
  week: string;
  techStack: string[];
  gradient: string;
  href: string;
  category: HackathonCategory;
  categoryLabel: string;
}

export const HACKATHONS_DATA: HackathonData[] = [
  {
    id: "vox-task",
    title: "Voxtask",
    description:
      "회의 중 말한 내용을 자동으로 AI가 분석해 Action Item(할 일) 을 추출해주는 Chrome 익스텐션",
    cardTypo: { main: "Voxtask", sub: "AI Task Extension" },
    week: "4월",
    techStack: ["Vite", "TypeScript", "Grok API"],
    gradient: "linear-gradient(135deg, #0d0a1e, #2d1a4e)",
    href: "https://github.com/k1my3ch4n/weekly-hackathon/blob/main/vox-task/README.md",
    category: "ai",
    categoryLabel: "AI",
  },
  {
    id: "fe-lab",
    title: "Fe-Lab",
    description: "프론트엔드 면접 대비 인터랙티브 학습 플랫폼",
    cardTypo: { main: "Fe-Lab", sub: "Frontend Interview Lab" },
    week: "4월",
    techStack: ["Next.js", "TypeScript", "Node.js"],
    gradient: "linear-gradient(135deg, #0c1a2e, #1a3a5c)",
    href: "https://github.com/k1my3ch4n/weekly-hackathon/blob/main/fe-lab/README.md",
    category: "frontend",
    categoryLabel: "Frontend",
  },
];

export const HACKATHON_CATEGORY_STYLES: Record<HackathonCategory, string> = {
  cli: "text-sky-400 border-sky-400/40 bg-sky-400/10",
  backend: "text-orange-400 border-orange-400/40 bg-orange-400/10",
  fullstack: "text-violet-400 border-violet-400/40 bg-violet-400/10",
  ai: "text-emerald-400 border-emerald-400/40 bg-emerald-400/10",
  frontend: "text-pink-400 border-pink-400/40 bg-pink-400/10",
};
