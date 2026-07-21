import type { Decorator, Meta, StoryObj } from "@storybook/react-vite";
import { SkeletonTitle } from "@repo/components";

const withTitleWidth: Decorator = (Story) => (
  <div className="w-full max-w-xl">
    <Story />
  </div>
);

const meta = {
  title: "Components/Feedback/SkeletonTitle",
  component: SkeletonTitle,
  tags: ["autodocs"],
  decorators: [withTitleWidth],
} satisfies Meta<typeof SkeletonTitle>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
