import type { Meta, StoryObj } from "@storybook/react-vite";
import { Bold } from "@repo/components";

const meta = {
  title: "Components/Primitives/Bold",
  component: Bold,
  tags: ["autodocs"],
  args: { children: "강조 텍스트" },
  argTypes: { children: { control: "text" } },
} satisfies Meta<typeof Bold>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const InSentence: Story = {
  render: (args) => (
    <p>
      중요한 내용을 <Bold {...args} /> 형태로 강조합니다.
    </p>
  ),
};
