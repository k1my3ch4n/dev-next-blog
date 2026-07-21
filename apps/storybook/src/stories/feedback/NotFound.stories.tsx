import type { Meta, StoryObj } from "@storybook/react-vite";
import { NotFound } from "@repo/components";

const meta = {
  title: "Components/Feedback/NotFound",
  component: NotFound,
  tags: ["autodocs"],
  parameters: { layout: "fullscreen" },
} satisfies Meta<typeof NotFound>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const Mobile: Story = {
  globals: { viewport: { value: "mobile", isRotated: false } },
};
