import {
  BoxBackgroundColor,
  ContentVariant,
  IconName,
  IconSize,
  TextVariant,
} from '@metamask/design-system-shared';
import type { Meta, StoryObj } from '@storybook/react-vite';
import React from 'react';

import { AvatarToken, AvatarTokenSize } from '../AvatarToken';
import { SAMPLE_AVATARTOKEN_URIS } from '../AvatarToken/AvatarToken.dev';
import { Box } from '../Box';
import { Icon } from '../Icon';
import { Text } from '../Text';

import { ListItem } from './ListItem';
import type { ListItemProps } from './ListItem.types';
import README from './README.mdx';

const listItemAvatar = (
  <AvatarToken
    name="ETH"
    src={SAMPLE_AVATARTOKEN_URIS[1]}
    size={AvatarTokenSize.Lg}
  />
);

const meta: Meta<ListItemProps> = {
  title: 'React Components/ListItem',
  component: ListItem,
  parameters: {
    docs: {
      page: README,
    },
  },
  args: {
    title: 'Label',
    description: 'Secondary text',
    value: 'Value',
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
    subvalue: { control: 'text' },
    isInteractive: { control: 'boolean' },
    accessoryGap: {
      control: 'select',
      options: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    },
  },
  decorators: [
    (Story) => (
      <Box
        className="w-full p-4"
        backgroundColor={BoxBackgroundColor.BackgroundDefault}
      >
        <Story />
      </Box>
    ),
  ],
};

export default meta;

type Story = StoryObj<ListItemProps>;

export const Default: Story = {};

export const IsInteractive: Story = {
  render: (args: ListItemProps) => (
    <ListItem {...args} isInteractive onClick={() => undefined} />
  ),
};

export const Children: Story = {
  render: (args: ListItemProps) => (
    <ListItem {...args} title="Row title" description="Primary row">
      <Box className="mt-2 rounded bg-background-muted px-3 py-2">
        <Icon name={IconName.Info} />
      </Box>
    </ListItem>
  ),
};

export const StartAccessory: Story = {
  render: (args: ListItemProps) => (
    <ListItem
      {...args}
      startAccessory={<Icon name={IconName.Coin} size={IconSize.Md} />}
      accessoryGap={4}
      title="With start accessory"
      description={undefined}
      value={undefined}
    />
  ),
};

export const EndAccessory: Story = {
  render: (args: ListItemProps) => (
    <ListItem
      {...args}
      endAccessory={<Icon name={IconName.ArrowRight} size={IconSize.Md} />}
      accessoryGap={4}
      title="With end accessory"
      description={undefined}
      value={undefined}
    />
  ),
};

export const AccessoryGap: Story = {
  render: (args: ListItemProps) => (
    <Box className="flex w-full flex-col">
      <ListItem
        {...args}
        startAccessory={<Icon name={IconName.Coin} size={IconSize.Md} />}
        accessoryGap={0}
        title="accessoryGap={0}"
        description={undefined}
        value={undefined}
      />
      <ListItem
        {...args}
        startAccessory={<Icon name={IconName.Coin} size={IconSize.Md} />}
        accessoryGap={4}
        title="accessoryGap={4}"
        description={undefined}
        value={undefined}
      />
    </Box>
  ),
};

export const Avatar: Story = {
  render: (args: ListItemProps) => (
    <ListItem
      {...args}
      avatar={listItemAvatar}
      title="Ethereum"
      value="0.24 ETH"
      description={undefined}
    />
  ),
};

const listItemIcon = <Icon name={IconName.Setting} size={IconSize.Md} />;

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
  render: (args: ListItemProps) => (
    <Box className="flex w-full flex-col">
      {Object.values(ContentVariant).map((variant) => {
        const { title, description } = variantExamples[variant];

        return (
          <ListItem
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
    </Box>
  ),
};
