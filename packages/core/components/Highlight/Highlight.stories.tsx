import { Meta, StoryObj } from '@storybook/react';
import Highlight from './Highlight';
import Text from '../Text';

const meta: Meta<typeof Highlight> = {
  title: 'Typography/Highlight',
  component: Highlight,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: '텍스트 혹은 컴포넌트를 강조할 때 사용됩니다.',
      },
    },
  },
  render: ({ children }) => (
    <>
      <Highlight>{children}</Highlight>
      <Text>{children}</Text>
    </>
  ),
};

export default meta;

type Story = StoryObj<typeof Highlight>;

export const Default: Story = {
  args: {
    children: 'Highlight Example 예시',
  },
};
