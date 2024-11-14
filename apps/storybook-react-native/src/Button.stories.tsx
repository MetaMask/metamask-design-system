import { Button } from '@metamask/design-system-react-native';
import { useTailwind } from '@metamask/design-system-twrnc-preset';
import type { Meta, StoryObj } from '@storybook/react-native';
import React from 'react';
import { View } from 'react-native';

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
      <View style={tw`bg-primary-default p-3`}>
        <Button text="Sample Button" />
      </View>
    );
  },
};
