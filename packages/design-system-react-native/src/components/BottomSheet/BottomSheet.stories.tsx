import type { Meta, StoryObj } from '@storybook/react-native';
import React, { useRef, useState } from 'react';
import { Platform, Pressable, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

import { BottomSheetFooter } from '../BottomSheetFooter';
import { BottomSheetHeader } from '../BottomSheetHeader';
import { Box } from '../Box';
import { Button, ButtonVariant } from '../Button';
import { Text } from '../Text';

import { BottomSheet } from './BottomSheet';
import type { BottomSheetProps, BottomSheetRef } from './BottomSheet.types';

const meta: Meta<BottomSheetProps> = {
  title: 'Components/BottomSheet',
  component: BottomSheet,
  argTypes: {
    isInteractable: { control: 'boolean' },
    isFullscreen: { control: 'boolean' },
    keyboardAvoidingViewEnabled: { control: 'boolean' },
    shouldNavigateBack: { control: 'boolean' },
    onClose: { action: 'closed' },
    onOpen: { action: 'opened' },
    twClassName: { control: 'text' },
    style: { control: 'object' },
  },
};

export default meta;
type Story = StoryObj<BottomSheetProps>;

const DefaultTemplate = (args: BottomSheetProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const goBack = () => setIsVisible(false);

  return (
    <View style={{ flex: 1, width: '100%' }}>
      <Button
        variant={ButtonVariant.Primary}
        onPress={() => setIsVisible(true)}
        twClassName="mb-4"
      >
        Open BottomSheet
      </Button>
      {isVisible && (
        <BottomSheet
          {...args}
          goBack={goBack}
          shouldNavigateBack={false}
          onClose={goBack}
        >
          <BottomSheetHeader onClose={goBack}>BottomSheet</BottomSheetHeader>
          <Box twClassName="p-4">
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Text>
          </Box>
          <BottomSheetFooter
            secondaryButtonProps={{ children: 'Cancel', onPress: goBack }}
            primaryButtonProps={{ children: 'Confirm', onPress: goBack }}
          />
        </BottomSheet>
      )}
    </View>
  );
};

export const Default: Story = {
  render: (args) => <DefaultTemplate {...args} />,
  args: {
    isInteractable: true,
    isFullscreen: false,
    keyboardAvoidingViewEnabled: true,
  },
};

export const IsInteractable: Story = {
  render: (args) => <DefaultTemplate {...args} />,
  args: {
    isInteractable: false,
    isFullscreen: false,
  },
};

export const IsFullscreen: Story = {
  render: (args) => <DefaultTemplate {...args} />,
  args: {
    isInteractable: true,
    isFullscreen: true,
  },
};

const ImperativeControlTemplate = (args: BottomSheetProps) => {
  const sheetRef = useRef<BottomSheetRef>(null);

  return (
    <View style={{ flex: 1, width: '100%' }}>
      <Box twClassName="flex-row gap-2 p-4">
        <Pressable onPress={() => sheetRef.current?.onOpenBottomSheet()}>
          <Text>Open via ref</Text>
        </Pressable>
        <Pressable onPress={() => sheetRef.current?.onCloseBottomSheet()}>
          <Text>Close via ref</Text>
        </Pressable>
      </Box>
      <BottomSheet
        ref={sheetRef}
        {...args}
        goBack={() => sheetRef.current?.onCloseBottomSheet()}
        shouldNavigateBack={false}
      >
        <Box twClassName="p-4">
          <Text>Controlled imperatively via ref</Text>
        </Box>
      </BottomSheet>
    </View>
  );
};

export const ImperativeControl: Story = {
  render: (args) => <ImperativeControlTemplate {...args} />,
  args: {
    isInteractable: true,
  },
};

const ScrollableListTemplate = (args: BottomSheetProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const listGestureRef = useRef(null);
  const goBack = () => setIsVisible(false);

  return (
    <View style={{ flex: 1, width: '100%' }}>
      <Button
        variant={ButtonVariant.Primary}
        onPress={() => setIsVisible(true)}
        twClassName="mb-4"
      >
        Open Scrollable BottomSheet
      </Button>
      {isVisible && (
        <BottomSheet
          {...args}
          goBack={goBack}
          shouldNavigateBack={false}
          onClose={goBack}
          panGestureHandlerProps={{
            simultaneousHandlers:
              Platform.OS === 'android' ? listGestureRef : undefined,
          }}
        >
          <BottomSheetHeader onClose={goBack}>
            Scrollable BottomSheet
          </BottomSheetHeader>
          <ScrollView
            ref={listGestureRef}
            style={{ maxHeight: 420 }}
            contentContainerStyle={{ paddingBottom: 24 }}
          >
            {Array.from({ length: 20 }).map((_, index) => (
              <Box key={`bottom-sheet-item-${index}`} twClassName="px-4 py-3">
                <Text>{`List item ${index + 1}`}</Text>
              </Box>
            ))}
          </ScrollView>
          <BottomSheetFooter
            secondaryButtonProps={{ children: 'Cancel', onPress: goBack }}
            primaryButtonProps={{ children: 'Done', onPress: goBack }}
          />
        </BottomSheet>
      )}
    </View>
  );
};

export const ScrollableList: Story = {
  render: (args) => <ScrollableListTemplate {...args} />,
  args: {
    isInteractable: true,
    isFullscreen: false,
    keyboardAvoidingViewEnabled: true,
  },
};
