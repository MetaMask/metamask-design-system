import type { Meta, StoryObj } from '@storybook/react-native';
import React, { useRef } from 'react';
import { View, Pressable } from 'react-native';

import { Box } from '../Box';
import { Text, TextVariant } from '../Text';

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
    isElevatedSurface: { control: 'boolean' },
    keyboardAvoidingViewEnabled: { control: 'boolean' },
    onClose: { action: 'closed' },
    onOpen: { action: 'opened' },
    twClassName: { control: 'text' },
    style: { control: 'object' },
  },
  decorators: [
    (Story) => (
      <Box twClassName="w-full h-full relative bg-background-alternative">
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
      <Box twClassName="p-4">
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
      <Box twClassName="p-4 flex-1">
        <Text>Fullscreen BottomSheetDialog content</Text>
      </Box>
    ),
  },
};

export const IsInteractable: Story = {
  args: {
    isInteractable: false,
    children: (
      <Box twClassName="p-4">
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
      <Box twClassName="flex-row gap-2 p-4">
        <Pressable onPress={() => dialogRef.current?.onOpenDialog()}>
          <Text>Open</Text>
        </Pressable>
        <Pressable onPress={() => dialogRef.current?.onCloseDialog()}>
          <Text>Close</Text>
        </Pressable>
      </Box>
      <BottomSheetDialog ref={dialogRef} {...args}>
        <Box twClassName="p-4">
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

const NUMPAD_KEYS = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '.', '0', '⌫'];

const ScreenLevelNumpadTemplate = (args: BottomSheetDialogProps) => (
  <Box twClassName="w-full h-full relative bg-default">
    <Box twClassName="flex-1 p-4">
      <Text variant={TextVariant.HeadingMd}>Swap amount</Text>
      <Text variant={TextVariant.AmountDisplayLg} twClassName="mt-2">
        0.00
      </Text>
    </Box>
    <BottomSheetDialog {...args} isInteractable={false} isElevatedSurface={false}>
      <Box twClassName="px-4 pt-2 pb-0">
        <Box twClassName="flex-row flex-wrap">
          {NUMPAD_KEYS.map((key) => (
            <Box
              key={key}
              twClassName="w-1/3 items-center justify-center py-4"
            >
              <Text variant={TextVariant.HeadingMd}>{key}</Text>
            </Box>
          ))}
        </Box>
      </Box>
    </BottomSheetDialog>
  </Box>
);

export const ScreenLevelNumpad: Story = {
  render: (args) => <ScreenLevelNumpadTemplate {...args} />,
  parameters: {
    docs: {
      description: {
        story:
          'Screen-level bottom surfaces such as swap numpads should use `isElevatedSurface={false}` so the sheet matches the pure-black canvas (`#000000`) instead of the elevated `bg-alternative` surface.',
      },
    },
  },
};
