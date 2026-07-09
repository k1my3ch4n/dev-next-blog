import type { WorkType } from "@repo/content";
import type { CardTypo } from "@repo/components";

export interface WorkLink {
  label: string;
  url: string;
}

export interface StoryPoint {
  title: string;
  problem: string;
  solution: string;
  extension: string;
}

export interface WorkDetail {
  id: string;
  title: string;
  description: string;
  shortDescription: string;
  cardTypo: CardTypo;
  type: WorkType;
  period: string;
  techStack: string[];
  stories: StoryPoint[];
  gradient: string;
  relatedLinks: WorkLink[];
  externalUrl?: string;
}
