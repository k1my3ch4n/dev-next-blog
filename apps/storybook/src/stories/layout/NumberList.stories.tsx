import type { Meta, StoryObj } from "@storybook/react-vite";
import { NumberList } from "@repo/components";

const meta = {
  title: "Components/Layout/NumberList",
  component: NumberList,
  tags: ["autodocs"],
  args: {
    children: [
      <span key="first">요구사항을 확인합니다.</span>,
      <span key="second">컴포넌트를 구현합니다.</span>,
      <span key="third">결과를 검증합니다.</span>,
    ],
  },
  argTypes: { children: { control: false } },
} satisfies Meta<typeof NumberList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const SingleItem: Story = {
  args: { children: <span>하나의 항목만 표시합니다.</span> },
};
