import { Meta, StoryObj } from '@storybook/react';
import Link from './Link';

const meta: Meta<typeof Link> = {
  title: 'Typography/Link',
  component: Link,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: '내 / 외부 링크를 나타낼 때 사용됩니다.',
      },
    },
  },
  render: ({ link, children }) => <Link link={link}>{children}</Link>,
};

export default meta;

type Story = StoryObj<typeof Link>;

export const Default: Story = {
  args: {
    link: 'https://www.naver.com/',
    children: 'Link Example 예시 ( 임시 주소 : 네이버 )',
  },
};
