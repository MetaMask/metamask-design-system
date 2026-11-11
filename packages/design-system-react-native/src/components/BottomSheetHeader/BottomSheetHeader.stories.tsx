import type { Meta, StoryObj } from '@storybook/react-native';
import React from 'react';

import { Box } from '../Box/index.js';
import { Text } from '../Text/index.js';

import { BottomSheetHeader } from './BottomSheetHeader.js';
import type { BottomSheetHeaderProps } from './BottomSheetHeader.types.js';

const meta: Meta<BottomSheetHeaderProps> = {
  title: 'Components/BottomSheetHeader',
  component: BottomSheetHeader,
  argTypes: {
    onBack: { action: 'onBack pressed' },
    onClose: { action: 'onClose pressed' },
    backButtonProps: { control: 'object' },
    closeButtonProps: { control: 'object' },
    twClassName: { control: 'text' },
    style: { control: 'object' },
  },
  decorators: [
    (Story) => (
      <Box twClassName="w-full bg-background-default">
        <Box twClassName="items-center py-4">
          <Text>Content behind bottom sheet</Text>
        </Box>
        <Story />
      </Box>
    ),
  ],
};

export default meta;
type Story = StoryObj<BottomSheetHeaderProps>;

export const Default: Story = {
  args: {
    children: 'Sheet title',
  },
};

export const WithTitle: Story = {
  render: () => (
    <BottomSheetHeader>Centered bottom sheet title</BottomSheetHeader>
  ),
};

export const OnBack: Story = {
  render: () => (
    <BottomSheetHeader onBack={() => null}>With back button</BottomSheetHeader>
  ),
};

export const OnClose: Story = {
  render: () => (
    <BottomSheetHeader onClose={() => null}>
      With close button
    </BottomSheetHeader>
  ),
};

export const OnBackAndOnClose: Story = {
  render: () => (
    <BottomSheetHeader onBack={() => null} onClose={() => null}>
      Both buttons
    </BottomSheetHeader>
  ),
};
