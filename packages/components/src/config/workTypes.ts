export type WorkType = "personal" | "openSource" | "career" | "hackathon";

export interface WorkItem {
  id: string;
  title: string;
  description: string;
  cardTypo: { main: string; sub: string };
  period: string;
  type: WorkType;
  techStack: string[];
  gradient: string;
  href: string;
}

export const WORK_TYPE_LABELS: Record<WorkType, string> = {
  personal: "Personal",
  openSource: "Open Source",
  career: "Career",
  hackathon: "Hackathon",
};

export const WORK_TYPE_STYLES: Record<WorkType, string> = {
  career:
    "bg-[#fef2f2] text-[#dc2626] border-[#fecaca] dark:bg-[#2a1a1a] dark:text-[#fca5a5] dark:border-[#3a2020]",
  personal:
    "bg-[#fff7ed] text-[#c2410c] border-[#fed7aa] dark:bg-[#2a2218] dark:text-[#fdba74] dark:border-[#3a3020]",
  openSource:
    "bg-[#f0fdf4] text-[#16a34a] border-[#bbf7d0] dark:bg-[#1f1a2e] dark:text-[#c4b5fd] dark:border-[#2a2040]",
  hackathon:
    "bg-[#ecfdf5] text-[#0f7a4a] border-[#86efac] dark:bg-[#0a2a1a] dark:text-[#6ee7b7] dark:border-[#0d3a25]",
};

export const HACKATHONS_DATA: WorkItem[] = [
  {
    id: "setup-package",
    title: "create-k1my3ch4n-setup — 프론트엔드 스캐폴딩 CLI",
    description:
      "npx 한 줄로 Vite/Next.js · FSD 구조 프로젝트 즉시 생성, npm 배포",
    cardTypo: { main: "create-setup", sub: "Frontend Scaffolding CLI" },
    period: "6월",
    type: "hackathon",
    techStack: ["Node.js", "TypeScript", "npm", "Vite", "Next.js"],
    gradient: "linear-gradient(135deg, #0a1a14, #1a3a2a)",
    href: "https://github.com/k1my3ch4n/weekly-hackathon/tree/main/setup-package#readme",
  },
  {
    id: "eng-chat",
    title: "Eng-Chat",
    description: "Discord 음성 채널에서 AI와 실시간으로 영어 회화를 연습하는 봇",
    cardTypo: { main: "Eng-Chat", sub: "Discord AI English Tutor" },
    period: "5월",
    type: "hackathon",
    techStack: ["Discord.js", "Node.js", "Groq API"],
    gradient: "linear-gradient(135deg, #0a1528, #1f2d4a)",
    href: "https://github.com/k1my3ch4n/weekly-hackathon/blob/main/eng-chat/README.md",
  },
  {
    id: "vox-task",
    title: "Voxtask",
    description:
      "회의 중 말한 내용을 자동으로 AI가 분석해 Action Item(할 일) 을 추출해주는 Chrome 익스텐션",
    cardTypo: { main: "Voxtask", sub: "AI Task Extension" },
    period: "4월",
    type: "hackathon",
    techStack: ["Vite", "TypeScript", "Grok API"],
    gradient: "linear-gradient(135deg, #0d0a1e, #2d1a4e)",
    href: "https://github.com/k1my3ch4n/weekly-hackathon/blob/main/vox-task/README.md",
  },
  {
    id: "fe-lab",
    title: "Fe-Lab",
    description: "프론트엔드 면접 대비 인터랙티브 학습 플랫폼",
    cardTypo: { main: "Fe-Lab", sub: "Frontend Interview Lab" },
    period: "4월",
    type: "hackathon",
    techStack: ["Next.js", "TypeScript", "Node.js"],
    gradient: "linear-gradient(135deg, #0c1a2e, #1a3a5c)",
    href: "https://github.com/k1my3ch4n/weekly-hackathon/blob/main/fe-lab/README.md",
  },
];
