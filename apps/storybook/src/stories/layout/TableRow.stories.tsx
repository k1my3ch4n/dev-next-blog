import type { Meta, StoryObj } from "@storybook/react-vite";
import { Table, TableCell, TableRow } from "@repo/components";

const meta = {
  title: "Components/Layout/TableRow",
  component: TableRow,
  tags: ["autodocs"],
  args: {
    variant: "body",
    className: "",
    children: (
      <>
        <TableCell>첫 번째 셀</TableCell>
        <TableCell>두 번째 셀</TableCell>
      </>
    ),
  },
  argTypes: {
    children: { control: false },
    variant: { control: "radio", options: ["header", "body"] },
  },
} satisfies Meta<typeof TableRow>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Body: Story = {
  render: (args) => (
    <Table>
      <tbody>
        <TableRow {...args} />
      </tbody>
    </Table>
  ),
};

export const Header: Story = {
  args: {
    variant: "header",
    children: (
      <>
        <TableCell isHeader>첫 번째 헤더</TableCell>
        <TableCell isHeader>두 번째 헤더</TableCell>
      </>
    ),
  },
  render: (args) => (
    <Table>
      <thead>
        <TableRow {...args} />
      </thead>
    </Table>
  ),
};
