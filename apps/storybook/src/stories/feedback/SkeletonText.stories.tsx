import type { Decorator, Meta, StoryObj } from "@storybook/react-vite";
import { SkeletonText } from "@repo/components";

const withTextWidth: Decorator = (Story) => (
  <div className="w-full max-w-xl">
    <Story />
  </div>
);

const meta = {
  title: "Components/Feedback/SkeletonText",
  component: SkeletonText,
  tags: ["autodocs"],
  decorators: [withTextWidth],
  args: { lines: 3 },
  argTypes: { lines: { control: { type: "range", min: 1, max: 8, step: 1 } } },
} satisfies Meta<typeof SkeletonText>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const SingleLine: Story = { args: { lines: 1 } };
export const LongParagraph: Story = { args: { lines: 6 } };
