import type { Meta, StoryObj } from '@storybook/react-native';
import React from 'react';
import { View } from 'react-native';

// External dependencies.
import { Icon, IconColor, IconName, IconSize } from '../Icon';

// Internal dependencies.
import { Toast } from './Toast';
import type { ToastProps } from './Toast.types';
import { ToastSeverity } from './Toast.types';

const meta: Meta<ToastProps> = {
  title: 'Components/Toast',
  component: Toast,
  argTypes: {
    severity: {
      control: 'select',
      options: ToastSeverity,
      description:
        'Optional semantic severity used for the default leading icon',
    },
    text: {
      control: 'text',
      description: 'Main toast content',
    },
    description: {
      control: 'text',
      description: 'Optional secondary content shown below the main text',
    },
    actionText: {
      control: 'text',
      description: 'Optional action button label',
    },
    onActionPress: {
      action: 'onActionPress',
      description: 'Optional press handler for the action button',
    },
    onClose: {
      action: 'onClose',
      description: 'Required close handler for direct Toast rendering',
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
    severity: ToastSeverity.Default,
    text: 'Title is sentence case no period',
  },
};

export const Severity: Story = {
  render: (args) => (
    <View style={{ gap: 8 }}>
      <Toast {...args} severity={ToastSeverity.Default} text="Default" />
      <Toast {...args} severity={ToastSeverity.Success} text="Success" />
      <Toast {...args} severity={ToastSeverity.Warning} text="Warning" />
      <Toast {...args} severity={ToastSeverity.Error} text="Error" />
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
    severity: ToastSeverity.Warning,
    startAccessory: (
      <Icon
        color={IconColor.PrimaryDefault}
        name={IconName.Feedback}
        size={IconSize.Lg}
      />
    ),
    text: 'Custom accessory',
  },
};

export const Action: Story = {
  args: {
    actionText: 'Action',
    description: 'Optional action button content is rendered below the body.',
    onActionPress: () => undefined,
    onClose: () => undefined,
    severity: ToastSeverity.Success,
    text: 'Action toast',
  },
};
