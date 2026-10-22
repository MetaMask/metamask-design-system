import type { Meta, StoryObj } from '@storybook/react-native';
import React from 'react';

import { Box } from '../Box';
import { Text } from '../Text';

import { BottomSheetFooter } from './BottomSheetFooter';
import type { BottomSheetFooterProps } from './BottomSheetFooter.types';
import { ButtonsAlignment } from './BottomSheetFooter.types';

const meta: Meta<BottomSheetFooterProps> = {
  title: 'Components/BottomSheetFooter',
  component: BottomSheetFooter,
  argTypes: {
    buttonsAlignment: {
      options: Object.values(ButtonsAlignment),
      control: {
        type: 'select',
      },
      description:
        'Horizontal lays the buttons in a row. Vertical stacks them. A tertiary button is last, so use Vertical to place it at the bottom.',
    },
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

export const TertiaryOnly: Story = {
  args: {
    tertiaryButtonProps: {
      children: 'Not now',
      onPress: () => console.log('Not now pressed'),
    },
  },
};

export const TertiaryButtonProps: Story = {
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
    tertiaryButtonProps: {
      children: 'Not now',
      onPress: () => console.log('Not now pressed'),
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
