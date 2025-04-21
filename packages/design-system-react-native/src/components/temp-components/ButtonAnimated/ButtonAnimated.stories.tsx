import { useTailwind } from '@metamask/design-system-twrnc-preset';
import type { Meta, StoryObj } from '@storybook/react-native';
import React from 'react';
import { View } from 'react-native';

import Text, { TextColor, TextVariant, FontWeight } from '../../Text';
import ButtonAnimated from './ButtonAnimated';
import type { ButtonAnimatedProps } from './ButtonAnimated.types';

const meta: Meta<ButtonAnimatedProps> = {
  title: 'Temp Components/ButtonAnimated',
  component: ButtonAnimated,
  args: {
    disabled: false,
  },
  argTypes: {
    disabled: {
      control: 'boolean',
    },
  },
};

export default meta;

type Story = StoryObj<ButtonAnimatedProps>;

export const Default: Story = {
  args: {
    disabled: false,
  },
  render: (args) => {
    const tw = useTailwind();
    return (
      <View style={tw`p-4`}>
        <ButtonAnimated
          {...args}
          style={tw`bg-icon-alternative items-center justify-center rounded-full p-4`}
        >
          <Text
            variant={TextVariant.BodyMd}
            fontWeight={FontWeight.Medium}
            color={TextColor.PrimaryInverse}
          >
            Button Animated
          </Text>
        </ButtonAnimated>
      </View>
    );
  },
};
