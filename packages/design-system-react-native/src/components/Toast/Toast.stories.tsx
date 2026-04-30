// Third party dependencies.
import { useTailwind } from '@metamask/design-system-twrnc-preset';
import type { Meta, StoryObj } from '@storybook/react-native';
import React from 'react';
import { Alert, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

// External dependencies.
import { Box } from '../Box';
import { Button, ButtonVariant } from '../Button';
import { Icon, IconColor, IconName, IconSize } from '../Icon';
import { Text } from '../Text';

// Internal dependencies.
import { Toast } from './Toast';
import type { ToastOptions } from './Toast.types';
import { ToastSeverity } from './Toast.types';

type ToastStoryArgs = {
  severity: ToastSeverity;
  hasAction: boolean;
  useCustomAccessory: boolean;
};

const meta: Meta<ToastStoryArgs> = {
  title: 'Components/Toast',
  component: Toast,
  argTypes: {
    severity: {
      options: Object.values(ToastSeverity),
      control: {
        type: 'select',
      },
    },
    hasAction: {
      control: {
        type: 'boolean',
      },
    },
    useCustomAccessory: {
      control: {
        type: 'boolean',
      },
    },
  },
  decorators: [
    (StoryComponent) => (
      <SafeAreaProvider>
        <Box twClassName="min-h-[300px] relative">
          <Box twClassName="absolute inset-0 justify-center items-center">
            <Text>Content behind toast</Text>
          </Box>
          <StoryComponent />
        </Box>
      </SafeAreaProvider>
    ),
  ],
};

export default meta;
type Story = StoryObj<ToastStoryArgs>;

const ToastStoryRender: React.FC<ToastStoryArgs> = ({
  severity,
  hasAction,
  useCustomAccessory,
}) => {
  const tw = useTailwind();

  const toastOptions: ToastOptions = {
    actionText: hasAction ? 'Action' : undefined,
    description: 'Description of toast',
    hasNoTimeout: false,
    onActionPress: hasAction
      ? () => {
          Alert.alert('Clicked toast action!');
        }
      : undefined,
    severity,
    startAccessory: useCustomAccessory ? (
      <Icon
        color={IconColor.PrimaryDefault}
        name={IconName.Feedback}
        size={IconSize.Lg}
      />
    ) : undefined,
    text: 'Toast message',
  };

  return (
    <View style={tw.style('flex-1')}>
      <Button
        variant={ButtonVariant.Secondary}
        onPress={() => {
          Toast.show(toastOptions);
        }}
      >
        {`Show ${severity} Toast`}
      </Button>
      <Toast />
    </View>
  );
};

export const Default: Story = {
  args: {
    hasAction: false,
    severity: ToastSeverity.Default,
    useCustomAccessory: false,
  },
  render: (args) => <ToastStoryRender {...args} />,
};

export const WithAction: Story = {
  args: {
    hasAction: true,
    severity: ToastSeverity.Success,
    useCustomAccessory: false,
  },
  render: (args) => <ToastStoryRender {...args} />,
};
