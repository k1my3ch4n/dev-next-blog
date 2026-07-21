import type { Meta, StoryObj } from "@storybook/react-vite";
import { Layout, Text, Title } from "@repo/components";

const meta = {
  title: "Components/Layout/Layout",
  component: Layout,
  tags: ["autodocs"],
  args: {
    className: "",
    children: (
      <>
        <Title title="페이지 레이아웃" />
        <Text>콘텐츠 너비와 반응형 여백을 제공하는 기본 레이아웃입니다.</Text>
      </>
    ),
  },
  argTypes: { children: { control: false } },
  parameters: { layout: "fullscreen" },
} satisfies Meta<typeof Layout>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const DenseContent: Story = {
  args: {
    children: (
      <div className="space-y-4">
        <Title title="긴 콘텐츠 예시" />
        {Array.from({ length: 5 }, (_, index) => (
          <Text key={index}>레이아웃 내부 본문 {index + 1}</Text>
        ))}
      </div>
    ),
  },
};
