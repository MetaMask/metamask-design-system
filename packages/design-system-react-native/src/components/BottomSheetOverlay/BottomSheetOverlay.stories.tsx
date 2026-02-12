import type { Meta, StoryObj } from '@storybook/react-native';
import React from 'react';

import { Box } from '../Box';

import { BottomSheetOverlay } from './BottomSheetOverlay';
import type { BottomSheetOverlayProps } from './BottomSheetOverlay.types';

const meta: Meta<BottomSheetOverlayProps> = {
  title: 'Components/BottomSheetOverlay',
  component: BottomSheetOverlay,
  argTypes: {
    onPress: { action: 'pressed' },
    style: { control: 'object' },
  },
  decorators: [
    (Story) => (
      <Box twClassName="w-full h-full relative">
        <Story />
      </Box>
    ),
  ],
};

export default meta;
type Story = StoryObj<BottomSheetOverlayProps>;

export const Default: Story = {};
