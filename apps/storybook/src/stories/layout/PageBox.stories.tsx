import type { SVGProps } from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { PageBox } from "@repo/components";

const Thumbnail = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 320 240" {...props}>
    <rect width="320" height="240" fill="var(--accent-soft)" />
    <circle cx="240" cy="70" r="32" fill="var(--accent)" />
    <path d="M20 220 110 95l60 75 40-45 90 95Z" fill="var(--ink-secondary)" />
  </svg>
);

const meta = {
  title: "Components/Layout/PageBox",
  component: PageBox,
  tags: ["autodocs"],
  args: {
    Thumbnail,
    title: "공용 컴포넌트 프로젝트",
    width: "280px",
    className: "",
    imageClassName: "",
  },
  argTypes: {
    Thumbnail: { control: false },
    onClick: { control: false },
  },
} satisfies Meta<typeof PageBox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ButtonCard: Story = {};
export const LinkCard: Story = {
  args: {
    href: "#page-box-link",
    target: "_self",
    title: "링크로 동작하는 프로젝트 카드",
  },
};
export const LongTitle: Story = {
  args: {
    title: "두 줄 말줄임을 확인하기 위한 매우 긴 프로젝트 제목 예시입니다",
  },
};
