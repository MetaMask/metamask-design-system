import type { Meta, StoryObj } from '@storybook/react-native';
import React from 'react';

import { BoxBackgroundColor } from '../../types';
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
      <Box
        backgroundColor={BoxBackgroundColor.BackgroundAlternative}
        padding={4}
      >
        <Text>Content behind card</Text>
        <Box padding={2} />
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
  render: (args) => (
    <Card {...args} onPress={() => console.log('pressed')}>
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
