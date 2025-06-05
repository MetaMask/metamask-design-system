import type { Meta, StoryObj } from '@storybook/react-native';
import React from 'react';

import {
  BoxFlexDirection,
  BoxFlexWrap,
  BoxAlignItems,
  BoxJustifyContent,
} from '../../types';
import { Text } from '../Text';

import { Box } from './Box';
import type { BoxProps } from './Box.types';

const meta: Meta<BoxProps> = {
  title: 'Components/Box',
  component: Box,
  argTypes: {
    flexDirection: { control: 'select', options: BoxFlexDirection },
    flexWrap: { control: 'select', options: BoxFlexWrap },
    gap: { control: 'number', min: 0, max: 12 },
    alignItems: { control: 'select', options: BoxAlignItems },
    justifyContent: { control: 'select', options: BoxJustifyContent },
    twClassName: { control: 'text' },
    children: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj<BoxProps>;
const BoxStory: React.FC<BoxProps> = (args) => {
  return (
    <Box {...args}>
      <Text>Text 1</Text>
      <Text>Text 2</Text>
      <Text>Text 3</Text>
    </Box>
  );
};

export const Default: Story = {
  render: (args) => <BoxStory {...args} />,
};

export const FlexDirection: Story = {
  args: {
    flexDirection: BoxFlexDirection.Row,
    gap: 2,
  },
  render: (args) => <BoxStory {...args} />,
};

export const FlexWrap: Story = {
  args: {
    flexDirection: BoxFlexDirection.Row,
    flexWrap: BoxFlexWrap.Wrap,
    gap: 2,
  },
  render: (args) => (
    <Box {...args} twClassName="w-1/2">
      <Text>Long text item 1</Text>
      <Text>Long text item 2</Text>
      <Text>Long text item 3</Text>
      <Text>Long text item 4</Text>
    </Box>
  ),
};

export const Gap: Story = {
  args: {
    gap: 4,
  },
  render: (args) => <BoxStory {...args} />,
};

export const AlignItems: Story = {
  args: {
    alignItems: BoxAlignItems.Center,
    twClassName: 'h-1/2',
  },
  render: (args) => <BoxStory {...args} />,
};

export const JustifyContent: Story = {
  args: {
    flexDirection: BoxFlexDirection.Row,
    justifyContent: BoxJustifyContent.Between,
  },
  render: (args) => <BoxStory {...args} />,
};

export const TwClassName: Story = {
  args: {
    twClassName:
      'border-2 border-dashed border-warning-default bg-warning-muted p-3',
  },
  render: (args) => <BoxStory {...args} />,
};
