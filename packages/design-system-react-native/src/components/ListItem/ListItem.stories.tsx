import { ContentVerticalAlignment } from '@metamask/design-system-shared';
import { useTailwind } from '@metamask/design-system-twrnc-preset';
import type { Meta, StoryObj } from '@storybook/react-native';
import React from 'react';
import { View } from 'react-native';

import { Box, BoxBackgroundColor } from '../Box';
import { Icon, IconName } from '../Icon';

import { ListItem } from '.';
import type { ListItemProps } from './ListItem.types';

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
  decorators: [
    (Story) => (
      <Box
        twClassName="w-full"
        backgroundColor={BoxBackgroundColor.BackgroundDefault}
      >
        <Story />
      </Box>
    ),
  ],
};

export default meta;

type Story = StoryObj<ListItemProps>;

const StoryWrapper: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const tw = useTailwind();
  return <View style={tw`p-4`}>{children}</View>;
};

export const Default: Story = {
  render: (args: ListItemProps) => (
    <StoryWrapper>
      <ListItem {...args} />
    </StoryWrapper>
  ),
};

export const IsInteractive: Story = {
  render: (args: ListItemProps) => (
    <StoryWrapper>
      <ListItem {...args} isInteractive onPress={() => {}} />
    </StoryWrapper>
  ),
};

export const Children: Story = {
  render: (args: ListItemProps) => (
    <StoryWrapper>
      <ListItem {...args} title="Row title" description="Primary row">
        <Box twClassName="mt-2 rounded bg-background-muted px-3 py-2">
          <Icon name={IconName.Info} />
        </Box>
      </ListItem>
    </StoryWrapper>
  ),
};

export const SlotComposition: Story = {
  render: () => (
    <StoryWrapper>
      <ListItem isInteractive onPress={() => {}}>
        <ListItem.Avatar>
          <Box twClassName="h-10 w-10 rounded-full bg-primary-default" />
        </ListItem.Avatar>
        <ListItem.Title endAccessory={<Icon name={IconName.ArrowRight} />}>
          Account 1
        </ListItem.Title>
        <ListItem.Description>Secondary text</ListItem.Description>
        <ListItem.Value>$1,234.00</ListItem.Value>
      </ListItem>
    </StoryWrapper>
  ),
};

export const StartAccessory: Story = {
  render: (args: ListItemProps) => (
    <StoryWrapper>
      <ListItem
        {...args}
        startAccessory={<Icon name={IconName.Coin} />}
        title="With start accessory"
        description={undefined}
        value={undefined}
      />
    </StoryWrapper>
  ),
};

export const EndAccessory: Story = {
  render: (args: ListItemProps) => (
    <StoryWrapper>
      <ListItem
        {...args}
        endAccessory={<Icon name={IconName.ArrowRight} />}
        title="With end accessory"
        description={undefined}
        value={undefined}
      />
    </StoryWrapper>
  ),
};

export const TopAccessory: Story = {
  render: (args: ListItemProps) => (
    <StoryWrapper>
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
    </StoryWrapper>
  ),
};

export const Avatar: Story = {
  render: (args: ListItemProps) => (
    <StoryWrapper>
      <ListItem
        {...args}
        avatar={<Box twClassName="h-10 w-10 rounded-full bg-primary-default" />}
        title="With avatar"
        value="Value"
        description={undefined}
      />
    </StoryWrapper>
  ),
};

export const VerticalAlignment: Story = {
  render: (args: ListItemProps) => (
    <StoryWrapper>
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
    </StoryWrapper>
  ),
};
