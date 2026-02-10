// Third party dependencies.
import { useTailwind } from '@metamask/design-system-twrnc-preset';
import React, { useContext } from 'react';
import { Alert, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import type { Meta } from '@storybook/react-native';

// External dependencies.
import { Button, ButtonVariant } from '../Button';

// Internal dependencies.
import { default as ToastComponent } from './Toast';
import { ToastContext, ToastContextWrapper } from './Toast.context';
import { ToastOptions, ToastVariant } from './Toast.types';
import {
  TEST_ACCOUNT_ADDRESS,
  TEST_AVATAR_TYPE,
  TEST_NETWORK_IMAGE_URL,
} from './Toast.constants';

interface ToastStoryArgs {
  variant: ToastVariant;
}

export default {
  title: 'Components/Toast',
  component: ToastComponent,
  decorators: [
    (StoryComponent) => (
      <SafeAreaProvider>
        <ToastContextWrapper>
          <StoryComponent />
        </ToastContextWrapper>
      </SafeAreaProvider>
    ),
  ],
  argTypes: {
    variant: {
      options: ToastVariant,
      control: {
        type: 'select',
      },
      defaultValue: ToastVariant.Plain,
    },
  },
} as Meta;

export const Default = {
  args: {
    variant: ToastVariant.Plain,
  },
  render: function Render(args: ToastStoryArgs) {
    const { toastRef } = useContext(ToastContext);
    const tw = useTailwind();

    let toastOptions: ToastOptions;

    switch (args.variant) {
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
      <View style={tw.style('min-h-[300px] relative')}>
        <Button
          variant={ButtonVariant.Secondary}
          onPress={() => {
            toastRef?.current?.showToast(toastOptions);
          }}
        >
          {`Show ${args.variant} Toast`}
        </Button>
        <ToastComponent ref={toastRef} />
      </View>
    );
  },
};
