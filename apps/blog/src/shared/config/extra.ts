import { Github, MainLogo } from "@shared/assets";
import { LINKS } from "./links";

export const EXTRA_DATA = [
  {
    Thumbnail: Github,
    title: "Github",
    link: LINKS.GITHUB,
  },
  {
    Thumbnail: MainLogo,
    title: "Portfolio",
    link: LINKS.PORTFOLIO,
  },
] as const;
