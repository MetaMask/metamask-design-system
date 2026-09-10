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
  },
  decorators: [
    (Story) => (
      <Box twClassName="w-full p-4">
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

export const OnPress: Story = {
  argTypes: {
    onPress: { action: 'pressed' },
  },
  render: (args) => (
    <Card {...args}>
      <Text>Pressable card</Text>
    </Card>
  ),
};

export const TwClassName: Story = {
  render: (args) => (
    <Card {...args} twClassName="p-8 rounded-lg">
      <Text>Card with custom Tailwind classes</Text>
    </Card>
  ),
};
