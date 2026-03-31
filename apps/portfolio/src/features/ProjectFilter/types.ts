import type { ProjectType } from "@repo/components";

export type FilterValue = "all" | ProjectType;

export interface FilterOption {
  value: FilterValue;
  label: string;
}
