import {
  BoxBackgroundColor,
  IconColor,
  IconName,
  TextVariant,
} from '@metamask/design-system-shared';
import type { Meta, StoryObj } from '@storybook/react-vite';
import React from 'react';

import { Box, BoxAlignItems, BoxFlexDirection } from '../Box';
import { Icon } from '../Icon';
import { Text } from '../Text';

import README from './README.mdx';
import { HeaderRoot } from './HeaderRoot';
import type { HeaderRootProps } from './HeaderRoot.types';

const noopClick = () => undefined;

const meta: Meta<HeaderRootProps> = {
  title: 'React Components/HeaderRoot',
  component: HeaderRoot,
  parameters: {
    docs: {
      page: README,
    },
  },
  argTypes: {
    title: {
      control: 'text',
      description:
        'Main title; when a string, uses HeadingLg typography merged with titleProps',
    },
  },
  decorators: [
    (Story) => (
      <Box
        className="w-full max-w-md"
        backgroundColor={BoxBackgroundColor.BackgroundDefault}
      >
        <Story />
      </Box>
    ),
  ],
};

export default meta;

type Story = StoryObj<HeaderRootProps>;

export const Default: Story = {
  args: {
    title: 'Explore',
  },
};

export const Title: Story = {
  render: () => (
    <HeaderRoot
      title={
        <Text variant={TextVariant.HeadingLg} className="text-primary-default">
          Custom node title
        </Text>
      }
    />
  ),
};

export const TitleAccessory: Story = {
  render: () => (
    <HeaderRoot
      title="Settings"
      titleAccessory={
        <Icon name={IconName.Info} color={IconColor.IconAlternative} />
      }
    />
  ),
};

export const Children: Story = {
  render: () => (
    <HeaderRoot
      endButtonIconProps={[
        {
          iconName: IconName.Menu,
          ariaLabel: 'Menu',
          onClick: noopClick,
        },
        {
          iconName: IconName.Card,
          ariaLabel: 'Card',
          onClick: noopClick,
        },
        {
          iconName: IconName.Copy,
          ariaLabel: 'Copy',
          onClick: noopClick,
        },
      ]}
    >
      <Box
        flexDirection={BoxFlexDirection.Row}
        alignItems={BoxAlignItems.Center}
        gap={1}
        className="min-w-0 flex-1"
      >
        <Text className="min-w-0 truncate">
          Imported Account 1 with a really long name
        </Text>
        <Icon name={IconName.ArrowDown} />
      </Box>
    </HeaderRoot>
  ),
};

export const EndAccessory: Story = {
  render: () => (
    <HeaderRoot
      title="Page title"
      endAccessory={<Text variant={TextVariant.BodyMd}>Custom end</Text>}
    />
  ),
};

export const EndButtonIconProps: Story = {
  render: () => (
    <HeaderRoot
      title="Rewards"
      endButtonIconProps={[
        {
          iconName: IconName.Setting,
          ariaLabel: 'Settings',
          onClick: noopClick,
        },
      ]}
    />
  ),
};

export const EndButtonIconPropsMultiple: Story = {
  render: () => (
    <HeaderRoot
      title="Search"
      endButtonIconProps={[
        {
          iconName: IconName.Search,
          ariaLabel: 'Search',
          onClick: noopClick,
        },
        {
          iconName: IconName.Close,
          ariaLabel: 'Close',
          onClick: noopClick,
        },
      ]}
    />
  ),
};
