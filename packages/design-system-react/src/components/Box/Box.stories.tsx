import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';

import { Text, TextColor, TextVariant } from '../Text';

import { Box } from './Box';
import { BoxBackgroundColor, BoxBorderColor } from './Box.types';
import README from './README.mdx';

const meta = {
  title: 'React Components/Box',
  component: Box,
  parameters: {
    docs: {
      description: {
        component:
          'A generic container component that can be used to create UI elements with background color, padding, and border color support',
      },
      page: README,
    },
  },
  argTypes: {
    backgroundColor: {
      control: 'select',
      options: Object.values(BoxBackgroundColor),
    },
    padding: {
      control: { type: 'range', min: 0, max: 12, step: 1 },
    },
    borderColor: {
      control: 'select',
      options: Object.values(BoxBorderColor),
    },
  },
} satisfies Meta<typeof Box>;

export default meta;
type Story = StoryObj<typeof Box>;

export const Default: Story = {
  args: {
    backgroundColor: BoxBackgroundColor.BackgroundDefault,
    padding: 4,
    borderColor: BoxBorderColor.BorderDefault,
    children: (
      <Text variant={TextVariant.BodyMd} color={TextColor.TextDefault}>
        Box with default styling (padding-4)
      </Text>
    ),
  },
};

export const WithAlternativeBackground: Story = {
  args: {
    backgroundColor: BoxBackgroundColor.BackgroundAlternative,
    padding: 6,
    borderColor: BoxBorderColor.BorderDefault,
    children: (
      <Text variant={TextVariant.BodyMd} color={TextColor.TextDefault}>
        Box with alternative background (padding-6)
      </Text>
    ),
  },
};

export const WithPrimaryColor: Story = {
  args: {
    backgroundColor: BoxBackgroundColor.PrimaryDefault,
    padding: 8,
    borderColor: BoxBorderColor.None,
    children: (
      <Text variant={TextVariant.BodyMd} color={TextColor.TextDefault}>
        Box with primary color (padding-8)
      </Text>
    ),
  },
};

export const WithBorder: Story = {
  args: {
    backgroundColor: BoxBackgroundColor.Transparent,
    padding: 2,
    borderColor: BoxBorderColor.BorderDefault,
    children: (
      <Text variant={TextVariant.BodyMd} color={TextColor.TextDefault}>
        Box with border (padding-2)
      </Text>
    ),
  },
};

export const PaddingVariations: Story = {
  render: () => (
    <div className="space-y-4">
      <Box padding={0} borderColor={BoxBorderColor.BorderDefault}>
        <Text variant={TextVariant.BodyMd}>padding: 0</Text>
      </Box>
      <Box padding={1} borderColor={BoxBorderColor.BorderDefault}>
        <Text variant={TextVariant.BodyMd}>padding: 1</Text>
      </Box>
      <Box padding={2} borderColor={BoxBorderColor.BorderDefault}>
        <Text variant={TextVariant.BodyMd}>padding: 2</Text>
      </Box>
      <Box padding={4} borderColor={BoxBorderColor.BorderDefault}>
        <Text variant={TextVariant.BodyMd}>padding: 4</Text>
      </Box>
      <Box padding={6} borderColor={BoxBorderColor.BorderDefault}>
        <Text variant={TextVariant.BodyMd}>padding: 6</Text>
      </Box>
      <Box padding={8} borderColor={BoxBorderColor.BorderDefault}>
        <Text variant={TextVariant.BodyMd}>padding: 8</Text>
      </Box>
      <Box padding={12} borderColor={BoxBorderColor.BorderDefault}>
        <Text variant={TextVariant.BodyMd}>padding: 12</Text>
      </Box>
    </div>
  ),
};
