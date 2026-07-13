import { ContentVariant, TextVariant } from '@metamask/design-system-shared';
import type { Meta, StoryObj } from '@storybook/react-native';
import React, { useState } from 'react';
import { View } from 'react-native';

import { AvatarToken, AvatarTokenSize } from '../AvatarToken';
import { SAMPLE_AVATARTOKEN_URIS } from '../AvatarToken/AvatarToken.dev';
import { Icon, IconName } from '../Icon';
import { Text } from '../Text';

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
  render: (args: ListItemMultiSelectProps) => (
    <View>
      {Object.values(ContentVariant).map((variant) => {
        const { title, description } = variantExamples[variant];

        return (
          <ListItemMultiSelectStory
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
