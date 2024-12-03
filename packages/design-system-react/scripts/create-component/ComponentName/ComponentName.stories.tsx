import type { Meta, StoryObj } from '@storybook/react';

import { ComponentName } from './ComponentName';
import README from './README.mdx';

const meta: Meta<typeof ComponentName> = {
  title: 'Components/ComponentName',
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

// You can add more stories as needed
