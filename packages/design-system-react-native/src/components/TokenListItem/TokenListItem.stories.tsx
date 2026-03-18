import { useTailwind } from '@metamask/design-system-twrnc-preset';
import type { Meta, StoryObj } from '@storybook/react-native';
import React from 'react';
import { View } from 'react-native';

import { SAMPLE_AVATARTOKEN_URIS } from '../AvatarToken/AvatarToken.dev';

import { TokenListItem } from './TokenListItem';
import type { TokenListItemProps } from './TokenListItem.types';

const meta: Meta<TokenListItemProps> = {
  title: 'Components/TokenListItem',
  component: TokenListItem,
  args: {
    avatarTokenProps: { src: SAMPLE_AVATARTOKEN_URIS[0] },
    title: 'Label',
    subtitle: 'Secondary text',
    value: 'Value',
    supporting: 'Supporting text',
  },
  argTypes: {
    title: { control: 'text' },
    subtitle: { control: 'text' },
    value: { control: 'text' },
    supporting: { control: 'text' },
    titleProps: { control: 'object' },
    subtitleProps: { control: 'object' },
    valueProps: { control: 'object' },
    supportingProps: { control: 'object' },
    avatarTokenProps: { control: 'object' },
    titleStartAccessory: { control: false },
    titleEndAccessory: { control: false },
    subtitleStartAccessory: { control: false },
    subtitleEndAccessory: { control: false },
    valueStartAccessory: { control: false },
    valueEndAccessory: { control: false },
    supportingStartAccessory: { control: false },
    supportingEndAccessory: { control: false },
    twClassName: { control: 'text' },
  },
};

export default meta;

type Story = StoryObj<TokenListItemProps>;

const StoryWrapper: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const tw = useTailwind();
  return <View style={tw`p-4`}>{children}</View>;
};

export const Default: Story = {
  render: (args) => (
    <StoryWrapper>
      <TokenListItem {...args} />
    </StoryWrapper>
  ),
};

export const Title: Story = {
  render: (args) => (
    <StoryWrapper>
      <TokenListItem {...args} title="Title only" />
    </StoryWrapper>
  ),
};

export const Subtitle: Story = {
  render: (args) => (
    <StoryWrapper>
      <TokenListItem
        {...args}
        avatarTokenProps={{ src: SAMPLE_AVATARTOKEN_URIS[1] }}
        title="Title"
        subtitle="Subtitle with secondary styling"
      />
    </StoryWrapper>
  ),
};

export const Value: Story = {
  render: (args) => (
    <StoryWrapper>
      <TokenListItem
        {...args}
        avatarTokenProps={{ src: SAMPLE_AVATARTOKEN_URIS[2] }}
        title="Amount"
        value="$10.00"
      />
    </StoryWrapper>
  ),
};

export const Supporting: Story = {
  render: (args) => (
    <StoryWrapper>
      <TokenListItem
        {...args}
        avatarTokenProps={{ src: SAMPLE_AVATARTOKEN_URIS[0] }}
        title="Network"
        value="1.234 ETH"
        supporting="~$2,500"
      />
    </StoryWrapper>
  ),
};

export const AvatarTokenProps: Story = {
  render: (args) => (
    <StoryWrapper>
      <TokenListItem
        {...args}
        avatarTokenProps={{
          src: SAMPLE_AVATARTOKEN_URIS[0],
          name: 'ethereum',
          fallbackText: 'ETH',
        }}
        title="Ethereum"
        subtitle="ETH"
        value="1.5"
        supporting="~$4,500"
      />
    </StoryWrapper>
  ),
};
