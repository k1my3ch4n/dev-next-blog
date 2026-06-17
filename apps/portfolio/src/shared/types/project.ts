import type { CardTypo, ProjectType } from "@repo/components";

export type SvgComponent = React.FC<React.SVGProps<SVGSVGElement>>;

export interface ProjectLink {
  label: string;
  url: string;
}

export interface StoryPoint {
  title: string;
  problem: string;
  solution: string;
  extension: string;
}

export interface ProjectDetail {
  id: string;
  title: string;
  description: string;
  shortDescription: string;
  thumbnail: SvgComponent;
  cardTypo: CardTypo;
  type: ProjectType;
  period: string;
  techStack: string[];
  stories: StoryPoint[];
  gradient: string;
  relatedLinks: ProjectLink[];
  externalUrl?: string;
  featured?: boolean;
}
