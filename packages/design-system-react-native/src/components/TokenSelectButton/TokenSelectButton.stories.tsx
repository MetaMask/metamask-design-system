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

import { TokenSelectButton } from './TokenSelectButton';
import type { TokenSelectButtonProps } from './TokenSelectButton.types';

const noopPress = () => undefined;

const [, , , demoEthSrc, , , demoPolySrc] = SAMPLE_AVATARNETWORK_URIS;

const meta: Meta<TokenSelectButtonProps> = {
  title: 'Components/TokenSelectButton',
  component: TokenSelectButton,
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
    tokenName: {
      control: 'text',
    },
  },
};

export default meta;

const TokenSelectButtonStoryWrapper: React.FC<ViewProps> = ({
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

type Story = StoryObj<TokenSelectButtonProps>;

export const Default: Story = {
  args: {
    placeholder: 'Token',
    tokenName: 'ETH',
    tokenSrc: demoEthSrc,
    variant: SelectButtonVariant.Primary,
    endArrowDirection: SelectButtonEndArrow.Down,
    isDisabled: false,
    onPress: noopPress,
  },
  render: (args) => (
    <TokenSelectButtonStoryWrapper>
      <TokenSelectButton {...args} />
    </TokenSelectButtonStoryWrapper>
  ),
};

export const Placeholder: Story = {
  render: () => (
    <TokenSelectButtonStoryWrapper style={{ gap: 16 }}>
      <TokenSelectButton
        placeholder="Choose a token"
        endArrowDirection={SelectButtonEndArrow.Down}
        onPress={noopPress}
      />
    </TokenSelectButtonStoryWrapper>
  ),
};

export const TokenName: Story = {
  render: () => (
    <TokenSelectButtonStoryWrapper style={{ gap: 16 }}>
      <TokenSelectButton
        placeholder="Token"
        tokenName="USDC"
        endArrowDirection={SelectButtonEndArrow.Down}
        onPress={noopPress}
      />
      <TokenSelectButton
        placeholder="Token"
        tokenName="ETH"
        tokenSrc={demoEthSrc}
        endArrowDirection={SelectButtonEndArrow.Down}
        onPress={noopPress}
      />
    </TokenSelectButtonStoryWrapper>
  ),
};

export const TokenSrc: Story = {
  render: () => (
    <TokenSelectButtonStoryWrapper style={{ gap: 16 }}>
      {SAMPLE_AVATARNETWORK_URIS.slice(0, 4).map((src, index) => (
        <TokenSelectButton
          key={`token-select-src-${index}`}
          placeholder="Token"
          tokenName={`TKN ${index + 1}`}
          tokenSrc={src}
          endArrowDirection={SelectButtonEndArrow.Down}
          onPress={noopPress}
        />
      ))}
    </TokenSelectButtonStoryWrapper>
  ),
};

export const Variant: Story = {
  render: () => (
    <TokenSelectButtonStoryWrapper style={{ gap: 16 }}>
      <TokenSelectButton
        variant={SelectButtonVariant.Primary}
        placeholder="Primary"
        tokenName="ETH"
        tokenSrc={demoEthSrc}
        endArrowDirection={SelectButtonEndArrow.Down}
        onPress={noopPress}
      />
      <TokenSelectButton
        variant={SelectButtonVariant.Secondary}
        placeholder="Secondary"
        tokenName="MATIC"
        tokenSrc={demoPolySrc}
        endArrowDirection={SelectButtonEndArrow.Down}
        onPress={noopPress}
      />
      <TokenSelectButton
        variant={SelectButtonVariant.Tertiary}
        placeholder="Tertiary"
        tokenName="LINEA"
        tokenSrc={SAMPLE_AVATARNETWORK_URIS[4]}
        endArrowDirection={SelectButtonEndArrow.Down}
        onPress={noopPress}
      />
    </TokenSelectButtonStoryWrapper>
  ),
};

export const EndArrow: Story = {
  render: () => (
    <TokenSelectButtonStoryWrapper style={{ gap: 16 }}>
      {(
        Object.entries(SelectButtonEndArrow) as [
          keyof typeof SelectButtonEndArrow,
          (typeof SelectButtonEndArrow)[keyof typeof SelectButtonEndArrow],
        ][]
      ).map(([key, value]) => (
        <TokenSelectButton
          key={key}
          placeholder={`Arrow: ${key}`}
          tokenName="ETH"
          tokenSrc={demoEthSrc}
          endArrowDirection={value}
          testID={`token-select-end-${key}`}
          onPress={noopPress}
        />
      ))}
    </TokenSelectButtonStoryWrapper>
  ),
};

export const StartAccessory: Story = {
  render: () => (
    <TokenSelectButtonStoryWrapper style={{ gap: 16 }}>
      <TokenSelectButton
        placeholder="Custom start"
        tokenName="Search row"
        startAccessory={<Icon name={IconName.Search} size={IconSize.Sm} />}
        endArrowDirection={SelectButtonEndArrow.Down}
        onPress={noopPress}
      />
      <TokenSelectButton
        placeholder="Avatar precedence"
        tokenName="ETH"
        tokenSrc={demoEthSrc}
        startAccessory={<Icon name={IconName.Wallet} size={IconSize.Sm} />}
        endArrowDirection={SelectButtonEndArrow.Down}
        onPress={noopPress}
      />
    </TokenSelectButtonStoryWrapper>
  ),
};

export const IsDisabled: Story = {
  render: () => (
    <TokenSelectButtonStoryWrapper style={{ gap: 16 }}>
      <TokenSelectButton
        placeholder="Tokens"
        tokenName="ETH"
        tokenSrc={demoEthSrc}
        endArrowDirection={SelectButtonEndArrow.Down}
        onPress={noopPress}
      />
      <TokenSelectButton
        placeholder="Tokens"
        tokenName="MATIC"
        tokenSrc={demoPolySrc}
        endArrowDirection={SelectButtonEndArrow.Down}
        isDisabled
        onPress={noopPress}
      />
    </TokenSelectButtonStoryWrapper>
  ),
};
