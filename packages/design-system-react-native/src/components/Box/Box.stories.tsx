import type { Meta, StoryObj } from '@storybook/react-native';
import React from 'react';

import {
  BoxFlexDirection,
  BoxFlexWrap,
  BoxAlignItems,
  BoxJustifyContent,
  BoxBackgroundColor,
  BoxBorderColor,
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
    margin: { control: 'number', min: 0, max: 12 },
    marginTop: { control: 'number', min: 0, max: 12 },
    marginRight: { control: 'number', min: 0, max: 12 },
    marginBottom: { control: 'number', min: 0, max: 12 },
    marginLeft: { control: 'number', min: 0, max: 12 },
    marginHorizontal: { control: 'number', min: 0, max: 12 },
    marginVertical: { control: 'number', min: 0, max: 12 },
    padding: { control: 'number', min: 0, max: 12 },
    paddingTop: { control: 'number', min: 0, max: 12 },
    paddingRight: { control: 'number', min: 0, max: 12 },
    paddingBottom: { control: 'number', min: 0, max: 12 },
    paddingLeft: { control: 'number', min: 0, max: 12 },
    paddingHorizontal: { control: 'number', min: 0, max: 12 },
    paddingVertical: { control: 'number', min: 0, max: 12 },
    borderWidth: { control: 'number', min: 0, max: 12 },
    borderColor: { control: 'select', options: BoxBorderColor },
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

export const Margin: Story = {
  args: {
    margin: 4,
    backgroundColor: BoxBackgroundColor.PrimaryMuted,
  },
  render: (args) => (
    <Box backgroundColor={BoxBackgroundColor.Alternative} padding={2}>
      <Text>Outer container</Text>
      <Box {...args}>
        <Text>Inner box with margin</Text>
      </Box>
    </Box>
  ),
};

export const MarginDirectional: Story = {
  args: {
    marginTop: 2,
    marginBottom: 4,
    marginLeft: 3,
    marginRight: 1,
    backgroundColor: BoxBackgroundColor.WarningMuted,
  },
  render: (args) => (
    <Box backgroundColor={BoxBackgroundColor.Alternative} padding={2}>
      <Text>Outer container</Text>
      <Box {...args}>
        <Text>Box with directional margins</Text>
      </Box>
    </Box>
  ),
};

export const Padding: Story = {
  args: {
    padding: 6,
    backgroundColor: BoxBackgroundColor.SuccessMuted,
  },
  render: (args) => (
    <Box {...args}>
      <Text>Box with padding</Text>
    </Box>
  ),
};

export const PaddingDirectional: Story = {
  args: {
    paddingTop: 2,
    paddingBottom: 4,
    paddingHorizontal: 6,
    backgroundColor: BoxBackgroundColor.InfoMuted,
  },
  render: (args) => (
    <Box {...args}>
      <Text>Box with directional padding</Text>
    </Box>
  ),
};

export const Border: Story = {
  args: {
    borderWidth: 2,
    borderColor: BoxBorderColor.PrimaryDefault,
    padding: 4,
  },
  render: (args) => (
    <Box {...args}>
      <Text>Box with border</Text>
    </Box>
  ),
};

export const BorderError: Story = {
  args: {
    borderWidth: 1,
    borderColor: BoxBorderColor.ErrorDefault,
    backgroundColor: BoxBackgroundColor.ErrorMuted,
    padding: 4,
  },
  render: (args) => (
    <Box {...args}>
      <Text>Error state box</Text>
    </Box>
  ),
};

export const BackgroundColor: Story = {
  args: {
    backgroundColor: BoxBackgroundColor.PrimaryDefault,
    padding: 4,
  },
  render: (args) => (
    <Box {...args}>
      <Text>Box with background color</Text>
    </Box>
  ),
};

export const ComplexLayout: Story = {
  args: {
    flexDirection: BoxFlexDirection.Column,
    gap: 3,
    margin: 4,
    padding: 6,
    borderWidth: 1,
    borderColor: BoxBorderColor.Default,
    backgroundColor: BoxBackgroundColor.Default,
  },
  render: (args) => (
    <Box {...args}>
      <Text>Complex layout with all props</Text>
      <Box
        flexDirection={BoxFlexDirection.Row}
        gap={2}
        padding={3}
        backgroundColor={BoxBackgroundColor.Alternative}
        borderWidth={1}
        borderColor={BoxBorderColor.Muted}
      >
        <Text>Child 1</Text>
        <Text>Child 2</Text>
      </Box>
    </Box>
  ),
};

export const CardExample: Story = {
  args: {
    padding: 4,
    margin: 3,
    backgroundColor: BoxBackgroundColor.Default,
    borderWidth: 1,
    borderColor: BoxBorderColor.Default,
  },
  render: (args) => (
    <Box {...args}>
      <Text>Card-like component</Text>
      <Box marginTop={2} gap={2}>
        <Text>Card content goes here</Text>
        <Text>More content</Text>
      </Box>
    </Box>
  ),
};

export const TwClassName: Story = {
  args: {
    twClassName:
      'border-2 border-dashed border-warning-default bg-warning-muted p-3',
  },
  render: (args) => <BoxStory {...args} />,
};
