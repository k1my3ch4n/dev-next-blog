import type { Meta, StoryObj } from "@storybook/react-vite";
import { Tag } from "@repo/components";

const meta = {
  title: "Components/Primitives/Tag",
  component: Tag,
  tags: ["autodocs"],
  args: { children: "React", className: "" },
  argTypes: { children: { control: "text" } },
} satisfies Meta<typeof Tag>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const LongLabel: Story = {
  args: { children: "Frontend Architecture" },
};
