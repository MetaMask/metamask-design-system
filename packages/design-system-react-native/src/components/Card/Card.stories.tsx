import type { Meta, StoryObj } from '@storybook/react-native';
import React from 'react';

import { Box } from '../Box';
import { Text } from '../Text';

import { Card } from './Card';
import type { CardProps } from './Card.types';

const meta: Meta<CardProps> = {
  title: 'Components/Card',
  component: Card,
  argTypes: {
    children: { control: 'text' },
    twClassName: { control: 'text' },
    onPress: { action: 'pressed' },
  },
  decorators: [
    (Story) => (
      <Box padding={4}>
        <Text twClassName="mb-4">Content behind card</Text>
        <Story />
      </Box>
    ),
  ],
};

export default meta;
type Story = StoryObj<CardProps>;

export const Default: Story = {
  args: {},
  render: (args) => (
    <Card {...args}>
      <Text>Card content</Text>
    </Card>
  ),
};

export const IsInteractive: Story = {
  render: (args) => (
    <Card {...args} isInteractive onPress={() => console.log('pressed')}>
      <Text>Pressable card</Text>
    </Card>
  ),
};
