import {
  KeyValueSelectVariant,
  SelectButtonEndArrow,
} from '@metamask/design-system-shared';
import type { Meta, StoryObj } from '@storybook/react-native';
import React from 'react';

import { AvatarToken, AvatarTokenSize } from '../AvatarToken';
import { SAMPLE_AVATARTOKEN_URIS } from '../AvatarToken/AvatarToken.dev';
import { Box } from '../Box';
import { Icon, IconName, IconSize } from '../Icon';
import { TextVariant } from '../Text';

import { KeyValueSelect } from './KeyValueSelect';
import type { KeyValueSelectProps } from './KeyValueSelect.types';

const noopPress = () => undefined;

const meta: Meta<KeyValueSelectProps> = {
  title: 'Components/KeyValueSelect',
  component: KeyValueSelect,
  argTypes: {
    keyLabel: {
      control: 'text',
      description: 'Key content shown on the left.',
    },
    value: {
      control: 'text',
      description: 'Selected select label.',
    },
    variant: {
      control: 'select',
      options: Object.keys(KeyValueSelectVariant),
      mapping: KeyValueSelectVariant,
      description: 'KeyValueSelect height variant.',
    },
    isDisabled: {
      control: 'boolean',
      description: 'Disables the row press and SelectButton presentation.',
    },
  },
};

export default meta;

type Story = StoryObj<KeyValueSelectProps>;

export const Default: Story = {
  args: {
    keyLabel: 'Network',
    value: 'Ethereum Mainnet',
    selectButtonProps: {
      placeholder: 'Select network',
    },
    onPress: noopPress,
  },
  render: (args) => <KeyValueSelect {...args} />,
};

export const Variant: Story = {
  render: () => (
    <Box gap={4}>
      {(
        Object.entries(KeyValueSelectVariant) as [
          keyof typeof KeyValueSelectVariant,
          (typeof KeyValueSelectVariant)[keyof typeof KeyValueSelectVariant],
        ][]
      ).map(([key, rowVariant]) => (
        <KeyValueSelect
          key={key}
          keyLabel={key}
          value={`Option ${key}`}
          variant={rowVariant}
          selectButtonProps={{ placeholder: 'Select' }}
          onPress={noopPress}
        />
      ))}
    </Box>
  ),
};

export const ValueStartAccessory: Story = {
  render: () => (
    <KeyValueSelect
      keyLabel="Pay with"
      value="ETH"
      valueStartAccessory={
        <AvatarToken
          name="ETH"
          src={SAMPLE_AVATARTOKEN_URIS[1]}
          size={AvatarTokenSize.Xs}
        />
      }
      selectButtonProps={{ placeholder: 'Select asset' }}
      onPress={noopPress}
    />
  ),
};

export const ValueEndAccessory: Story = {
  render: () => (
    <KeyValueSelect
      keyLabel="Custom end"
      value="Custom"
      valueEndAccessory={<Icon name={IconName.ArrowRight} size={IconSize.Sm} />}
      selectButtonProps={{
        placeholder: 'Select',
        hideEndArrow: true,
      }}
      onPress={noopPress}
    />
  ),
};

export const ValueTextProps: Story = {
  render: () => (
    <KeyValueSelect
      keyLabel="Network"
      value="Ethereum Mainnet"
      valueTextProps={{ variant: TextVariant.BodySm }}
      selectButtonProps={{ placeholder: 'Select network' }}
      onPress={noopPress}
    />
  ),
};

export const SelectButtonProps: Story = {
  render: () => (
    <Box gap={4}>
      {(
        Object.entries(SelectButtonEndArrow) as [
          keyof typeof SelectButtonEndArrow,
          (typeof SelectButtonEndArrow)[keyof typeof SelectButtonEndArrow],
        ][]
      ).map(([key, endArrowDirection]) => (
        <KeyValueSelect
          key={key}
          keyLabel={key}
          value={`Arrow ${key}`}
          selectButtonProps={{
            placeholder: 'Select',
            endArrowDirection,
          }}
          onPress={noopPress}
        />
      ))}
      <KeyValueSelect
        keyLabel="Hidden arrow"
        value="Hidden"
        selectButtonProps={{
          placeholder: 'Select',
          hideEndArrow: true,
        }}
        onPress={noopPress}
      />
    </Box>
  ),
};

export const KeyStartAccessory: Story = {
  render: () => (
    <KeyValueSelect
      keyLabel="Fee"
      value="$2.59"
      keyStartAccessory={<Icon name={IconName.Info} size={IconSize.Sm} />}
      selectButtonProps={{ placeholder: 'Select' }}
      onPress={noopPress}
    />
  ),
};

export const KeyEndAccessory: Story = {
  render: () => (
    <KeyValueSelect
      keyLabel="Limit"
      value="Unlimited"
      keyEndAccessory={<Icon name={IconName.Info} size={IconSize.Sm} />}
      selectButtonProps={{ placeholder: 'Select' }}
      onPress={noopPress}
    />
  ),
};

export const KeyEndButtonIconProps: Story = {
  render: () => (
    <KeyValueSelect
      keyLabel="Network"
      value="Ethereum Mainnet"
      keyEndButtonIconProps={{
        iconName: IconName.Info,
        onPress: noopPress,
      }}
      selectButtonProps={{ placeholder: 'Select network' }}
      onPress={noopPress}
    />
  ),
};

export const KeyTextProps: Story = {
  render: () => (
    <KeyValueSelect
      keyLabel="Note"
      value="Details"
      keyTextProps={{ variant: TextVariant.BodySm }}
      selectButtonProps={{ placeholder: 'Select' }}
      onPress={noopPress}
    />
  ),
};

export const KeyValueRowProps: Story = {
  render: () => (
    <KeyValueSelect
      keyLabel="Network"
      value="Ethereum Mainnet"
      selectButtonProps={{ placeholder: 'Select network' }}
      keyValueRowProps={{ twClassName: 'border-b border-border-muted' }}
      onPress={noopPress}
    />
  ),
};

export const IsDisabled: Story = {
  render: () => (
    <Box gap={4}>
      <KeyValueSelect
        keyLabel="Enabled"
        value="Ethereum Mainnet"
        selectButtonProps={{ placeholder: 'Select network' }}
        onPress={noopPress}
      />
      <KeyValueSelect
        keyLabel="Disabled"
        value="Ethereum Mainnet"
        isDisabled
        selectButtonProps={{ placeholder: 'Select network' }}
        onPress={noopPress}
      />
    </Box>
  ),
};
