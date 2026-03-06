import type { Meta, StoryObj } from '@storybook/react-vite';
import React from 'react';

import { IconName } from '../Icon';
import { Text } from '../Text';

import { BannerAlert } from './BannerAlert';
import type { BannerAlertProps } from './BannerAlert.types';
import README from './README.mdx';

import { BannerAlertSeverity } from '.';

const meta: Meta<BannerAlertProps> = {
  title: 'React Components/BannerAlert',
  component: BannerAlert,
  parameters: {
    docs: {
      page: README,
    },
  },
  argTypes: {
    severity: {
      control: 'select',
      options: Object.keys(BannerAlertSeverity),
      mapping: BannerAlertSeverity,
      description: 'Optional semantic severity for icon and background',
    },
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
    actionButtonOnClick: {
      action: 'actionButtonOnClick',
      description: 'Optional click handler for the action button',
    },
    actionButtonProps: {
      control: 'object',
      description: 'Optional props for the action button',
    },
    onClose: {
      action: 'onClose',
      description: 'Optional callback to show and trigger the close button',
    },
    closeButtonProps: {
      control: 'object',
      description: 'Optional props for the close button',
    },
    className: {
      control: 'text',
      description: 'Optional classes for the root container',
    },
  },
};

export default meta;
type Story = StoryObj<BannerAlertProps>;

export const Default: Story = {
  args: {
    severity: BannerAlertSeverity.Info,
    title: 'Title is sentence case no period',
    description: "Description shouldn't repeat title. 1-3 lines.",
    actionButtonLabel: 'Action',
    actionButtonOnClick: () => undefined,
    onClose: () => undefined,
  },
};

export const Severity: Story = {
  render: (args) => (
    <div className="space-y-2">
      <BannerAlert {...args} severity={BannerAlertSeverity.Info} title="Info">
        This is an info banner.
      </BannerAlert>
      <BannerAlert
        {...args}
        severity={BannerAlertSeverity.Warning}
        title="Warning"
      >
        This is a warning banner.
      </BannerAlert>
      <BannerAlert
        {...args}
        severity={BannerAlertSeverity.Danger}
        title="Danger"
      >
        This is a danger banner.
      </BannerAlert>
      <BannerAlert
        {...args}
        severity={BannerAlertSeverity.Success}
        title="Success"
      >
        This is a success banner.
      </BannerAlert>
    </div>
  ),
  args: {
    actionButtonLabel: undefined,
    actionButtonOnClick: undefined,
    onClose: undefined,
  },
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
    title: 'Description prop demo',
    description:
      'Pass only a string through the description prop or use children for richer content.',
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
    <BannerAlert {...args}>
      <Text>
        Children can include richer content and can be any React node.
      </Text>
    </BannerAlert>
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
      'Use actionButtonLabel for the text and actionButtonOnClick for interaction.',
  },
};

export const OnClose: Story = {
  args: {
    title: 'onClose demo',
    children: 'Click the close icon to trigger onClose.',
    onClose: () => undefined,
    actionButtonLabel: undefined,
    actionButtonOnClick: undefined,
  },
};
