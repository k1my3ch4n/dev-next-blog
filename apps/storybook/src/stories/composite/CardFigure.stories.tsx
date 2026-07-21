import type { Decorator, Meta, StoryObj } from "@storybook/react-vite";
import { CardFigure } from "@repo/components";

const withCardWidth: Decorator = (Story) => (
  <div className="group w-full max-w-xl overflow-hidden rounded-xl">
    <Story />
  </div>
);

const meta = {
  title: "Components/Composite/CardFigure",
  component: CardFigure,
  tags: ["autodocs"],
  decorators: [withCardWidth],
  args: {
    gradient: "linear-gradient(135deg, #4338ca, #0ea5e9)",
    cardTypo: { main: "Storybook", sub: "Shared UI Components" },
    actionLabel: "자세히 보기",
    titleSize: "lg",
  },
  argTypes: {
    titleSize: { control: "radio", options: ["lg", "md"] },
  },
} satisfies Meta<typeof CardFigure>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const MediumTitle: Story = { args: { titleSize: "md" } };
export const LongTitle: Story = {
  args: {
    cardTypo: {
      main: "Reusable Component Architecture",
      sub: "Long typography boundary case",
    },
  },
};
