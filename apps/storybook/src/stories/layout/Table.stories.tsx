import type { Meta, StoryObj } from "@storybook/react-vite";
import { Table, TableCell, TableRow } from "@repo/components";

const tableContent = (
  <>
    <thead>
      <TableRow variant="header">
        <TableCell isHeader>컴포넌트</TableCell>
        <TableCell isHeader>상태</TableCell>
        <TableCell isHeader>설명</TableCell>
      </TableRow>
    </thead>
    <tbody>
      <TableRow>
        <TableCell>Table</TableCell>
        <TableCell>Ready</TableCell>
        <TableCell>공용 테이블 조합 예시입니다.</TableCell>
      </TableRow>
      <TableRow>
        <TableCell>TableCell</TableCell>
        <TableCell>Ready</TableCell>
        <TableCell>header와 body cell을 지원합니다.</TableCell>
      </TableRow>
    </tbody>
  </>
);

const meta = {
  title: "Components/Layout/Table",
  component: Table,
  tags: ["autodocs"],
  args: { children: tableContent, className: "" },
  argTypes: { children: { control: false } },
} satisfies Meta<typeof Table>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Composed: Story = {};
export const Compact: Story = {
  args: { className: "text-sm" },
};
