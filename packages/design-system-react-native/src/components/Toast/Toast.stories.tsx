import type { Meta, StoryObj } from '@storybook/react-native';
import React from 'react';
import { View } from 'react-native';

// External dependencies.
import { IconSize } from '../Icon';
import { Spinner } from '../temp-components/Spinner';

// Internal dependencies.
import { Toast } from './Toast';
import { ToastSeverity } from './Toast.types';
import type { ToastProps } from './Toast.types';

const meta: Meta<ToastProps> = {
  title: 'Components/Toast',
  component: Toast,
  argTypes: {
    severity: {
      control: 'select',
      options: Object.values(ToastSeverity),
      description:
        'Optional semantic severity used for the default leading icon. `ToastSeverity.Default` shows no icon.',
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
      table: {
        disable: true,
      },
    },
  },
};

export default meta;
type Story = StoryObj<ToastProps>;

const renderToastStory = (args: ToastProps) => {
  const { actionButtonLabel, actionButtonOnPress, ...rest } = args;

  if (actionButtonLabel && !actionButtonOnPress) {
    return (
      <Toast
        {...rest}
        actionButtonLabel={actionButtonLabel}
        actionButtonOnPress={() => undefined}
      />
    );
  }

  return <Toast {...args} />;
};

export const Default: Story = {
  render: renderToastStory,
  args: {
    description: "Description shouldn't repeat title. 1-3 lines.",
    onClose: () => undefined,
    title: 'Title is sentence case no period',
  },
};

export const Severity: Story = {
  render: (args: ToastProps) => (
    <View style={{ gap: 8 }}>
      <Toast {...args} severity={ToastSeverity.Default} title="Default" />
      <Toast {...args} severity={ToastSeverity.Success} title="Success" />
      <Toast {...args} severity={ToastSeverity.Warning} title="Warning" />
      <Toast {...args} severity={ToastSeverity.Danger} title="Danger" />
    </View>
  ),
  args: {
    description: 'Severity controls the default start accessory icon.',
    onClose: () => undefined,
  },
};

export const StartAccessory: Story = {
  args: {
    description: 'Your withdrawal is processing.',
    onClose: () => undefined,
    severity: ToastSeverity.Default,
    startAccessory: <Spinner spinnerIconProps={{ size: IconSize.Lg }} />,
    title: 'Withdrawal pending',
  },
};

export const ActionButtonOnPress: Story = {
  args: {
    actionButtonLabel: 'Read more',
    description: 'Review how Consensys handles your data.',
    actionButtonOnPress: () => undefined,
    onClose: () => undefined,
    severity: ToastSeverity.Default,
    title: 'Privacy policy update',
  },
};
