import { ContentVerticalAlignment } from '@metamask/design-system-shared';
import type { Meta, StoryObj } from '@storybook/react-native';
import React from 'react';

import { AvatarToken } from '../AvatarToken';
import { Box } from '../Box';
import { Icon, IconName } from '../Icon';
import { Tag } from '../Tag';

import type { ListItemProps } from './ListItem.types';

import { ListItem } from '.';

const meta: Meta<ListItemProps> = {
  title: 'Components/ListItem',
  component: ListItem,
  args: {
    title: 'Label',
    description: 'Secondary text',
    value: 'Value',
    verticalAlignment: ContentVerticalAlignment.Center,
  },
  argTypes: {
    verticalAlignment: {
      control: 'select',
      options: Object.keys(ContentVerticalAlignment),
      mapping: ContentVerticalAlignment,
    },
    title: { control: 'text' },
    description: { control: 'text' },
    value: { control: 'text' },
    subvalue: { control: 'text' },
    isInteractive: { control: 'boolean' },
  },
};

export default meta;

type Story = StoryObj<ListItemProps>;

export const Default: Story = {
  render: (args: ListItemProps) => <ListItem {...args} />,
};

export const IsInteractive: Story = {
  render: (args: ListItemProps) => (
    <ListItem {...args} isInteractive onPress={() => undefined} />
  ),
};

export const BottomAccessory: Story = {
  render: (args: ListItemProps) => (
    <ListItem
      {...args}
      title="Row title"
      description="Primary row"
      bottomAccessory={
        <Box twClassName="rounded bg-background-muted px-3 py-2">
          <Icon name={IconName.Info} />
        </Box>
      }
    />
  ),
};

/**
 * Flat prop API and render-in-place slot API side-by-side.
 *
 * The first row uses flat props — Content owns the layout internally.
 * The second row uses slot sub-components as children — the engineer controls
 * layout with Box and Tailwind classnames. Both APIs produce inspector-visible
 * component trees; the slot version shows `ListItemTitle > BoxRow > Text`
 * instead of `Content > TextOrChildren > Text` in every text region.
 */
export const SlotComposition: Story = {
  render: () => (
    <>
      <ListItem
        avatar={<AvatarToken name="ETH" size="lg" />}
        title="Account 2"
        titleEndAccessory={<Tag>Hardware Wallet</Tag>}
        description="Secondary text"
        value="$5,678.00"
        subvalue="1.2 ETH"
        isInteractive
      />

      <ListItem
        isInteractive
        twClassName="flex-row items-center justify-between gap-4"
      >
        <AvatarToken name="ETH" size="lg" />
        <Box>
          <ListItem.Title endAccessory={<Tag>Hardware Wallet</Tag>}>
            Account 2
          </ListItem.Title>
          <ListItem.Description endAccessory={<Icon name="Info" />}>
            Secondary text
          </ListItem.Description>
        </Box>
        <Box>
          <ListItem.Value>$5,678.00</ListItem.Value>
          <ListItem.Subvalue>1.2 ETH</ListItem.Subvalue>
        </Box>
      </ListItem>
    </>
  ),
};

export const StartAccessory: Story = {
  render: (args: ListItemProps) => (
    <ListItem
      {...args}
      startAccessory={<Icon name={IconName.Coin} />}
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
      endAccessory={<Icon name={IconName.ArrowRight} />}
      title="With end accessory"
      description={undefined}
      value={undefined}
    />
  ),
};

export const TopAccessory: Story = {
  render: (args: ListItemProps) => (
    <ListItem
      {...args}
      topAccessory={
        <Box twClassName="rounded bg-warning-muted px-2 py-1">
          <Icon name={IconName.Info} />
        </Box>
      }
      title="With top accessory"
      description={undefined}
      value={undefined}
    />
  ),
};

export const Avatar: Story = {
  render: (args: ListItemProps) => (
    <ListItem
      {...args}
      avatar={<Box twClassName="h-10 w-10 rounded-full bg-primary-default" />}
      title="With avatar"
      value="Value"
      description={undefined}
    />
  ),
};

export const VerticalAlignment: Story = {
  render: (args: ListItemProps) => (
    <>
      {Object.values(ContentVerticalAlignment).map((alignment) => (
        <ListItem
          key={alignment}
          {...args}
          verticalAlignment={alignment}
          avatar={<Box twClassName="h-12 w-12 rounded-lg bg-primary-default" />}
          title={alignment}
          description="Secondary line"
          value="Value"
        />
      ))}
    </>
  ),
};
