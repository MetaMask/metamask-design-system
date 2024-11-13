import { Button } from '@metamask/design-system-react-native';
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
    return (
      <View>
        <Button text="Sample Button" />
      </View>
    );
  },
};
