import type { Meta, StoryObj } from "@storybook/react-vite";
import { Footer } from "@repo/components";

const meta = {
  title: "Components/Composite/Footer",
  component: Footer,
  tags: ["autodocs", "dark-test"],
  parameters: { layout: "fullscreen" },
} satisfies Meta<typeof Footer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
