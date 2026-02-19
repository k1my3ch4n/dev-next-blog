import { Table, TableRow, TableCell } from "@repo/components";
import { SKILL_HEADER, SKILL_DATA } from "@data";
import SkillList from "./SkillList";

const SkillTable = () => (
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
);

export default SkillTable;
