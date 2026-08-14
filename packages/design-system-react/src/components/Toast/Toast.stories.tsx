import {
  BannerBaseActionButtonLayout,
  FontWeight,
  TextColor,
  TextVariant,
  ToastSeverity,
} from '@metamask/design-system-shared';
import type { Meta, StoryObj } from '@storybook/react-vite';
import React from 'react';

import { Box } from '../Box';
import { Button } from '../Button';
import { Text } from '../Text';

import README from './README.mdx';
import { Toast } from './Toast';
import type { ToastProps } from './Toast.types';
import { Toaster, toast } from './Toaster';

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
    title: 'Added to Watchlist',
  },
};

export const Spacing: Story = {
  render: () => (
    <Box className="flex flex-col gap-4">
      <Box className="flex flex-col gap-2">
        <Text
          color={TextColor.TextAlternative}
          fontWeight={FontWeight.Regular}
          variant={TextVariant.HeadingSm}
        >
          Single line
        </Text>
          <Toast
            onClose={() => undefined}
            severity={ToastSeverity.Success}
            title="Added to Watchlist"
          />
      </Box>
      <Box className="flex flex-col gap-2">
        <Text
          color={TextColor.TextAlternative}
          fontWeight={FontWeight.Regular}
          variant={TextVariant.HeadingSm}
        >
          Long title
        </Text>
        <Toast
          onClose={() => undefined}
          severity={ToastSeverity.Success}
          title="Your deposit of 20.50 USDC into Account 1 is been confirmed."
        />
      </Box>
      <Box className="flex flex-col gap-2">
        <Text
          color={TextColor.TextAlternative}
          fontWeight={FontWeight.Regular}
          variant={TextVariant.HeadingSm}
        >
          With action button
        </Text>
        <Toast
          actionButtonLabel="Undo"
          actionButtonLayout={BannerBaseActionButtonLayout.End}
          actionButtonOnClick={() => undefined}
          description="You can remove it anytime."
          onClose={() => undefined}
          severity={ToastSeverity.Success}
          title="Added to Watchlist"
        />
      </Box>
      <Box className="flex flex-col gap-2">
        <Text
          color={TextColor.TextAlternative}
          fontWeight={FontWeight.Regular}
          variant={TextVariant.HeadingSm}
        >
          With action button below
        </Text>
        <Toast
          actionButtonLabel="Undo"
          actionButtonLayout={BannerBaseActionButtonLayout.Below}
          actionButtonOnClick={() => undefined}
          description="You can remove it anytime."
          onClose={() => undefined}
          severity={ToastSeverity.Success}
          title="Added to Watchlist"
        />
      </Box>
      <Box className="flex flex-col gap-2">
        <Text
          color={TextColor.TextAlternative}
          fontWeight={FontWeight.Regular}
          variant={TextVariant.HeadingSm}
        >
          With description
        </Text>
        <Toast
          description="15.02 USDC is available in your account"
          onClose={() => undefined}
          severity={ToastSeverity.Success}
          title="Deposit completed"
        />
      </Box>
      <Box className="flex flex-col gap-2">
        <Text
          color={TextColor.TextAlternative}
          fontWeight={FontWeight.Regular}
          variant={TextVariant.HeadingSm}
        >
          Multi-line description
        </Text>
        <Toast
          description="Enable notifications to stay informed on campaigns and never miss important updates about your account."
          onClose={() => undefined}
          severity={ToastSeverity.Success}
          title="Don't miss out"
        />
      </Box>
    </Box>
  ),
};

export const Description: Story = {
  args: {
    title: 'Deposit completed',
    description: '15.02 USDC is available in your account',
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
  render: () => (
    <Box className="flex flex-col gap-4">
      <Box className="flex flex-col gap-2">
        <Text
          color={TextColor.TextAlternative}
          fontWeight={FontWeight.Regular}
          variant={TextVariant.HeadingSm}
        >
          Right
        </Text>
        <Toast
          actionButtonLabel="Undo"
          actionButtonLayout={BannerBaseActionButtonLayout.End}
          actionButtonOnClick={() => undefined}
          severity={ToastSeverity.Success}
          title="Added to Watchlist"
        />
      </Box>
      <Box className="flex flex-col gap-2">
        <Text
          color={TextColor.TextAlternative}
          fontWeight={FontWeight.Regular}
          variant={TextVariant.HeadingSm}
        >
          Bottom
        </Text>
        <Toast
          actionButtonLabel="Read more"
          actionButtonLayout={BannerBaseActionButtonLayout.Below}
          actionButtonOnClick={() => undefined}
          description="Review how Consensys handles your data."
          severity={ToastSeverity.Default}
          title="Privacy policy update"
        />
      </Box>
    </Box>
  ),
};

export const OnClose: Story = {
  args: {
    title: 'Account switched',
    description: 'You are now using Account 2.',
    severity: ToastSeverity.Success,
    onClose: () => undefined,
  },
};
