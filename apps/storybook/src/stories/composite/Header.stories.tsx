import type { Meta, StoryObj } from "@storybook/react-vite";
import { Header } from "@repo/components";

const meta = {
  title: "Components/Composite/Header",
  component: Header,
  tags: ["autodocs"],
  args: {
    children: "섹션 제목",
    size: "l",
    wrapperClassName: "",
    titleClassName: "",
  },
  argTypes: {
    children: { control: "text" },
    size: { control: "radio", options: ["l", "m", "s"] },
  },
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Large: Story = {};
export const Medium: Story = { args: { size: "m" } };
export const Small: Story = { args: { size: "s" } };
