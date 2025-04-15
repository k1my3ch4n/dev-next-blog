import { Meta, StoryObj } from '@storybook/react';
import SplitGrid from './SplitGrid';

const meta: Meta<typeof SplitGrid> = {
  title: 'Typography/SplitGrid',
  component: SplitGrid,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: '좌 / 우 그리드를 구분할 때 사용됩니다.',
      },
    },
  },
  render: ({ lhs, rhs, lhsClassName, rhsClassName }) => (
    <SplitGrid lhs={lhs} rhs={rhs} lhsClassName={lhsClassName} rhsClassName={rhsClassName} />
  ),
};

export default meta;

type Story = StoryObj<typeof SplitGrid>;

export const Default: Story = {
  args: {
    lhs: <div>좌측 그리드</div>,
    rhs: <div>우측 그리드</div>,
  },
};
