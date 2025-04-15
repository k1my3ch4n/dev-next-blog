import { Meta, StoryObj } from '@storybook/react';
import Bold from './Bold';
import Text from '../Text';

const meta: Meta<typeof Bold> = {
  title: 'Typography/Bold',
  component: Bold,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: '텍스트 혹은 다른 컴포넌트를 굵게 표현할 때 사용됩니다.',
      },
    },
  },
  render: ({ children }) => (
    <>
      <Bold>{children}</Bold>
      <Text>{children}</Text>
    </>
  ),
};

export default meta;

type Story = StoryObj<typeof Bold>;

export const Default: Story = {
  args: {
    children: 'Bold Example 예시',
  },
};
