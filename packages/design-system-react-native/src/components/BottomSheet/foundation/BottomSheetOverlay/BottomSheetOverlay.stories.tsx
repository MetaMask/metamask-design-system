// Third party dependencies.
import { StoryObj } from '@storybook/react-native';
import React from 'react';

// External dependencies.
import { BoxBackgroundColor } from '../../../../types';

// Internal dependencies.
import { BottomSheetOverlay } from './BottomSheetOverlay';
import { BottomSheetOverlayProps } from './BottomSheetOverlay.types';

const OverlayMeta = {
  title: 'Components/BottomSheets/BottomSheetOverlay',
  component: BottomSheetOverlay,
  argTypes: {
    color: {
      control: { type: 'color' },
      defaultValue: BoxBackgroundColor.OverlayDefault,
    },
  },
};
export default OverlayMeta;

type Story = StoryObj<BottomSheetOverlayProps>;

export const Overlay: Story = {
  render: (args) => (
    <BottomSheetOverlay {...args} onPress={() => console.log("I'm clicked!")} />
  ),
};
