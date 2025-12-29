import {
  Divider,
  Header,
  Highlight,
  Table,
  TableRow,
  TableCell,
} from "@repo/components";
import { SKILL_HEADER, SKILL_DATA } from "@data";

const SkillList = ({ skills }: { skills: string[] }) => (
  <div className="flex flex-wrap gap-2">
    {skills.map((skill, index) => (
      <Highlight key={index} className="whitespace-nowrap">
        {skill}
      </Highlight>
    ))}
  </div>
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
