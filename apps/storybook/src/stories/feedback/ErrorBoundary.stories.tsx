import type { Meta, StoryObj } from "@storybook/react-vite";
import { spyOn } from "storybook/test";
import { ErrorBoundary } from "@repo/components";

const ThrowingFixture = () => {
  throw new Error("Story fixture에서 발생시킨 예제 오류입니다.");
};

const customFallback = (
  <div role="alert" className="rounded-lg border border-red-300 bg-red-50 p-4 text-red-800">
    요청한 영역을 표시하지 못했습니다. 잠시 후 다시 시도해 주세요.
  </div>
);

const meta = {
  title: "Components/Feedback/ErrorBoundary",
  component: ErrorBoundary,
  tags: ["autodocs"],
  beforeEach: () => {
    const consoleError = spyOn(console, "error").mockImplementation(() => {});

    return () => consoleError.mockRestore();
  },
  args: {
    children: <ThrowingFixture />,
    fallback: customFallback,
  },
  argTypes: {
    children: { control: false },
    fallback: { control: false },
    onError: { control: false },
  },
  parameters: {
    docs: {
      description: {
        component:
          "렌더링 오류를 포착해 fallback UI로 전환합니다. 이 story는 검증을 위해 의도적으로 오류를 발생시킵니다.",
      },
    },
  },
} satisfies Meta<typeof ErrorBoundary>;

export default meta;
type Story = StoryObj<typeof meta>;

export const CustomFallback: Story = {};
export const DefaultFallback: Story = {
  args: { fallback: undefined },
};
export const HealthyContent: Story = {
  args: {
    children: <p>오류가 없으면 children을 그대로 렌더링합니다.</p>,
    fallback: undefined,
  },
};
