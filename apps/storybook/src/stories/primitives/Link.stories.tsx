import type { Meta, StoryObj } from "@storybook/react-vite";
import { Link } from "@repo/components";

const meta = {
  title: "Components/Primitives/Link",
  component: Link,
  tags: ["autodocs"],
  args: {
    link: "https://example.com",
    isBlank: true,
    children: "외부 링크",
    ariaLabel: "예제 사이트 새 창에서 열기",
  },
  argTypes: { children: { control: "text" } },
} satisfies Meta<typeof Link>;

export default meta;
type Story = StoryObj<typeof meta>;

export const External: Story = {};
export const SameWindow: Story = {
  args: {
    link: "#same-window",
    isBlank: false,
    children: "현재 창 링크",
    ariaLabel: undefined,
  },
};
