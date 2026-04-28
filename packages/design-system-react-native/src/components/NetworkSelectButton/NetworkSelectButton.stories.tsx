import {
  SelectButtonEndArrow,
  SelectButtonVariant,
} from '@metamask/design-system-shared';
import { useTailwind } from '@metamask/design-system-twrnc-preset';
import type { Meta, StoryObj } from '@storybook/react-native';
import type { ViewProps } from 'react-native';
import { View } from 'react-native';

import { SAMPLE_AVATARNETWORK_URIS } from '../AvatarNetwork/AvatarNetwork.dev';
import { Icon, IconName, IconSize } from '../Icon';

import { NetworkSelectButton } from './NetworkSelectButton';
import type { NetworkSelectButtonProps } from './NetworkSelectButton.types';

const noopPress = () => undefined;

const [, , , ethereumNetworkSrc, , , polygonNetworkSrc] =
  SAMPLE_AVATARNETWORK_URIS;

const meta: Meta<NetworkSelectButtonProps> = {
  title: 'Components/NetworkSelectButton',
  component: NetworkSelectButton,
  argTypes: {
    variant: {
      control: 'select',
      options: Object.values(SelectButtonVariant),
    },
    endArrowDirection: {
      control: 'select',
      options: [...Object.values(SelectButtonEndArrow), undefined],
    },
    isDisabled: {
      control: 'boolean',
    },
    placeholder: {
      control: 'text',
    },
    networkName: {
      control: 'text',
    },
  },
};

export default meta;

const NetworkSelectButtonStoryWrapper: React.FC<ViewProps> = ({
  children,
  ...props
}) => {
  const tw = useTailwind();
  return (
    <View {...props} style={[tw`p-4`, props.style]}>
      {children}
    </View>
  );
};

type Story = StoryObj<NetworkSelectButtonProps>;

export const Default: Story = {
  args: {
    placeholder: 'More networks',
    networkName: 'Ethereum',
    networkSrc: ethereumNetworkSrc,
    variant: SelectButtonVariant.Primary,
    endArrowDirection: SelectButtonEndArrow.Down,
    isDisabled: false,
    onPress: noopPress,
  },
  render: (args) => (
    <NetworkSelectButtonStoryWrapper>
      <NetworkSelectButton {...args} />
    </NetworkSelectButtonStoryWrapper>
  ),
};

export const Placeholder: Story = {
  render: () => (
    <NetworkSelectButtonStoryWrapper style={{ gap: 16 }}>
      <NetworkSelectButton
        placeholder="Choose a network"
        endArrowDirection={SelectButtonEndArrow.Down}
        onPress={noopPress}
      />
    </NetworkSelectButtonStoryWrapper>
  ),
};

export const NetworkName: Story = {
  render: () => (
    <NetworkSelectButtonStoryWrapper style={{ gap: 16 }}>
      <NetworkSelectButton
        placeholder="Network"
        networkName="Polygon"
        endArrowDirection={SelectButtonEndArrow.Down}
        onPress={noopPress}
      />
      <NetworkSelectButton
        placeholder="Network"
        networkName="Ethereum"
        networkSrc={ethereumNetworkSrc}
        endArrowDirection={SelectButtonEndArrow.Down}
        onPress={noopPress}
      />
    </NetworkSelectButtonStoryWrapper>
  ),
};

export const NetworkSrc: Story = {
  render: () => (
    <NetworkSelectButtonStoryWrapper style={{ gap: 16 }}>
      {SAMPLE_AVATARNETWORK_URIS.slice(0, 4).map((src, index) => (
        <NetworkSelectButton
          key={`network-select-src-${index}`}
          placeholder="Network"
          networkName={`Sample ${index + 1}`}
          networkSrc={src}
          endArrowDirection={SelectButtonEndArrow.Down}
          onPress={noopPress}
        />
      ))}
    </NetworkSelectButtonStoryWrapper>
  ),
};

export const Variant: Story = {
  render: () => (
    <NetworkSelectButtonStoryWrapper style={{ gap: 16 }}>
      <NetworkSelectButton
        variant={SelectButtonVariant.Primary}
        placeholder="Primary"
        networkName="Ethereum"
        networkSrc={ethereumNetworkSrc}
        endArrowDirection={SelectButtonEndArrow.Down}
        onPress={noopPress}
      />
      <NetworkSelectButton
        variant={SelectButtonVariant.Secondary}
        placeholder="Secondary"
        networkName="Polygon"
        networkSrc={polygonNetworkSrc}
        endArrowDirection={SelectButtonEndArrow.Down}
        onPress={noopPress}
      />
      <NetworkSelectButton
        variant={SelectButtonVariant.Tertiary}
        placeholder="Tertiary"
        networkName="Linea"
        networkSrc={SAMPLE_AVATARNETWORK_URIS[4]}
        endArrowDirection={SelectButtonEndArrow.Down}
        onPress={noopPress}
      />
    </NetworkSelectButtonStoryWrapper>
  ),
};

export const EndArrow: Story = {
  render: () => (
    <NetworkSelectButtonStoryWrapper style={{ gap: 16 }}>
      {(
        Object.entries(SelectButtonEndArrow) as [
          keyof typeof SelectButtonEndArrow,
          (typeof SelectButtonEndArrow)[keyof typeof SelectButtonEndArrow],
        ][]
      ).map(([key, value]) => (
        <NetworkSelectButton
          key={key}
          placeholder={`Arrow: ${key}`}
          networkName="Ethereum"
          networkSrc={ethereumNetworkSrc}
          endArrowDirection={value}
          testID={`network-select-end-${key}`}
          onPress={noopPress}
        />
      ))}
    </NetworkSelectButtonStoryWrapper>
  ),
};

export const StartAccessory: Story = {
  render: () => (
    <NetworkSelectButtonStoryWrapper style={{ gap: 16 }}>
      <NetworkSelectButton
        placeholder="Custom start"
        networkName="Search row"
        startAccessory={<Icon name={IconName.Search} size={IconSize.Sm} />}
        endArrowDirection={SelectButtonEndArrow.Down}
        onPress={noopPress}
      />
      <NetworkSelectButton
        placeholder="Avatar precedence"
        networkName="Ethereum"
        networkSrc={ethereumNetworkSrc}
        startAccessory={<Icon name={IconName.Wallet} size={IconSize.Sm} />}
        endArrowDirection={SelectButtonEndArrow.Down}
        onPress={noopPress}
      />
    </NetworkSelectButtonStoryWrapper>
  ),
};

export const IsDisabled: Story = {
  render: () => (
    <NetworkSelectButtonStoryWrapper style={{ gap: 16 }}>
      <NetworkSelectButton
        placeholder="Networks"
        networkName="Ethereum"
        networkSrc={ethereumNetworkSrc}
        endArrowDirection={SelectButtonEndArrow.Down}
        onPress={noopPress}
      />
      <NetworkSelectButton
        placeholder="Networks"
        networkName="Polygon"
        networkSrc={polygonNetworkSrc}
        endArrowDirection={SelectButtonEndArrow.Down}
        isDisabled
        onPress={noopPress}
      />
    </NetworkSelectButtonStoryWrapper>
  ),
};
