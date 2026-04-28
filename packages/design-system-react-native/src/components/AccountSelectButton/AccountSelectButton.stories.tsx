import {
  AvatarAccountVariant,
  SelectButtonEndArrow,
  SelectButtonVariant,
} from '@metamask/design-system-shared';
import { useTailwind } from '@metamask/design-system-twrnc-preset';
import type { Meta, StoryObj } from '@storybook/react-native';
import type { ViewProps } from 'react-native';
import { View } from 'react-native';

import { ButtonSize } from '../../types';
import { Icon, IconName, IconSize } from '../Icon';

import { AccountSelectButton } from './AccountSelectButton';
import type { AccountSelectButtonProps } from './AccountSelectButton.types';

const noopPress = () => undefined;

const DEMO_ADDRESS_A = '0x0000000000000000000000000000000000000001';
const DEMO_ADDRESS_B = '0x0000000000000000000000000000000000000002';

const meta: Meta<AccountSelectButtonProps> = {
  title: 'Components/AccountSelectButton',
  component: AccountSelectButton,
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
    accountName: {
      control: 'text',
    },
    accountAddress: {
      control: 'text',
    },
  },
};

export default meta;

const AccountSelectButtonStoryWrapper: React.FC<ViewProps> = ({
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

type Story = StoryObj<AccountSelectButtonProps>;

export const Default: Story = {
  args: {
    placeholder: 'Account',
    accountName: 'Primary wallet',
    accountAddress: DEMO_ADDRESS_A,
    variant: SelectButtonVariant.Primary,
    endArrowDirection: SelectButtonEndArrow.Down,
    isDisabled: false,
    onPress: noopPress,
  },
  render: (args) => (
    <AccountSelectButtonStoryWrapper>
      <AccountSelectButton {...args} />
    </AccountSelectButtonStoryWrapper>
  ),
};

export const Placeholder: Story = {
  render: () => (
    <AccountSelectButtonStoryWrapper style={{ gap: 16 }}>
      <AccountSelectButton
        placeholder="Choose an account"
        endArrowDirection={SelectButtonEndArrow.Down}
        onPress={noopPress}
      />
    </AccountSelectButtonStoryWrapper>
  ),
};

export const AccountName: Story = {
  render: () => (
    <AccountSelectButtonStoryWrapper style={{ gap: 16 }}>
      <AccountSelectButton
        placeholder="Account"
        accountName="Label only (no avatar)"
        endArrowDirection={SelectButtonEndArrow.Down}
        onPress={noopPress}
      />
      <AccountSelectButton
        placeholder="Account"
        accountName="With avatar"
        accountAddress={DEMO_ADDRESS_A}
        endArrowDirection={SelectButtonEndArrow.Down}
        onPress={noopPress}
      />
    </AccountSelectButtonStoryWrapper>
  ),
};

export const AccountAddress: Story = {
  render: () => (
    <AccountSelectButtonStoryWrapper style={{ gap: 16 }}>
      <AccountSelectButton
        placeholder="Account"
        accountName="Jazzicon"
        accountAddress={DEMO_ADDRESS_A}
        endArrowDirection={SelectButtonEndArrow.Down}
        onPress={noopPress}
      />
      <AccountSelectButton
        placeholder="Account"
        accountName="Blockies"
        accountAddress={DEMO_ADDRESS_B}
        avatarAccountProps={{ variant: AvatarAccountVariant.Blockies }}
        endArrowDirection={SelectButtonEndArrow.Down}
        onPress={noopPress}
      />
    </AccountSelectButtonStoryWrapper>
  ),
};

export const Variant: Story = {
  render: () => (
    <AccountSelectButtonStoryWrapper style={{ gap: 16 }}>
      <AccountSelectButton
        variant={SelectButtonVariant.Primary}
        placeholder="Primary"
        accountName="Wallet A"
        accountAddress={DEMO_ADDRESS_A}
        endArrowDirection={SelectButtonEndArrow.Down}
        onPress={noopPress}
        size={ButtonSize.Lg}
      />
      <AccountSelectButton
        variant={SelectButtonVariant.Secondary}
        placeholder="Secondary"
        accountName="Wallet B"
        accountAddress={DEMO_ADDRESS_B}
        endArrowDirection={SelectButtonEndArrow.Down}
        onPress={noopPress}
        size={ButtonSize.Md}
      />
      <AccountSelectButton
        variant={SelectButtonVariant.Tertiary}
        placeholder="Tertiary"
        accountName="Wallet C"
        accountAddress={DEMO_ADDRESS_A}
        endArrowDirection={SelectButtonEndArrow.Down}
        onPress={noopPress}
        size={ButtonSize.Sm}
      />
    </AccountSelectButtonStoryWrapper>
  ),
};

export const EndArrow: Story = {
  render: () => (
    <AccountSelectButtonStoryWrapper style={{ gap: 16 }}>
      {(
        Object.entries(SelectButtonEndArrow) as [
          keyof typeof SelectButtonEndArrow,
          (typeof SelectButtonEndArrow)[keyof typeof SelectButtonEndArrow],
        ][]
      ).map(([key, value]) => (
        <AccountSelectButton
          key={key}
          placeholder={`Arrow: ${key}`}
          accountName="Account"
          accountAddress={DEMO_ADDRESS_A}
          endArrowDirection={value}
          testID={`account-select-end-${key}`}
          onPress={noopPress}
        />
      ))}
    </AccountSelectButtonStoryWrapper>
  ),
};

export const StartAccessory: Story = {
  render: () => (
    <AccountSelectButtonStoryWrapper style={{ gap: 16 }}>
      <AccountSelectButton
        placeholder="Custom start"
        accountName="Search row"
        startAccessory={<Icon name={IconName.Search} size={IconSize.Sm} />}
        endArrowDirection={SelectButtonEndArrow.Down}
        onPress={noopPress}
      />
      <AccountSelectButton
        placeholder="Avatar precedence"
        accountName="Account"
        accountAddress={DEMO_ADDRESS_A}
        startAccessory={<Icon name={IconName.Wallet} size={IconSize.Sm} />}
        endArrowDirection={SelectButtonEndArrow.Down}
        onPress={noopPress}
      />
    </AccountSelectButtonStoryWrapper>
  ),
};

export const IsDisabled: Story = {
  render: () => (
    <AccountSelectButtonStoryWrapper style={{ gap: 16 }}>
      <AccountSelectButton
        placeholder="Account"
        accountName="Enabled"
        accountAddress={DEMO_ADDRESS_A}
        endArrowDirection={SelectButtonEndArrow.Down}
        onPress={noopPress}
      />
      <AccountSelectButton
        placeholder="Account"
        accountName="Disabled"
        accountAddress={DEMO_ADDRESS_B}
        endArrowDirection={SelectButtonEndArrow.Down}
        isDisabled
        onPress={noopPress}
      />
    </AccountSelectButtonStoryWrapper>
  ),
};
