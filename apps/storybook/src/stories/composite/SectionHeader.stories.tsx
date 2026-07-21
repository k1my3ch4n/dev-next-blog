import type { Meta, StoryObj } from "@storybook/react-vite";
import { SectionHeader } from "@repo/components";

const meta = {
  title: "Components/Composite/SectionHeader",
  component: SectionHeader,
  tags: ["autodocs"],
  args: {
    label: "Projects",
    title: "주요 프로젝트",
    description: "최근 작업과 문제 해결 과정을 소개합니다.",
    className: "",
    descriptionClassName: "text-[var(--ink-muted)] text-sm mt-3",
  },
  argTypes: { action: { control: false } },
} satisfies Meta<typeof SectionHeader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const WithAction: Story = {
  args: {
    action: (
      <a href="#section-header-action" className="text-sm text-[var(--accent)]">
        전체 보기
      </a>
    ),
  },
};
export const WithoutDescription: Story = { args: { description: undefined } };
