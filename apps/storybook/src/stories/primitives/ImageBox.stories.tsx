import type { SVGProps } from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { ImageBox } from "@repo/components";

const DemoImage = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 160 100" role="img" aria-label="산과 해를 표현한 예제 이미지" {...props}>
    <rect width="160" height="100" rx="12" fill="var(--accent-soft)" />
    <circle cx="125" cy="25" r="12" fill="var(--accent)" />
    <path d="M10 90 55 35l30 35 20-20 45 40Z" fill="var(--ink-secondary)" />
  </svg>
);

const meta = {
  title: "Components/Primitives/ImageBox",
  component: ImageBox,
  tags: ["autodocs"],
  args: {
    Image: DemoImage,
    width: "320px",
    height: "200px",
    wrapperClassName: "m-0",
    imageClassName: "block",
  },
  argTypes: {
    Image: { control: false },
  },
} satisfies Meta<typeof ImageBox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const Compact: Story = {
  args: { width: "160px", height: "100px" },
};
