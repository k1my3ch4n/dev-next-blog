import type { ReactNode } from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { expect, within } from "storybook/test";
import { GithubIcon, QuickLink } from "@repo/components";

interface QuickLinkStoryProps {
  href: string;
  icon: ReactNode;
  label: string;
  className?: string;
}

const QuickLinkStory = (props: QuickLinkStoryProps) => <QuickLink {...props} />;

const meta = {
  title: "Components/Composite/QuickLink",
  component: QuickLinkStory,
  tags: ["autodocs"],
  args: {
    href: "https://example.com/github",
    icon: <GithubIcon size={16} />,
    label: "GitHub",
  },
  argTypes: { icon: { control: false } },
} satisfies Meta<typeof QuickLinkStory>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  play: async ({ canvasElement }) => {
    const link = within(canvasElement).getByRole("link", { name: "GitHub" });
    await expect(link).toHaveAttribute("href", "https://example.com/github");
    await expect(link).toHaveAttribute("target", "_blank");
    await expect(link).toHaveAttribute("rel", "noopener noreferrer");
  },
};
