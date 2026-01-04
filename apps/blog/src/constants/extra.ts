import { Github, MainLogo } from "@images";
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
