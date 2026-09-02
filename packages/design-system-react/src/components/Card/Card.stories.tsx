import { BoxBackgroundColor } from '@metamask/design-system-shared';
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
    onClick: {
      action: 'clicked',
    },
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
  render: (args) => (
    <Card
      {...args}
      onClick={(event) => {
        args.onClick?.(event);
      }}
    >
      <Text>Pressable card</Text>
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
