import type { Meta, StoryObj } from "@storybook/react-vite";
import { Text } from "@repo/components";

const meta = {
  title: "Smoke/Text",
  component: Text,
  args: {
    children: "Storybook workspace is ready.",
  },
} satisfies Meta<typeof Text>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
