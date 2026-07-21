import type { Decorator, Meta, StoryObj } from "@storybook/react-vite";
import { Divider } from "@repo/components";

const withMaxWidth: Decorator = (Story) => (
  <div className="w-full max-w-2xl">
    <Story />
  </div>
);

const meta = {
  title: "Components/Primitives/Divider",
  component: Divider,
  tags: ["autodocs"],
  decorators: [withMaxWidth],
} satisfies Meta<typeof Divider>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const BetweenContent: Story = {
  render: () => (
    <div>
      <p>첫 번째 영역</p>
      <Divider />
      <p>두 번째 영역</p>
    </div>
  ),
};
