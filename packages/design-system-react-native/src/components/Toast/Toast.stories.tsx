import type { Meta, StoryObj } from '@storybook/react-native';
import React from 'react';

// External dependencies.
import { Box } from '../Box';
import { Button } from '../Button';
import { IconSize } from '../Icon';
import { Spinner } from '../temp-components/Spinner';

// Internal dependencies.
import { Toast } from './Toast';
import { ToastSeverity } from './Toast.types';
import type { ToastProps } from './Toast.types';
import { Toaster, toast } from './Toaster';

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

export const Default: Story = {
  render: (args: ToastProps) => {
    const { actionButtonLabel, actionButtonOnPress, onClose, ...toastArgs } =
      args;

    return (
      <>
        <Button
          onPress={() => {
            toast({
              ...toastArgs,
              actionButtonLabel,
              actionButtonOnPress:
                actionButtonLabel && !actionButtonOnPress
                  ? () => undefined
                  : actionButtonOnPress,
              onClose,
            });
          }}
        >
          Show Toast
        </Button>
        <Toaster />
      </>
    );
  },
  args: {
    description: "Description shouldn't repeat title. 1-3 lines.",
    title: 'Title is sentence case no period',
  },
};

export const Title: Story = {
  args: {
    title: 'We will notify you.',
  },
};

export const Description: Story = {
  args: {
    description: 'Enable notifications to stay informed on campaigns',
    title: "Don't miss out",
  },
};

export const Severity: Story = {
  render: (args: ToastProps) => (
    <Box twClassName="gap-2">
      <Toast {...args} severity={ToastSeverity.Default} title="Default" />
      <Toast {...args} severity={ToastSeverity.Success} title="Success" />
      <Toast {...args} severity={ToastSeverity.Warning} title="Warning" />
      <Toast {...args} severity={ToastSeverity.Danger} title="Danger" />
    </Box>
  ),
  args: {
    description: 'Severity controls the default start accessory icon.',
  },
};

export const StartAccessory: Story = {
  args: {
    description: 'Your withdrawal is processing.',
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
    severity: ToastSeverity.Default,
    title: 'Privacy policy update',
  },
};
