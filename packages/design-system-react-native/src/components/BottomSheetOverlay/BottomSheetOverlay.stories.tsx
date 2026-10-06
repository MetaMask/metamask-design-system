import type { Meta, StoryObj } from '@storybook/react-native';
import React from 'react';

import { Box } from '../Box/index.js';
import { Text } from '../Text/index.js';

import { BottomSheetOverlay } from './BottomSheetOverlay.js';
import type { BottomSheetOverlayProps } from './BottomSheetOverlay.types.js';

const meta: Meta<BottomSheetOverlayProps> = {
  title: 'Components/BottomSheetOverlay',
  component: BottomSheetOverlay,
  argTypes: {
    onPress: { action: 'pressed' },
    touchableOpacityProps: { control: 'object' },
    style: { control: 'object' },
    twClassName: { control: 'text' },
  },
  decorators: [
    (Story) => (
      <Box twClassName="w-full h-full relative">
        <Box twClassName="absolute inset-0 justify-center items-center">
          <Text>Content behind overlay</Text>
        </Box>
        <Story />
      </Box>
    ),
  ],
};

export default meta;
type Story = StoryObj<BottomSheetOverlayProps>;

export const Default: Story = {};
