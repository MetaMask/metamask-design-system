import type { Meta, StoryObj } from '@storybook/react-native';
import React from 'react';
import { View } from 'react-native';

import { IconName } from '../Icon';
import { Text } from '../Text';

import { BannerAlert } from './BannerAlert';
import type { BannerAlertProps } from './BannerAlert.types';

import { BannerAlertSeverity } from '.';

const meta: Meta<BannerAlertProps> = {
  title: 'Components/BannerAlert',
  component: BannerAlert,
  argTypes: {
    severity: {
      control: 'select',
      options: BannerAlertSeverity,
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
    actionButtonOnPress: {
      action: 'actionButtonOnPress',
      description: 'Optional press handler for the action button',
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
    twClassName: {
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
    actionButtonOnPress: () => undefined,
    onClose: () => undefined,
  },
};

export const Severity: Story = {
  render: (args) => (
    <View style={{ gap: 8 }}>
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
    </View>
  ),
  args: {
    actionButtonLabel: undefined,
    actionButtonOnPress: undefined,
    onClose: undefined,
  },
};

export const Title: Story = {
  args: {
    title: 'Pass only a string through the title prop',
    actionButtonLabel: undefined,
    actionButtonOnPress: undefined,
  },
};

export const Description: Story = {
  args: {
    title: 'Description prop demo',
    description:
      'Pass only a string through the description prop or use children for richer content.',
    actionButtonLabel: undefined,
    actionButtonOnPress: undefined,
  },
};

export const Children: Story = {
  args: {
    title: 'Children as rich content',
    actionButtonLabel: undefined,
    actionButtonOnPress: undefined,
  },
  render: (args) => (
    <BannerAlert {...args}>
      <Text>
        Children can include richer content and can be any React node.
      </Text>
    </BannerAlert>
  ),
};

export const ActionButtonOnPress: Story = {
  args: {
    title: 'Action prop demo',
    actionButtonLabel: 'Learn more',
    actionButtonOnPress: () => undefined,
    actionButtonProps: {
      endIconName: IconName.Arrow2Right,
    },
    children:
      'Use actionButtonLabel for the text and actionButtonOnPress for interaction.',
  },
};

export const OnClose: Story = {
  args: {
    title: 'onClose demo',
    children: 'Click the close icon to trigger onClose.',
    onClose: () => undefined,
    actionButtonLabel: undefined,
    actionButtonOnPress: undefined,
  },
};
