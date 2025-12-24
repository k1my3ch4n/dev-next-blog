import {
  Divider,
  Header,
  Highlight,
  Table,
  TableRow,
  TableCell,
} from "@repo/components";

const SKILL_HEADER = [
  "Category",
  "기능 구현에 자신이 있어요.",
  "지식은 있지만 , 경험은 부족해요.",
];

const SKILL_DATA = [
  {
    category: "Frontend",
    confident: [
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
    learning: ["Redux", "Zustand"],
  },
  {
    category: "Backend",
    confident: ["Apollo Server", "GraphQL", "Rest API", "Google Cloud Platform"],
    learning: ["AWS", "Docker"],
  },
  {
    category: "Testing",
    confident: ["Jest", "React Testing Library", "MSW (Mock Service Worker)", "Vitest"],
    learning: [],
  },
  {
    category: "Others",
    confident: [
      "Git",
      "Github Actions",
      "Yarn PnP",
      "yarn workspaces",
      "monorepo",
      "Notion",
      "Figma",
    ],
    learning: [],
  },
];

const SkillList = ({ skills }: { skills: string[] }) => (
  <>
    {skills.map((skill, index) => (
      <Highlight key={index} className="whitespace-nowrap mr-[2px]">
        {skill}
      </Highlight>
    ))}
  </>
);

const Skills = () => {
  return (
    <>
      <Header>⚒️ Skills</Header>
      <Divider />
      <Table>
        <TableRow variant="header">
          {SKILL_HEADER.map((header, index) => (
            <TableCell key={index}>{header}</TableCell>
          ))}
        </TableRow>
        {SKILL_DATA.map((row, index) => (
          <TableRow key={index}>
            <TableCell>{row.category}</TableCell>
            <TableCell>
              <SkillList skills={row.confident} />
            </TableCell>
            <TableCell>
              <SkillList skills={row.learning} />
            </TableCell>
          </TableRow>
        ))}
      </Table>
    </>
  );
};

export default Skills;
