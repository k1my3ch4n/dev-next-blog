import type { Decorator, Meta, StoryObj } from "@storybook/react-vite";
import { SkeletonCard } from "@repo/components";

const withCardWidth: Decorator = (Story) => (
  <div className="w-full max-w-sm">
    <Story />
  </div>
);

const meta = {
  title: "Components/Feedback/SkeletonCard",
  component: SkeletonCard,
  tags: ["autodocs"],
  decorators: [withCardWidth],
} satisfies Meta<typeof SkeletonCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const Grid: Story = {
  render: () => (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
      <SkeletonCard />
      <SkeletonCard />
    </div>
  ),
  parameters: { layout: "padded" },
};
