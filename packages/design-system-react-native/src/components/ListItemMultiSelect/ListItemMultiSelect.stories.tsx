import type { Meta, StoryObj } from '@storybook/react-native';
import React, { useState } from 'react';
import { View } from 'react-native';

import { AvatarToken, AvatarTokenSize } from '../AvatarToken';
import { SAMPLE_AVATARTOKEN_URIS } from '../AvatarToken/AvatarToken.dev';
import { Icon, IconName } from '../Icon';

import { ListItemMultiSelect } from './ListItemMultiSelect';
import type { ListItemMultiSelectProps } from './ListItemMultiSelect.types';

const noopPress = () => undefined;

const listItemAvatar = (
  <AvatarToken
    name="ETH"
    src={SAMPLE_AVATARTOKEN_URIS[1]}
    size={AvatarTokenSize.Lg}
  />
);

const meta: Meta<ListItemMultiSelectProps> = {
  title: 'Components/ListItemMultiSelect',
  component: ListItemMultiSelect,
  args: {
    title: 'Label',
    description: 'Secondary text',
  },
  argTypes: {
    title: { control: 'text' },
    description: { control: 'text' },
    value: { control: 'text' },
  },
};

export default meta;

type Story = StoryObj<ListItemMultiSelectProps>;

const ListItemMultiSelectStory: React.FC<
  Omit<ListItemMultiSelectProps, 'onPress'>
> = (args) => {
  const [isSelected, setIsSelected] = useState(args.isSelected ?? false);
  return (
    <ListItemMultiSelect
      {...args}
      isSelected={isSelected}
      onPress={() => setIsSelected(!isSelected)}
    />
  );
};

export const Default: Story = {
  render: (args: ListItemMultiSelectProps) => (
    <ListItemMultiSelectStory {...args} />
  ),
};

export const IsSelected: Story = {
  render: (args: ListItemMultiSelectProps) => (
    <View>
      <ListItemMultiSelect
        {...args}
        title="Unselected row"
        isSelected={false}
        onPress={noopPress}
      />
      <ListItemMultiSelect
        {...args}
        title="Selected row"
        isSelected
        onPress={noopPress}
      />
    </View>
  ),
};

export const Avatar: Story = {
  render: (args: ListItemMultiSelectProps) => (
    <ListItemMultiSelectStory
      {...args}
      avatar={listItemAvatar}
      title="Token"
      value="100"
      description="Balance"
    />
  ),
};

export const StartAccessory: Story = {
  render: (args: ListItemMultiSelectProps) => (
    <ListItemMultiSelectStory
      {...args}
      startAccessory={<Icon name={IconName.Coin} />}
      title="With start accessory"
      description="Description"
      value="Value"
    />
  ),
};
