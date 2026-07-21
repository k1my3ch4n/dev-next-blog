import type { Meta, StoryObj } from "@storybook/react-vite";
import { expect, userEvent, within } from "storybook/test";
import { ThemeToggle } from "@repo/components";

const meta = {
  title: "Components/Interactive/ThemeToggle",
  component: ThemeToggle,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "전역 ThemeProvider의 context를 사용합니다. toolbar 테마와 별개로 버튼 자체의 toggle 동작을 확인합니다.",
      },
    },
  },
} satisfies Meta<typeof ThemeToggle>;

export default meta;
type Story = StoryObj<typeof meta>;

export const LightToDark: Story = {
  globals: { theme: "light" },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const toggle = canvas.getByRole("button", { name: "Switch to dark mode" });

    await userEvent.click(toggle);
    await expect(
      canvas.getByRole("button", { name: "Switch to light mode" }),
    ).toBeInTheDocument();
  },
};

export const DarkToLight: Story = {
  globals: { theme: "dark" },
};
