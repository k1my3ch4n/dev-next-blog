import TableBody from "@components/TableBody";
import TableHeader from "@components/TableHeader";
import { Divider, Header } from "@repo/components";

const SKILL_HEADER = [
  "Category",
  "기능 구현에 자신이 있어요.",
  "지식은 있지만 , 경험은 부족해요.",
];

const SKILL_FRONTEND = [
  [
    "Typescript",
    "React",
    "Vite",
    "Recoil",
    "Sass",
    "Apollo Client",
    "Storybook",
    "Next JS",
    "Tailwindcss",
  ],
  ["Redux", "Zustand"],
];

const SKILL_BACKEND = [
  ["Apollo Server", "GraphQL", "Rest API", "Google Cloud Platform"],
  ["AWS", "Docker"],
];

const SKILL_TESTING = [
  ["Jest", "React Testing Library", "MSW (Mock Service Worker)", "Vitest"],
  [],
];

const SKILL_OTHERS = [
  [
    "Git",
    "Github Actions",
    "Yarn PnP",
    "yarn workspaces",
    "monorepo",
    "Notion",
    "Figma",
  ],
  [],
];

const Skills = () => {
  const wrapperClassName = "table w-full border-collapse";

  return (
    <>
      <Header>⚒️ Skills</Header>
      <Divider />
      <div className={wrapperClassName}>
        <TableHeader headers={SKILL_HEADER} />
        <TableBody columnHeader="Frontend" columnArrays={SKILL_FRONTEND} />
        <TableBody columnHeader="Backend" columnArrays={SKILL_BACKEND} />
        <TableBody columnHeader="Testing" columnArrays={SKILL_TESTING} />
        <TableBody columnHeader="Others" columnArrays={SKILL_OTHERS} />
      </div>
    </>
  );
};

export default Skills;
