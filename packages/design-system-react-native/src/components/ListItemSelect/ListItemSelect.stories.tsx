import type { Meta, StoryObj } from '@storybook/react-native';
import React, { useState } from 'react';
import { View } from 'react-native';

import { AvatarToken, AvatarTokenSize } from '../AvatarToken';
import { SAMPLE_AVATARTOKEN_URIS } from '../AvatarToken/AvatarToken.dev';
import { Icon, IconName } from '../Icon';

import { ListItemSelect } from './ListItemSelect';
import type { ListItemSelectProps } from './ListItemSelect.types';

const noopPress = () => undefined;

const listItemAvatar = (
  <AvatarToken
    name="ETH"
    src={SAMPLE_AVATARTOKEN_URIS[1]}
    size={AvatarTokenSize.Lg}
  />
);

const meta: Meta<ListItemSelectProps> = {
  title: 'Components/ListItemSelect',
  component: ListItemSelect,
  args: {
    title: 'Label',
    description: 'Secondary text',
  },
  argTypes: {
    title: { control: 'text' },
    description: { control: 'text' },
    value: { control: 'text' },
    showSelectedIcon: {
      control: 'boolean',
      description:
        'When true and isSelected, shows a trailing check icon in endAccessory.',
    },
  },
};

export default meta;

type Story = StoryObj<ListItemSelectProps>;

const ListItemSelectStory: React.FC<Omit<ListItemSelectProps, 'onPress'>> = (
  args,
) => {
  const [isSelected, setIsSelected] = useState(args.isSelected ?? false);
  return (
    <ListItemSelect
      {...args}
      isSelected={isSelected}
      onPress={() => setIsSelected(!isSelected)}
    />
  );
};

export const Default: Story = {
  render: (args: ListItemSelectProps) => <ListItemSelectStory {...args} />,
};

export const IsSelected: Story = {
  render: (args: ListItemSelectProps) => (
    <View>
      <ListItemSelect
        {...args}
        title="Unselected row"
        isSelected={false}
        onPress={noopPress}
      />
      <ListItemSelect
        {...args}
        title="Selected row"
        isSelected
        onPress={noopPress}
      />
    </View>
  ),
};

export const ShowSelectedIcon: Story = {
  render: (args: ListItemSelectProps) => (
    <View>
      <ListItemSelect
        {...args}
        title="Selected without check"
        isSelected
        onPress={noopPress}
      />
      <ListItemSelect
        {...args}
        title="Selected with check"
        isSelected
        showSelectedIcon
        onPress={noopPress}
      />
    </View>
  ),
};

export const EndAccessory: Story = {
  render: (args: ListItemSelectProps) => (
    <ListItemSelect
      {...args}
      isSelected
      title="Selected with custom end accessory"
      endAccessory={<Icon name={IconName.CircleX} />}
      onPress={noopPress}
    />
  ),
};

export const Avatar: Story = {
  render: (args: ListItemSelectProps) => (
    <ListItemSelectStory
      {...args}
      avatar={listItemAvatar}
      title="Ethereum"
      value="0.24 ETH"
      description={undefined}
    />
  ),
};

export const StartAccessory: Story = {
  render: (args: ListItemSelectProps) => (
    <ListItemSelectStory
      {...args}
      startAccessory={<Icon name={IconName.Coin} />}
      title="With start accessory"
      description={undefined}
      value="Value"
    />
  ),
};
