import type { Meta, StoryObj } from '@storybook/react-native';
import React from 'react';

import { Box, BoxFlexDirection } from '../Box';

import { ButtonFilter } from './ButtonFilter';

const meta: Meta<typeof ButtonFilter> = {
  title: 'Components/ButtonFilter',
  component: ButtonFilter,
  argTypes: {
    isActive: {
      control: 'boolean',
    },
    children: {
      control: 'text',
    },
  },
  args: {
    children: 'Filter',
    onPress: () => {
      // Demo only
    },
  },
};

export default meta;
type Story = StoryObj<typeof ButtonFilter>;

export const Default: Story = {
  args: {},
};

export const IsActive: Story = {
  args: {
    isActive: true,
  },
};

export const FilterGroup: Story = {
  render: (args) => (
    <Box flexDirection={BoxFlexDirection.Row} gap={3}>
      <ButtonFilter {...args} isActive>
        All
      </ButtonFilter>
      <ButtonFilter {...args}>Purchased</ButtonFilter>
      <ButtonFilter {...args}>Sold</ButtonFilter>
    </Box>
  ),
};
