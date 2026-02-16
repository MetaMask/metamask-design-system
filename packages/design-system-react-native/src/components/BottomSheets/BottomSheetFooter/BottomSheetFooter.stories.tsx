import type { Meta, StoryObj } from '@storybook/react-native';
import React from 'react';

import { Box } from '../../Box';
import { Text } from '../../Text';

import { BottomSheetFooter } from './BottomSheetFooter';
import { SAMPLE_BOTTOMSHEETFOOTER_PROPS } from './BottomSheetFooter.constants';
import type { BottomSheetFooterProps } from './BottomSheetFooter.types';
import { ButtonsAlignment } from './BottomSheetFooter.types';

const meta: Meta<BottomSheetFooterProps> = {
  title: 'Components/BottomSheets/BottomSheetFooter',
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
    ...SAMPLE_BOTTOMSHEETFOOTER_PROPS,
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
    ...SAMPLE_BOTTOMSHEETFOOTER_PROPS,
    buttonsAlignment: ButtonsAlignment.Horizontal,
  },
};
