import type { Meta, StoryObj } from "@storybook/react-vite";
import { Bold, Highlight, Text, Title } from "@repo/components";

const spacingTokens = [
  { name: "xs", value: "3px" },
  { name: "sm", value: "10px" },
  { name: "md", value: "20px" },
  { name: "lg", value: "30px" },
  { name: "xl", value: "40px" },
] as const;

const TypographyAndSpacing = () => (
  <section className="grid w-full max-w-4xl gap-10 text-[var(--ink)]">
    <div className="space-y-4">
      <Title title="공용 컴포넌트 제목" />
      <Text>본문은 viewport에 맞춰 읽기 좋은 크기를 유지합니다.</Text>
      <p>
        문장 안에서 <Bold>강조 텍스트</Bold>와 <Highlight>하이라이트</Highlight>를
        조합할 수 있습니다.
      </p>
    </div>

    <div className="space-y-4">
      <h2 className="text-lg font-bold">Spacing tokens</h2>
      {spacingTokens.map(({ name, value }) => (
        <div key={name} className="grid grid-cols-[3rem_4rem_1fr] items-center gap-3">
          <code className="text-sm">{name}</code>
          <span className="text-sm text-[var(--ink-secondary)]">{value}</span>
          <span
            className="block h-3 rounded-full bg-[var(--accent)]"
            style={{ width: value }}
          />
        </div>
      ))}
    </div>
  </section>
);

const meta = {
  title: "Foundations/Typography and Spacing",
  component: TypographyAndSpacing,
  tags: ["autodocs", "dark-test"],
  parameters: {
    docs: {
      description: {
        component:
          "공용 typography 컴포넌트의 기본 조합과 packages/components에 정의된 spacing 값을 보여줍니다.",
      },
    },
  },
} satisfies Meta<typeof TypographyAndSpacing>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
