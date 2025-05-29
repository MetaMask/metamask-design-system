import type { Meta, StoryObj } from '@storybook/react-native';
import React from 'react';

import {
  BoxFlexDirection,
  BoxFlexWrap,
  BoxAlignItems,
  BoxJustifyContent,
  BoxBorderColor,
  BoxBorderRadius,
  BoxBorderWidth,
  BoxBorderStyle,
  BoxBackgroundColor,
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
    margin: { control: 'number', min: 0, max: 12 },
    marginTop: { control: 'number', min: 0, max: 12 },
    marginBottom: { control: 'number', min: 0, max: 12 },
    marginLeft: { control: 'number', min: 0, max: 12 },
    marginRight: { control: 'number', min: 0, max: 12 },
    padding: { control: 'number', min: 0, max: 12 },
    paddingTop: { control: 'number', min: 0, max: 12 },
    paddingBottom: { control: 'number', min: 0, max: 12 },
    paddingLeft: { control: 'number', min: 0, max: 12 },
    paddingRight: { control: 'number', min: 0, max: 12 },
    borderColor: { control: 'select', options: BoxBorderColor },
    borderWidth: { control: 'select', options: BoxBorderWidth },
    borderRadius: { control: 'select', options: BoxBorderRadius },
    borderStyle: { control: 'select', options: BoxBorderStyle },
    alignItems: { control: 'select', options: BoxAlignItems },
    justifyContent: { control: 'select', options: BoxJustifyContent },
    width: { control: 'number', min: 0, max: 12 },
    minWidth: { control: 'number', min: 0, max: 12 },
    height: { control: 'number', min: 0, max: 12 },
    minHeight: { control: 'number', min: 0, max: 12 },
    backgroundColor: { control: 'select', options: BoxBackgroundColor },
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
    flexDirection: BoxFlexDirection.Column,
  },
  render: (args) => <BoxStory {...args} />,
};

export const FlexWrap: Story = {
  args: {
    flexWrap: BoxFlexWrap.Wrap,
  },
  render: (args) => <BoxStory {...args} />,
};

export const Gap: Story = {
  args: {
    gap: 4,
  },
  render: (args) => <BoxStory {...args} />,
};

export const Margin: Story = {
  args: {
    margin: 2,
  },
  render: (args) => <BoxStory {...args} />,
};

export const MarginTop: Story = {
  args: {
    marginTop: 2,
  },
  render: (args) => <BoxStory {...args} />,
};

export const MarginBottom: Story = {
  args: {
    marginBottom: 2,
  },
  render: (args) => <BoxStory {...args} />,
};

export const MarginLeft: Story = {
  args: {
    marginLeft: 2,
  },
  render: (args) => <BoxStory {...args} />,
};

export const MarginRight: Story = {
  args: {
    marginRight: 2,
  },
  render: (args) => <BoxStory {...args} />,
};

export const Padding: Story = {
  args: {
    padding: 2,
  },
  render: (args) => <BoxStory {...args} />,
};

export const PaddingTop: Story = {
  args: {
    paddingTop: 2,
  },
  render: (args) => <BoxStory {...args} />,
};

export const PaddingBottom: Story = {
  args: {
    paddingBottom: 2,
  },
  render: (args) => <BoxStory {...args} />,
};

export const PaddingLeft: Story = {
  args: {
    paddingLeft: 2,
  },
  render: (args) => <BoxStory {...args} />,
};

export const PaddingRight: Story = {
  args: {
    paddingRight: 2,
  },
  render: (args) => <BoxStory {...args} />,
};

export const BorderColor: Story = {
  args: {
    borderColor: BoxBorderColor.PrimaryDefault,
  },
  render: (args) => <BoxStory {...args} />,
};

export const BorderWidth: Story = {
  args: {
    borderWidth: BoxBorderWidth.Lg,
  },
  render: (args) => <BoxStory {...args} />,
};

export const BorderRadius: Story = {
  args: {
    borderRadius: BoxBorderRadius.Lg,
  },
  render: (args) => <BoxStory {...args} />,
};

export const BorderStyle: Story = {
  args: {
    borderStyle: BoxBorderStyle.Dashed,
  },
  render: (args) => <BoxStory {...args} />,
};

export const AlignItems: Story = {
  args: {
    alignItems: BoxAlignItems.Center,
  },
  render: (args) => <BoxStory {...args} />,
};

export const JustifyContent: Story = {
  args: {
    justifyContent: BoxJustifyContent.Between,
  },
  render: (args) => <BoxStory {...args} />,
};

export const Width: Story = {
  args: {
    width: 6,
  },
  render: (args) => <BoxStory {...args} />,
};

export const MinWidth: Story = {
  args: {
    minWidth: 6,
  },
  render: (args) => <BoxStory {...args} />,
};

export const Height: Story = {
  args: {
    height: 6,
  },
  render: (args) => <BoxStory {...args} />,
};

export const MinHeight: Story = {
  args: {
    minHeight: 6,
  },
  render: (args) => <BoxStory {...args} />,
};

export const BackgroundColor: Story = {
  args: {
    backgroundColor: BoxBackgroundColor.PrimaryMuted,
  },
  render: (args) => <BoxStory {...args} />,
};

export const TwClassName: Story = {
  args: {
    twClassName: 'border border-dashed',
  },
  render: (args) => <BoxStory {...args} />,
};
