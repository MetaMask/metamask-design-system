import type { Meta, StoryObj } from '@storybook/react-vite';
import React from 'react';

import { Icon, IconName, IconSize } from '../Icon';
import { Text } from '../Text';

import { BannerBase } from './BannerBase';
import type { BannerBaseProps } from './BannerBase.types';
import README from './README.mdx';

const meta: Meta<BannerBaseProps> = {
  title: 'React Components/BannerBase',
  component: BannerBase,
  parameters: {
    docs: {
      page: README,
    },
  },
  argTypes: {
    title: {
      control: 'text',
      description: 'Optional title rendered at the top of the banner body',
    },
    description: {
      control: 'text',
      description: 'Optional description rendered below the title',
    },
    children: {
      control: 'text',
      description: 'Optional body content rendered below description',
    },
    actionButtonLabel: {
      control: 'text',
      description: 'Optional action button label',
    },
    actionButtonProps: {
      control: 'object',
      description: 'Optional props for the action button',
    },
    actionButtonOnClick: {
      action: 'actionButtonOnClick',
      description: 'Optional click handler for the action button',
    },
    onClose: {
      action: 'onClose',
      description: 'Optional callback to show and trigger the close button',
    },
    closeButtonProps: {
      control: 'object',
      description: 'Optional props for the close button',
    },
    startAccessory: {
      control: false,
      description: 'Optional accessory rendered at the start of the banner',
    },
    className: {
      control: 'text',
      description: 'Optional classes for the root container',
    },
  },
};

export default meta;

type Story = StoryObj<BannerBaseProps>;

export const Default: Story = {
  args: {
    title: 'Title is sentence case no period',
    description: "Description shouldn't repeat title. 1-3 lines.",
    actionButtonLabel: 'Action',
    actionButtonOnClick: () => undefined,
    onClose: () => undefined,
    closeButtonProps: {
      'data-testid': 'banner-base-close-button',
    },
  },
  render: (args) => (
    <BannerBase
      {...args}
      startAccessory={<Icon name={IconName.Info} size={IconSize.Lg} />}
    />
  ),
};

export const Title: Story = {
  args: {
    title: 'Pass only a string through the title prop',
    actionButtonLabel: undefined,
    actionButtonOnClick: undefined,
  },
};

export const Description: Story = {
  args: {
    description: 'Pass only a string through the description prop.',
    actionButtonLabel: undefined,
    actionButtonOnClick: undefined,
  },
};

export const Children: Story = {
  args: {
    title: 'Children as rich content',
    actionButtonLabel: undefined,
    actionButtonOnClick: undefined,
  },
  render: (args) => (
    <BannerBase {...args}>
      <Text>
        Children can include richer content and can be any React node.
      </Text>
    </BannerBase>
  ),
};

export const ActionButtonOnClick: Story = {
  args: {
    title: 'Action prop demo',
    actionButtonLabel: 'Learn more',
    actionButtonOnClick: () => undefined,
    actionButtonProps: {
      endIconName: IconName.Arrow2Right,
    },
    children:
      'Use actionButtonLabel for the text and the action handler prop for interaction.',
  },
};

export const OnClose: Story = {
  args: {
    title: 'onClose demo',
    children: 'Click the close icon to trigger onClose.',
    onClose: () => undefined,
    closeButtonProps: {
      'data-testid': 'banner-base-close-button',
    },
    actionButtonLabel: undefined,
    actionButtonOnClick: undefined,
  },
};

export const StartAccessory: Story = {
  args: {
    title: 'Start accessory demo',
    children: 'Pass any React node through startAccessory.',
    actionButtonLabel: undefined,
    actionButtonOnClick: undefined,
  },
  render: (args) => (
    <BannerBase
      {...args}
      startAccessory={<Icon name={IconName.Info} size={IconSize.Lg} />}
    />
  ),
};
