import type { Meta, StoryObj } from '@storybook/react-native';
import React from 'react';
import { Text, View } from 'react-native';

import { AvatarToken, AvatarTokenSize } from '../AvatarToken';
import { SAMPLE_AVATARTOKEN_URIS } from '../AvatarToken/AvatarToken.dev';
import { Box } from '../Box';
import { IconName } from '../Icon';

import { HeaderSubpage } from './HeaderSubpage';
import type { HeaderSubpageProps } from './HeaderSubpage.types';

const noopPress = () => undefined;

const meta: Meta<HeaderSubpageProps> = {
  title: 'Components/HeaderSubpage',
  component: HeaderSubpage,
  argTypes: {
    title: { control: 'text' },
    description: { control: 'text' },
    twClassName: { control: 'text' },
    includesTopInset: { control: 'boolean' },
  },
  decorators: [
    (Story) => (
      <Box twClassName="w-full bg-background-default">
        <Story />
      </Box>
    ),
  ],
};

export default meta;
type Story = StoryObj<HeaderSubpageProps>;

const defaultAvatar = (
  <AvatarToken
    name="Ethereum"
    src={SAMPLE_AVATARTOKEN_URIS[1]}
    size={AvatarTokenSize.Lg}
  />
);

export const Default: Story = {
  args: {
    title: 'Send',
    avatar: defaultAvatar,
  },
};

export const OnBack: Story = {
  render: (args) => (
    <HeaderSubpage
      {...args}
      title="Send"
      avatar={defaultAvatar}
      onBack={noopPress}
    />
  ),
};

export const OnClose: Story = {
  render: (args) => (
    <HeaderSubpage
      {...args}
      title="Send"
      avatar={defaultAvatar}
      onClose={noopPress}
    />
  ),
};

export const BackAndClose: Story = {
  render: (args) => (
    <HeaderSubpage
      {...args}
      title="Send"
      avatar={defaultAvatar}
      onBack={noopPress}
      onClose={noopPress}
    />
  ),
};

export const EndButtonIconProps: Story = {
  render: (args) => (
    <HeaderSubpage
      {...args}
      title="Send"
      avatar={defaultAvatar}
      onBack={noopPress}
      onClose={noopPress}
      endButtonIconProps={[
        {
          iconName: IconName.Search,
          onPress: noopPress,
        },
      ]}
    />
  ),
};

export const IncludesTopInset: Story = {
  render: (args) => (
    <HeaderSubpage
      {...args}
      title="Send"
      avatar={defaultAvatar}
      onBack={noopPress}
      includesTopInset
    />
  ),
};

export const Description: Story = {
  render: (args) => (
    <HeaderSubpage
      {...args}
      title="Send"
      description="Ethereum"
      avatar={defaultAvatar}
      onBack={noopPress}
    />
  ),
};

export const StartAccessory: Story = {
  render: () => (
    <HeaderSubpage
      title="Send"
      avatar={defaultAvatar}
      startAccessory={
        <View>
          <Text>Custom start</Text>
        </View>
      }
    />
  ),
};

export const EndAccessory: Story = {
  render: () => (
    <HeaderSubpage
      title="Send"
      avatar={defaultAvatar}
      endAccessory={
        <View>
          <Text>Custom end</Text>
        </View>
      }
    />
  ),
};
