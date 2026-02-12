import type { Meta, StoryObj } from '@storybook/react-native';
import React from 'react';

import { Box } from '../Box';
import { Text } from '../Text';

import { BottomSheetOverlay } from './BottomSheetOverlay';
import type { BottomSheetOverlayProps } from './BottomSheetOverlay.types';

const meta: Meta<BottomSheetOverlayProps> = {
  title: 'Components/BottomSheets/BottomSheetOverlay',
  component: BottomSheetOverlay,
  argTypes: {
    onPress: { action: 'pressed' },
    style: { control: 'object' },
  },
  decorators: [
    (Story) => (
      <Box twClassName="w-full h-96 relative">
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

export const Default: Story = {
  args: {
    onPress: undefined,
  },
};

export const OnPress: Story = {
  args: {
    onPress: () => console.log('Overlay pressed'),
  },
  render: (args) => <BottomSheetOverlay {...args} />,
};
