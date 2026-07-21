import type { Meta, StoryObj } from "@storybook/react-vite";

const colorTokens = [
  { name: "Accent", variable: "--accent" },
  { name: "Accent soft", variable: "--accent-soft" },
  { name: "Surface", variable: "--surface" },
  { name: "Surface raised", variable: "--surface-raised" },
  { name: "Ink", variable: "--ink" },
  { name: "Ink secondary", variable: "--ink-secondary" },
  { name: "Ink muted", variable: "--ink-muted" },
  { name: "Border", variable: "--border" },
] as const;

const ThemeTokens = () => (
  <section className="grid w-full max-w-4xl grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
    {colorTokens.map(({ name, variable }) => (
      <article
        key={variable}
        className="overflow-hidden rounded-lg border border-[var(--border)] bg-[var(--surface-raised)]"
      >
        <div
          className="h-24 border-b border-[var(--border)]"
          style={{ background: `var(${variable})` }}
        />
        <div className="space-y-1 p-3">
          <strong className="block text-sm text-[var(--ink)]">{name}</strong>
          <code className="text-xs text-[var(--ink-secondary)]">{variable}</code>
        </div>
      </article>
    ))}
  </section>
);

const meta = {
  title: "Foundations/Theme",
  component: ThemeTokens,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "공용 컴포넌트가 사용하는 핵심 CSS 변수입니다. Storybook toolbar의 Light/Dark 항목으로 두 테마를 비교할 수 있습니다.",
      },
    },
  },
} satisfies Meta<typeof ThemeTokens>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
