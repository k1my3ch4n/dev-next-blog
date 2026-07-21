import type { Meta, StoryObj } from "@storybook/react-vite";
import { FileIcon } from "@repo/components";

const meta = {
  title: "Foundations/Icons/FileIcon",
  component: FileIcon,
  tags: ["autodocs"],
  args: { size: 24 },
  argTypes: { size: { control: { type: "range", min: 12, max: 96, step: 4 } } },
} satisfies Meta<typeof FileIcon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const Large: Story = { args: { size: 64 } };
