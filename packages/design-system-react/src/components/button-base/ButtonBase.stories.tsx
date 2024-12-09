import type { Meta, StoryObj } from '@storybook/react';

import { ButtonBase } from './ButtonBase';
import README from './README.mdx';

const meta: Meta<typeof ButtonBase> = {
  title: 'React Components/ButtonBase',
  component: ButtonBase,
  parameters: {
    docs: {
      page: README,
    },
  },
};

export default meta;
type Story = StoryObj<typeof ButtonBase>;

export const Default: Story = {
  args: {
    children: 'Default ButtonBase',
  },
};

// You can add more stories as needed
