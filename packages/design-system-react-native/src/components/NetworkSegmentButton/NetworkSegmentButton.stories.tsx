import { SegmentButtonVariant } from '@metamask/design-system-shared';
import { useTailwind } from '@metamask/design-system-twrnc-preset';
import type { Meta, StoryObj } from '@storybook/react-native';
import type { ViewProps } from 'react-native';
import { View } from 'react-native';

import { SAMPLE_AVATARNETWORK_URIS } from '../AvatarNetwork/AvatarNetwork.dev';
import { Icon, IconName, IconSize } from '../Icon';

import { NetworkSegmentButton } from './NetworkSegmentButton';
import type { NetworkSegmentButtonProps } from './NetworkSegmentButton.types';

const noopPress = () => undefined;

const [, , , ethereumNetworkSrc, , , polygonNetworkSrc] =
  SAMPLE_AVATARNETWORK_URIS;

const meta: Meta<NetworkSegmentButtonProps> = {
  title: 'Components/NetworkSegmentButton',
  component: NetworkSegmentButton,
  argTypes: {
    variant: {
      control: 'select',
      options: Object.values(SegmentButtonVariant),
    },
    isSelected: {
      control: 'boolean',
    },
    isDisabled: {
      control: 'boolean',
    },
    isLoading: {
      control: 'boolean',
    },
    networkName: {
      control: 'text',
    },
  },
};

export default meta;

const NetworkSegmentButtonStoryWrapper: React.FC<ViewProps> = ({
  children,
  ...props
}) => {
  const tw = useTailwind();
  return (
    <View {...props} style={[tw`flex-row flex-wrap gap-2 p-4`, props.style]}>
      {children}
    </View>
  );
};

type Story = StoryObj<NetworkSegmentButtonProps>;

export const Default: Story = {
  args: {
    networkName: 'Ethereum',
    networkSrc: ethereumNetworkSrc,
    variant: SegmentButtonVariant.Primary,
    isSelected: true,
    isDisabled: false,
    isLoading: false,
    onPress: noopPress,
  },
  render: (args) => (
    <NetworkSegmentButtonStoryWrapper>
      <NetworkSegmentButton {...args} />
    </NetworkSegmentButtonStoryWrapper>
  ),
};

export const Variant: Story = {
  render: () => (
    <NetworkSegmentButtonStoryWrapper>
      <NetworkSegmentButton
        variant={SegmentButtonVariant.Primary}
        isSelected
        networkName="Ethereum"
        networkSrc={ethereumNetworkSrc}
        onPress={noopPress}
      />
      <NetworkSegmentButton
        variant={SegmentButtonVariant.Primary}
        isSelected={false}
        networkName="Polygon"
        networkSrc={polygonNetworkSrc}
        onPress={noopPress}
      />
      <NetworkSegmentButton
        variant={SegmentButtonVariant.Secondary}
        isSelected
        networkName="Ethereum"
        networkSrc={ethereumNetworkSrc}
        onPress={noopPress}
      />
      <NetworkSegmentButton
        variant={SegmentButtonVariant.Secondary}
        isSelected={false}
        networkName="Polygon"
        networkSrc={polygonNetworkSrc}
        onPress={noopPress}
      />
    </NetworkSegmentButtonStoryWrapper>
  ),
};

export const IsSelected: Story = {
  render: () => (
    <NetworkSegmentButtonStoryWrapper>
      <NetworkSegmentButton
        variant={SegmentButtonVariant.Primary}
        isSelected
        networkName="Selected"
        networkSrc={ethereumNetworkSrc}
        onPress={noopPress}
      />
      <NetworkSegmentButton
        variant={SegmentButtonVariant.Primary}
        isSelected={false}
        networkName="Unselected"
        networkSrc={polygonNetworkSrc}
        onPress={noopPress}
      />
    </NetworkSegmentButtonStoryWrapper>
  ),
};

export const NetworkName: Story = {
  render: () => (
    <NetworkSegmentButtonStoryWrapper>
      <NetworkSegmentButton
        variant={SegmentButtonVariant.Primary}
        isSelected={false}
        networkName="Label only (no icon)"
        onPress={noopPress}
      />
      <NetworkSegmentButton
        variant={SegmentButtonVariant.Primary}
        isSelected
        networkName="With icon"
        networkSrc={ethereumNetworkSrc}
        onPress={noopPress}
      />
    </NetworkSegmentButtonStoryWrapper>
  ),
};

export const NetworkSrc: Story = {
  render: () => (
    <NetworkSegmentButtonStoryWrapper>
      {SAMPLE_AVATARNETWORK_URIS.map((src, index) => (
        <NetworkSegmentButton
          key={`network-segment-src-${index}`}
          variant={SegmentButtonVariant.Primary}
          isSelected={index === 0}
          networkName={`Network ${index + 1}`}
          networkSrc={src}
          onPress={noopPress}
        />
      ))}
    </NetworkSegmentButtonStoryWrapper>
  ),
};

export const StartAccessory: Story = {
  render: () => (
    <NetworkSegmentButtonStoryWrapper>
      <NetworkSegmentButton
        variant={SegmentButtonVariant.Secondary}
        isSelected={false}
        networkName="Custom start (no networkSrc)"
        startAccessory={<Icon name={IconName.Search} size={IconSize.Sm} />}
        onPress={noopPress}
      />
      <NetworkSegmentButton
        variant={SegmentButtonVariant.Primary}
        isSelected={false}
        networkName="Avatar wins over startAccessory"
        networkSrc={ethereumNetworkSrc}
        startAccessory={<Icon name={IconName.Wallet} size={IconSize.Sm} />}
        onPress={noopPress}
      />
    </NetworkSegmentButtonStoryWrapper>
  ),
};

export const IsDisabled: Story = {
  render: () => (
    <NetworkSegmentButtonStoryWrapper>
      <NetworkSegmentButton
        variant={SegmentButtonVariant.Primary}
        networkName="Enabled"
        networkSrc={ethereumNetworkSrc}
        onPress={noopPress}
      />
      <NetworkSegmentButton
        variant={SegmentButtonVariant.Primary}
        isDisabled
        networkName="Disabled"
        networkSrc={polygonNetworkSrc}
        onPress={noopPress}
      />
    </NetworkSegmentButtonStoryWrapper>
  ),
};

export const IsLoading: Story = {
  render: () => (
    <NetworkSegmentButtonStoryWrapper>
      <NetworkSegmentButton
        variant={SegmentButtonVariant.Primary}
        isSelected
        isLoading
        networkName="Loading"
        networkSrc={ethereumNetworkSrc}
        onPress={noopPress}
      />
    </NetworkSegmentButtonStoryWrapper>
  ),
};
