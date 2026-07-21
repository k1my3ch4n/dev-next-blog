import type { Meta, StoryObj } from "@storybook/react-vite";
import { expect, fn, userEvent, within } from "storybook/test";
import { HomeButton } from "@repo/components";

const meta = {
  title: "Components/Composite/HomeButton",
  component: HomeButton,
  tags: ["autodocs"],
  args: { onClick: fn() },
  argTypes: { onClick: { control: false } },
} satisfies Meta<typeof HomeButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  play: async ({ args, canvasElement }) => {
    const button = within(canvasElement).getByRole("button", { name: "홈으로 이동" });
    await userEvent.click(button);
    await expect(args.onClick).toHaveBeenCalledTimes(1);
  },
};
