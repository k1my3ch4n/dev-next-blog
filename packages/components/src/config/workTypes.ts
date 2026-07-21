import type { WorkType } from "@repo/content";

export const WORK_TYPE_STYLES: Record<WorkType, string> = {
  career:
    "bg-[#fef2f2] text-[#dc2626] border-[#fecaca] dark:bg-[#2a1a1a] dark:text-[#fca5a5] dark:border-[#3a2020]",
  personal:
    "bg-[#fff7ed] text-[#c2410c] border-[#fed7aa] dark:bg-[#2a2218] dark:text-[#fdba74] dark:border-[#3a3020]",
  openSource:
    "bg-[#f0fdf4] text-[#10783a] border-[#bbf7d0] dark:bg-[#1f1a2e] dark:text-[#c4b5fd] dark:border-[#2a2040]",
  hackathon:
    "bg-[#ecfdf5] text-[#0f7a4a] border-[#86efac] dark:bg-[#0a2a1a] dark:text-[#6ee7b7] dark:border-[#0d3a25]",
};
