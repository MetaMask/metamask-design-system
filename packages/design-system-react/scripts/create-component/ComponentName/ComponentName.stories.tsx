import type { Meta, StoryObj } from '@storybook/react';

import { ComponentName } from './ComponentName';
import README from './README.mdx';

const meta: Meta<typeof ComponentName> = {
  title: 'React Components/ComponentName',
  component: ComponentName,
  parameters: {
    docs: {
      page: README,
    },
  },
};

export default meta;
type Story = StoryObj<typeof ComponentName>;

export const Default: Story = {
  args: {
    children: 'Default ComponentName',
  },
};

export const Children: Story = {
  args: {
    children: 'This is an example of using children with ComponentName',
  },
};
