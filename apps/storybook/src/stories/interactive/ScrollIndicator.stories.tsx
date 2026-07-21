import type { Decorator, Meta, StoryObj } from "@storybook/react-vite";
import { expect, waitFor, within } from "storybook/test";
import { ScrollIndicator } from "@repo/components";

const withScrollablePage: Decorator = (Story) => (
  <div className="min-h-[200vh] p-4">
    <p>페이지 하단에 도달하면 안내가 사라집니다.</p>
    <Story />
  </div>
);

const meta = {
  title: "Components/Interactive/ScrollIndicator",
  component: ScrollIndicator,
  tags: ["autodocs"],
  decorators: [withScrollablePage],
  parameters: { layout: "fullscreen" },
} satisfies Meta<typeof ScrollIndicator>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Visible: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const previewWindow = canvasElement.ownerDocument.defaultView;

    if (!previewWindow) throw new Error("Preview window를 찾을 수 없습니다.");

    previewWindow.scrollTo(0, 0);
    previewWindow.dispatchEvent(new previewWindow.Event("scroll"));
    await expect(canvas.getByText("스크롤")).toBeVisible();
  },
};

export const HiddenAtBottom: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const previewWindow = canvasElement.ownerDocument.defaultView;

    if (!previewWindow) throw new Error("Preview window를 찾을 수 없습니다.");

    previewWindow.scrollTo(0, canvasElement.ownerDocument.documentElement.scrollHeight);
    previewWindow.dispatchEvent(new previewWindow.Event("scroll"));

    await waitFor(() => expect(canvas.queryByText("스크롤")).not.toBeInTheDocument());
  },
};
