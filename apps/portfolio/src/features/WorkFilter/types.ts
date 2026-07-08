import type { WorkType } from "@repo/components";

export type FilterValue = "all" | WorkType;

export interface FilterOption {
  value: FilterValue;
  label: string;
}
