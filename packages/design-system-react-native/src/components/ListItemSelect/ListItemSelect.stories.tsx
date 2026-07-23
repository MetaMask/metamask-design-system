import { ContentVariant, TextVariant } from '@metamask/design-system-shared';
import type { Meta, StoryObj } from '@storybook/react-native';
import React, { useState } from 'react';
import { View } from 'react-native';

import { AvatarToken, AvatarTokenSize } from '../AvatarToken';
import { SAMPLE_AVATARTOKEN_URIS } from '../AvatarToken/AvatarToken.dev';
import { Icon, IconName } from '../Icon';
import { Text } from '../Text';

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
    variant: ContentVariant.TwoLines,
  },
  argTypes: {
    variant: {
      control: 'select',
      options: Object.keys(ContentVariant),
      mapping: ContentVariant,
    },
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

const listItemIcon = <Icon name={IconName.Setting} />;

const getVariantLeadingProps = (variant: ContentVariant) =>
  variant === ContentVariant.OneLine
    ? {
        avatar: undefined,
        startAccessory: listItemIcon,
        accessoryGap: 4 as const,
      }
    : {
        avatar: listItemAvatar,
        startAccessory: undefined,
        accessoryGap: 0 as const,
      };

const variantExamples: Record<
  ContentVariant,
  { title: string; description: string }
> = {
  [ContentVariant.OneLine]: {
    title: 'One line',
    description: 'Omitted in one-line variant',
  },
  [ContentVariant.TwoLines]: {
    title: 'Two lines',
    description: 'Secondary line',
  },
  [ContentVariant.MultiLine]: {
    title: 'Multi line',
    description: 'Secondary line with additional wrapped content below',
  },
};

export const Variant: Story = {
  render: (args: ListItemSelectProps) => (
    <View>
      {Object.values(ContentVariant).map((variant) => {
        const { title, description } = variantExamples[variant];

        return (
          <ListItemSelectStory
            key={variant}
            {...args}
            {...getVariantLeadingProps(variant)}
            variant={variant}
            title={title}
            description={
              variant === ContentVariant.MultiLine ? (
                <>
                  <Text variant={TextVariant.BodySm}>{description}</Text>
                  <Text variant={TextVariant.BodySm}>Third line</Text>
                </>
              ) : (
                description
              )
            }
            value="Value"
            subvalue={
              variant === ContentVariant.OneLine ? 'Omitted' : 'Subvalue'
            }
          />
        );
      })}
    </View>
  ),
};
