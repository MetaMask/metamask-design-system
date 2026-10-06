import type { Meta, StoryObj } from '@storybook/react-native';
import React from 'react';

import { Box } from '../Box/index.js';
import { Text } from '../Text/index.js';

import { BottomSheetFooter } from './BottomSheetFooter.js';
import type { BottomSheetFooterProps } from './BottomSheetFooter.types.js';
import { ButtonsAlignment } from './BottomSheetFooter.types.js';

const meta: Meta<BottomSheetFooterProps> = {
  title: 'Components/BottomSheetFooter',
  component: BottomSheetFooter,
  argTypes: {
    buttonsAlignment: {
      options: Object.values(ButtonsAlignment),
      control: {
        type: 'select',
      },
    },
    twClassName: { control: 'text' },
    style: { control: 'object' },
  },
  decorators: [
    (Story) => (
      <Box twClassName="w-full p-4">
        <Box twClassName="mb-4 items-center">
          <Text>Content above footer</Text>
        </Box>
        <Story />
      </Box>
    ),
  ],
};

export default meta;
type Story = StoryObj<BottomSheetFooterProps>;

export const Default: Story = {
  args: {
    buttonsAlignment: ButtonsAlignment.Vertical,
    secondaryButtonProps: {
      children: 'Cancel',
      onPress: () => console.log('Cancel pressed'),
    },
    primaryButtonProps: {
      children: 'Submit',
      onPress: () => console.log('Submit pressed'),
    },
  },
};

export const PrimaryOnly: Story = {
  args: {
    primaryButtonProps: {
      children: 'Confirm',
      onPress: () => console.log('Confirm pressed'),
    },
  },
};

export const SecondaryOnly: Story = {
  args: {
    secondaryButtonProps: {
      children: 'Cancel',
      onPress: () => console.log('Cancel pressed'),
    },
  },
};

export const Horizontal: Story = {
  args: {
    buttonsAlignment: ButtonsAlignment.Horizontal,
    secondaryButtonProps: {
      children: 'Cancel',
      onPress: () => console.log('Cancel pressed'),
    },
    primaryButtonProps: {
      children: 'Submit',
      onPress: () => console.log('Submit pressed'),
    },
  },
};
