import type { Meta, StoryObj } from '@storybook/react-native';
import React from 'react';

import { Box } from '../Box';
import { Text } from '../Text';

import { BottomSheetHeader } from './BottomSheetHeader';
import type { BottomSheetHeaderProps } from './BottomSheetHeader.types';
import { BottomSheetHeaderVariant } from './BottomSheetHeader.types';

const meta: Meta<BottomSheetHeaderProps> = {
  title: 'Components/BottomSheets/BottomSheetHeader',
  component: BottomSheetHeader,
  argTypes: {
    variant: {
      control: 'select',
      options: Object.values(BottomSheetHeaderVariant),
    },
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
    children: 'BottomSheetHeader Title',
  },
};

export const Variant: Story = {
  render: () => (
    <Box twClassName="gap-4">
      <BottomSheetHeader variant={BottomSheetHeaderVariant.Compact}>
        Compact variant (center-aligned)
      </BottomSheetHeader>
      <BottomSheetHeader variant={BottomSheetHeaderVariant.Display}>
        Display variant (left-aligned)
      </BottomSheetHeader>
    </Box>
  ),
};

export const OnBack: Story = {
  render: () => (
    <Box twClassName="gap-4">
      <BottomSheetHeader
        variant={BottomSheetHeaderVariant.Compact}
        onBack={() => null}
      >
        With back button
      </BottomSheetHeader>
      <BottomSheetHeader
        variant={BottomSheetHeaderVariant.Display}
        onBack={() => null}
      >
        With back button (Display)
      </BottomSheetHeader>
    </Box>
  ),
};

export const OnClose: Story = {
  render: () => (
    <Box twClassName="gap-4">
      <BottomSheetHeader
        variant={BottomSheetHeaderVariant.Compact}
        onClose={() => null}
      >
        With close button
      </BottomSheetHeader>
      <BottomSheetHeader
        variant={BottomSheetHeaderVariant.Display}
        onClose={() => null}
      >
        With close button (Display)
      </BottomSheetHeader>
    </Box>
  ),
};

export const OnBackAndOnClose: Story = {
  render: () => (
    <Box twClassName="gap-4">
      <BottomSheetHeader
        variant={BottomSheetHeaderVariant.Compact}
        onBack={() => null}
        onClose={() => null}
      >
        Both buttons (Compact)
      </BottomSheetHeader>
      <BottomSheetHeader
        variant={BottomSheetHeaderVariant.Display}
        onBack={() => null}
        onClose={() => null}
      >
        Both buttons (Display)
      </BottomSheetHeader>
    </Box>
  ),
};
