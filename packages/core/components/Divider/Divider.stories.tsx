import { Meta, StoryObj } from '@storybook/react';
import Divider from './Divider';
import Title from '../Title';
import Header from '../Header';

const meta: Meta<typeof Divider> = {
  title: 'Typography/Divider',
  component: Divider,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: '컴포넌트와 컴포넌트 등을 구분할 때 사용됩니다.',
      },
    },
  },
  render: () => (
    <>
      <Title title="테스트용 타이틀" />
      <Divider />
      <Header>테스트용 헤더</Header>
    </>
  ),
};

export default meta;

type Story = StoryObj<typeof Divider>;

export const Default: Story = {};
