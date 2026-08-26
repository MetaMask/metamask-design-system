import {
  BannerBaseActionButtonLayout,
  FontWeight,
  TextColor,
  TextVariant,
} from '@metamask/design-system-shared';
import type { Meta, StoryObj } from '@storybook/react-native';
import React from 'react';
import { ScrollView } from 'react-native';

import { Box } from '../Box';
import { Button } from '../Button';
import { IconSize } from '../Icon';
import { Spinner } from '../temp-components/Spinner';
import { Text } from '../Text';

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
          Show toast
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
    title: 'Added to watchlist',
  },
};

export const Description: Story = {
  args: {
    description: '15.02 USDC is available in your account',
    title: 'Deposit completed',
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
  render: () => (
    <Box twClassName="gap-4">
      <Box twClassName="gap-2">
        <Text
          color={TextColor.TextDefault}
          fontWeight={FontWeight.Regular}
          variant={TextVariant.HeadingSm}
        >
          Right
        </Text>
        <Toast
          actionButtonLabel="Undo"
          actionButtonLayout={BannerBaseActionButtonLayout.End}
          actionButtonOnPress={() => undefined}
          severity={ToastSeverity.Success}
          title="Added to watchlist"
        />
      </Box>
      <Box twClassName="gap-2">
        <Text
          color={TextColor.TextDefault}
          fontWeight={FontWeight.Regular}
          variant={TextVariant.HeadingSm}
        >
          Bottom
        </Text>
        <Toast
          actionButtonLabel="Read more"
          actionButtonLayout={BannerBaseActionButtonLayout.Below}
          actionButtonOnPress={() => undefined}
          description="Review how Consensys handles your data."
          severity={ToastSeverity.Default}
          title="Privacy policy update"
        />
      </Box>
    </Box>
  ),
};

export const Spacing: Story = {
  render: () => (
    <ScrollView>
      <Box twClassName="gap-8">
        <Box twClassName="gap-4">
          <Box twClassName="gap-1">
            <Text
              color={TextColor.TextDefault}
              fontWeight={FontWeight.Regular}
              variant={TextVariant.HeadingSm}
            >
              Titles only
            </Text>
            <Text
              color={TextColor.TextAlternative}
              variant={TextVariant.BodySm}
            >
              Content should center align if there is no description
            </Text>
          </Box>
          <Toast
            onClose={() => undefined}
            severity={ToastSeverity.Success}
            title="Added to watchlist"
          />
          <Toast
            onClose={() => undefined}
            severity={ToastSeverity.Success}
            title="Your deposit of 20.50 USDC into Account 1 is been confirmed."
          />
        </Box>
        <Box twClassName="gap-4">
          <Box twClassName="gap-1">
            <Text
              color={TextColor.TextDefault}
              fontWeight={FontWeight.Regular}
              variant={TextVariant.HeadingSm}
            >
              With descriptions
            </Text>
            <Text
              color={TextColor.TextAlternative}
              variant={TextVariant.BodySm}
            >
              Content is top aligned if the description line length is more than
              one line. This is to ensure the content remains visually balanced.
            </Text>
          </Box>
          <Toast
            description="15.02 USDC is available in your account"
            onClose={() => undefined}
            severity={ToastSeverity.Success}
            title="Deposit completed"
          />
          <Toast
            description="Enable notifications to stay informed on campaigns and never miss important updates about your account."
            onClose={() => undefined}
            severity={ToastSeverity.Success}
            title="Don't miss out"
          />
        </Box>
        <Box twClassName="gap-4">
          <Box twClassName="gap-1">
            <Text
              color={TextColor.TextDefault}
              fontWeight={FontWeight.Regular}
              variant={TextVariant.HeadingSm}
            >
              With action buttons
            </Text>
            <Text
              color={TextColor.TextAlternative}
              variant={TextVariant.BodySm}
            >
              Action buttons should help users perform actions associated with
              the toast.
            </Text>
          </Box>
          <Toast
            actionButtonLabel="Undo"
            actionButtonLayout={BannerBaseActionButtonLayout.End}
            actionButtonOnPress={() => undefined}
            description="You can remove it anytime."
            severity={ToastSeverity.Success}
            title="Added to watchlist"
          />
          <Toast
            actionButtonLabel="Undo"
            actionButtonLayout={BannerBaseActionButtonLayout.Below}
            actionButtonOnPress={() => undefined}
            description="Your token has been saved for easy access. You may remove this anytime."
            onClose={() => undefined}
            severity={ToastSeverity.Success}
            title="Added to watchlist"
          />
        </Box>
      </Box>
    </ScrollView>
  ),
};

export const IncorrectUsage: Story = {
  render: () => (
    <Box twClassName="gap-8">
      <Box twClassName="gap-4">
        <Box twClassName="gap-1">
          <Text
            color={TextColor.TextDefault}
            fontWeight={FontWeight.Regular}
            variant={TextVariant.HeadingSm}
          >
            Do not render close and end action buttons together.
          </Text>
          <Text color={TextColor.TextAlternative} variant={TextVariant.BodySm}>
            This results in a cluttered UI
          </Text>
        </Box>
        <Toast
          actionButtonLabel="Undo"
          actionButtonLayout={BannerBaseActionButtonLayout.End}
          actionButtonOnPress={() => undefined}
          description="You can remove it anytime."
          onClose={() => undefined}
          severity={ToastSeverity.Success}
          title="Added to watchlist"
        />
      </Box>
      <Box twClassName="gap-4">
        <Box twClassName="gap-1">
          <Text
            color={TextColor.TextDefault}
            fontWeight={FontWeight.Regular}
            variant={TextVariant.HeadingSm}
          >
            {`Do not render action button at the end if description length > 1.`}
          </Text>
          <Text color={TextColor.TextAlternative} variant={TextVariant.BodySm}>
            {`This results in suboptimal spacing. If description length > 1, the
            action button should be placed below.`}
          </Text>
        </Box>
        <Toast
          actionButtonLabel="Undo"
          actionButtonLayout={BannerBaseActionButtonLayout.End}
          actionButtonOnPress={() => undefined}
          description="Your token has been saved for easy access. You may remove this anytime."
          onClose={() => undefined}
          severity={ToastSeverity.Success}
          title="Added to watchlist"
        />
      </Box>
    </Box>
  ),
};

export const ShowCloseButton: Story = {
  render: () => (
    <>
      <Box twClassName="gap-2">
        <Button
          onPress={() => {
            toast({
              description: 'showCloseButton defaults to true.',
              severity: ToastSeverity.Success,
              title: 'Close button visible',
            });
          }}
        >
          With close button
        </Button>
        <Button
          onPress={() => {
            toast({
              description: 'Dismiss via swipe or auto-timeout.',
              severity: ToastSeverity.Success,
              showCloseButton: false,
              title: 'Close button hidden',
            });
          }}
        >
          Without close button
        </Button>
      </Box>
      <Toaster />
    </>
  ),
};
