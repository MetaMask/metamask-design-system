import type { Meta, StoryObj } from '@storybook/react-native';
import React from 'react';

import { Box } from '../Box/index.js';

import { Label } from './Label.js';
import type { LabelProps } from './Label.types.js';

const meta: Meta<LabelProps> = {
  title: 'Components/Label',
  component: Label,
  argTypes: {
    children: { control: 'text' },
    twClassName: { control: 'text' },
    style: { control: 'object' },
  },
  decorators: [
    (Story) => (
      <Box twClassName="p-4">
        <Story />
      </Box>
    ),
  ],
};

export default meta;
type Story = StoryObj<LabelProps>;

export const Default: Story = {
  args: {
    children: 'Sample label text',
  },
};
