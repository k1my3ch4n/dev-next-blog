import type { Meta, StoryObj } from "@storybook/react-vite";
import { Table, TableCell, TableRow } from "@repo/components";

const meta = {
  title: "Components/Layout/TableCell",
  component: TableCell,
  tags: ["autodocs"],
  args: { children: "테이블 셀", className: "", isHeader: false },
  argTypes: { children: { control: "text" } },
} satisfies Meta<typeof TableCell>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Body: Story = {
  render: (args) => (
    <Table>
      <tbody>
        <TableRow>
          <TableCell {...args} />
        </TableRow>
      </tbody>
    </Table>
  ),
};

export const Header: Story = {
  args: { children: "헤더 셀", isHeader: true },
  render: (args) => (
    <Table>
      <thead>
        <TableRow variant="header">
          <TableCell {...args} />
        </TableRow>
      </thead>
    </Table>
  ),
};
