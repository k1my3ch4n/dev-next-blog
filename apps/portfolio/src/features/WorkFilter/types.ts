import type { WorkType } from "@repo/content";

export type FilterValue = "all" | WorkType;

export interface FilterOption {
  value: FilterValue;
  label: string;
}
