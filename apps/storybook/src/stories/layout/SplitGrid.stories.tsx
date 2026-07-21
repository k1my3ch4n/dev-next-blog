import type { Meta, StoryObj } from "@storybook/react-vite";
import { SplitGrid, Text, Title } from "@repo/components";

const meta = {
  title: "Components/Layout/SplitGrid",
  component: SplitGrid,
  tags: ["autodocs"],
  args: {
    lhs: (
      <div className="grid h-32 w-full place-items-center rounded-lg bg-[var(--accent-soft)]">
        Left
      </div>
    ),
    rhs: (
      <div className="space-y-2">
        <Title title="오른쪽 콘텐츠" />
        <Text>모바일에서는 세로로, tablet 이상에서는 2:3 비율로 배치됩니다.</Text>
      </div>
    ),
    lhsClassName: "",
    rhsClassName: "",
  },
  argTypes: {
    lhs: { control: false },
    rhs: { control: false },
  },
} satisfies Meta<typeof SplitGrid>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const Mobile: Story = {
  globals: { viewport: { value: "mobile", isRotated: false } },
};
export const Tablet: Story = {
  globals: { viewport: { value: "tablet", isRotated: false } },
};
export const Desktop: Story = {
  globals: { viewport: { value: "desktop", isRotated: false } },
};
export const ReversedEmphasis: Story = {
  args: {
    lhsClassName: "md:items-center",
    rhsClassName: "rounded-lg border border-[var(--border)] p-4",
  },
};
