import { Meta, StoryObj } from '@storybook/react';
import Layout from './Layout';
import styles from './Layout.module.scss';

const meta: Meta<typeof Layout> = {
  title: 'Typography/Layout',
  component: Layout,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: '기본 레이아웃을 나타낼 때 사용됩니다.',
      },
    },
  },
  render: ({ className, children }) => <Layout className={className}>{children}</Layout>,
};

export default meta;

type Story = StoryObj<typeof Layout>;

export const Default: Story = {
  args: {
    children: <div>레이아웃 테스트 입니다.</div>,
    className: styles.storybook,
  },
};
