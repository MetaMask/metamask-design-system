import type { Meta, StoryObj } from '@storybook/react-native';
import React, { useRef } from 'react';
import { View, Pressable } from 'react-native';

import { Box } from '../Box';
import { Text } from '../Text';

import { BottomSheetDialog } from './BottomSheetDialog';
import type {
  BottomSheetDialogProps,
  BottomSheetDialogRef,
} from './BottomSheetDialog.types';

const meta: Meta<BottomSheetDialogProps> = {
  title: 'Components/BottomSheetDialog',
  component: BottomSheetDialog,
  argTypes: {
    isFullscreen: { control: 'boolean' },
    isInteractable: { control: 'boolean' },
    keyboardAvoidingViewEnabled: { control: 'boolean' },
    onClose: { action: 'closed' },
    onOpen: { action: 'opened' },
    style: { control: 'object' },
  },
  decorators: [
    (Story) => (
      <Box className="relative size-full bg-background-alternative">
        <Story />
      </Box>
    ),
  ],
};

export default meta;
type Story = StoryObj<BottomSheetDialogProps>;

export const Default: Story = {
  args: {
    isFullscreen: false,
    isInteractable: true,
    keyboardAvoidingViewEnabled: true,
    children: (
      <Box className="p-4">
        <Text>BottomSheetDialog content</Text>
      </Box>
    ),
  },
};

export const IsFullscreen: Story = {
  args: {
    isFullscreen: true,
    isInteractable: true,
    children: (
      <Box className="flex-1 p-4">
        <Text>Fullscreen BottomSheetDialog content</Text>
      </Box>
    ),
  },
};

export const IsInteractable: Story = {
  args: {
    isInteractable: false,
    children: (
      <Box className="p-4">
        <Text>
          Non-interactable dialog (no drag handle, no swipe to dismiss)
        </Text>
      </Box>
    ),
  },
};

const ImperativeControlTemplate = (args: BottomSheetDialogProps) => {
  const dialogRef = useRef<BottomSheetDialogRef>(null);

  return (
    <View style={{ flex: 1 }}>
      <Box className="flex-row gap-2 p-4">
        <Pressable onPress={() => dialogRef.current?.onOpenDialog()}>
          <Text>Open</Text>
        </Pressable>
        <Pressable onPress={() => dialogRef.current?.onCloseDialog()}>
          <Text>Close</Text>
        </Pressable>
      </Box>
      <BottomSheetDialog ref={dialogRef} {...args}>
        <Box className="p-4">
          <Text>Dialog controlled via ref</Text>
        </Box>
      </BottomSheetDialog>
    </View>
  );
};

export const ImperativeControl: Story = {
  render: (args) => <ImperativeControlTemplate {...args} />,
  args: {
    isInteractable: true,
  },
};
