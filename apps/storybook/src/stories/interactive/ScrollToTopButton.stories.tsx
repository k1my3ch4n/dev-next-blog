import type { Decorator, Meta, StoryObj } from "@storybook/react-vite";
import { expect, userEvent, waitFor, within } from "storybook/test";
import { ScrollToTopButton } from "@repo/components";

const withScrollablePage: Decorator = (Story) => (
  <div className="min-h-[200vh] bg-gradient-to-b from-transparent to-[var(--accent-soft)] p-4">
    <p>아래로 스크롤하면 버튼이 나타납니다.</p>
    <Story />
  </div>
);

const meta = {
  title: "Components/Interactive/ScrollToTopButton",
  component: ScrollToTopButton,
  tags: ["autodocs"],
  decorators: [withScrollablePage],
  parameters: { layout: "fullscreen" },
} satisfies Meta<typeof ScrollToTopButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const HiddenAtTop: Story = {};
export const VisibleAfterScroll: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const previewWindow = canvasElement.ownerDocument.defaultView;

    if (!previewWindow) throw new Error("Preview window를 찾을 수 없습니다.");

    previewWindow.scrollTo(0, 400);
    previewWindow.dispatchEvent(new previewWindow.Event("scroll"));

    const button = await waitFor(() =>
      canvas.getByRole("button", { name: "페이지 맨 위로 스크롤" }),
    );
    await expect(button).toBeVisible();
    await userEvent.click(button);
  },
};
