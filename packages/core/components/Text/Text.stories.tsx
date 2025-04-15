import { Meta, StoryObj } from '@storybook/react';
import Text from './Text';
import Bold from '../Bold';

const meta: Meta<typeof Text> = {
  title: 'Typography/Text',
  component: Text,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: '기본 텍스트를 표현할 때 사용됩니다.',
      },
    },
  },
  render: ({ children }) => (
    <>
      <Text>{children}</Text>
      <Bold>{children}</Bold>
    </>
  ),
};

export default meta;

type Story = StoryObj<typeof Text>;

export const Default: Story = {
  args: {
    children: 'Text Example 예시',
  },
};
