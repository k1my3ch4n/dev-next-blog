import type { Meta, StoryObj } from "@storybook/react-vite";
import { List } from "@repo/components";

const meta = {
  title: "Components/Layout/List",
  component: List,
  tags: ["autodocs"],
  args: {
    spot: "l",
    children: "목록에 표시되는 설명입니다.",
  },
  argTypes: {
    spot: { control: "radio", options: ["l", "m", "s"] },
    children: { control: "text" },
  },
} satisfies Meta<typeof List>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const NestedLevel: Story = {
  args: { spot: "m", children: "하위 단계의 목록 항목입니다." },
};
export const LongContent: Story = {
  args: {
    children:
      "여러 줄로 이어지는 긴 목록 내용에서도 marker와 본문의 정렬이 유지되는지 확인합니다.",
  },
};
