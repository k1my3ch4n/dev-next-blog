export type HackathonCategory = "cli" | "backend" | "fullstack" | "ai" | "frontend";

/** @deprecated Phase 5에서 WorkItem으로 대체 예정 */
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
  thumbnail?: string;
}

export const HACKATHON_CATEGORY_STYLES: Record<HackathonCategory, string> = {
  cli: "text-sky-400 border-sky-400/40 bg-sky-400/10",
  backend: "text-orange-400 border-orange-400/40 bg-orange-400/10",
  fullstack: "text-violet-400 border-violet-400/40 bg-violet-400/10",
  ai: "text-emerald-400 border-emerald-400/40 bg-emerald-400/10",
  frontend: "text-pink-400 border-pink-400/40 bg-pink-400/10",
};
