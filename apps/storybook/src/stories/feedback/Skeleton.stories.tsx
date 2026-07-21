import type { Meta, StoryObj } from "@storybook/react-vite";
import { Skeleton } from "@repo/components";

const meta = {
  title: "Components/Feedback/Skeleton",
  component: Skeleton,
  tags: ["autodocs"],
  args: {
    width: "320px",
    height: "20px",
    borderRadius: "4px",
    className: "",
  },
} satisfies Meta<typeof Skeleton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const Square: Story = {
  args: { width: "120px", height: "120px", borderRadius: "12px" },
};
export const Circle: Story = {
  args: { width: "80px", height: "80px", borderRadius: "50%" },
};
