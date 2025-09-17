import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';

import {
  BoxFlexDirection,
  BoxFlexWrap,
  BoxAlignItems,
  BoxJustifyContent,
  BoxBackgroundColor,
  BoxBorderColor,
  TextColor,
} from '../../types';
import { Text } from '../Text';

import { Box } from './Box';
import type { BoxProps } from './Box.types';
import README from './README.mdx';

const meta: Meta<BoxProps> = {
  title: 'React Components/Box',
  component: Box,
  parameters: {
    docs: {
      page: README,
    },
  },
  argTypes: {
    flexDirection: {
      control: 'select',
      options: Object.keys(BoxFlexDirection),
      mapping: BoxFlexDirection,
    },
    flexWrap: {
      control: 'select',
      options: Object.keys(BoxFlexWrap),
      mapping: BoxFlexWrap,
    },
    alignItems: {
      control: 'select',
      options: Object.keys(BoxAlignItems),
      mapping: BoxAlignItems,
    },
    justifyContent: {
      control: 'select',
      options: Object.keys(BoxJustifyContent),
      mapping: BoxJustifyContent,
    },
    backgroundColor: {
      control: 'select',
      options: Object.keys(BoxBackgroundColor),
      mapping: BoxBackgroundColor,
    },
    borderColor: {
      control: 'select',
      options: Object.keys(BoxBorderColor),
      mapping: BoxBorderColor,
    },
  },
};

export default meta;
type Story = StoryObj<BoxProps>;

export const Default: Story = {
  args: {
    flexDirection: BoxFlexDirection.Row,
    gap: 2,
    padding: 4,
  },
  render: (args: BoxProps) => (
    <Box {...args}>
      <Text>Item 1</Text>
      <Text>Item 2</Text>
      <Text>Item 3</Text>
    </Box>
  ),
};

export const FlexDirection: Story = {
  render: (args: BoxProps) => (
    <Box flexDirection={BoxFlexDirection.Column} gap={4}>
      <Box
        {...args}
        flexDirection={BoxFlexDirection.Row}
        gap={2}
        padding={3}
        backgroundColor={BoxBackgroundColor.BackgroundMuted}
        borderColor={BoxBorderColor.BorderMuted}
        borderWidth={1}
      >
        <Text>Row</Text>
        <Text>Layout</Text>
        <Text>Items</Text>
      </Box>
      <Box
        {...args}
        flexDirection={BoxFlexDirection.RowReverse}
        gap={2}
        padding={3}
        backgroundColor={BoxBackgroundColor.BackgroundMuted}
        borderColor={BoxBorderColor.BorderMuted}
        borderWidth={1}
      >
        <Text>Row</Text>
        <Text>Reverse</Text>
        <Text>Items</Text>
      </Box>
      <Box
        {...args}
        flexDirection={BoxFlexDirection.Column}
        gap={2}
        padding={3}
        backgroundColor={BoxBackgroundColor.BackgroundMuted}
        borderColor={BoxBorderColor.BorderMuted}
        borderWidth={1}
      >
        <Text>Column</Text>
        <Text>Layout</Text>
        <Text>Items</Text>
      </Box>
      <Box
        {...args}
        flexDirection={BoxFlexDirection.ColumnReverse}
        gap={2}
        padding={3}
        backgroundColor={BoxBackgroundColor.BackgroundMuted}
        borderColor={BoxBorderColor.BorderMuted}
        borderWidth={1}
      >
        <Text>Column</Text>
        <Text>Reverse</Text>
        <Text>Items</Text>
      </Box>
    </Box>
  ),
};

export const AlignItems: Story = {
  render: (args: BoxProps) => (
    <Box flexDirection={BoxFlexDirection.Column} gap={4}>
      <Box
        {...args}
        flexDirection={BoxFlexDirection.Row}
        alignItems={BoxAlignItems.Start}
        padding={3}
        backgroundColor={BoxBackgroundColor.BackgroundAlternative}
        borderColor={BoxBorderColor.BorderDefault}
        borderWidth={1}
        className="h-16"
      >
        <Text>Start</Text>
        <Text>Aligned</Text>
        <Text>Items</Text>
      </Box>
      <Box
        {...args}
        flexDirection={BoxFlexDirection.Row}
        alignItems={BoxAlignItems.Center}
        padding={3}
        backgroundColor={BoxBackgroundColor.BackgroundAlternative}
        borderColor={BoxBorderColor.BorderDefault}
        borderWidth={1}
        className="h-16"
      >
        <Text>Center</Text>
        <Text>Aligned</Text>
        <Text>Items</Text>
      </Box>
      <Box
        {...args}
        flexDirection={BoxFlexDirection.Row}
        alignItems={BoxAlignItems.End}
        padding={3}
        backgroundColor={BoxBackgroundColor.BackgroundAlternative}
        borderColor={BoxBorderColor.BorderDefault}
        borderWidth={1}
        className="h-16"
      >
        <Text>End</Text>
        <Text>Aligned</Text>
        <Text>Items</Text>
      </Box>
      <Box
        {...args}
        flexDirection={BoxFlexDirection.Row}
        alignItems={BoxAlignItems.Stretch}
        padding={3}
        backgroundColor={BoxBackgroundColor.BackgroundAlternative}
        borderColor={BoxBorderColor.BorderDefault}
        borderWidth={1}
        className="h-16"
      >
        <Text>Stretch</Text>
        <Text>Aligned</Text>
        <Text>Items</Text>
      </Box>
      <Box
        {...args}
        flexDirection={BoxFlexDirection.Row}
        alignItems={BoxAlignItems.Baseline}
        padding={3}
        backgroundColor={BoxBackgroundColor.BackgroundAlternative}
        borderColor={BoxBorderColor.BorderDefault}
        borderWidth={1}
        className="h-16"
      >
        <Text>Baseline</Text>
        <Text>Aligned</Text>
        <Text>Items</Text>
      </Box>
    </Box>
  ),
};

export const JustifyContent: Story = {
  render: (args: BoxProps) => (
    <Box flexDirection={BoxFlexDirection.Column} gap={4}>
      <Box
        {...args}
        flexDirection={BoxFlexDirection.Row}
        justifyContent={BoxJustifyContent.Start}
        padding={3}
        backgroundColor={BoxBackgroundColor.BackgroundAlternative}
        borderColor={BoxBorderColor.BorderDefault}
        borderWidth={1}
        className="w-80"
      >
        <Text>Start</Text>
        <Text>Items</Text>
      </Box>
      <Box
        {...args}
        flexDirection={BoxFlexDirection.Row}
        justifyContent={BoxJustifyContent.Center}
        padding={3}
        backgroundColor={BoxBackgroundColor.BackgroundAlternative}
        borderColor={BoxBorderColor.BorderDefault}
        borderWidth={1}
        className="w-80"
      >
        <Text>Center</Text>
        <Text>Items</Text>
      </Box>
      <Box
        {...args}
        flexDirection={BoxFlexDirection.Row}
        justifyContent={BoxJustifyContent.End}
        padding={3}
        backgroundColor={BoxBackgroundColor.BackgroundAlternative}
        borderColor={BoxBorderColor.BorderDefault}
        borderWidth={1}
        className="w-80"
      >
        <Text>End</Text>
        <Text>Items</Text>
      </Box>
      <Box
        {...args}
        flexDirection={BoxFlexDirection.Row}
        justifyContent={BoxJustifyContent.Between}
        padding={3}
        backgroundColor={BoxBackgroundColor.BackgroundAlternative}
        borderColor={BoxBorderColor.BorderDefault}
        borderWidth={1}
        className="w-80"
      >
        <Text>Between</Text>
        <Text>Items</Text>
      </Box>
      <Box
        {...args}
        flexDirection={BoxFlexDirection.Row}
        justifyContent={BoxJustifyContent.Around}
        padding={3}
        backgroundColor={BoxBackgroundColor.BackgroundAlternative}
        borderColor={BoxBorderColor.BorderDefault}
        borderWidth={1}
        className="w-80"
      >
        <Text>Around</Text>
        <Text>Items</Text>
      </Box>
      <Box
        {...args}
        flexDirection={BoxFlexDirection.Row}
        justifyContent={BoxJustifyContent.Evenly}
        padding={3}
        backgroundColor={BoxBackgroundColor.BackgroundAlternative}
        borderColor={BoxBorderColor.BorderDefault}
        borderWidth={1}
        className="w-80"
      >
        <Text>Evenly</Text>
        <Text>Items</Text>
      </Box>
    </Box>
  ),
};

export const FlexWrap: Story = {
  render: (args: BoxProps) => (
    <Box flexDirection={BoxFlexDirection.Column} gap={4}>
      <Box
        {...args}
        flexDirection={BoxFlexDirection.Row}
        flexWrap={BoxFlexWrap.NoWrap}
        gap={2}
        padding={3}
        backgroundColor={BoxBackgroundColor.BackgroundAlternative}
        borderColor={BoxBorderColor.BorderDefault}
        borderWidth={1}
        className="w-80"
      >
        <Box
          backgroundColor={BoxBackgroundColor.PrimaryMuted}
          paddingHorizontal={2}
          paddingVertical={1}
          className="rounded"
        >
          <Text>NoWrap</Text>
        </Box>
        <Box
          backgroundColor={BoxBackgroundColor.PrimaryMuted}
          paddingHorizontal={2}
          paddingVertical={1}
          className="rounded"
        >
          <Text>Items</Text>
        </Box>
        <Box
          backgroundColor={BoxBackgroundColor.PrimaryMuted}
          paddingHorizontal={2}
          paddingVertical={1}
          className="rounded"
        >
          <Text>Stay</Text>
        </Box>
        <Box
          backgroundColor={BoxBackgroundColor.PrimaryMuted}
          paddingHorizontal={2}
          paddingVertical={1}
          className="rounded"
        >
          <Text>In</Text>
        </Box>
        <Box
          backgroundColor={BoxBackgroundColor.PrimaryMuted}
          paddingHorizontal={2}
          paddingVertical={1}
          className="rounded"
        >
          <Text>Line</Text>
        </Box>
      </Box>
      <Box
        {...args}
        flexDirection={BoxFlexDirection.Row}
        flexWrap={BoxFlexWrap.Wrap}
        gap={2}
        padding={3}
        backgroundColor={BoxBackgroundColor.BackgroundAlternative}
        borderColor={BoxBorderColor.BorderDefault}
        borderWidth={1}
        className="w-80"
      >
        <Box
          backgroundColor={BoxBackgroundColor.PrimaryMuted}
          paddingHorizontal={2}
          paddingVertical={1}
          className="rounded"
        >
          <Text>Wrap</Text>
        </Box>
        <Box
          backgroundColor={BoxBackgroundColor.PrimaryMuted}
          paddingHorizontal={2}
          paddingVertical={1}
          className="rounded"
        >
          <Text>Items</Text>
        </Box>
        <Box
          backgroundColor={BoxBackgroundColor.PrimaryMuted}
          paddingHorizontal={2}
          paddingVertical={1}
          className="rounded"
        >
          <Text>To</Text>
        </Box>
        <Box
          backgroundColor={BoxBackgroundColor.PrimaryMuted}
          paddingHorizontal={2}
          paddingVertical={1}
          className="rounded"
        >
          <Text>New</Text>
        </Box>
        <Box
          backgroundColor={BoxBackgroundColor.PrimaryMuted}
          paddingHorizontal={2}
          paddingVertical={1}
          className="rounded"
        >
          <Text>Line</Text>
        </Box>
      </Box>
      <Box
        {...args}
        flexDirection={BoxFlexDirection.Row}
        flexWrap={BoxFlexWrap.WrapReverse}
        gap={2}
        padding={3}
        backgroundColor={BoxBackgroundColor.BackgroundAlternative}
        borderColor={BoxBorderColor.BorderDefault}
        borderWidth={1}
        className="w-80"
      >
        <Box
          backgroundColor={BoxBackgroundColor.PrimaryMuted}
          paddingHorizontal={2}
          paddingVertical={1}
          className="rounded"
        >
          <Text>WrapReverse</Text>
        </Box>
        <Box
          backgroundColor={BoxBackgroundColor.PrimaryMuted}
          paddingHorizontal={2}
          paddingVertical={1}
          className="rounded"
        >
          <Text>Items</Text>
        </Box>
        <Box
          backgroundColor={BoxBackgroundColor.PrimaryMuted}
          paddingHorizontal={2}
          paddingVertical={1}
          className="rounded"
        >
          <Text>Reverse</Text>
        </Box>
        <Box
          backgroundColor={BoxBackgroundColor.PrimaryMuted}
          paddingHorizontal={2}
          paddingVertical={1}
          className="rounded"
        >
          <Text>Order</Text>
        </Box>
        <Box
          backgroundColor={BoxBackgroundColor.PrimaryMuted}
          paddingHorizontal={2}
          paddingVertical={1}
          className="rounded"
        >
          <Text>Wrap</Text>
        </Box>
      </Box>
    </Box>
  ),
};

export const Gap: Story = {
  render: (args: BoxProps) => (
    <Box flexDirection={BoxFlexDirection.Column} gap={4}>
      <Box
        {...args}
        flexDirection={BoxFlexDirection.Row}
        gap={0}
        padding={3}
        backgroundColor={BoxBackgroundColor.BackgroundAlternative}
        borderColor={BoxBorderColor.BorderMuted}
        borderWidth={1}
      >
        <Box
          backgroundColor={BoxBackgroundColor.PrimaryMuted}
          paddingHorizontal={2}
          paddingVertical={1}
          className="rounded"
        >
          <Text>Gap 0</Text>
        </Box>
        <Box
          backgroundColor={BoxBackgroundColor.PrimaryMuted}
          paddingHorizontal={2}
          paddingVertical={1}
          className="rounded"
        >
          <Text>No</Text>
        </Box>
        <Box
          backgroundColor={BoxBackgroundColor.PrimaryMuted}
          paddingHorizontal={2}
          paddingVertical={1}
          className="rounded"
        >
          <Text>Gap</Text>
        </Box>
      </Box>
      <Box
        {...args}
        flexDirection={BoxFlexDirection.Row}
        gap={1}
        padding={3}
        backgroundColor={BoxBackgroundColor.BackgroundAlternative}
        borderColor={BoxBorderColor.BorderMuted}
        borderWidth={1}
      >
        <Box
          backgroundColor={BoxBackgroundColor.PrimaryMuted}
          paddingHorizontal={2}
          paddingVertical={1}
          className="rounded"
        >
          <Text>Gap 1</Text>
        </Box>
        <Box
          backgroundColor={BoxBackgroundColor.PrimaryMuted}
          paddingHorizontal={2}
          paddingVertical={1}
          className="rounded"
        >
          <Text>Small</Text>
        </Box>
        <Box
          backgroundColor={BoxBackgroundColor.PrimaryMuted}
          paddingHorizontal={2}
          paddingVertical={1}
          className="rounded"
        >
          <Text>Gap</Text>
        </Box>
      </Box>
      <Box
        {...args}
        flexDirection={BoxFlexDirection.Row}
        gap={2}
        padding={3}
        backgroundColor={BoxBackgroundColor.BackgroundAlternative}
        borderColor={BoxBorderColor.BorderMuted}
        borderWidth={1}
      >
        <Box
          backgroundColor={BoxBackgroundColor.PrimaryMuted}
          paddingHorizontal={2}
          paddingVertical={1}
          className="rounded"
        >
          <Text>Gap 2</Text>
        </Box>
        <Box
          backgroundColor={BoxBackgroundColor.PrimaryMuted}
          paddingHorizontal={2}
          paddingVertical={1}
          className="rounded"
        >
          <Text>Small</Text>
        </Box>
        <Box
          backgroundColor={BoxBackgroundColor.PrimaryMuted}
          paddingHorizontal={2}
          paddingVertical={1}
          className="rounded"
        >
          <Text>Gap</Text>
        </Box>
      </Box>
      <Box
        {...args}
        flexDirection={BoxFlexDirection.Row}
        gap={3}
        padding={3}
        backgroundColor={BoxBackgroundColor.BackgroundAlternative}
        borderColor={BoxBorderColor.BorderMuted}
        borderWidth={1}
      >
        <Box
          backgroundColor={BoxBackgroundColor.PrimaryMuted}
          paddingHorizontal={2}
          paddingVertical={1}
          className="rounded"
        >
          <Text>Gap 3</Text>
        </Box>
        <Box
          backgroundColor={BoxBackgroundColor.PrimaryMuted}
          paddingHorizontal={2}
          paddingVertical={1}
          className="rounded"
        >
          <Text>Medium</Text>
        </Box>
        <Box
          backgroundColor={BoxBackgroundColor.PrimaryMuted}
          paddingHorizontal={2}
          paddingVertical={1}
          className="rounded"
        >
          <Text>Gap</Text>
        </Box>
      </Box>
      <Box
        {...args}
        flexDirection={BoxFlexDirection.Row}
        gap={4}
        padding={3}
        backgroundColor={BoxBackgroundColor.BackgroundAlternative}
        borderColor={BoxBorderColor.BorderMuted}
        borderWidth={1}
      >
        <Box
          backgroundColor={BoxBackgroundColor.PrimaryMuted}
          paddingHorizontal={2}
          paddingVertical={1}
          className="rounded"
        >
          <Text>Gap 4</Text>
        </Box>
        <Box
          backgroundColor={BoxBackgroundColor.PrimaryMuted}
          paddingHorizontal={2}
          paddingVertical={1}
          className="rounded"
        >
          <Text>Medium</Text>
        </Box>
        <Box
          backgroundColor={BoxBackgroundColor.PrimaryMuted}
          paddingHorizontal={2}
          paddingVertical={1}
          className="rounded"
        >
          <Text>Gap</Text>
        </Box>
      </Box>
      <Box
        {...args}
        flexDirection={BoxFlexDirection.Row}
        gap={5}
        padding={3}
        backgroundColor={BoxBackgroundColor.BackgroundAlternative}
        borderColor={BoxBorderColor.BorderMuted}
        borderWidth={1}
      >
        <Box
          backgroundColor={BoxBackgroundColor.PrimaryMuted}
          paddingHorizontal={2}
          paddingVertical={1}
          className="rounded"
        >
          <Text>Gap 5</Text>
        </Box>
        <Box
          backgroundColor={BoxBackgroundColor.PrimaryMuted}
          paddingHorizontal={2}
          paddingVertical={1}
          className="rounded"
        >
          <Text>Large</Text>
        </Box>
        <Box
          backgroundColor={BoxBackgroundColor.PrimaryMuted}
          paddingHorizontal={2}
          paddingVertical={1}
          className="rounded"
        >
          <Text>Gap</Text>
        </Box>
      </Box>
      <Box
        {...args}
        flexDirection={BoxFlexDirection.Row}
        gap={6}
        padding={3}
        backgroundColor={BoxBackgroundColor.BackgroundAlternative}
        borderColor={BoxBorderColor.BorderMuted}
        borderWidth={1}
      >
        <Box
          backgroundColor={BoxBackgroundColor.PrimaryMuted}
          paddingHorizontal={2}
          paddingVertical={1}
          className="rounded"
        >
          <Text>Gap 6</Text>
        </Box>
        <Box
          backgroundColor={BoxBackgroundColor.PrimaryMuted}
          paddingHorizontal={2}
          paddingVertical={1}
          className="rounded"
        >
          <Text>Large</Text>
        </Box>
        <Box
          backgroundColor={BoxBackgroundColor.PrimaryMuted}
          paddingHorizontal={2}
          paddingVertical={1}
          className="rounded"
        >
          <Text>Gap</Text>
        </Box>
      </Box>
      <Box
        {...args}
        flexDirection={BoxFlexDirection.Row}
        gap={7}
        padding={3}
        backgroundColor={BoxBackgroundColor.BackgroundAlternative}
        borderColor={BoxBorderColor.BorderMuted}
        borderWidth={1}
      >
        <Box
          backgroundColor={BoxBackgroundColor.PrimaryMuted}
          paddingHorizontal={2}
          paddingVertical={1}
          className="rounded"
        >
          <Text>Gap 7</Text>
        </Box>
        <Box
          backgroundColor={BoxBackgroundColor.PrimaryMuted}
          paddingHorizontal={2}
          paddingVertical={1}
          className="rounded"
        >
          <Text>XL</Text>
        </Box>
        <Box
          backgroundColor={BoxBackgroundColor.PrimaryMuted}
          paddingHorizontal={2}
          paddingVertical={1}
          className="rounded"
        >
          <Text>Gap</Text>
        </Box>
      </Box>
      <Box
        {...args}
        flexDirection={BoxFlexDirection.Row}
        gap={8}
        padding={3}
        backgroundColor={BoxBackgroundColor.BackgroundAlternative}
        borderColor={BoxBorderColor.BorderMuted}
        borderWidth={1}
      >
        <Box
          backgroundColor={BoxBackgroundColor.PrimaryMuted}
          paddingHorizontal={2}
          paddingVertical={1}
          className="rounded"
        >
          <Text>Gap 8</Text>
        </Box>
        <Box
          backgroundColor={BoxBackgroundColor.PrimaryMuted}
          paddingHorizontal={2}
          paddingVertical={1}
          className="rounded"
        >
          <Text>XL</Text>
        </Box>
        <Box
          backgroundColor={BoxBackgroundColor.PrimaryMuted}
          paddingHorizontal={2}
          paddingVertical={1}
          className="rounded"
        >
          <Text>Gap</Text>
        </Box>
      </Box>
      <Box
        {...args}
        flexDirection={BoxFlexDirection.Row}
        gap={9}
        padding={3}
        backgroundColor={BoxBackgroundColor.BackgroundAlternative}
        borderColor={BoxBorderColor.BorderMuted}
        borderWidth={1}
      >
        <Box
          backgroundColor={BoxBackgroundColor.PrimaryMuted}
          paddingHorizontal={2}
          paddingVertical={1}
          className="rounded"
        >
          <Text>Gap 9</Text>
        </Box>
        <Box
          backgroundColor={BoxBackgroundColor.PrimaryMuted}
          paddingHorizontal={2}
          paddingVertical={1}
          className="rounded"
        >
          <Text>XXL</Text>
        </Box>
        <Box
          backgroundColor={BoxBackgroundColor.PrimaryMuted}
          paddingHorizontal={2}
          paddingVertical={1}
          className="rounded"
        >
          <Text>Gap</Text>
        </Box>
      </Box>
      <Box
        {...args}
        flexDirection={BoxFlexDirection.Row}
        gap={10}
        padding={3}
        backgroundColor={BoxBackgroundColor.BackgroundAlternative}
        borderColor={BoxBorderColor.BorderMuted}
        borderWidth={1}
      >
        <Box
          backgroundColor={BoxBackgroundColor.PrimaryMuted}
          paddingHorizontal={2}
          paddingVertical={1}
          className="rounded"
        >
          <Text>Gap 10</Text>
        </Box>
        <Box
          backgroundColor={BoxBackgroundColor.PrimaryMuted}
          paddingHorizontal={2}
          paddingVertical={1}
          className="rounded"
        >
          <Text>XXL</Text>
        </Box>
        <Box
          backgroundColor={BoxBackgroundColor.PrimaryMuted}
          paddingHorizontal={2}
          paddingVertical={1}
          className="rounded"
        >
          <Text>Gap</Text>
        </Box>
      </Box>
      <Box
        {...args}
        flexDirection={BoxFlexDirection.Row}
        gap={11}
        padding={3}
        backgroundColor={BoxBackgroundColor.BackgroundAlternative}
        borderColor={BoxBorderColor.BorderMuted}
        borderWidth={1}
      >
        <Box
          backgroundColor={BoxBackgroundColor.PrimaryMuted}
          paddingHorizontal={2}
          paddingVertical={1}
          className="rounded"
        >
          <Text>Gap 11</Text>
        </Box>
        <Box
          backgroundColor={BoxBackgroundColor.PrimaryMuted}
          paddingHorizontal={2}
          paddingVertical={1}
          className="rounded"
        >
          <Text>XXXL</Text>
        </Box>
        <Box
          backgroundColor={BoxBackgroundColor.PrimaryMuted}
          paddingHorizontal={2}
          paddingVertical={1}
          className="rounded"
        >
          <Text>Gap</Text>
        </Box>
      </Box>
      <Box
        {...args}
        flexDirection={BoxFlexDirection.Row}
        gap={12}
        padding={3}
        backgroundColor={BoxBackgroundColor.BackgroundAlternative}
        borderColor={BoxBorderColor.BorderMuted}
        borderWidth={1}
      >
        <Box
          backgroundColor={BoxBackgroundColor.PrimaryMuted}
          paddingHorizontal={2}
          paddingVertical={1}
          className="rounded"
        >
          <Text>Gap 12</Text>
        </Box>
        <Box
          backgroundColor={BoxBackgroundColor.PrimaryMuted}
          paddingHorizontal={2}
          paddingVertical={1}
          className="rounded"
        >
          <Text>XXXL</Text>
        </Box>
        <Box
          backgroundColor={BoxBackgroundColor.PrimaryMuted}
          paddingHorizontal={2}
          paddingVertical={1}
          className="rounded"
        >
          <Text>Gap</Text>
        </Box>
      </Box>
    </Box>
  ),
};

export const Padding: Story = {
  render: (args: BoxProps) => (
    <Box flexDirection={BoxFlexDirection.Column} gap={4}>
      <Box
        {...args}
        padding={0}
        backgroundColor={BoxBackgroundColor.PrimaryMuted}
        borderColor={BoxBorderColor.PrimaryDefault}
        borderWidth={1}
      >
        <Text>Padding 0</Text>
      </Box>
      <Box
        {...args}
        padding={1}
        backgroundColor={BoxBackgroundColor.PrimaryMuted}
        borderColor={BoxBorderColor.PrimaryDefault}
        borderWidth={1}
      >
        <Text>Padding 1</Text>
      </Box>
      <Box
        {...args}
        padding={2}
        backgroundColor={BoxBackgroundColor.PrimaryMuted}
        borderColor={BoxBorderColor.PrimaryDefault}
        borderWidth={1}
      >
        <Text>Padding 2</Text>
      </Box>
      <Box
        {...args}
        padding={3}
        backgroundColor={BoxBackgroundColor.PrimaryMuted}
        borderColor={BoxBorderColor.PrimaryDefault}
        borderWidth={1}
      >
        <Text>Padding 3</Text>
      </Box>
      <Box
        {...args}
        padding={4}
        backgroundColor={BoxBackgroundColor.PrimaryMuted}
        borderColor={BoxBorderColor.PrimaryDefault}
        borderWidth={1}
      >
        <Text>Padding 4</Text>
      </Box>
      <Box
        {...args}
        padding={5}
        backgroundColor={BoxBackgroundColor.PrimaryMuted}
        borderColor={BoxBorderColor.PrimaryDefault}
        borderWidth={1}
      >
        <Text>Padding 5</Text>
      </Box>
      <Box
        {...args}
        padding={6}
        backgroundColor={BoxBackgroundColor.PrimaryMuted}
        borderColor={BoxBorderColor.PrimaryDefault}
        borderWidth={1}
      >
        <Text>Padding 6</Text>
      </Box>
      <Box
        {...args}
        padding={7}
        backgroundColor={BoxBackgroundColor.PrimaryMuted}
        borderColor={BoxBorderColor.PrimaryDefault}
        borderWidth={1}
      >
        <Text>Padding 7</Text>
      </Box>
      <Box
        {...args}
        padding={8}
        backgroundColor={BoxBackgroundColor.PrimaryMuted}
        borderColor={BoxBorderColor.PrimaryDefault}
        borderWidth={1}
      >
        <Text>Padding 8</Text>
      </Box>
      <Box
        {...args}
        padding={9}
        backgroundColor={BoxBackgroundColor.PrimaryMuted}
        borderColor={BoxBorderColor.PrimaryDefault}
        borderWidth={1}
      >
        <Text>Padding 9</Text>
      </Box>
      <Box
        {...args}
        padding={10}
        backgroundColor={BoxBackgroundColor.PrimaryMuted}
        borderColor={BoxBorderColor.PrimaryDefault}
        borderWidth={1}
      >
        <Text>Padding 10</Text>
      </Box>
      <Box
        {...args}
        padding={11}
        backgroundColor={BoxBackgroundColor.PrimaryMuted}
        borderColor={BoxBorderColor.PrimaryDefault}
        borderWidth={1}
      >
        <Text>Padding 11</Text>
      </Box>
      <Box
        {...args}
        padding={12}
        backgroundColor={BoxBackgroundColor.PrimaryMuted}
        borderColor={BoxBorderColor.PrimaryDefault}
        borderWidth={1}
      >
        <Text>Padding 12</Text>
      </Box>
    </Box>
  ),
};

export const Margin: Story = {
  render: (args: BoxProps) => (
    <Box flexDirection={BoxFlexDirection.Column} gap={4}>
      <Box
        backgroundColor={BoxBackgroundColor.BackgroundAlternative}
        padding={2}
      >
        <Text>Container with margin examples:</Text>
        <Box
          {...args}
          margin={0}
          padding={3}
          backgroundColor={BoxBackgroundColor.SuccessMuted}
          borderColor={BoxBorderColor.SuccessDefault}
          borderWidth={1}
        >
          <Text>Margin 0</Text>
        </Box>
        <Box
          {...args}
          margin={1}
          padding={3}
          backgroundColor={BoxBackgroundColor.SuccessMuted}
          borderColor={BoxBorderColor.SuccessDefault}
          borderWidth={1}
        >
          <Text>Margin 1</Text>
        </Box>
        <Box
          {...args}
          margin={2}
          padding={3}
          backgroundColor={BoxBackgroundColor.SuccessMuted}
          borderColor={BoxBorderColor.SuccessDefault}
          borderWidth={1}
        >
          <Text>Margin 2</Text>
        </Box>
        <Box
          {...args}
          margin={3}
          padding={3}
          backgroundColor={BoxBackgroundColor.SuccessMuted}
          borderColor={BoxBorderColor.SuccessDefault}
          borderWidth={1}
        >
          <Text>Margin 3</Text>
        </Box>
        <Box
          {...args}
          margin={4}
          padding={3}
          backgroundColor={BoxBackgroundColor.SuccessMuted}
          borderColor={BoxBorderColor.SuccessDefault}
          borderWidth={1}
        >
          <Text>Margin 4</Text>
        </Box>
        <Box
          {...args}
          margin={5}
          padding={3}
          backgroundColor={BoxBackgroundColor.SuccessMuted}
          borderColor={BoxBorderColor.SuccessDefault}
          borderWidth={1}
        >
          <Text>Margin 5</Text>
        </Box>
        <Box
          {...args}
          margin={6}
          padding={3}
          backgroundColor={BoxBackgroundColor.SuccessMuted}
          borderColor={BoxBorderColor.SuccessDefault}
          borderWidth={1}
        >
          <Text>Margin 6</Text>
        </Box>
        <Box
          {...args}
          margin={7}
          padding={3}
          backgroundColor={BoxBackgroundColor.SuccessMuted}
          borderColor={BoxBorderColor.SuccessDefault}
          borderWidth={1}
        >
          <Text>Margin 7</Text>
        </Box>
        <Box
          {...args}
          margin={8}
          padding={3}
          backgroundColor={BoxBackgroundColor.SuccessMuted}
          borderColor={BoxBorderColor.SuccessDefault}
          borderWidth={1}
        >
          <Text>Margin 8</Text>
        </Box>
        <Box
          {...args}
          margin={9}
          padding={3}
          backgroundColor={BoxBackgroundColor.SuccessMuted}
          borderColor={BoxBorderColor.SuccessDefault}
          borderWidth={1}
        >
          <Text>Margin 9</Text>
        </Box>
        <Box
          {...args}
          margin={10}
          padding={3}
          backgroundColor={BoxBackgroundColor.SuccessMuted}
          borderColor={BoxBorderColor.SuccessDefault}
          borderWidth={1}
        >
          <Text>Margin 10</Text>
        </Box>
        <Box
          {...args}
          margin={11}
          padding={3}
          backgroundColor={BoxBackgroundColor.SuccessMuted}
          borderColor={BoxBorderColor.SuccessDefault}
          borderWidth={1}
        >
          <Text>Margin 11</Text>
        </Box>
        <Box
          {...args}
          margin={12}
          padding={3}
          backgroundColor={BoxBackgroundColor.SuccessMuted}
          borderColor={BoxBorderColor.SuccessDefault}
          borderWidth={1}
        >
          <Text>Margin 12</Text>
        </Box>
      </Box>
    </Box>
  ),
};

export const BorderColor: Story = {
  render: (args: BoxProps) => (
    <Box flexDirection={BoxFlexDirection.Column} gap={2}>
      {/* Basic Colors */}
      <Box
        {...args}
        padding={3}
        borderColor={BoxBorderColor.BorderDefault}
        borderWidth={2}
      >
        <Text>Default</Text>
      </Box>
      <Box
        {...args}
        padding={3}
        borderColor={BoxBorderColor.BorderMuted}
        borderWidth={2}
      >
        <Text>Muted</Text>
      </Box>

      {/* Primary Colors */}
      <Box
        {...args}
        padding={3}
        backgroundColor={BoxBackgroundColor.PrimaryMuted}
        borderColor={BoxBorderColor.PrimaryDefault}
        borderWidth={2}
      >
        <Text>PrimaryDefault</Text>
      </Box>
      <Box
        {...args}
        padding={3}
        backgroundColor={BoxBackgroundColor.PrimaryMuted}
        borderColor={BoxBorderColor.PrimaryAlternative}
        borderWidth={2}
      >
        <Text>PrimaryAlternative</Text>
      </Box>
      <Box
        {...args}
        padding={3}
        backgroundColor={BoxBackgroundColor.PrimaryMuted}
        borderColor={BoxBorderColor.PrimaryMuted}
        borderWidth={2}
      >
        <Text>PrimaryMuted</Text>
      </Box>
      <Box
        {...args}
        padding={3}
        backgroundColor={BoxBackgroundColor.PrimaryMuted}
        borderColor={BoxBorderColor.PrimaryInverse}
        borderWidth={2}
      >
        <Text>PrimaryInverse</Text>
      </Box>

      {/* Error Colors */}
      <Box
        {...args}
        padding={3}
        backgroundColor={BoxBackgroundColor.ErrorMuted}
        borderColor={BoxBorderColor.ErrorDefault}
        borderWidth={2}
      >
        <Text>ErrorDefault</Text>
      </Box>
      <Box
        {...args}
        padding={3}
        backgroundColor={BoxBackgroundColor.ErrorMuted}
        borderColor={BoxBorderColor.ErrorAlternative}
        borderWidth={2}
      >
        <Text>ErrorAlternative</Text>
      </Box>
      <Box
        {...args}
        padding={3}
        backgroundColor={BoxBackgroundColor.ErrorMuted}
        borderColor={BoxBorderColor.ErrorMuted}
        borderWidth={2}
      >
        <Text>ErrorMuted</Text>
      </Box>
      <Box
        {...args}
        padding={3}
        backgroundColor={BoxBackgroundColor.ErrorMuted}
        borderColor={BoxBorderColor.ErrorInverse}
        borderWidth={2}
      >
        <Text>ErrorInverse</Text>
      </Box>

      {/* Warning Colors */}
      <Box
        {...args}
        padding={3}
        backgroundColor={BoxBackgroundColor.WarningMuted}
        borderColor={BoxBorderColor.WarningDefault}
        borderWidth={2}
      >
        <Text>WarningDefault</Text>
      </Box>
      <Box
        {...args}
        padding={3}
        backgroundColor={BoxBackgroundColor.WarningMuted}
        borderColor={BoxBorderColor.WarningAlternative}
        borderWidth={2}
      >
        <Text>WarningAlternative</Text>
      </Box>
      <Box
        {...args}
        padding={3}
        backgroundColor={BoxBackgroundColor.WarningMuted}
        borderColor={BoxBorderColor.WarningMuted}
        borderWidth={2}
      >
        <Text>WarningMuted</Text>
      </Box>
      <Box
        {...args}
        padding={3}
        backgroundColor={BoxBackgroundColor.WarningMuted}
        borderColor={BoxBorderColor.WarningInverse}
        borderWidth={2}
      >
        <Text>WarningInverse</Text>
      </Box>

      {/* Success Colors */}
      <Box
        {...args}
        padding={3}
        backgroundColor={BoxBackgroundColor.SuccessMuted}
        borderColor={BoxBorderColor.SuccessDefault}
        borderWidth={2}
      >
        <Text>SuccessDefault</Text>
      </Box>
      <Box
        {...args}
        padding={3}
        backgroundColor={BoxBackgroundColor.SuccessMuted}
        borderColor={BoxBorderColor.SuccessAlternative}
        borderWidth={2}
      >
        <Text>SuccessAlternative</Text>
      </Box>
      <Box
        {...args}
        padding={3}
        backgroundColor={BoxBackgroundColor.SuccessMuted}
        borderColor={BoxBorderColor.SuccessMuted}
        borderWidth={2}
      >
        <Text>SuccessMuted</Text>
      </Box>
      <Box
        {...args}
        padding={3}
        backgroundColor={BoxBackgroundColor.SuccessMuted}
        borderColor={BoxBorderColor.SuccessInverse}
        borderWidth={2}
      >
        <Text>SuccessInverse</Text>
      </Box>

      {/* Info Colors */}
      <Box
        {...args}
        padding={3}
        backgroundColor={BoxBackgroundColor.InfoMuted}
        borderColor={BoxBorderColor.InfoDefault}
        borderWidth={2}
      >
        <Text>InfoDefault</Text>
      </Box>
      <Box
        {...args}
        padding={3}
        backgroundColor={BoxBackgroundColor.InfoMuted}
        borderColor={BoxBorderColor.InfoAlternative}
        borderWidth={2}
      >
        <Text>InfoAlternative</Text>
      </Box>
      <Box
        {...args}
        padding={3}
        backgroundColor={BoxBackgroundColor.InfoMuted}
        borderColor={BoxBorderColor.InfoMuted}
        borderWidth={2}
      >
        <Text>InfoMuted</Text>
      </Box>
      <Box
        {...args}
        padding={3}
        backgroundColor={BoxBackgroundColor.InfoMuted}
        borderColor={BoxBorderColor.InfoInverse}
        borderWidth={2}
      >
        <Text>InfoInverse</Text>
      </Box>

      {/* Special Colors */}
      <Box
        {...args}
        padding={3}
        backgroundColor={BoxBackgroundColor.FlaskDefault}
        borderColor={BoxBorderColor.FlaskDefault}
        borderWidth={2}
      >
        <Text>FlaskDefault</Text>
      </Box>
      <Box
        {...args}
        padding={3}
        backgroundColor={BoxBackgroundColor.FlaskDefault}
        borderColor={BoxBorderColor.FlaskInverse}
        borderWidth={2}
      >
        <Text>FlaskInverse</Text>
      </Box>

      {/* Overlay Colors */}
      <Box
        {...args}
        padding={3}
        backgroundColor={BoxBackgroundColor.OverlayDefault}
        borderColor={BoxBorderColor.OverlayDefault}
        borderWidth={2}
      >
        <Text color={TextColor.OverlayInverse}>OverlayDefault</Text>
      </Box>
      <Box
        {...args}
        padding={3}
        backgroundColor={BoxBackgroundColor.OverlayAlternative}
        borderColor={BoxBorderColor.OverlayAlternative}
        borderWidth={2}
      >
        <Text color={TextColor.OverlayInverse}>OverlayAlternative</Text>
      </Box>
      <Box
        {...args}
        padding={3}
        backgroundColor={BoxBackgroundColor.OverlayInverse}
        borderColor={BoxBorderColor.OverlayInverse}
        borderWidth={2}
      >
        <Text>OverlayInverse</Text>
      </Box>

      {/* Utility Colors */}
      <Box
        {...args}
        padding={3}
        backgroundColor={BoxBackgroundColor.BackgroundDefault}
        borderColor={BoxBorderColor.Transparent}
        borderWidth={2}
      >
        <Text>Transparent</Text>
      </Box>
    </Box>
  ),
};

export const BorderWidth: Story = {
  render: (args: BoxProps) => (
    <Box flexDirection={BoxFlexDirection.Column} gap={4}>
      <Box
        {...args}
        padding={3}
        backgroundColor={BoxBackgroundColor.BackgroundAlternative}
        borderColor={BoxBorderColor.PrimaryDefault}
        borderWidth={0}
      >
        <Text>Border width 0</Text>
      </Box>
      <Box
        {...args}
        padding={3}
        backgroundColor={BoxBackgroundColor.BackgroundAlternative}
        borderColor={BoxBorderColor.PrimaryDefault}
        borderWidth={1}
      >
        <Text>Border width 1</Text>
      </Box>
      <Box
        {...args}
        padding={3}
        backgroundColor={BoxBackgroundColor.BackgroundAlternative}
        borderColor={BoxBorderColor.PrimaryDefault}
        borderWidth={2}
      >
        <Text>Border width 2</Text>
      </Box>
      <Box
        {...args}
        padding={3}
        backgroundColor={BoxBackgroundColor.BackgroundAlternative}
        borderColor={BoxBorderColor.PrimaryDefault}
        borderWidth={4}
      >
        <Text>Border width 4</Text>
      </Box>
      <Box
        {...args}
        padding={3}
        backgroundColor={BoxBackgroundColor.BackgroundAlternative}
        borderColor={BoxBorderColor.PrimaryDefault}
        borderWidth={8}
      >
        <Text>Border width 8</Text>
      </Box>
    </Box>
  ),
};

export const BackgroundColor: Story = {
  render: (args: BoxProps) => (
    <Box flexDirection={BoxFlexDirection.Column} gap={2}>
      {/* Basic Colors */}
      <Box
        {...args}
        padding={3}
        backgroundColor={BoxBackgroundColor.BackgroundDefault}
        borderColor={BoxBorderColor.BorderDefault}
        borderWidth={1}
      >
        <Text>BackgroundDefault</Text>
      </Box>
      <Box
        {...args}
        padding={3}
        backgroundColor={BoxBackgroundColor.BackgroundAlternative}
        borderColor={BoxBorderColor.BorderDefault}
        borderWidth={1}
      >
        <Text>BackgroundAlternative</Text>
      </Box>

      <Box
        {...args}
        padding={3}
        backgroundColor={BoxBackgroundColor.BackgroundMuted}
        borderColor={BoxBorderColor.BorderDefault}
        borderWidth={1}
      >
        <Text>BackgroundMuted</Text>
      </Box>
      <Box
        {...args}
        padding={3}
        backgroundColor={BoxBackgroundColor.BackgroundSection}
        borderColor={BoxBorderColor.BorderDefault}
        borderWidth={1}
      >
        <Text>BackgroundSection</Text>
      </Box>
      <Box
        {...args}
        padding={3}
        backgroundColor={BoxBackgroundColor.BackgroundSubsection}
        borderColor={BoxBorderColor.BorderDefault}
        borderWidth={1}
      >
        <Text>BackgroundSubsection</Text>
      </Box>

      {/* Primary Colors */}
      <Box
        {...args}
        padding={3}
        backgroundColor={BoxBackgroundColor.PrimaryDefault}
        borderColor={BoxBorderColor.PrimaryDefault}
        borderWidth={1}
      >
        <Text>PrimaryDefault</Text>
      </Box>
      <Box
        {...args}
        padding={3}
        backgroundColor={BoxBackgroundColor.PrimaryAlternative}
        borderColor={BoxBorderColor.PrimaryDefault}
        borderWidth={1}
      >
        <Text>PrimaryAlternative</Text>
      </Box>
      <Box
        {...args}
        padding={3}
        backgroundColor={BoxBackgroundColor.PrimaryMuted}
        borderColor={BoxBorderColor.PrimaryDefault}
        borderWidth={1}
      >
        <Text>PrimaryMuted</Text>
      </Box>
      <Box
        {...args}
        padding={3}
        backgroundColor={BoxBackgroundColor.PrimaryInverse}
        borderColor={BoxBorderColor.PrimaryDefault}
        borderWidth={1}
      >
        <Text>PrimaryInverse</Text>
      </Box>

      {/* Error Colors */}
      <Box
        {...args}
        padding={3}
        backgroundColor={BoxBackgroundColor.ErrorDefault}
        borderColor={BoxBorderColor.ErrorDefault}
        borderWidth={1}
      >
        <Text>ErrorDefault</Text>
      </Box>
      <Box
        {...args}
        padding={3}
        backgroundColor={BoxBackgroundColor.ErrorAlternative}
        borderColor={BoxBorderColor.ErrorDefault}
        borderWidth={1}
      >
        <Text>ErrorAlternative</Text>
      </Box>
      <Box
        {...args}
        padding={3}
        backgroundColor={BoxBackgroundColor.ErrorMuted}
        borderColor={BoxBorderColor.ErrorDefault}
        borderWidth={1}
      >
        <Text>ErrorMuted</Text>
      </Box>
      <Box
        {...args}
        padding={3}
        backgroundColor={BoxBackgroundColor.ErrorInverse}
        borderColor={BoxBorderColor.ErrorDefault}
        borderWidth={1}
      >
        <Text>ErrorInverse</Text>
      </Box>

      {/* Warning Colors */}
      <Box
        {...args}
        padding={3}
        backgroundColor={BoxBackgroundColor.WarningDefault}
        borderColor={BoxBorderColor.WarningDefault}
        borderWidth={1}
      >
        <Text>WarningDefault</Text>
      </Box>
      <Box
        {...args}
        padding={3}
        backgroundColor={BoxBackgroundColor.WarningAlternative}
        borderColor={BoxBorderColor.WarningDefault}
        borderWidth={1}
      >
        <Text>WarningAlternative</Text>
      </Box>
      <Box
        {...args}
        padding={3}
        backgroundColor={BoxBackgroundColor.WarningMuted}
        borderColor={BoxBorderColor.WarningDefault}
        borderWidth={1}
      >
        <Text>WarningMuted</Text>
      </Box>
      <Box
        {...args}
        padding={3}
        backgroundColor={BoxBackgroundColor.WarningInverse}
        borderColor={BoxBorderColor.WarningDefault}
        borderWidth={1}
      >
        <Text>WarningInverse</Text>
      </Box>

      {/* Success Colors */}
      <Box
        {...args}
        padding={3}
        backgroundColor={BoxBackgroundColor.SuccessDefault}
        borderColor={BoxBorderColor.SuccessDefault}
        borderWidth={1}
      >
        <Text>SuccessDefault</Text>
      </Box>
      <Box
        {...args}
        padding={3}
        backgroundColor={BoxBackgroundColor.SuccessAlternative}
        borderColor={BoxBorderColor.SuccessDefault}
        borderWidth={1}
      >
        <Text>SuccessAlternative</Text>
      </Box>
      <Box
        {...args}
        padding={3}
        backgroundColor={BoxBackgroundColor.SuccessMuted}
        borderColor={BoxBorderColor.SuccessDefault}
        borderWidth={1}
      >
        <Text>SuccessMuted</Text>
      </Box>
      <Box
        {...args}
        padding={3}
        backgroundColor={BoxBackgroundColor.SuccessInverse}
        borderColor={BoxBorderColor.SuccessDefault}
        borderWidth={1}
      >
        <Text>SuccessInverse</Text>
      </Box>

      {/* Info Colors */}
      <Box
        {...args}
        padding={3}
        backgroundColor={BoxBackgroundColor.InfoDefault}
        borderColor={BoxBorderColor.InfoDefault}
        borderWidth={1}
      >
        <Text>InfoDefault</Text>
      </Box>
      <Box
        {...args}
        padding={3}
        backgroundColor={BoxBackgroundColor.InfoMuted}
        borderColor={BoxBorderColor.InfoDefault}
        borderWidth={1}
      >
        <Text>InfoMuted</Text>
      </Box>
      <Box
        {...args}
        padding={3}
        backgroundColor={BoxBackgroundColor.InfoInverse}
        borderColor={BoxBorderColor.InfoDefault}
        borderWidth={1}
      >
        <Text>InfoInverse</Text>
      </Box>

      {/* Special Colors */}
      <Box
        {...args}
        padding={3}
        backgroundColor={BoxBackgroundColor.FlaskDefault}
        borderColor={BoxBorderColor.FlaskDefault}
        borderWidth={1}
      >
        <Text>FlaskDefault</Text>
      </Box>
      <Box
        {...args}
        padding={3}
        backgroundColor={BoxBackgroundColor.FlaskInverse}
        borderColor={BoxBorderColor.FlaskInverse}
        borderWidth={1}
      >
        <Text>FlaskInverse</Text>
      </Box>

      {/* Overlay Colors */}
      <Box
        {...args}
        padding={3}
        backgroundColor={BoxBackgroundColor.OverlayDefault}
        borderColor={BoxBorderColor.OverlayDefault}
        borderWidth={1}
      >
        <Text color={TextColor.OverlayInverse}>OverlayDefault</Text>
      </Box>
      <Box
        {...args}
        padding={3}
        backgroundColor={BoxBackgroundColor.OverlayAlternative}
        borderColor={BoxBorderColor.OverlayAlternative}
        borderWidth={1}
      >
        <Text color={TextColor.OverlayInverse}>OverlayAlternative</Text>
      </Box>
      <Box
        {...args}
        padding={3}
        backgroundColor={BoxBackgroundColor.OverlayInverse}
        borderColor={BoxBorderColor.OverlayInverse}
        borderWidth={1}
      >
        <Text>OverlayInverse</Text>
      </Box>

      <Box
        {...args}
        padding={3}
        backgroundColor={BoxBackgroundColor.Transparent}
        borderColor={BoxBorderColor.BorderDefault}
        borderWidth={1}
      >
        <Text>Transparent</Text>
      </Box>
    </Box>
  ),
};

export const AsChild: Story = {
  render: (args) => (
    <Box {...args} asChild backgroundColor={BoxBackgroundColor.PrimaryMuted}>
      <button>
        <Text asChild>
          <span>Box rendered as button</span>
        </Text>
      </button>
    </Box>
  ),
};
