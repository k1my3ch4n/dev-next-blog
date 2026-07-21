import type { Meta, StoryObj } from "@storybook/react-vite";
import { Highlight } from "@repo/components";

const meta = {
  title: "Components/Primitives/Highlight",
  component: Highlight,
  tags: ["autodocs"],
  args: { children: "핵심 내용", className: "" },
  argTypes: { children: { control: "text" } },
} satisfies Meta<typeof Highlight>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const InSentence: Story = {
  render: (args) => (
    <p>
      문장 속 <Highlight {...args} />을 시각적으로 구분합니다.
    </p>
  ),
};
