import { KeyValuePairOrientation } from '@metamask/design-system-shared';
import type { Meta, StoryObj } from '@storybook/react-native';
import React from 'react';

import { BoxFlexDirection } from '../../types';
import { AvatarAccount, AvatarAccountSize } from '../AvatarAccount';
import { AvatarToken, AvatarTokenSize } from '../AvatarToken';
import { SAMPLE_AVATARTOKEN_URIS } from '../AvatarToken/AvatarToken.dev';
import { Box } from '../Box';
import { Icon, IconName, IconSize } from '../Icon';

import { KeyValuePair } from './KeyValuePair';
import type { KeyValuePairProps } from './KeyValuePair.types';

const meta: Meta<KeyValuePairProps> = {
  title: 'Components/KeyValuePair',
  component: KeyValuePair,
  argTypes: {
    keyLabel: { control: 'text' },
    value: { control: 'text' },
    orientation: {
      control: 'select',
      options: [
        KeyValuePairOrientation.Horizontal,
        KeyValuePairOrientation.Vertical,
      ],
    },
  },
};

export default meta;

type Story = StoryObj<KeyValuePairProps>;

const StoryWrapper: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => <Box padding={4}>{children}</Box>;

export const Default: Story = {
  args: {
    keyLabel: 'Network',
    value: 'Ethereum Mainnet',
  },
  render: (args) => (
    <StoryWrapper>
      <KeyValuePair {...args} />
    </StoryWrapper>
  ),
};

export const Orientation: Story = {
  render: () => (
    <StoryWrapper>
      <Box gap={6}>
        <KeyValuePair
          keyLabel="Horizontal"
          value="Key and value in a row"
          orientation={KeyValuePairOrientation.Horizontal}
          keyEndButtonIconProps={{
            iconName: IconName.Question,
            onPress: () => undefined,
          }}
          valueEndButtonIconProps={{
            iconName: IconName.Info,
            onPress: () => undefined,
          }}
        />
        <KeyValuePair
          keyLabel="Vertical"
          value="Key above, value below"
          orientation={KeyValuePairOrientation.Vertical}
          keyEndButtonIconProps={{
            iconName: IconName.Question,
            onPress: () => undefined,
          }}
          valueEndButtonIconProps={{
            iconName: IconName.Info,
            onPress: () => undefined,
          }}
        />
      </Box>
    </StoryWrapper>
  ),
};

export const Accessories: Story = {
  render: () => (
    <StoryWrapper>
      <KeyValuePair
        keyLabel="Amount"
        value="1.5 ETH"
        keyStartAccessory={<Icon name={IconName.Info} size={IconSize.Sm} />}
        keyEndButtonIconProps={{
          iconName: IconName.Question,
          onPress: () => undefined,
        }}
        valueStartAccessory={<Icon name={IconName.Wallet} size={IconSize.Sm} />}
        valueEndButtonIconProps={{
          iconName: IconName.Check,
          onPress: () => undefined,
        }}
      />
    </StoryWrapper>
  ),
};

export const EndButtonIcons: Story = {
  render: () => (
    <StoryWrapper>
      <KeyValuePair
        keyLabel="Label"
        value="Value"
        keyEndButtonIconProps={{
          iconName: IconName.Question,
          onPress: () => undefined,
        }}
        valueEndButtonIconProps={{
          iconName: IconName.Info,
          onPress: () => undefined,
        }}
      />
    </StoryWrapper>
  ),
};

const SAMPLE_ADDRESS = '0x9Cbf7c41B7787F6c621115010D3B044029FE2Ce8';

/** Stacked horizontal rows: key left, value (text, icons, or empty) end-aligned. */
export const HorizontalList: Story = {
  render: () => (
    <StoryWrapper>
      <Box>
        <KeyValuePair
          keyLabel="Account"
          value={
            <AvatarAccount
              address={SAMPLE_ADDRESS}
              size={AvatarAccountSize.Xs}
            />
          }
          orientation={KeyValuePairOrientation.Horizontal}
        />
        <KeyValuePair
          keyLabel="Pay with"
          value={
            <AvatarToken
              src={SAMPLE_AVATARTOKEN_URIS[0]}
              size={AvatarTokenSize.Xs}
            />
          }
          orientation={KeyValuePairOrientation.Horizontal}
        />
        <KeyValuePair
          keyLabel="Transaction fees"
          value="$2.59"
          orientation={KeyValuePairOrientation.Horizontal}
          keyEndButtonIconProps={{
            iconName: IconName.Info,
            onPress: () => undefined,
          }}
        />
        <KeyValuePair
          keyLabel="Est. time"
          value="5 mins"
          orientation={KeyValuePairOrientation.Horizontal}
        />
        <KeyValuePair
          keyLabel="Total"
          value="$102.59"
          orientation={KeyValuePairOrientation.Horizontal}
        />
      </Box>
    </StoryWrapper>
  ),
};

/** Two columns of vertical pairs (key above value), as in a compact stats layout. */
export const VerticalGrid: Story = {
  render: () => (
    <StoryWrapper>
      <Box flexDirection={BoxFlexDirection.Row} gap={4} twClassName="w-full">
        <Box
          flexDirection={BoxFlexDirection.Column}
          gap={6}
          twClassName="flex-1"
        >
          <KeyValuePair
            keyLabel="24h high"
            value="$2,450.62"
            orientation={KeyValuePairOrientation.Vertical}
          />
          <KeyValuePair
            keyLabel="Market cap"
            value="$1.23B"
            orientation={KeyValuePairOrientation.Vertical}
          />
          <KeyValuePair
            keyLabel="Total liquidity"
            value="$450.2M"
            orientation={KeyValuePairOrientation.Vertical}
          />
        </Box>
        <Box
          flexDirection={BoxFlexDirection.Column}
          gap={6}
          twClassName="flex-1"
        >
          <KeyValuePair
            keyLabel="24h volume"
            value="$892.1M"
            orientation={KeyValuePairOrientation.Vertical}
          />
          <KeyValuePair
            keyLabel="Circulating supply"
            value="120.4M"
            orientation={KeyValuePairOrientation.Vertical}
          />
          <KeyValuePair
            keyLabel="Contract address"
            value="0x1234…abcd"
            orientation={KeyValuePairOrientation.Vertical}
            valueEndButtonIconProps={{
              iconName: IconName.Copy,
              onPress: () => undefined,
            }}
          />
        </Box>
      </Box>
    </StoryWrapper>
  ),
};

const OVERFLOW_VALUE_TEXT =
  'Wrapped Ether (WETH) · 24,891,402.558291 ETH — Ethereum, Arbitrum, Optimism, Base';

/** Long value string in a narrow container; single-line tail ellipsis. */
export const Overflow: Story = {
  render: () => (
    <Box padding={4} gap={6} twClassName="w-full">
      <KeyValuePair
        keyLabel="Network"
        value={OVERFLOW_VALUE_TEXT}
        orientation={KeyValuePairOrientation.Horizontal}
      />
      <KeyValuePair
        keyLabel="Balance"
        value={OVERFLOW_VALUE_TEXT}
        orientation={KeyValuePairOrientation.Vertical}
      />
    </Box>
  ),
};
