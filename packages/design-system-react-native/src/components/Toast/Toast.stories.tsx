import { BannerAlertSeverity } from '@metamask/design-system-shared';
import type { Meta, StoryObj } from '@storybook/react-native';
import React from 'react';
import { View } from 'react-native';

// External dependencies.
import { Icon, IconColor, IconName, IconSize } from '../Icon';

// Internal dependencies.
import { Toast } from './Toast';
import type { ToastProps } from './Toast.types';

const meta: Meta<ToastProps> = {
  title: 'Components/Toast',
  component: Toast,
  argTypes: {
    severity: {
      control: 'select',
      options: Object.values(BannerAlertSeverity),
      description:
        'Optional semantic severity used for the default leading icon. No icon is shown when omitted.',
    },
    title: {
      control: 'text',
      description: 'Main toast content',
    },
    description: {
      control: 'text',
      description: 'Optional secondary content shown below the main text',
    },
    actionButtonLabel: {
      control: 'text',
      description: 'Optional action button label',
    },
    actionButtonOnPress: {
      action: 'actionButtonOnPress',
      description: 'Optional press handler for the action button',
    },
    onClose: {
      action: 'onClose',
      description: 'Optional close handler for direct Toast rendering',
    },
    startAccessory: {
      control: false,
      description:
        'Optional leading accessory that overrides the default severity icon',
    },
  },
};

export default meta;
type Story = StoryObj<ToastProps>;

export const Default: Story = {
  args: {
    description: "Description shouldn't repeat title. 1-3 lines.",
    onClose: () => undefined,
    title: 'Title is sentence case no period',
  },
};

export const Severity: Story = {
  render: (args: ToastProps) => (
    <View style={{ gap: 8 }}>
      <Toast {...args} title="No severity" />
      <Toast {...args} severity={BannerAlertSeverity.Info} title="Info" />
      <Toast {...args} severity={BannerAlertSeverity.Success} title="Success" />
      <Toast {...args} severity={BannerAlertSeverity.Warning} title="Warning" />
      <Toast {...args} severity={BannerAlertSeverity.Danger} title="Danger" />
    </View>
  ),
  args: {
    description: 'Severity controls the default start accessory icon.',
    onClose: () => undefined,
  },
};

export const StartAccessory: Story = {
  args: {
    description: 'Custom accessories override the default severity icon.',
    onClose: () => undefined,
    severity: BannerAlertSeverity.Warning,
    startAccessory: (
      <Icon
        color={IconColor.PrimaryDefault}
        name={IconName.Feedback}
        size={IconSize.Lg}
      />
    ),
    title: 'Custom accessory',
  },
};

export const Action: Story = {
  args: {
    actionButtonLabel: 'Action',
    description: 'Optional action button content is rendered below the body.',
    actionButtonOnPress: () => undefined,
    onClose: () => undefined,
    severity: BannerAlertSeverity.Success,
    title: 'Action toast',
  },
};
