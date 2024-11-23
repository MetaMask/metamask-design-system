import { useTailwind } from '@metamask/design-system-twrnc-preset';
import type { Meta, StoryObj } from '@storybook/react-native';
import React from 'react';
import { View, Text } from 'react-native';

import Button from './Button';

const ButtonMeta: Meta<typeof Button> = {
  title: 'Button',
  component: Button,
  args: {
    text: 'Hello world',
  },
};

export default ButtonMeta;

export const Basic: StoryObj<typeof Button> = {
  render: () => {
    const tw = useTailwind();

    return (
      <View style={tw`bg-icon-default p-3`}>
        <Text style={tw`text-display-md font-display-md text-primary-inverse`}>
          Sample Text
        </Text>
        <Button text="Sample Button" />
      </View>
    );
  },
};
