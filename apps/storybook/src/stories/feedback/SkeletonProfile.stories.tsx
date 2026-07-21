import type { Meta, StoryObj } from "@storybook/react-vite";
import { SkeletonProfile } from "@repo/components";

const meta = {
  title: "Components/Feedback/SkeletonProfile",
  component: SkeletonProfile,
  tags: ["autodocs"],
} satisfies Meta<typeof SkeletonProfile>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
