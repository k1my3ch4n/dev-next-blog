import type { CardTypo } from "@repo/components";

export interface PostData {
  id: number;
  postKey: string | null;
  externalUrl: string | null;
  title: string;
  tags: string[];
  cardTypo: CardTypo;
}
