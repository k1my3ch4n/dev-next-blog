export type HackathonCategory = "cli" | "backend" | "fullstack" | "ai" | "frontend";

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
    id: "fe-lab",
    title: "Fe-Lab",
    description: "프론트엔드 면접 대비 인터랙티브 학습 플랫폼",
    cardTypo: { main: "Fe-Lab", sub: "Frontend Interview Lab" },
    week: "4월 3주차",
    techStack: ["Next.js", "TypeScript", "Node.js"],
    gradient: "linear-gradient(135deg, #0c1a2e, #1a3a5c)",
    href: "https://github.com/k1my3ch4n/Fe-Lab",
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
