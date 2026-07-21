import type { Decorator, Meta, StoryObj } from "@storybook/react-vite";
import { Loading } from "@repo/components";

const withContentWidth: Decorator = (Story) => (
  <div className="mx-auto w-full max-w-4xl">
    <Story />
  </div>
);

const meta = {
  title: "Components/Feedback/Loading",
  component: Loading,
  tags: ["autodocs"],
  decorators: [withContentWidth],
} satisfies Meta<typeof Loading>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
