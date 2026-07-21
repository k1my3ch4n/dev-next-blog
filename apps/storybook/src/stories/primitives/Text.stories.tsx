import type { Meta, StoryObj } from "@storybook/react-vite";
import { Text } from "@repo/components";

const meta = {
  title: "Components/Primitives/Text",
  component: Text,
  tags: ["autodocs"],
  args: { children: "공용 본문 텍스트입니다." },
  argTypes: { children: { control: "text" } },
} satisfies Meta<typeof Text>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const LongContent: Story = {
  args: {
    children:
      "긴 본문에서도 자연스러운 줄바꿈과 간격을 확인할 수 있도록 충분한 길이의 텍스트를 사용합니다. 화면 너비를 변경해 반응형 상태를 함께 확인할 수 있습니다.",
  },
};
