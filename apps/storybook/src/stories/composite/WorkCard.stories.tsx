import type { Decorator, Meta, StoryObj } from "@storybook/react-vite";
import { expect, fn, userEvent, within } from "storybook/test";
import { WorkCard } from "@repo/components";

const withCardWidth: Decorator = (Story) => (
  <div className="w-full max-w-md">
    <Story />
  </div>
);

const meta = {
  title: "Components/Composite/WorkCard",
  component: WorkCard,
  tags: ["autodocs"],
  decorators: [withCardWidth],
  args: {
    cardTypo: { main: "Dev Blog", sub: "Next.js Monorepo" },
    title: "공용 컴포넌트와 Storybook 구축",
    description: "두 애플리케이션에서 사용하는 UI를 분리하고 문서화한 프로젝트입니다.",
    period: "2026.07",
    type: "personal",
    techStack: ["React", "TypeScript", "Storybook", "Tailwind CSS", "Vite"],
    gradient: "linear-gradient(135deg, #0f172a, #2563eb)",
    onClick: fn(),
  },
  argTypes: {
    type: {
      control: "select",
      options: ["personal", "openSource", "career", "hackathon"],
    },
    onClick: { control: false },
  },
} satisfies Meta<typeof WorkCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Interactive: Story = {
  play: async ({ args, canvasElement }) => {
    const canvas = within(canvasElement);
    const card = canvas.getByRole("button");

    await userEvent.click(card);
    await expect(args.onClick).toHaveBeenCalledTimes(1);
  },
};

export const LongContent: Story = {
  args: {
    title: "여러 화면에서 재사용 가능한 공용 컴포넌트 아키텍처와 문서 시스템 구축",
    description:
      "긴 제목과 설명이 포함되어도 카드 높이, 기술 태그, 본문 배치가 안정적으로 유지되는지 확인하기 위한 경계 사례입니다.",
    techStack: ["React", "TypeScript", "Storybook", "Tailwind CSS", "Vite", "pnpm"],
  },
};

export const ExternalLink: Story = {
  args: {
    href: "https://example.com/project",
    onClick: undefined,
    type: "openSource",
  },
  play: async ({ canvasElement }) => {
    const link = within(canvasElement).getByRole("link");
    await expect(link).toHaveAttribute("target", "_blank");
    await expect(link).toHaveAttribute("rel", "noopener noreferrer");
  },
};
