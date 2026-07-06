import {
  BoxFlexDirection,
  KeyValueRowVariant,
} from '@metamask/design-system-shared';
import type { Meta, StoryObj } from '@storybook/react-native';
import React from 'react';

import { AvatarAccount, AvatarAccountSize } from '../AvatarAccount';
import { AvatarToken, AvatarTokenSize } from '../AvatarToken';
import { SAMPLE_AVATARTOKEN_URIS } from '../AvatarToken/AvatarToken.dev';
import { Box } from '../Box';
import { Icon, IconName, IconSize } from '../Icon';
import { TextVariant } from '../Text';

import { KeyValueRow } from './KeyValueRow';
import type { KeyValueRowProps } from './KeyValueRow.types';

const meta: Meta<KeyValueRowProps> = {
  title: 'Components/KeyValueRow',
  component: KeyValueRow,
  decorators: [
    (Story) => (
      <Box twClassName="w-full" paddingHorizontal={4}>
        <Story />
      </Box>
    ),
  ],
  argTypes: {
    keyLabel: { control: 'text' },
    value: { control: 'text' },
    variant: {
      control: 'select',
      options: [KeyValueRowVariant.Summary, KeyValueRowVariant.Input],
    },
  },
};

export default meta;

type Story = StoryObj<KeyValueRowProps>;

const SAMPLE_ADDRESS = '0x9Cbf7c41B7787F6c621115010D3B044029FE2Ce8';

export const Default: Story = {
  args: {
    keyLabel: 'Network',
    value: 'Ethereum Mainnet',
  },
  render: (args) => <KeyValueRow {...args} />,
};

const selectRowChevron = <Icon name={IconName.ArrowDown} size={IconSize.Sm} />;

export const Variant: Story = {
  render: () => (
    <Box gap={6} twClassName="w-full">
      <Box>
        <KeyValueRow
          keyLabel="To"
          value="Account 1"
          variant={KeyValueRowVariant.Input}
          valueStartAccessory={
            <AvatarAccount
              address={SAMPLE_ADDRESS}
              size={AvatarAccountSize.Xs}
            />
          }
          valueEndAccessory={selectRowChevron}
          twClassName="border-b border-border-muted"
        />
        <KeyValueRow
          keyLabel="Pay with"
          value="Debit or credit"
          variant={KeyValueRowVariant.Input}
          valueStartAccessory={<Icon name={IconName.Card} size={IconSize.Sm} />}
          valueEndAccessory={selectRowChevron}
        />
      </Box>
      <Box>
        <KeyValueRow
          keyLabel="Transaction fees"
          value="$2.59"
          variant={KeyValueRowVariant.Summary}
          keyEndButtonIconProps={{
            iconName: IconName.Info,
            onPress: () => undefined,
          }}
        />
        <KeyValueRow
          keyLabel="Est. time"
          value="5 min"
          variant={KeyValueRowVariant.Summary}
        />
        <KeyValueRow
          keyLabel="Total"
          value="$102.59"
          variant={KeyValueRowVariant.Summary}
        />
      </Box>
    </Box>
  ),
};

export const KeyStartAccessory: Story = {
  render: () => (
    <KeyValueRow
      keyLabel="Fee"
      value="$2.59"
      keyStartAccessory={<Icon name={IconName.Info} size={IconSize.Sm} />}
    />
  ),
};

export const KeyEndAccessory: Story = {
  render: () => (
    <KeyValueRow
      keyLabel="Limit"
      value="Unlimited"
      keyEndAccessory={<Icon name={IconName.Info} size={IconSize.Sm} />}
    />
  ),
};

export const ValueStartAccessory: Story = {
  render: () => (
    <KeyValueRow
      keyLabel="Wallet"
      value="0x1234…abcd"
      valueStartAccessory={<Icon name={IconName.Wallet} size={IconSize.Sm} />}
    />
  ),
};

export const ValueEndAccessory: Story = {
  render: () => (
    <KeyValueRow
      keyLabel="Status"
      value="Active"
      valueEndAccessory={<Icon name={IconName.Check} size={IconSize.Sm} />}
    />
  ),
};

export const KeyEndButtonIconProps: Story = {
  render: () => (
    <KeyValueRow
      keyLabel="Network"
      value="Mainnet"
      keyEndButtonIconProps={{
        iconName: IconName.Question,
        onPress: () => undefined,
      }}
    />
  ),
};

export const ValueEndButtonIconProps: Story = {
  render: () => (
    <KeyValueRow
      keyLabel="Address"
      value="0x1234…abcd"
      valueEndButtonIconProps={{
        iconName: IconName.Copy,
        onPress: () => undefined,
      }}
    />
  ),
};

export const KeyTextProps: Story = {
  render: () => (
    <KeyValueRow
      keyLabel="Note"
      value="Details"
      keyTextProps={{ variant: TextVariant.BodySm }}
    />
  ),
};

export const ValueTextProps: Story = {
  render: () => (
    <KeyValueRow
      keyLabel="Amount"
      value="1.5 ETH"
      valueTextProps={{ variant: TextVariant.BodySm }}
    />
  ),
};

export const SingleColumnStack: Story = {
  render: () => (
    <Box flexDirection={BoxFlexDirection.Column} twClassName="w-full">
      <KeyValueRow
        keyLabel="Account"
        value={
          <AvatarAccount address={SAMPLE_ADDRESS} size={AvatarAccountSize.Xs} />
        }
      />
      <KeyValueRow
        keyLabel="Pay with"
        value={
          <AvatarToken
            src={SAMPLE_AVATARTOKEN_URIS[0]}
            size={AvatarTokenSize.Xs}
          />
        }
      />
      <KeyValueRow
        keyLabel="Transaction fees"
        value="$2.59"
        keyEndButtonIconProps={{
          iconName: IconName.Info,
          onPress: () => undefined,
        }}
      />
      <KeyValueRow keyLabel="Est. time" value="5 mins" />
      <KeyValueRow keyLabel="Total" value="$102.59" />
    </Box>
  ),
};

const OVERFLOW_VALUE_TEXT =
  'Wrapped Ether (WETH) · 24,891,402.558291 ETH — Ethereum, Arbitrum, Optimism, Base';

export const Overflow: Story = {
  render: () => (
    <KeyValueRow
      keyLabel="Network"
      value={OVERFLOW_VALUE_TEXT}
      variant={KeyValueRowVariant.Summary}
    />
  ),
};
