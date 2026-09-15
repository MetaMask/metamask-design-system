import type { Meta, StoryObj } from '@storybook/react-vite';
import React from 'react';

import { Box } from '../Box';
import { Text } from '../Text';

import { Card } from './Card';
import type { CardProps } from './Card.types';
import README from './README.mdx';

const meta: Meta<CardProps> = {
  title: 'React Components/Card',
  component: Card,
  parameters: {
    docs: {
      page: README,
    },
  },
  argTypes: {
    children: {
      control: 'text',
    },
  },
  decorators: [
    (Story) => (
      <Box className="w-full p-4">
        <Story />
      </Box>
    ),
  ],
};

export default meta;
type Story = StoryObj<CardProps>;

export const Default: Story = {
  args: {
    children: 'Card content',
  },
};

export const Children: Story = {
  render: () => (
    <Card>
      <Text>Card content</Text>
    </Card>
  ),
};

export const OnClick: Story = {
  argTypes: {
    onClick: {
      action: 'clicked',
    },
  },
  render: (args) => (
    <Card {...args}>
      <Text>Clickable card</Text>
    </Card>
  ),
};

export const AsChild: Story = {
  render: () => (
    <Card asChild>
      <a href="#activity">Card content</a>
    </Card>
  ),
};
