import type { Meta, StoryObj } from "@storybook/react-vite";
import { Title } from "@repo/components";

const meta = {
  title: "Components/Primitives/Title",
  component: Title,
  tags: ["autodocs"],
  args: { title: "페이지 제목", className: "" },
} satisfies Meta<typeof Title>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const Accent: Story = {
  args: { title: "강조된 페이지 제목", className: "text-[var(--accent)]" },
};
