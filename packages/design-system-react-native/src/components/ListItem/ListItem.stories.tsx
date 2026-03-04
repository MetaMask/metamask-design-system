import type { Meta, StoryObj } from '@storybook/react-native';
import React from 'react';

import { Box, BoxBackgroundColor } from '../Box';
import { Icon, IconName } from '../Icon';
import { Text, TextVariant } from '../Text';

import { ListItem } from './ListItem';
import type { ListItemProps } from './ListItem.types';
import { ListItemVerticalAlignment } from './ListItem.types';

const SampleChildren = () => (
  <>
    <Box twClassName="h-10 w-10 rounded-full bg-primary-default" />
    <Box twClassName="flex-1">
      <Text variant={TextVariant.BodyMd}>Sample Title</Text>
      <Text variant={TextVariant.BodySm}>Sample Description</Text>
    </Box>
    <Icon name={IconName.ArrowRight} />
  </>
);

const meta: Meta<ListItemProps> = {
  title: 'Components/ListItem',
  component: ListItem,
  args: {
    gap: 16,
    verticalAlignment: ListItemVerticalAlignment.Center,
  },
  argTypes: {
    gap: {
      control: { type: 'number' },
    },
    verticalAlignment: {
      options: Object.values(ListItemVerticalAlignment),
      control: { type: 'select' },
    },
    topAccessoryGap: {
      control: { type: 'number' },
    },
    bottomAccessoryGap: {
      control: { type: 'number' },
    },
    twClassName: {
      control: 'text',
    },
  },
  decorators: [
    (Story) => (
      <Box
        backgroundColor={BoxBackgroundColor.BackgroundAlternative}
        padding={4}
      >
        <Text variant={TextVariant.BodySm}>Content above list item</Text>
        <Box padding={2} />
        <Story />
      </Box>
    ),
  ],
};

export default meta;
type Story = StoryObj<ListItemProps>;

export const Default: Story = {
  render: (args) => (
    <ListItem {...args}>
      <SampleChildren />
    </ListItem>
  ),
};

export const VerticalAlignment: Story = {
  render: (args) => (
    <>
      {Object.values(ListItemVerticalAlignment).map((alignment) => (
        <ListItem key={alignment} {...args} verticalAlignment={alignment}>
          <Box twClassName="h-12 w-12 bg-primary-default rounded-lg" />
          <Box twClassName="flex-1">
            <Text variant={TextVariant.BodyMd}>{alignment}</Text>
            <Text variant={TextVariant.BodySm}>Secondary line</Text>
            <Text variant={TextVariant.BodySm}>Third line</Text>
          </Box>
        </ListItem>
      ))}
    </>
  ),
};

export const Gap: Story = {
  args: {
    gap: 8,
  },
  render: (args) => (
    <ListItem {...args}>
      <SampleChildren />
    </ListItem>
  ),
};

export const TopAccessory: Story = {
  args: {
    topAccessory: (
      <Text variant={TextVariant.BodySm}>Section Header</Text>
    ),
    topAccessoryGap: 8,
  },
  render: (args) => (
    <ListItem {...args}>
      <SampleChildren />
    </ListItem>
  ),
};

export const BottomAccessory: Story = {
  args: {
    bottomAccessory: (
      <Text variant={TextVariant.BodySm}>Section Footer</Text>
    ),
    bottomAccessoryGap: 8,
  },
  render: (args) => (
    <ListItem {...args}>
      <SampleChildren />
    </ListItem>
  ),
};

export const TwClassName: Story = {
  args: {
    twClassName: 'rounded-lg border border-muted',
  },
  render: (args) => (
    <ListItem {...args}>
      <SampleChildren />
    </ListItem>
  ),
};
