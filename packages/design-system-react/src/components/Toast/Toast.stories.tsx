import { ToastSeverity } from '@metamask/design-system-shared';
import type { Meta, StoryObj } from '@storybook/react-vite';
import React from 'react';

import { Box } from '../Box';
import { Button } from '../Button';

import { Toast } from './Toast';
import type { ToastProps } from './Toast.types';
import { Toaster, toast } from './Toaster';
import README from './README.mdx';

const meta: Meta<ToastProps> = {
  title: 'React Components/Toast',
  component: Toast,
  parameters: {
    docs: {
      page: README,
    },
  },
  argTypes: {
    severity: {
      control: 'select',
      options: Object.keys(ToastSeverity),
      mapping: ToastSeverity,
      description:
        'Optional semantic severity for the default leading icon. `Default` renders no icon.',
    },
    title: {
      control: 'text',
      description: 'Main toast content',
    },
    description: {
      control: 'text',
      description: 'Optional secondary content shown below the title',
    },
    actionButtonLabel: {
      control: 'text',
      description: 'Optional action button label',
    },
    startAccessory: {
      table: { disable: true },
    },
    titleProps: {
      table: { disable: true },
    },
    descriptionProps: {
      table: { disable: true },
    },
    closeButtonProps: {
      table: { disable: true },
    },
    actionButtonProps: {
      table: { disable: true },
    },
    iconProps: {
      table: { disable: true },
    },
  },
};

export default meta;
type Story = StoryObj<ToastProps>;

export const Default: Story = {
  render: (args) => {
    const { actionButtonLabel, actionButtonOnClick, onClose, ...toastArgs } =
      args;
    return (
      <>
        <Button
          onClick={() => {
            toast({
              ...toastArgs,
              actionButtonLabel,
              actionButtonOnClick:
                actionButtonLabel && !actionButtonOnClick
                  ? () => undefined
                  : actionButtonOnClick,
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
    title: 'Title is sentence case no period',
    description: "Description shouldn't repeat title. 1–3 lines.",
  },
};

export const Title: Story = {
  args: {
    title: 'We will notify you.',
  },
};

export const Description: Story = {
  args: {
    title: "Don't miss out",
    description: 'Enable notifications to stay informed on campaigns.',
  },
};

export const Severity: Story = {
  render: (args) => (
    <Box className="flex flex-col gap-2">
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
    title: 'Withdrawal pending',
    description: 'Your withdrawal is processing.',
    severity: ToastSeverity.Default,
    startAccessory: <span aria-hidden>⏳</span>,
  },
};

export const ActionButton: Story = {
  args: {
    title: 'Privacy policy update',
    description: 'Review how Consensys handles your data.',
    actionButtonLabel: 'Read more',
    actionButtonOnClick: () => undefined,
    severity: ToastSeverity.Default,
  },
};

export const OnClose: Story = {
  args: {
    title: 'Account switched',
    description: 'You are now using Account 2.',
    severity: ToastSeverity.Success,
    onClose: () => undefined,
  },
};
