import type { Meta, StoryObj } from '@storybook/react-native';
import React from 'react';
import { ScrollView } from 'react-native';

import {
  BoxFlexDirection,
  BoxFlexWrap,
  BoxAlignItems,
  BoxJustifyContent,
  BoxBackgroundColor,
  BoxBorderColor,
  BoxBorderRadius,
  TextColor,
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
    borderWidth: { control: 'select', options: [0, 1, 2, 4, 8] },
    borderColor: { control: 'select', options: BoxBorderColor },
    borderRadius: { control: 'select', options: BoxBorderRadius },
    backgroundColor: { control: 'select', options: BoxBackgroundColor },
    twClassName: { control: 'text' },
    children: { control: 'text' },
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
  render: (args) => (
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
        twClassName="h-16"
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
        twClassName="h-16"
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
        twClassName="h-16"
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
        twClassName="h-16"
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
        twClassName="h-16"
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
        twClassName="w-80"
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
        twClassName="w-80"
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
        twClassName="w-80"
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
        twClassName="w-80"
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
        twClassName="w-80"
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
        twClassName="w-80"
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
        twClassName="w-80"
      >
        <Text>NoWrap</Text>
        <Text>Items</Text>
        <Text>Stay</Text>
        <Text>In</Text>
        <Text>Line</Text>
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
        twClassName="w-80"
      >
        <Text>Wrap</Text>
        <Text>Items</Text>
        <Text>To</Text>
        <Text>New</Text>
        <Text>Line</Text>
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
        twClassName="w-80"
      >
        <Text>WrapReverse</Text>
        <Text>Items</Text>
        <Text>Reverse</Text>
        <Text>Order</Text>
        <Text>Wrap</Text>
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
        <Text>Gap 0</Text>
        <Text>No</Text>
        <Text>Gap</Text>
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
        <Text>Gap 1</Text>
        <Text>Small</Text>
        <Text>Gap</Text>
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
        <Text>Gap 2</Text>
        <Text>Small</Text>
        <Text>Gap</Text>
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
        <Text>Gap 3</Text>
        <Text>Medium</Text>
        <Text>Gap</Text>
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
        <Text>Gap 4</Text>
        <Text>Medium</Text>
        <Text>Gap</Text>
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
        <Text>Gap 5</Text>
        <Text>Large</Text>
        <Text>Gap</Text>
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
        <Text>Gap 6</Text>
        <Text>Large</Text>
        <Text>Gap</Text>
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
        <Text>Gap 7</Text>
        <Text>XL</Text>
        <Text>Gap</Text>
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
        <Text>Gap 8</Text>
        <Text>XL</Text>
        <Text>Gap</Text>
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
        <Text>Gap 9</Text>
        <Text>XXL</Text>
        <Text>Gap</Text>
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
        <Text>Gap 10</Text>
        <Text>XXL</Text>
        <Text>Gap</Text>
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
        <Text>Gap 11</Text>
        <Text>XXXL</Text>
        <Text>Gap</Text>
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
        <Text>Gap 12</Text>
        <Text>XXXL</Text>
        <Text>Gap</Text>
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

export const BorderRadius: Story = {
  render: (args: BoxProps) => (
    <Box flexDirection={BoxFlexDirection.Column} gap={4}>
      <Box
        {...args}
        padding={3}
        backgroundColor={BoxBackgroundColor.BackgroundAlternative}
        borderColor={BoxBorderColor.PrimaryDefault}
        borderWidth={2}
        borderRadius={BoxBorderRadius.None}
      >
        <Text>Border radius None</Text>
      </Box>
      <Box
        {...args}
        padding={3}
        backgroundColor={BoxBackgroundColor.BackgroundAlternative}
        borderColor={BoxBorderColor.PrimaryDefault}
        borderWidth={2}
        borderRadius={BoxBorderRadius.Sm}
      >
        <Text>Border radius Sm</Text>
      </Box>
      <Box
        {...args}
        padding={3}
        backgroundColor={BoxBackgroundColor.BackgroundAlternative}
        borderColor={BoxBorderColor.PrimaryDefault}
        borderWidth={2}
        borderRadius={BoxBorderRadius.Md}
      >
        <Text>Border radius Md</Text>
      </Box>
      <Box
        {...args}
        padding={3}
        backgroundColor={BoxBackgroundColor.BackgroundAlternative}
        borderColor={BoxBorderColor.PrimaryDefault}
        borderWidth={2}
        borderRadius={BoxBorderRadius.Lg}
      >
        <Text>Border radius Lg</Text>
      </Box>
      <Box
        {...args}
        padding={3}
        backgroundColor={BoxBackgroundColor.BackgroundAlternative}
        borderColor={BoxBorderColor.PrimaryDefault}
        borderWidth={2}
        borderRadius={BoxBorderRadius.Xl}
      >
        <Text>Border radius Xl</Text>
      </Box>
      <Box
        {...args}
        padding={3}
        backgroundColor={BoxBackgroundColor.BackgroundAlternative}
        borderColor={BoxBorderColor.PrimaryDefault}
        borderWidth={2}
        borderRadius={BoxBorderRadius.Xxl}
      >
        <Text>Border radius Xxl</Text>
      </Box>
      <Box
        {...args}
        padding={3}
        backgroundColor={BoxBackgroundColor.BackgroundAlternative}
        borderColor={BoxBorderColor.PrimaryDefault}
        borderWidth={2}
        borderRadius={BoxBorderRadius.Xxxl}
      >
        <Text>Border radius Xxxl</Text>
      </Box>
      <Box
        {...args}
        padding={3}
        backgroundColor={BoxBackgroundColor.BackgroundAlternative}
        borderColor={BoxBorderColor.PrimaryDefault}
        borderWidth={2}
        borderRadius={BoxBorderRadius.Full}
      >
        <Text>Border radius Full</Text>
      </Box>
    </Box>
  ),
};

export const BorderColor: Story = {
  render: (args: BoxProps) => (
    <ScrollView>
      <Box flexDirection={BoxFlexDirection.Column} gap={2}>
        {/* Basic Colors */}
        <Box
          {...args}
          padding={3}
          backgroundColor={BoxBackgroundColor.BackgroundDefault}
          borderColor={BoxBorderColor.BorderDefault}
          borderWidth={2}
        >
          <Text>Default</Text>
        </Box>
        <Box
          {...args}
          padding={3}
          backgroundColor={BoxBackgroundColor.BackgroundDefault}
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
          backgroundColor={BoxBackgroundColor.FlaskInverse}
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
          <Text>OverlayDefault</Text>
        </Box>
        <Box
          {...args}
          padding={3}
          backgroundColor={BoxBackgroundColor.OverlayAlternative}
          borderColor={BoxBorderColor.OverlayAlternative}
          borderWidth={2}
        >
          <Text>OverlayAlternative</Text>
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
    </ScrollView>
  ),
};

export const BackgroundColor: Story = {
  render: (args: BoxProps) => (
    <ScrollView>
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
        <Box
          {...args}
          padding={3}
          backgroundColor={BoxBackgroundColor.PrimaryDefault}
          borderColor={BoxBorderColor.PrimaryDefault}
          borderWidth={1}
        >
          <Text>PrimaryDefaultPressed</Text>
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
          <Text>OverlayDefault</Text>
        </Box>
        <Box
          {...args}
          padding={3}
          backgroundColor={BoxBackgroundColor.OverlayAlternative}
          borderColor={BoxBorderColor.OverlayAlternative}
          borderWidth={1}
        >
          <Text>OverlayAlternative</Text>
        </Box>
        <Box
          {...args}
          padding={3}
          backgroundColor={BoxBackgroundColor.OverlayInverse}
          borderColor={BoxBorderColor.OverlayInverse}
          borderWidth={1}
        >
          <Text color={TextColor.OverlayInverse}>OverlayInverse</Text>
        </Box>

        {/* Utility Colors */}
        <Box
          {...args}
          padding={3}
          backgroundColor={BoxBackgroundColor.BackgroundAlternative}
          borderColor={BoxBorderColor.BorderDefault}
          borderWidth={1}
        >
          <Text>Inverse</Text>
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
    </ScrollView>
  ),
};
