// Third party dependencies.
import { useTailwind } from '@metamask/design-system-twrnc-preset';
import type { Meta, StoryObj } from '@storybook/react-native';
import React, { useContext } from 'react';
import { Alert, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

// External dependencies.
import { AvatarAccountVariant } from '../AvatarAccount';
import { Box } from '../Box';
import { Button, ButtonVariant } from '../Button';
import { Text } from '../Text';

// Internal dependencies.
import ToastComponent from './Toast';
import { ToastContext, ToastContextWrapper } from './Toast.context';
import type { ToastOptions } from './Toast.types';
import { ToastVariant } from './Toast.types';

const TEST_ACCOUNT_ADDRESS =
  '0x10e08af911f2e489480fb2855b24771745d0198b50f5c55891369844a8c57092';
const TEST_NETWORK_IMAGE_URL =
  'https://assets.coingecko.com/coins/images/279/small/ethereum.png?1595348880';
const TEST_AVATAR_TYPE = AvatarAccountVariant.Jazzicon;

type ToastStoryArgs = {
  variant: ToastVariant;
};

const meta: Meta<ToastStoryArgs> = {
  title: 'Components/Toast',
  component: ToastComponent,
  argTypes: {
    variant: {
      options: Object.values(ToastVariant),
      control: {
        type: 'select',
      },
    },
  },
  decorators: [
    (StoryComponent) => (
      <SafeAreaProvider>
        <ToastContextWrapper>
          <Box twClassName="min-h-[300px] relative">
            <Box twClassName="absolute inset-0 justify-center items-center">
              <Text>Content behind toast</Text>
            </Box>
            <StoryComponent />
          </Box>
        </ToastContextWrapper>
      </SafeAreaProvider>
    ),
  ],
};

export default meta;
type Story = StoryObj<ToastStoryArgs>;

const ToastStoryRender: React.FC<ToastStoryArgs> = ({ variant }) => {
  const { toastRef } = useContext(ToastContext);
  const tw = useTailwind();

  let toastOptions: ToastOptions;

  switch (variant) {
    case ToastVariant.Plain:
      toastOptions = {
        variant: ToastVariant.Plain,
        hasNoTimeout: false,
        labelOptions: [{ label: 'This is a Toast message.' }],
      };
      break;
    case ToastVariant.Account:
      toastOptions = {
        variant: ToastVariant.Account,
        hasNoTimeout: false,
        labelOptions: [
          { label: 'Switching to' },
          { label: ' Account 2.', isBold: true },
        ],
        accountAddress: TEST_ACCOUNT_ADDRESS,
        accountAvatarType: TEST_AVATAR_TYPE,
      };
      break;
    case ToastVariant.Network:
      toastOptions = {
        variant: ToastVariant.Network,
        hasNoTimeout: false,
        labelOptions: [
          { label: 'Added' },
          { label: ' Mainnet', isBold: true },
          { label: ' network.' },
        ],
        networkImageSource: { uri: TEST_NETWORK_IMAGE_URL },
        descriptionOptions: {
          description: 'This is a description text for the network toast.',
        },
        linkButtonOptions: {
          label: 'Click here!',
          onPress: () => {
            Alert.alert('Clicked toast link!');
          },
        },
      };
      break;
    default:
      toastOptions = {
        variant: ToastVariant.Plain,
        hasNoTimeout: false,
        labelOptions: [{ label: 'This is a Toast message.' }],
      };
  }

  return (
    <View style={tw.style('flex-1')}>
      <Button
        variant={ButtonVariant.Secondary}
        onPress={() => {
          toastRef?.current?.showToast(toastOptions);
        }}
      >
        {`Show ${variant} Toast`}
      </Button>
      <ToastComponent ref={toastRef} />
    </View>
  );
};

export const Default: Story = {
  args: {
    variant: ToastVariant.Plain,
  },
  render: (args) => <ToastStoryRender {...args} />,
};

export const Variant: Story = {
  args: {
    variant: ToastVariant.Account,
  },
  render: (args) => <ToastStoryRender {...args} />,
};
