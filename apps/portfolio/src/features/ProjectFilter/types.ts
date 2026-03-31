import type { ProjectType } from "@shared/data";

export type FilterValue = "all" | ProjectType;

export interface FilterOption {
  value: FilterValue;
  label: string;
}
