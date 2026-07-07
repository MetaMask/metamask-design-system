import type { Meta, StoryObj } from '@storybook/react-native';
import React, { useRef, useState } from 'react';
import { Pressable, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

import { ActionListItem } from '../ActionListItem';
import { BottomSheetFooter } from '../BottomSheetFooter';
import { BottomSheetHeader } from '../BottomSheetHeader';
import { Box } from '../Box';
import { Button, ButtonVariant } from '../Button';
import { IconName } from '../Icon';
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
        <BottomSheet {...args} onClose={goBack}>
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
      <BottomSheet ref={sheetRef} {...args}>
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

const PAY_WITH_ASSETS = [
  { id: 'usdc', label: 'USDC', description: 'USD Coin' },
  { id: 'eth', label: 'Ethereum', description: '0.42 ETH' },
  { id: 'usdt', label: 'USDT', description: 'Tether USD' },
];

const PureBlackPayWithListTemplate = (args: BottomSheetProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedAssetId, setSelectedAssetId] = useState('usdc');
  const goBack = () => setIsVisible(false);

  return (
    <View style={{ flex: 1, width: '100%' }}>
      <Button
        variant={ButtonVariant.Primary}
        onPress={() => setIsVisible(true)}
        twClassName="mb-4"
      >
        Open Pay With BottomSheet
      </Button>
      {isVisible && (
        <BottomSheet {...args} goBack={goBack} onClose={goBack}>
          <BottomSheetHeader onClose={goBack}>Pay with</BottomSheetHeader>
          <ScrollView>
            {PAY_WITH_ASSETS.map((asset) => (
              <ActionListItem
                key={asset.id}
                label={asset.label}
                description={asset.description}
                iconName={IconName.Coin}
                onPress={() => setSelectedAssetId(asset.id)}
                twClassName={
                  selectedAssetId === asset.id ? 'bg-section' : undefined
                }
              />
            ))}
          </ScrollView>
          <BottomSheetFooter
            primaryButtonProps={{ children: 'Done', onPress: goBack }}
          />
        </BottomSheet>
      )}
    </View>
  );
};

export const PureBlackPayWithList: Story = {
  render: (args) => <PureBlackPayWithListTemplate {...args} />,
  args: {
    isInteractable: true,
    isFullscreen: false,
    keyboardAvoidingViewEnabled: true,
  },
  parameters: {
    docs: {
      description: {
        story:
          'Simulates the perps Add funds Pay With sheet. Toggle pure black in the Storybook toolbar and confirm list rows inherit the elevated sheet background instead of painting #000000 patches.',
      },
    },
  },
};
