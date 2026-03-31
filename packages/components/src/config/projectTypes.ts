import type { ProjectType } from "../types";

export const PROJECT_TYPE_LABELS: Record<ProjectType, string> = {
  career: "Career",
  personal: "Personal",
  openSource: "Open Source",
};

export const PROJECT_TYPE_STYLES: Record<ProjectType, string> = {
  career:
    "bg-[#fef2f2] text-[#dc2626] border-[#fecaca] dark:bg-[#2a1a1a] dark:text-[#fca5a5] dark:border-[#3a2020]",
  personal:
    "bg-[#fff7ed] text-[#c2410c] border-[#fed7aa] dark:bg-[#2a2218] dark:text-[#fdba74] dark:border-[#3a3020]",
  openSource:
    "bg-[#f0fdf4] text-[#16a34a] border-[#bbf7d0] dark:bg-[#1f1a2e] dark:text-[#c4b5fd] dark:border-[#2a2040]",
};
